import React from "react";
import { StyleSheet, View, Text, ScrollView, StatusBar, Image, Dimensions, TouchableOpacity, Linking } from "react-native";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Colors } from "../constants/Colors";
import { useLangStore } from "../store/useLangStore"; // Senior Dokunşy: Global store integrasiýasy

const { width } = Dimensions.get("window");
const imageWidth = width - 56;

export default function ServiceScreen() {
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
      <StatusBar barStyle="light-content" backgroundColor="#1A1A1A" translucent={false} />

      <Header />

      <ScrollView 
        style={styles.container} 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.textCard}>
          
          <Text style={styles.pageTitle}>{t.service.title}</Text>

          <Text style={styles.paragraphText}>
            <Text style={styles.boldRedText}>Service Sumbar Computer</Text>
            {t.service.p1}
          </Text>

          <Text style={styles.subHeadingText}>{t.service.subHeading}</Text>

          <View style={styles.listWrapper}>{renderBulletList(t.service.servicesList)}</View>

          <TouchableOpacity 
            activeOpacity={0.7} 
            onPress={() => Linking.openURL("tel:+99362233759")}
            style={styles.phoneClickZone}
          >
            <Text style={styles.phoneText}>
              {t.service.phoneLabel}<Text style={styles.boldPhoneNum}>+993 (62) 23-37-59</Text>
            </Text>
          </TouchableOpacity>

          <View style={styles.galleryContainer}>
            <Image 
              source={require("../assets/assets/Footer_sliders/about/service-1.jpg")} 
              style={styles.serviceImage} 
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
  paragraphText: {
    fontSize: 13,
    color: "#334155",
    lineHeight: 20,
    marginBottom: 18,
    textAlign: "justify",
  },
  boldRedText: {
    fontWeight: "bold",
    color: "#CC0000",
  },
  subHeadingText: {
    fontSize: 13.5,
    fontWeight: "bold",
    color: "#1E293B",
    marginBottom: 12,
    marginTop: 4,
  },
  listWrapper: {
    paddingLeft: 4,
    marginBottom: 16,
  },
  bulletItemRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    width: "100%",
    marginBottom: 8,
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
  phoneClickZone: {
    marginVertical: 6,
    paddingVertical: 2,
  },
  phoneText: {
    fontSize: 13.5,
    color: "#334155",
  },
  boldPhoneNum: {
    fontWeight: "bold",
    color: "#1E293B",
  },
  galleryContainer: {
    width: "100%",
    marginTop: 14,
  },
  serviceImage: {
    width: imageWidth,
    height: imageWidth * 0.72,
    borderRadius: 4,
    resizeMode: "cover",
    backgroundColor: "#F1F5F9",
  },
});
