import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Modal,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

const { width } = Dimensions.get("window");

interface AuthModalProps {
  visible: boolean;
  onClose: () => void;
}

export default function AuthModal({ visible, onClose }: AuthModalProps) {
  const [phoneNumber, setPhoneNumber] = useState("");

  return (
    <Modal
      transparent={true}
      visible={visible}
      animationType="fade"
      onRequestClose={onClose}
    >
      {/* Arkasyndaky Garaltma (Backdrop) */}
      <View style={styles.modalOverlay}>
        
        {/* Esasy Ak Akylly Guty */}
        <View style={styles.modalContent}>
          
          {/* Ýokarky Sözbaşy zolagy */}
          <View style={styles.modalHeader}>
            <Text style={styles.headerTitle}>HASABYMA GIR</Text>
            <TouchableOpacity activeOpacity={0.7} onPress={onClose}>
              <AntDesign name="close" size={18} color="#94A3B8" />
            </TouchableOpacity>
          </View>

          {/* Içerki Iş Meýdançasy */}
          <View style={styles.modalBody}>
            {/* Telefon belgiňiz * Ýazgysy */}
            <Text style={styles.inputLabel}>
              Telefon belgiňiz <Text style={styles.requiredStar}>*</Text>
            </Text>

            {/* Giriş Gutulary (Input Group) */}
            <View style={styles.inputGroup}>
              {/* Çep tarapdaky +993 zolagy */}
              <View style={styles.countryCodeBox}>
                <Text style={styles.countryCodeText}>+993</Text>
              </View>

              {/* Hakyky Belgi Ýazylýan Ýer */}
              <TextInput
                style={styles.phoneInput}
                placeholder=""
                keyboardType="phone-pad"
                value={phoneNumber}
                onChangeText={setPhoneNumber}
                maxLength={8} // Türkmenistan nomerleri üçin 8 sany san (Meselem: 65123456)
                autoFocus={true}
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
    padding: 18,
    paddingBottom: 24,
  },
  inputLabel: {
    fontSize: 13,
    fontWeight: "700",
    color: "#1E293B",
    marginBottom: 8,
  },
  requiredStar: {
    color: "#DC2626", // Gyzyl ýyldyzjak
  },
  inputGroup: {
    flexDirection: "row",
    height: 40,
    width: "100%",
    borderRadius: 2,
    overflow: "hidden",
  },
  countryCodeBox: {
    backgroundColor: "#F1F5F9",
    width: 60,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#CBD5E1",
    borderRightWidth: 0, // Ortadaky çyzyk goşa bolmazlygy üçin
  },
  countryCodeText: {
    fontSize: 13,
    color: "#334155",
    fontWeight: "500",
  },
  phoneInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#DC2626", // Suratyňyzdaky ýaly inçe gyzyl ramka
    paddingHorizontal: 12,
    fontSize: 14,
    color: "#1E293B",
    backgroundColor: "#FFFFFF",
  },
});
