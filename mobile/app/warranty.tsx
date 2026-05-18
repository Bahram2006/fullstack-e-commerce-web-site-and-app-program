import React from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  StatusBar,
  Image,
  Dimensions,
} from "react-native";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Colors } from "../constants/Colors";
import { useLangStore } from "../store/useLangStore"; // Senior Dokunşy: Global store integrasiýasy

const { width } = Dimensions.get("window");
const imageWidth = width - 56;

export default function WarrantyScreen() {
  const { t } = useLangStore(); // Reactive terjime obýekti

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
          <Text style={styles.pageTitle}>{t.warranty.title}</Text>

          <Text style={styles.subHeadingText}>{t.warranty.subHeading}</Text>

          <Text style={styles.paragraphText}>{t.warranty.p1}</Text>

          <Text style={styles.romanHeadingText}>{t.warranty.romanHeading}</Text>

          <View style={styles.numberedItemRow}>
            <Text style={styles.itemNumber}>1.</Text>
            <Text style={styles.itemText}>{t.warranty.item1}</Text>
          </View>

          <View style={styles.warrantyImageContainer}>
            <Image
              source={require("../assets/assets/Footer_sliders/about/warranty.jpg")}
              style={styles.warrantyImage}
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
  safeContainer: {
    flex: 1,
    backgroundColor: Colors.background || "#F4F6F9",
  },
  container: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 0,
  },
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
    textTransform: "uppercase",
  },
  subHeadingText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#1E293B",
    marginBottom: 12,
  },
  paragraphText: {
    fontSize: 13,
    color: "#334155",
    lineHeight: 20,
    marginBottom: 18,
    textAlign: "justify",
  },
  romanHeadingText: {
    fontSize: 13,
    fontWeight: "bold",
    color: "#1E293B",
    marginBottom: 12,
    marginTop: 6,
  },
  numberedItemRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    width: "100%",
    paddingLeft: 4,
    marginBottom: 16,
  },
  itemNumber: {
    fontSize: 13,
    fontWeight: "bold",
    color: "#334155",
    marginRight: 8,
    lineHeight: 20,
  },
  itemText: {
    fontSize: 13,
    color: "#334155",
    flex: 1,
    lineHeight: 20,
    textAlign: "justify",
  },
  warrantyImageContainer: {
    width: "100%",
    alignItems: "center",
    marginTop: 14,
  },
  warrantyImage: {
    width: imageWidth,
    height: imageWidth * 0.75,
    borderRadius: 4,
    resizeMode: "contain",
    backgroundColor: "#FFFFFF",
  },
});
