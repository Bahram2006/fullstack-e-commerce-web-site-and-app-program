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
import { Colors } from "../../constants/Colors";
import { useLangStore } from "../../store/useLangStore";
import AuthModal from "../../components/AuthModal";

const { width } = Dimensions.get("window");

export default function CartScreen() {
  const { lang } = useLangStore();
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  const translations = {
    title: { tk: "SEBEDIM", ru: "КОРЗИНА", en: "CART" },
    emptyText: {
      tk: "Siziň sebediňiz boş",
      ru: "Ваша корзина пуста",
      en: "Your cart is empty",
    },
    tipTitle: {
      tk: "Maslahat berilýär:",
      ru: "Рекомендуется:",
      en: "Recommended:",
    },
    tipContent: {
      tk: "Satyn almazdan ozal awtorizasiýa etmek bilen, aşakdaky artykmaçlyklary alarsyňyz:\n1) Siziň sargytlaryňyzyň taryhy profilde saklanar, şeýle hem priloženiýanyň üsti bilen hem görüp bolar;\n2) Siz satyn alanyňyzda yzygiderli maglumatlaryňyzy girizmek zerurlugy bolmaz;\n3) Siz halan önümleriňizi satyn almak küýün aýratyn sanawa goşup bilersiňiz;\n4) Harytlara synlaryňyzy-pikirleriňizi ýazmak, halan harytlaryňyza belgi goýmak mümkinçiligi;\n5) Web sahypasyndan harytlary sebediňize goşanyňyzdan soň, satyn almaklygy priloženiýadan we tersine dowam etdirip bilersiňiz;\n6) Siz ballary toplap olary priloženiýanyň üsti bilen haryt satyn alyp harçlap bilersiňiz.",
      ru: "Авторизуясь перед покупкой, вы получаете следующие преимущества:\n1) История ваших заказов сохранится в профиле;\n2) Вам не придется повторно вводить свои данные при покупке;\n3) Вы можете добавлять товары в список избранного;\n4) Возможность оставлять отзывы и оценки к товарам;\n5) Синхронизация корзины zwischen сайтом и приложением;\n6) Сбор и накопление бонусных баллов за покупки.",
      en: "By authorizing before purchasing, you get the following advantages:\n1) Your order history will be saved in your profile;\n2) You will not have to re-enter your data when purchasing;\n3) You can add products to a separate favorite list;\n4) Ability to write reviews and rate products;\n5) Sync cart between web and app seamlessly;\n6) Collect and spend bonus points for purchases.",
    },
    loginBtn: {
      tk: "▶ Hasabyma gir",
      ru: "▶ Войти в кабинет",
      en: "▶ Login to Account",
    },
    deliveryLabel: {
      tk: "Eltip bermek üçin ýeriňiz *",
      ru: "Место для доставки *",
      en: "Delivery location *",
    },
    summaryProducts: { tk: "Harytlar", ru: "Товары", en: "Products" },
    summaryDelivery: { tk: "Eltip bermek", ru: "Доставка", en: "Delivery" },
    summaryTotal: { tk: "Jemi", ru: "Итого", en: "Total" },
    orderBtn: {
      tk: "▶ Sargyt et",
      ru: "▶ Оформить заказ",
      en: "▶ Place Order",
    },
  };

  return (
    <View style={styles.safeContainer}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <Text style={styles.screenTitle}>{translations.title[lang]}</Text>

        <View style={styles.emptyContainer}>
          <View style={styles.iconCircle}>
            <MaterialCommunityIcons
              name="credit-card-remove-outline"
              size={48}
              color="#94A3B8"
            />
          </View>
          <Text style={styles.emptyText}>{translations.emptyText[lang]}</Text>
        </View>

        <View style={styles.tipsContainer}>
          <Text style={styles.tipsTitle}>{translations.tipTitle[lang]}</Text>
          <Text style={styles.tipsBody}>{translations.tipContent[lang]}</Text>
        </View>

        <TouchableOpacity
          style={styles.loginButton}
          activeOpacity={0.8}
          onPress={() => setIsAuthOpen(true)}
        >
          <Text style={styles.loginButtonText}>
            {translations.loginBtn[lang]}
          </Text>
        </TouchableOpacity>

        <View style={styles.deliverySection}>
          <Text style={styles.deliveryLabel}>
            {translations.deliveryLabel[lang]}
          </Text>
          <View style={styles.selectBox}>
            <Text style={styles.selectBoxText}>-</Text>
            {/* 🛠️ Hata beren 'unfold1' ýeri takyk 'caretdown' bilen çalşyldy */}
            <AntDesign name="caret-down" size={10} color="#64748B" />
          </View>
        </View>

        <View style={styles.summaryTable}>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>
              {translations.summaryProducts[lang]}
            </Text>
            <Text style={styles.summaryValue}>0.00 TMT</Text>
          </View>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>
              {translations.summaryDelivery[lang]}
            </Text>
            <Text style={styles.summaryValue}>0.00 TMT</Text>
          </View>
          <View style={[styles.summaryRow, styles.totalRow]}>
            <Text style={styles.totalLabel}>
              {translations.summaryTotal[lang]}
            </Text>
            <Text style={styles.totalValue}>0.00 TMT</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.orderButton} activeOpacity={0.7}>
          <Text style={styles.orderButtonText}>
            {translations.orderBtn[lang]}
          </Text>
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
