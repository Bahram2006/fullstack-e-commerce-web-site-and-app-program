import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Modal,
  TextInput,
  TouchableOpacity,
  Dimensions,
  ActivityIndicator,
} from "react-native";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { supabase } from "@/lib/supabase";
import { useLangStore } from "../store/useLangStore"; // Senior Dokunşy: Store birikdirildi

const { width } = Dimensions.get("window");

interface ComplaintModalProps {
  visible: boolean;
  onClose: () => void;
}

export default function ComplaintModal({
  visible,
  onClose,
}: ComplaintModalProps) {
  const { t } = useLangStore(); // Reactive terjime obýekti
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);

  const handleSendComplaint = async () => {
    if (!name.trim() || !contact.trim() || !message.trim()) {
      alert(t.complaint.alertFill);
      return;
    }

    try {
      setSending(true);

      const { error } = await supabase
        .from("complaints")
        .insert([
          {
            name: name.trim(),
            contact: contact.trim(),
            message: message.trim(),
          },
        ]);

      if (error) throw error;

      alert(t.complaint.alertSuccess);
      setName("");
      setContact("");
      setMessage("");
      onClose();
    } catch (error: any) {
      console.error("Complaint Error:", error.message);
      alert(t.complaint.alertTest);
      onClose();
    } finally {
      setSending(false);
    }
  };

  return (
    <Modal
      transparent={true}
      visible={visible}
      animationType="fade"
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          {/* 1. Header (Sözbaşy) */}
          <View style={styles.modalHeader}>
            <Text style={styles.headerTitle}>{t.complaint.title}</Text>
            <TouchableOpacity activeOpacity={0.7} onPress={onClose}>
              <AntDesign name="close" size={18} color="#94A3B8" />
            </TouchableOpacity>
          </View>

          {/* 2. Modal Body (Giriş meýdançalary) */}
          <View style={styles.modalBody}>
            {/* Adyňyz */}
            <Text style={styles.inputLabel}>
              {t.complaint.nameLabel}
              <Text style={styles.requiredStar}>*</Text>
            </Text>
            <TextInput
              style={styles.singleInput}
              value={name}
              onChangeText={setName}
              placeholder=""
            />

            {/* Telefon ýa-da E-poçta */}
            <Text style={styles.inputLabel}>
              {t.complaint.contactLabel}
              <Text style={styles.requiredStar}>*</Text>
            </Text>
            <TextInput
              style={styles.singleInput}
              value={contact}
              onChangeText={setContact}
              placeholder=""
            />
            <Text style={styles.helperText}>{t.complaint.helperText}</Text>

            {/* Hatyňyz */}
            <Text style={styles.inputLabel}>
              {t.complaint.messageLabel}
              <Text style={styles.requiredStar}>*</Text>
            </Text>
            <TextInput
              style={styles.multilineInput}
              value={message}
              onChangeText={setMessage}
              placeholder=""
              multiline={true}
              numberOfLines={5}
              textAlignVertical="top"
            />

            {/* 3. Ugrat Düwmesi */}
            <TouchableOpacity
              style={styles.submitButton}
              activeOpacity={0.85}
              onPress={handleSendComplaint}
              disabled={sending}
            >
              {sending ? (
                <ActivityIndicator size="small" color="#FFFFFF" />
              ) : (
                <View style={styles.btnRow}>
                  <FontAwesome
                    name="caret-right"
                    size={14}
                    color="#FFFFFF"
                    style={{ marginRight: 6 }}
                  />
                  <Text style={styles.submitButtonText}>
                    {t.complaint.btnText}
                  </Text>
                </View>
              )}
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}

// Seniň original kemsiz dizaýn stilleriň (CSS)
const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    width: width * 0.88,
    backgroundColor: "#FFFFFF",
    borderRadius: 4,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 10,
  },
  modalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: "#E2E8F0",
  },
  headerTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#1E293B",
    letterSpacing: 0.5,
  },
  modalBody: {
    padding: 16,
  },
  inputLabel: {
    fontSize: 13,
    fontWeight: "700",
    color: "#1E293B",
    marginTop: 12,
    marginBottom: 6,
  },
  requiredStar: {
    color: "#DC2626",
  },
  singleInput: {
    width: "100%",
    height: 38,
    borderWidth: 1,
    borderColor: "#CBD5E1",
    borderRadius: 2,
    paddingHorizontal: 10,
    fontSize: 13,
    color: "#1E293B",
    backgroundColor: "#FFFFFF",
  },
  helperText: {
    fontSize: 11,
    color: "#94A3B8",
    marginTop: 4,
  },
  multilineInput: {
    width: "100%",
    height: 100,
    borderWidth: 1,
    borderColor: "#CBD5E1",
    borderRadius: 2,
    paddingHorizontal: 10,
    paddingVertical: 8,
    fontSize: 13,
    color: "#1E293B",
    backgroundColor: "#FFFFFF",
  },
  submitButton: {
    backgroundColor: "#CC0000",
    width: "100%",
    height: 40,
    borderRadius: 2,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 4,
  },
  btnRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  submitButtonText: {
    color: "#FFFFFF",
    fontSize: 13,
    fontWeight: "bold",
  },
});
