import React, { useState, useRef, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  Modal,
  TextInput,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  ActivityIndicator,
  Dimensions,
} from "react-native";
import { AntDesign, Feather } from "@expo/vector-icons";
import { useLangStore } from "../store/useLangStore"; // Senior Dokunşy: Global store integrasiýasy

const { width, height } = Dimensions.get("window");

const GEMINI_API_KEY = "AIzaSyAuHX2bWZuMHWxCriXXpraht2jY0ajV2K8";

interface Message {
  id: string;
  text: string;
  sender: "user" | "ai";
}

interface AIChatModalProps {
  visible: boolean;
  onClose: () => void;
}

export default function AIChatModal({ visible, onClose }: AIChatModalProps) {
  const { t } = useLangStore(); // Reactive terjime obýekti
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollViewRef = useRef<ScrollView>(null);

  // Dil üýtgände başlangyç salamlaşyk hatynyň hem awtomat üýtgemegi üçin Senior Dokunşy
  useEffect(() => {
    setMessages([
      {
        id: "1",
        text: t.aiChat.welcome,
        sender: "ai",
      },
    ]);
  }, [t]);

  const handleSendMessage = async () => {
    if (!inputText.trim() || loading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText.trim(),
      sender: "user",
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputText("");
    setLoading(true);

    try {
      // 🛠️ FIKS: Dynamic string we Gemini API-iň takyk hakyky URL ýoly guruldy
      const url = `https://googleapis.com{GEMINI_API_KEY}`;

      // Prompt hem saýlanan dile görä dynamic bolýar
      const prompt = `${t.aiChat.promptRule}${userMessage.text}`;

      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: prompt,
                },
              ],
            },
          ],
        }),
      });

      const data = await response.json();
      const aiText = data?.candidates?.[0]?.content?.parts?.[0]?.text;

      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: aiText ? aiText.trim() : t.aiChat.systemError,
        sender: "ai",
      };

      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      console.error("Gemini AI Fetch Error:", error);
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now().toString(),
          text: t.aiChat.networkError,
          sender: "ai",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal
      transparent={true}
      visible={visible}
      animationType="slide"
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.chatContainer}
        >
          <View style={styles.chatHeader}>
            <View style={styles.headerLeft}>
              <View style={styles.aiDot} />
              <Text style={styles.headerTitle}>{t.aiChat.title}</Text>
            </View>
            <TouchableOpacity activeOpacity={0.7} onPress={onClose}>
              <AntDesign name="close" size={18} color="#FFFFFF" />
            </TouchableOpacity>
          </View>

          <ScrollView
            ref={scrollViewRef}
            style={styles.messagesList}
            contentContainerStyle={styles.scrollContent}
            onContentSizeChange={() =>
              scrollViewRef.current?.scrollToEnd({ animated: true })
            }
          >
            {messages.map((msg) => (
              <View
                key={msg.id}
                style={[
                  styles.messageBubble,
                  msg.sender === "user" ? styles.userBubble : styles.aiBubble,
                ]}
              >
                <Text
                  style={[
                    styles.messageText,
                    msg.sender === "user" ? styles.userText : styles.aiText,
                  ]}
                >
                  {msg.text}
                </Text>
              </View>
            ))}

            {loading && (
              <View
                style={[
                  styles.messageBubble,
                  styles.aiBubble,
                  styles.loadingBubble,
                ]}
              >
                <ActivityIndicator size="small" color="#CC0000" />
              </View>
            )}
          </ScrollView>

          <View style={styles.inputBar}>
            <TextInput
              style={styles.textInput}
              placeholder={t.aiChat.placeholder}
              placeholderTextColor="#94A3B8"
              value={inputText}
              onChangeText={setInputText}
              multiline
            />
            <TouchableOpacity
              style={[
                styles.sendButton,
                !inputText.trim() && styles.disabledSendBtn,
              ]}
              activeOpacity={0.8}
              onPress={handleSendMessage}
              disabled={!inputText.trim() || loading}
            >
              <Feather name="send" size={15} color="#FFFFFF" />
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </View>
    </Modal>
  );
}

// Original dizaýn stilleriňiz (CSS) hiç hili bozulman saklandy
const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "flex-end",
  },
  chatContainer: {
    width: width,
    height: height * 0.75,
    backgroundColor: "#F8FAFC",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    overflow: "hidden",
  },
  chatHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#1A1A1A",
    paddingHorizontal: 16,
    paddingVertical: 14,
  },
  headerLeft: { flexDirection: "row", alignItems: "center", gap: 8 },
  aiDot: { width: 8, height: 8, borderRadius: 4, backgroundColor: "#10B981" },
  headerTitle: {
    color: "#FFFFFF",
    fontSize: 13,
    fontWeight: "bold",
    letterSpacing: 0.5,
  },
  messagesList: { flex: 1, padding: 16 },
  scrollContent: { paddingBottom: 16 },
  messageBubble: {
    maxWidth: "80%",
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 4,
    marginBottom: 12,
  },
  userBubble: { backgroundColor: "#CC0000", alignSelf: "flex-end" },
  aiBubble: {
    backgroundColor: "#FFFFFF",
    alignSelf: "flex-start",
    borderWidth: 1,
    borderColor: "#E2E8F0",
  },
  loadingBubble: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  messageText: { fontSize: 13, lineHeight: 18 },
  userText: { color: "#FFFFFF", fontWeight: "500" },
  aiText: { color: "#1E293B" },
  inputBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderTopWidth: 1,
    borderTopColor: "#E2E8F0",
    gap: 8,
  },
  textInput: {
    flex: 1,
    backgroundColor: "#F1F5F9",
    borderRadius: 4,
    paddingHorizontal: 12,
    paddingVertical: 8,
    maxHeight: 80,
    fontSize: 13,
    color: "#1E293B",
  },
  sendButton: {
    backgroundColor: "#CC0000",
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
  },
  disabledSendBtn: { backgroundColor: "#CBD5E1" },
});
