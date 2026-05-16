import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Modal,
  Dimensions,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Colors } from "../constants/Colors";

const { width } = Dimensions.get("window");

interface AuthModalProps {
  visible: boolean;
  onClose: () => void;
}

export default function AuthModal({ visible, onClose }: AuthModalProps) {
  const [phone, setPhone] = useState("");

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalTitle}>HASABYMA GIR</Text>
            <TouchableOpacity onPress={onClose} activeOpacity={0.7}>
              <AntDesign name="close" size={18} color="#94A3B8" />
            </TouchableOpacity>
          </View>

          <View style={styles.body}>
            <Text style={styles.inputLabel}>
              Telefon belgiňiz <Text style={styles.requiredStar}>*</Text>
            </Text>

            <View style={styles.inputWrapper}>
              <View style={styles.prefixBox}>
                <Text style={styles.prefixText}>+993</Text>
              </View>
              <TextInput
                style={styles.input}
                keyboardType="phone-pad"
                maxLength={8}
                value={phone}
                onChangeText={setPhone}
                placeholderTextColor="#94A3B8"
              />
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "#FFFFFF",
    width: width - 40,
    borderRadius: 4,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 8,
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
  modalTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#1E293B",
    letterSpacing: 0.5,
  },
  body: {
    padding: 16,
    paddingBottom: 24,
  },
  inputLabel: {
    fontSize: 13,
    fontWeight: "600",
    color: "#1E293B",
    marginBottom: 8,
  },
  requiredStar: {
    color: Colors.primary,
  },
  inputWrapper: {
    flexDirection: "row",
    height: 42,
    borderWidth: 1,
    borderColor: Colors.primary,
    borderRadius: 4,
    overflow: "hidden",
  },
  prefixBox: {
    backgroundColor: "#F1F5F9",
    width: 55,
    justifyContent: "center",
    alignItems: "center",
    borderRightWidth: 1,
    borderRightColor: "#E2E8F0",
  },
  prefixText: {
    color: "#1E293B",
    fontSize: 13,
    fontWeight: "500",
  },
  input: {
    flex: 1,
    paddingHorizontal: 12,
    fontSize: 14,
    color: "#1E293B",
  },
});
