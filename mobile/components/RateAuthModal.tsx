import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Modal,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { AntDesign, FontAwesome } from "@expo/vector-icons";

const { width } = Dimensions.get("window");

interface RateAuthModalProps {
  visible: boolean;
  onClose: () => void;
  onLoginPress: () => void; // Hasabyma gir düwmesine basylanda hakyky login modaly açar
}

export default function RateAuthModal({ visible, onClose, onLoginPress }: RateAuthModalProps) {
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
            <Text style={styles.headerTitle}>BAHA BERIŇ</Text>
            <TouchableOpacity activeOpacity={0.7} onPress={onClose}>
              <AntDesign name="close" size={18} color="#94A3B8" />
            </TouchableOpacity>
          </View>

          {/* 2. Modal Body */}
          <View style={styles.modalBody}>
            
            {/* Sarymtyl Duýduryş Gutusy (Birebir Görnüşiňiz) */}
            <View style={styles.warningBox}>
              <Text style={styles.warningText}>
                Teswir ýazmak üçin hasabyňyza giriň.
              </Text>
            </View>

            {/* Hasabyma Gir Düwmesi */}
            <TouchableOpacity 
              style={styles.loginButton} 
              activeOpacity={0.85}
              onPress={() => {
                onClose(); // Bu modaly ýapýar
                onLoginPress(); // Hakyky telefon belgi soralýan modaly açýar
              }}
            >
              <View style={styles.btnRow}>
                <FontAwesome name="caret-right" size={14} color="#FFFFFF" style={{ marginRight: 6 }} />
                <Text style={styles.loginButtonText}>Hasabyma gir</Text>
              </View>
            </TouchableOpacity>

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
    width: width * 0.85,
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
    paddingBottom: 20,
  },
  warningBox: {
    backgroundColor: "#FFFBEB", // Ýumşak sary fon
    paddingVertical: 18,
    paddingHorizontal: 14,
    borderRadius: 2,
    borderWidth: 0.5,
    borderColor: "#FCD34D",
    marginBottom: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  warningText: {
    fontSize: 13.5,
    color: "#B45309", // Goýy sary/mämişi tekst
    fontWeight: "500",
    textAlign: "center",
    lineHeight: 18,
  },
  loginButton: {
    backgroundColor: "#CC0000", // Sumbar Gyzyly
    width: "100%",
    height: 40,
    borderRadius: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  btnRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  loginButtonText: {
    color: "#FFFFFF",
    fontSize: 13,
    fontWeight: "bold",
  },
});
