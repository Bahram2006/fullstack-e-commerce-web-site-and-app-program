import React from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  StatusBar,
  Image,
  Dimensions,
  TouchableOpacity,
  Linking,
} from "react-native";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Colors } from "../constants/Colors";
import { useLangStore } from "../store/useLangStore";

const { width } = Dimensions.get("window");
const imageWidth = width - 56;

export default function AboutScreen() {
  const { t } = useLangStore();

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
          <Text style={styles.pageTitle}>{t.about.title}</Text>

          <Text style={styles.paragraphText}>
            <Text style={styles.boldRedText}>“Sumbar Computer”</Text>
            {t.about.p1_1}
          </Text>

          <Text style={styles.paragraphText}>
            <Text style={styles.boldRedText}>“Sumbar Computer”</Text>
            {t.about.p2_1}
          </Text>

          <Text style={styles.subHeadingText}>{t.about.mainProductsHeading}</Text>
          <View style={styles.listWrapper}>
            {renderBulletList(t.about.mainProducts)}
          </View>

          <Text style={styles.subHeadingText}>{t.about.corporateHeading}</Text>
          <View style={styles.listWrapper}>
            {renderBulletList(t.about.corporateItems)}
          </View>

          <Text style={styles.subHeadingText}>{t.about.retailHeading}</Text>
          <View style={styles.listWrapper}>
            {renderBulletList(t.about.retailItems)}
          </View>

          <Text style={styles.subHeadingText}>{t.about.serviceHeading}</Text>
          <View style={styles.listWrapper}>
            {renderBulletList(t.about.serviceItems)}
          </View>

          <View style={styles.sectionDivider} />
          <Text style={styles.sectionHeadingText}>{t.about.workingHours}</Text>
          <Text style={styles.infoDetailText}>{t.about.weekdays}</Text>
          <Text style={styles.infoDetailText}>{t.about.weekends}</Text>
          <Text style={styles.infoDetailTextSub}>{t.about.holidaySub}</Text>

          <View style={styles.sectionDivider} />
          <Text style={styles.sectionHeadingText}>{t.about.contactUs}</Text>

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
              <Text style={styles.boldLabel}>e-mail:</Text> sumbar.computer@gmail.com
            </Text>
          </TouchableOpacity>

          <Text style={styles.infoDetailText}>
            <Text style={styles.boldLabel}>Instagram:</Text> sumbarcomputer_official
          </Text>

          <Text style={styles.addressText}>{t.about.address}</Text>

          <View style={styles.aboutGalleryContainer}>
            <Image
              source={require("../assets/assets/Footer_sliders/about/about-us-1.jpg")}
              style={styles.galleryImage}
            />
            <Image
              source={require("../assets/assets/Footer_sliders/about/about-us-2.jpg")}
              style={styles.galleryImage}
            />
            <Image
              source={require("../assets/assets/Footer_sliders/about/about-us-3.jpg")}
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
  },
  paragraphText: {
    fontSize: 13,
    color: "#334155",
    lineHeight: 20,
    marginBottom: 16,
    textAlign: "justify",
  },
  boldRedText: {
    fontWeight: "bold",
    color: "#CC0000",
  },
  subHeadingText: {
    fontSize: 13,
    fontWeight: "bold",
    color: "#1E293B",
    marginTop: 14,
    marginBottom: 10,
    lineHeight: 18,
  },
  listWrapper: {
    paddingLeft: 4,
    marginBottom: 8,
  },
  bulletItemRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    width: "100%",
    marginBottom: 6,
  },
  bulletDot: {
    fontSize: 14,
    color: "#475569",
    marginRight: 8,
    lineHeight: 16,
  },
  bulletItemText: {
    fontSize: 13,
    color: "#334155",
    flex: 1,
    lineHeight: 18,
  },
  sectionDivider: {
    width: "100%",
    height: 1,
    backgroundColor: "#F1F5F9",
    marginVertical: 16,
  },
  sectionHeadingText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#1E293B",
    marginBottom: 10,
    textTransform: "uppercase",
  },
  infoDetailText: {
    fontSize: 13,
    color: "#334155",
    lineHeight: 18,
    marginBottom: 4,
  },
  infoDetailTextSub: {
    fontSize: 12,
    color: "#64748B",
    fontStyle: "italic",
    marginTop: 4,
  },
  boldLabel: {
    fontWeight: "700",
    color: "#1E293B",
  },
  addressText: {
    fontSize: 12.5,
    color: "#475569",
    lineHeight: 18,
    backgroundColor: "#F8FAFC",
    padding: 12,
    borderRadius: 4,
    marginTop: 12,
    borderWidth: 0.5,
    borderColor: "#E2E8F0",
    marginBottom: 16,
  },
  aboutGalleryContainer: {
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
