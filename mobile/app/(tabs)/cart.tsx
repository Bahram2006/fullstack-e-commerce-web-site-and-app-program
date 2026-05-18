import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  Image,
  Modal,
} from "react-native";
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";
import Header from "../../components/Header";
import { useLangStore } from "../../store/useLangStore"; // Store ýoluňyzy barlaň
import { useCartStore } from "../../store/useCartStore"; // Sebet store-y birikdirildi
import AuthModal from "../../components/AuthModal";

const { width } = Dimensions.get("window");

export default function CartScreen() {
  const { t } = useLangStore() as any;
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  // 🛠️ DROPDOWN STATE-LERI
  const [isRegionModalOpen, setIsRegionModalOpen] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState("-");

  // 🛠️ ETTRAP / ŞÄHER STATE-LERI
  const [isCityModalOpen, setIsCityModalOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState("-");

  // 🛠️ SENIOR CORE INTEGRATION: Seniň öz guran arassa sebet amallaryňyz
  const items = useCartStore((state) => state.items);
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  const removeItem = useCartStore((state) => state.removeItem);
  const getTotalPrice = useCartStore((state) => state.getTotalPrice);

  const totalPrice = getTotalPrice();

  // Dynamic Welaýat Sanawy (Görseliňizdäki tertipde)
  const regionsList = [
    { key: "-", label: "-" },
    { key: "ashgabat", label: t?.regions?.ashgabat || "Aşgabat" },
    { key: "arkadag", label: t?.regions?.arkadag || "Arkadag" },
    { key: "ahal", label: t?.regions?.ahal || "Ahal welaýaty" },
    { key: "balkan", label: t?.regions?.balkan || "Balkan welaýaty" },
    { key: "dasoguz", label: t?.regions?.dasoguz || "Daşoguz welaýaty" },
    { key: "lebap", label: t?.regions?.lebap || "Lebap welaýaty" },
    { key: "mary", label: t?.regions?.mary || "Mary welaýaty" },
  ];

  // 🛠️ ASHGABAT ETTRAPLARY (Seniň hakyky görseliňizdäki ýaly)
  const ashgabatCities = [
    { key: "merkezi", label: "Merkezi etraplar" },
    { key: "coganly", label: "Çoganly" },
    { key: "abadan", label: "Abadan etraby (Büzmeýin)" },
    { key: "taze_zaman", label: "Täze Zaman" },
    { key: "ruhabat", label: "Ruhabat" },
    { key: "bagyr", label: "Bagyr" },
  ];

  // 🛠️ ARKADAG ŞÄHERI BÖLÜMLERI (Isleseňiz dolduryp bilersiňiz)
  const arkadagCities = [
    { key: "-", label: "-" },
    { key: "arkadag_center", label: "Arkadag şäheri" },
  ];

  // 🛠️ FIKS: Ahal welaýatynyň hakyky bütin etrap we şäherler sanawy (Birebir Görsel)
  const ahalCities = [
    { key: "-", label: "-" },
    { key: "anew", label: "Änew" },
    { key: "akbugday", label: "Ak-bugdaý" },
    { key: "babadayhan", label: "Babadaýhan" },
    { key: "baherden", label: "Bäherden" },
    { key: "gokdepe", label: "Gökdepe" },
    { key: "kaka", label: "Kaka" },
    { key: "sarahs", label: "Sarahs" },
    { key: "tejen", label: "Tejen" },
  ];

  // 🛠️ FIKS: Balkan welaýatynyň hakyky bütin etrap we şäherler sanawy (Birebir Görsel)
  const balkanCities = [
    { key: "-", label: "-" },
    { key: "balkanabat", label: "Balkanabat" },
    { key: "bereket", label: "Bereket" },
    { key: "gumdag", label: "Gumdag" },
    { key: "magtymguly", label: "Magtymguly" },
    { key: "serdar", label: "Serdar" },
    { key: "turkmenbasy", label: "Türkmenbaşy" },
    { key: "hazar", label: "Hazar" },
    { key: "esenguly", label: "Esenguly" },
    { key: "etrek", label: "Etrek" },
  ];

  // 🛠️ FIKS: Daşoguz welaýatynyň hakyky bütin etrap we şäherler sanawy (Birebir Görsel)
  const dasoguzCities = [
    { key: "-", label: "-" },
    { key: "akdepe", label: "Akdepe" },
    { key: "boldumsaz", label: "Boldumsaz" },
    { key: "gorogly", label: "Görogly" },
    { key: "gubadag", label: "Gubadag" },
    { key: "gurbansoltan", label: "Gurbansoltan eje" },
    { key: "koneurgenc", label: "Köneurgenç" },
    { key: "ruhubelent", label: "Ruhubelent" },
    { key: "sanyyazow", label: "S.A.Nyýazow" },
    { key: "sturkmenbasy", label: "S.Türkmenbaşy" },
    { key: "dasoguz_city", label: "Daşoguz" },
  ];

  // 🛠️ FIKS: Lebap welaýatynyň hakyky bütin etrap we şäherler sanawy (Birebir Görsel)
  const lebapCities = [
    { key: "-", label: "-" },
    { key: "gazojak", label: "Gazojak" },
    { key: "darganata", label: "Darganata" },
    { key: "dowletli", label: "Döwletli" },
    { key: "danew", label: "Dänew" },
    { key: "koytendag", label: "Köýtendag" },
    { key: "kerki", label: "Kerki" },
    { key: "sayat1", label: "Saýat" }, // Görseliňizde iki gezek gaýtalanan birinji Saýat
    { key: "sayat2", label: "Saýat " }, // Görseliňizde iki gezek gaýtalanan ikinji Saýat (inçe boşlukly)
    { key: "turkmenabat", label: "Türkmenabat" },
    { key: "farap", label: "Farap" },
    { key: "halac", label: "Halaç" },
    { key: "hojambaz", label: "Hojambaz" },
    { key: "carjew", label: "Çärjew" },
  ];

  // Mary welaýatyna degişli etrap/şäher sanawy (Görseliňizdäki ýaly)
  const maryCities = [
    { key: "-", label: "-" },
    { key: "bayramaly", label: "Baýramaly" },
    { key: "wekilbazar", label: "Wekilbazar" },
    { key: "yoloten", label: "Ýolöten" },
    { key: "garagum", label: "Garagum" },
    { key: "mary", label: "Mary" },
    { key: "murgap", label: "Murgap" },
    { key: "oguzhan", label: "Oguzhan" },
    { key: "sakarçäge", label: "Sakarçäge" },
    { key: "serhetabat", label: "Serhetabat" },
    { key: "tagtabazar", label: "Tagtabazar" },
    { key: "turkmengala", label: "Türkmengala" },
  ];

  // 🛠️ SENIOR SHIFT SWITCH: Saýlanan welaýata görä 2-nji sanawy awtomat anyklaýan dynamic logika
  const getCitiesList = () => {
    if (selectedRegion === (t?.regions?.ashgabat || "Aşgabat"))
      return ashgabatCities;
    if (selectedRegion === (t?.regions?.arkadag || "Arkadag"))
      return arkadagCities;
    if (selectedRegion === (t?.regions?.ahal || "Ahal welaýaty"))
      return ahalCities;
    if (selectedRegion === (t?.regions?.balkan || "Balkan welaýaty"))
      return balkanCities;
    if (selectedRegion === (t?.regions?.dasoguz || "Daşoguz welaýaty"))
      return dasoguzCities;
    if (selectedRegion === (t?.regions?.lebap || "Lebap welaýaty"))
      return lebapCities;
    if (selectedRegion === (t?.regions?.mary || "Mary welaýaty"))
      return maryCities;
    return [{ key: "-", label: "-" }];
  };

  const currentCitiesList = getCitiesList();

  // Dynamic Eltip bermek bahasyny hasaplamak (Senior Shipping Rule)
  const isProvince =
    selectedRegion !== "-" &&
    selectedRegion !== (t?.regions?.ashgabat || "Aşgabat");
  const deliveryPrice = isProvince ? (totalPrice >= 1500 ? 0 : 50) : 0;
  const finalTotal = totalPrice + deliveryPrice;

  return (
    <View style={styles.safeContainer}>
      {/* 🛠️ FIKS: Ýokarky Navbar bütin ekranlarda görünmeli we iň ýokarda durmaly */}
      <Header />

      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <Text style={styles.screenTitle}>{t.cart.title}</Text>

        {/* 🛠️ Dynamic Şert: Eger sebet boş bolsa köne arassa "Boş Sebet" dizaýnyňyz görner */}
        {items.length === 0 ? (
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
        ) : (
          /* 🛠️ Suratyňyzdaky ýaly dynamic harytlar sanawy (Birebir Sumbar) */
          <View style={styles.cartItemsList}>
            {items.map((item) => (
              <View style={styles.productCard} key={item.id}>
                {/* Haryt Suraty */}
                <Image
                  source={
                    item.image_url
                      ? { uri: item.image_url }
                      : require("../../assets/assets/1.png")
                  }
                  style={styles.productImage}
                />

                {/* Haryt Ady we Bahasy */}
                <View style={styles.productInfo}>
                  <Text style={styles.productName} numberOfLines={2}>
                    {item.name}
                  </Text>

                  <View style={styles.priceRow}>
                    <Text style={styles.productPrice}>
                      {(item.price * item.quantity).toFixed(2)}{" "}
                      <Text style={styles.tmtUnit}>TMT</Text>
                    </Text>
                    {/* Harydy Öçürmek Düwmesi (X) */}
                    <TouchableOpacity
                      activeOpacity={0.7}
                      onPress={() => removeItem(item.id)}
                      style={styles.deleteBtn}
                    >
                      <AntDesign name="close" size={14} color="#94A3B8" />
                    </TouchableOpacity>
                  </View>
                </View>

                {/* Sag Tarapdaky Sany Dolandyryş Düwmeleri */}
                <View style={styles.quantityControl}>
                  <TouchableOpacity
                    style={styles.qtyBtn}
                    activeOpacity={0.7}
                    onPress={() => updateQuantity(item.id, item.quantity + 1)}
                  >
                    <AntDesign name="plus" size={12} color="#475569" />
                  </TouchableOpacity>

                  <Text style={styles.qtyText}>{item.quantity}</Text>

                  <TouchableOpacity
                    style={styles.qtyBtn}
                    activeOpacity={0.7}
                    onPress={() => updateQuantity(item.id, item.quantity - 1)}
                  >
                    <AntDesign name="minus" size={12} color="#475569" />
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </View>
        )}

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

        {/* 🛠️ BIREBIR HAKYKY DROPDOWN ÇAGYRYŞY */}
        <View style={styles.deliverySection}>
          <Text style={styles.deliveryLabel}>{t.cart.deliveryLabel}</Text>

          {/* 1-nji Dropdown: Welaýat Saýlama */}
          <TouchableOpacity
            style={styles.selectBox}
            activeOpacity={0.7}
            onPress={() => setIsRegionModalOpen(true)}
          >
            <Text style={styles.selectBoxText}>{selectedRegion}</Text>
            <AntDesign name="caret-down" size={10} color="#64748B" />
          </TouchableOpacity>

          {/* 2-nji Dropdown: Eger islendik welaýat saýlanan bolsa we "-" däl bolsa etrap zolagy dynamic açylýar */}
          {selectedRegion !== "-" && (
            <TouchableOpacity
              style={[styles.selectBox, { marginTop: 10 }]}
              activeOpacity={0.7}
              onPress={() => setIsCityModalOpen(true)}
            >
              <Text style={styles.selectBoxText}>{selectedCity}</Text>
              <AntDesign name="caret-down" size={10} color="#64748B" />
            </TouchableOpacity>
          )}

          {/* 🛠️ BIREBIR INÇE DÜŞÜNDIRIŞ TEKSTLERI (Diňe welaýatda peýda bolar) */}
          {isProvince && (
            <View style={styles.deliveryInfoContainer}>
              <Text style={styles.deliveryInfoText}>
                {t?.cart_delivery?.infoText ||
                  "Eltip bermek hyzmaty 2-5 gün aralygynda ýerine ýetirilýär."}{" "}
                <Text style={styles.underlineLinkText}>
                  {t?.cart_delivery?.moreInfo ||
                    "Eltip bermek we hasaplaşyk üçin giňişleýin."}
                </Text>
              </Text>
            </View>
          )}
        </View>

        {/* 🛠️ Dynamic Hasaplaşyk Tablisasy */}
        <View style={styles.summaryTable}>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>{t.cart.summaryProducts}</Text>
            <Text style={styles.summaryValue}>{totalPrice.toFixed(2)} TMT</Text>
          </View>

          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>{t.cart.summaryDelivery}</Text>
            <View style={{ alignItems: "flex-end" }}>
              <Text style={styles.summaryValue}>
                {deliveryPrice.toFixed(2)} TMT
              </Text>
              {isProvince && deliveryPrice > 0 && (
                <Text style={styles.freeConditionMiniText}>
                  {t?.cart_delivery?.freeCondition ||
                    "1 500.00 TMT ýokary eltip bermek mugt."}
                </Text>
              )}
            </View>
          </View>

          <View style={[styles.summaryRow, styles.totalRow]}>
            <Text style={styles.totalLabel}>{t.cart.summaryTotal}</Text>
            <Text style={styles.totalValue}>{finalTotal.toFixed(2)} TMT</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.orderButton} activeOpacity={0.7}>
          <Text style={styles.orderButtonText}>{t.cart.orderBtn}</Text>
        </TouchableOpacity>
      </ScrollView>

      <AuthModal visible={isAuthOpen} onClose={() => setIsAuthOpen(false)} />

      {/* 🛠️ 1-NJI DROPDOWN MODALY: WELAÝAT SAÝLAMA */}
      <Modal
        transparent={true}
        visible={isRegionModalOpen}
        animationType="fade"
        onRequestClose={() => setIsRegionModalOpen(false)}
      >
        <TouchableOpacity
          style={styles.modalBackdrop}
          activeOpacity={1}
          onPress={() => setIsRegionModalOpen(false)}
        >
          <View style={styles.dropdownContentGuty}>
            <ScrollView showsVerticalScrollIndicator={false}>
              {regionsList.map((region) => {
                const isSelected = selectedRegion === region.label;
                return (
                  <TouchableOpacity
                    key={region.key}
                    style={[
                      styles.regionItemRow,
                      isSelected && styles.activeRegionItemRow,
                    ]}
                    activeOpacity={0.7}
                    onPress={() => {
                      setSelectedRegion(region.label);
                      setIsRegionModalOpen(false);

                      // Senior Reset logic: Welaýat üýtgände 2-nji dropdowny awtomat başlangyç bahasyna öwürýär
                      if (region.key === "ashgabat") {
                        setSelectedCity("Merkezi etraplar");
                      } else {
                        setSelectedCity("-");
                      }
                    }}
                  >
                    <Text
                      style={[
                        styles.regionItemText,
                        isSelected && styles.activeRegionItemText,
                      ]}
                    >
                      {region.label}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </ScrollView>
          </View>
        </TouchableOpacity>
      </Modal>

      {/* 🛠️ 2-NJI DROPDOWN MODALY: HOJYLYK ETTRAP / OBA SAÝLAMA (BÜTIN 5 WELAÝAT ÜÇIN DYNAMIC) */}
      <Modal
        transparent={true}
        visible={isCityModalOpen}
        animationType="fade"
        onRequestClose={() => setIsCityModalOpen(false)}
      >
        <TouchableOpacity
          style={styles.modalBackdrop}
          activeOpacity={1}
          onPress={() => setIsCityModalOpen(false)}
        >
          <View style={styles.dropdownContentGuty}>
            <ScrollView showsVerticalScrollIndicator={false}>
              {/* Senior dynamic rendering list */}
              {currentCitiesList.map((city) => {
                const isSelected = selectedCity === city.label;
                return (
                  <TouchableOpacity
                    key={city.key}
                    style={[
                      styles.regionItemRow,
                      isSelected && styles.activeRegionItemRow,
                    ]}
                    activeOpacity={0.7}
                    onPress={() => {
                      setSelectedCity(city.label);
                      setIsCityModalOpen(false);
                    }}
                  >
                    <Text
                      style={[
                        styles.regionItemText,
                        isSelected && styles.activeRegionItemText,
                      ]}
                    >
                      {city.label}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </ScrollView>
          </View>
        </TouchableOpacity>
      </Modal>
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
  emptyContainer: { alignItems: "center", marginBottom: 20 },
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
  cartItemsList: { width: "100%", marginBottom: 20 },
  productCard: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E2E8F0",
    borderRadius: 4,
    padding: 12,
    marginBottom: 12,
    alignItems: "center",
  },
  productImage: { width: 60, height: 60, resizeMode: "contain" },
  productInfo: { flex: 1, paddingHorizontal: 12, justifyContent: "center" },
  productName: {
    fontSize: 13,
    fontWeight: "600",
    color: "#1E293B",
    lineHeight: 16,
  },
  priceRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 6,
    gap: 10,
  },
  productPrice: { fontSize: 13, fontWeight: "bold", color: "#CC0000" },
  tmtUnit: { fontSize: 10, fontWeight: "500", color: "#94A3B8" },
  deleteBtn: { padding: 4 },
  quantityControl: {
    width: 32,
    backgroundColor: "#F8FAFC",
    borderWidth: 1,
    borderColor: "#E2E8F0",
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
  },
  qtyBtn: {
    width: "100%",
    height: 26,
    justifyContent: "center",
    alignItems: "center",
  },
  qtyText: {
    fontSize: 13,
    fontWeight: "bold",
    color: "#CC0000",
    marginVertical: 2,
    textAlign: "center",
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
    backgroundColor: "#CC0000",
    height: 42,
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30,
  },
  orderButtonText: { color: "#FFFFFF", fontSize: 14, fontWeight: "bold" },

  /* 🛠️ DROPDOWN MODAL STIllERI */
  modalBackdrop: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    justifyContent: "center",
    alignItems: "center",
  },
  dropdownContentGuty: {
    width: width * 0.88,
    maxHeight: 330,
    backgroundColor: "#FFFFFF",
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#DC2626",
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 8,
  },
  regionItemRow: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 0.5,
    borderBottomColor: "#F1F5F9",
    backgroundColor: "#FFFFFF",
  },
  activeRegionItemRow: {
    backgroundColor: "#2563EB",
  },
  regionItemText: {
    fontSize: 13.5,
    color: "#1E293B",
    fontWeight: "500",
  },
  activeRegionItemText: {
    color: "#FFFFFF",
    fontWeight: "bold",
  },
  deliveryInfoContainer: {
    marginTop: 12,
    paddingHorizontal: 2,
  },
  deliveryInfoText: {
    fontSize: 12.5,
    color: "#64748B",
    lineHeight: 18,
  },
  underlineLinkText: {
    color: "#1E293B",
    fontWeight: "700",
    textDecorationLine: "underline",
  },
  freeConditionMiniText: {
    fontSize: 10.5,
    color: "#94A3B8",
    marginTop: 2,
    fontWeight: "500",
  },
});
