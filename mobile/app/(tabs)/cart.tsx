import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";
import { useLangStore } from "../../store/useLangStore"; // Store adyňyza gora barlaň
import AuthModal from "../../components/AuthModal";

export default function CartScreen() {
  // Senior Dokunşy: Sözleri göni reactive 't' obýekti arkaly alýarys
  const { t } = useLangStore();
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  return (
    <View style={styles.safeContainer}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <Text style={styles.screenTitle}>{t.cart.title}</Text>

        <View style={styles.emptyContainer}>
          <View style={styles.iconCircle}>
            <MaterialCommunityIcons
              name="credit-card-remove-outline"
              size={48}
              color="#94A3B8"
            />
          </View>
          <Text style={styles.emptyText}>{t.cart.emptyText}</Text>
        </View>

        <View style={styles.tipsContainer}>
          <Text style={styles.tipsTitle}>{t.cart.tipTitle}</Text>
          <Text style={styles.tipsBody}>{t.cart.tipContent}</Text>
        </View>

        <TouchableOpacity
          style={styles.loginButton}
          activeOpacity={0.8}
          onPress={() => setIsAuthOpen(true)}
        >
          <Text style={styles.loginButtonText}>{t.cart.loginBtn}</Text>
        </TouchableOpacity>

        <View style={styles.deliverySection}>
          <Text style={styles.deliveryLabel}>{t.cart.deliveryLabel}</Text>
          <View style={styles.selectBox}>
            <Text style={styles.selectBoxText}>-</Text>
            <AntDesign name="caret-down" size={10} color="#64748B" />
          </View>
        </View>

        <View style={styles.summaryTable}>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>{t.cart.summaryProducts}</Text>
            <Text style={styles.summaryValue}>0.00 TMT</Text>
          </View>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>{t.cart.summaryDelivery}</Text>
            <Text style={styles.summaryValue}>0.00 TMT</Text>
          </View>
          <View style={[styles.summaryRow, styles.totalRow]}>
            <Text style={styles.totalLabel}>{t.cart.summaryTotal}</Text>
            <Text style={styles.totalValue}>0.00 TMT</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.orderButton} activeOpacity={0.7}>
          <Text style={styles.orderButtonText}>{t.cart.orderBtn}</Text>
        </TouchableOpacity>
      </ScrollView>

      <AuthModal visible={isAuthOpen} onClose={() => setIsAuthOpen(false)} />
    </View>
  );
}

const styles = StyleSheet.create({
  safeContainer: { flex: 1, backgroundColor: "#FFFFFF" },
  container: { flex: 1, paddingHorizontal: 16 },
  screenTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#1E293B",
    textAlign: "center",
    marginTop: 20,
    marginBottom: 24,
    letterSpacing: 0.5,
  },
  emptyContainer: { alignItems: "center", marginBottom: 30 },
  iconCircle: {
    width: 90,
    height: 90,
    borderRadius: 12,
    backgroundColor: "#F1F5F9",
    justifyContent: "center",
    alignItems: "center",
  },
  emptyText: {
    fontSize: 15,
    fontWeight: "700",
    color: "#1E293B",
    marginTop: 16,
  },
  tipsContainer: {
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#ECEFF1",
    borderRadius: 4,
    padding: 12,
    marginBottom: 16,
  },
  tipsTitle: {
    fontSize: 13,
    fontWeight: "bold",
    color: "#1E293B",
    marginBottom: 6,
  },
  tipsBody: {
    fontSize: 12,
    color: "#475569",
    lineHeight: 18,
    textAlign: "justify",
  },
  loginButton: {
    backgroundColor: "#CC0000",
    height: 42,
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
  },
  loginButtonText: { color: "#FFFFFF", fontSize: 14, fontWeight: "bold" },
  deliverySection: { marginBottom: 20 },
  deliveryLabel: {
    fontSize: 13,
    fontWeight: "bold",
    color: "#1E293B",
    marginBottom: 6,
  },
  selectBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#CFD8DC",
    borderRadius: 4,
    height: 40,
    paddingHorizontal: 12,
    backgroundColor: "#FFFFFF",
  },
  selectBoxText: { color: "#1E293B", fontSize: 14 },
  summaryTable: {
    backgroundColor: "#F8FAFC",
    borderWidth: 1,
    borderColor: "#E2E8F0",
    borderRadius: 4,
    overflow: "hidden",
    marginBottom: 20,
  },
  summaryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 14,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#E2E8F0",
  },
  summaryLabel: { fontSize: 13, color: "#475569", fontWeight: "500" },
  summaryValue: { fontSize: 13, color: "#0F172A", fontWeight: "700" },
  totalRow: { backgroundColor: "#F1F5F9", borderBottomWidth: 0 },
  totalLabel: { fontSize: 14, color: "#0F172A", fontWeight: "bold" },
  totalValue: { fontSize: 14, color: "#CC0000", fontWeight: "bold" },
  orderButton: {
    backgroundColor: "#E57373",
    height: 42,
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30,
  },
  orderButtonText: { color: "#FFFFFF", fontSize: 14, fontWeight: "bold" },
});
