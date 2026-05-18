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
import { useLangStore } from "../store/useLangStore"; // Senior Dokunşy: Global store integrasiýasy

const { width } = Dimensions.get("window");
const imageWidth = width - 56;

export default function DeliveryScreen() {
  const { t } = useLangStore(); // Reactive terjime obýekti

  const renderBulletList = (items: string[]) => {
    if (!items) return null;
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
          <Text style={styles.pageTitle}>{t.delivery.title}</Text>

          <Text style={styles.mainRedHeading}>{t.delivery.methodsHeading}</Text>

          <Text style={styles.subHeadingText}>{t.delivery.sub1}</Text>
          <Text style={styles.paragraphText}>{t.delivery.p1}</Text>

          <Text style={styles.subHeadingText}>{t.delivery.sub2}</Text>
          <Text style={styles.paragraphText}>{t.delivery.p2_1}</Text>
          <Text style={styles.paragraphText}>{t.delivery.p2_2}</Text>
          <Text style={styles.paragraphText}>
            <Text style={styles.boldLabel}>{t.delivery.workTimeLabel}</Text>
            {t.delivery.workTimeValue}
          </Text>

          <Text style={styles.subHeadingText}>{t.delivery.sub3}</Text>
          <Text style={styles.paragraphText}>{t.delivery.p3_1}</Text>
          <Text style={styles.paragraphText}>{t.delivery.p3_2}</Text>
          <Text style={styles.paragraphText}>{t.delivery.p3_3}</Text>

          <View style={styles.sectionDivider} />
          <Text style={styles.mainRedHeading}>{t.delivery.paymentHeading}</Text>
          <Text style={styles.paragraphText}>{t.delivery.paymentText}</Text>
          <View style={styles.listWrapper}>
            {renderBulletList(t.delivery.paymentMethods)}
          </View>

          <View style={styles.sectionDivider} />
          <Text style={styles.sectionHeadingText}>
            {t.delivery.additionalInfo}
          </Text>

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

// Seniň original kemsiz dizaýn stilleriň (CSS)
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
  deliveryGalleryContainer: {
    width: "100%",
    marginTop: 14,
    gap: 14,
  },
  galleryImage: {
    width: imageWidth,
    height: imageWidth * 0.75,
    borderRadius: 4,
    resizeMode: "cover",
    backgroundColor: "#F1F5F9",
  },
});
