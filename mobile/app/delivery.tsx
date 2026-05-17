import React from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  StatusBar,
  Linking,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Colors } from "../constants/Colors";

const { width } = Dimensions.get("window");
// Suratlaryň gapdal çetlere kemsiz ýanyşmagy üçin takyk giňlik hasaplamasy
const imageWidth = width - 56;

export default function DeliveryScreen() {
  const paymentMethods = [
    "Nagt hasaplaşygy;",
    "Bank karty (müşderiniň özi gelip alanda we Aşgabat şäheriniň çäklerinde eltip bermekde terminal arkaly töleg);",
    "Onlaýn töleg (VPN we dürli proksi-serwerleri ulananyňyzda, onlaýn tölegiň işlemeýändigini ýadyňyzdan çykarmaň);",
    "Nagt däl töleg (ýuridiki şahslar we kärhanalar üçin bank arkaly pul serişdelerini geçirmek, daşary ýurt kompaniýalar üçin walýuta hasabyna tölemäge mümkinçilik berýäris);",
  ];

  const renderBulletList = (items: string[]) => {
    return items.map((item, index) => (
      <View key={index} style={styles.bulletItemRow}>
        <Text style={styles.bulletDot}>•</Text>
        <Text style={styles.bulletItemText}>{item}</Text>
      </View>
    ));
  };

  return (
    <View style={styles.safeContainer}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#1A1A1A"
        translucent={false}
      />

      <Header />

      <ScrollView
        style={styles.container}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.textCard}>
          <Text style={styles.pageTitle}>ELTIP BERMEK WE TÖLEG</Text>

          <Text style={styles.mainRedHeading}>Eltip bermegiň usullary:</Text>

          <Text style={styles.subHeadingText}>1. Özüň baryp almak:</Text>
          <Text style={styles.paragraphText}>
            Sargydy dükanyň satyjylaryna deslapdan jaň etmek arkaly A.Nyýazow
            (Hudayberdiýew) köçesi, 99 jaý salgysyndan özüňiz alyp bilersiňiz.
          </Text>

          <Text style={styles.subHeadingText}>
            2. Aşgabat şäheriniň çäklerinde eltip bermek:
          </Text>
          <Text style={styles.paragraphText}>
            Aşgabat şäheriniň çäklerinde eltip bermek – günüň dowamynda ýa-da
            ertesi gün (sargyt wagtyna baglylykda) amala aşyrylýar. Sargyt 500
            manat möçberden geçýän bolsa, eltip bermek mugt (eltip bermegiň
            bahasy – 20 manat). Uzak etraplara eltip bermek mugt, ýöne diňe
            sargyt 1000 manatdan ýokary bolsa (eltip bermegiň bahasy 50 manat).
          </Text>
          <Text style={styles.paragraphText}>
            Aşgabat şäheri boýunça eltip bermek sagat 09:00 – 19:00 aralygynda
            amala aşyrylýar.
          </Text>
          <Text style={styles.paragraphText}>
            <Text style={styles.boldLabel}>Dükanyň iş wagty:</Text> her gün
            09:30-dan 18:30-a çenli, ýekşenbe 11:00-dan 19:00-a çenli.
          </Text>

          <Text style={styles.subHeadingText}>3. Welaýatara eltip bermek:</Text>
          <Text style={styles.paragraphText}>
            Welaýatlara eltip bermek Türkmenistanyň poçta gullugy tarapyndan
            amala aşyrylýar. Eltip bermegiň möhleti – ortaça 2-5 gün.
            Baýramçylyk ýa-da dynç günleri sargyt edilen harytlaryň eltip
            berilmegi üçin has köp wagt gerek bolup biler. Saýtdan
            Türkmenistanyň islendik ýerine sargyt edeniňizde, eltip bermek mugt,
            ýöne sargyt 1500 manat möçberinden geçmeli (eltip bermegiň bahasy –
            50 manat). Sargyt edilende, maglumatlary takyk doldurmakda üns
            bermegiňizi haýyş edýäris, eger salgy we şäher gabat gelmese, sargyt
            gaýtadan resmileşdirilýänçä, haryt iberilmez.
          </Text>

          <Text style={styles.paragraphText}>
            Eltip bermegiň ýokardaky usullary müşderiniň talaplaryna laýyk
            gelmeýän bolsa, Müşderi öz usulyny teklip etmäge hukugy bardyr,
            munda harytlaryň abatlygy we eltip bermek çykdajylary üçin
            jogapkärçiligi dolulygyna müşderi öz üstüne alýar.
          </Text>
          <Text style={styles.paragraphText}>
            Sargyt resmileşdirenden soň satyjymyz käbir soraglary anyklamak üçin
            Siziň bilen telefon arkaly habarlaşar. Günüň dowamynda telefon
            elýeterli bolmasa, sargyt ýatyrylýar.
          </Text>

          <View style={styles.sectionDivider} />
          <Text style={styles.mainRedHeading}>Töleg usullary:</Text>
          <Text style={styles.paragraphText}>
            Töleg şu aşakdaky usullar arkaly amala aşyrylyp bilner:
          </Text>
          <View style={styles.listWrapper}>
            {renderBulletList(paymentMethods)}
          </View>

          <View style={styles.sectionDivider} />
          <Text style={styles.sectionHeadingText}>Goşmaça maglumat üçin:</Text>

          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => Linking.openURL("tel:+99312492343")}
          >
            <Text style={styles.infoDetailText}>
              <Text style={styles.boldLabel}>Tel.:</Text> +993 (12) 49-23-43,
              +993 (12) 26-13-69, +993 (62) 70-80-45
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => Linking.openURL("mailto:sumbar.computer@gmail.com")}
          >
            <Text style={styles.infoDetailText}>
              <Text style={styles.boldLabel}>e-mail:</Text>{" "}
              sumbar.computer@gmail.com
            </Text>
          </TouchableOpacity>

          <View style={styles.deliveryGalleryContainer}>
            <Image
              source={require("../assets/assets/Footer_sliders/about/delivery-and-payment-1.jpg")}
              style={styles.galleryImage}
            />
            <Image
              source={require("../assets/assets/Footer_sliders/about/delivery-and-payment-2.jpg")}
              style={styles.galleryImage}
            />
            <Image
              source={require("../assets/assets/Footer_sliders/about/delivery-and-payment-3.jpg")}
              style={styles.galleryImage}
            />
          </View>
        </View>

        <Footer />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  safeContainer: { flex: 1, backgroundColor: Colors.background || "#F4F6F9" },
  container: { flex: 1 },
  scrollContent: { paddingBottom: 0 },
  textCard: {
    backgroundColor: "#FFFFFF",
    marginHorizontal: 12,
    marginTop: 14,
    marginBottom: 16,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#E2E8F0",
    paddingHorizontal: 16,
    paddingTop: 20,
    paddingBottom: 24,
  },
  pageTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#1E293B",
    textAlign: "center",
    letterSpacing: 0.5,
    marginBottom: 20,
  },
  mainRedHeading: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#CC0000",
    marginBottom: 14,
    textTransform: "uppercase",
  },
  subHeadingText: {
    fontSize: 13,
    fontWeight: "bold",
    color: "#1E293B",
    marginTop: 12,
    marginBottom: 8,
    lineHeight: 18,
  },
  paragraphText: {
    fontSize: 13,
    color: "#334155",
    lineHeight: 20,
    marginBottom: 12,
    textAlign: "justify",
  },
  boldLabel: { fontWeight: "700", color: "#1E293B" },
  listWrapper: { paddingLeft: 4, marginBottom: 8 },
  bulletItemRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    width: "100%",
    marginBottom: 8,
  },
  bulletDot: { fontSize: 14, color: "#475569", marginRight: 8, lineHeight: 16 },
  bulletItemText: {
    fontSize: 13,
    color: "#334155",
    flex: 1,
    lineHeight: 18,
    textAlign: "justify",
  },
  sectionDivider: {
    width: "100%",
    height: 1,
    backgroundColor: "#F1F5F9",
    marginVertical: 16,
  },
  sectionHeadingText: {
    fontSize: 13.5,
    fontWeight: "bold",
    color: "#1E293B",
    marginBottom: 10,
    textTransform: "uppercase",
  },
  infoDetailText: {
    fontSize: 13,
    color: "#334155",
    lineHeight: 18,
    marginBottom: 6,
  },

  // 🛠️ TÄZE SURAT GRUNDA STIllERI
  deliveryGalleryContainer: {
    width: "100%",
    marginTop: 20,
    gap: 14, // Suratlar arasyndaky optimal aralyk
  },
  galleryImage: {
    width: imageWidth,
    height: imageWidth * 0.65, // Owadan 16:10 proporsional gutular
    borderRadius: 4,
    resizeMode: "cover",
    backgroundColor: "#F1F5F9",
  },
});
