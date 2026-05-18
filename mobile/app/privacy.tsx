import React from "react";
import { StyleSheet, View, Text, ScrollView, StatusBar, Dimensions } from "react-native";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Colors } from "../constants/Colors";
import { useLangStore } from "../store/useLangStore"; // Senior Dokunşy: Global store integrasiýasy

const { width } = Dimensions.get("window");

export default function PrivacyScreen() {
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
          
          <Text style={styles.pageTitle}>{t.privacy.title}</Text>

          <Text style={styles.subHeadingText}>{t.privacy.sub1}</Text>
          <Text style={styles.paragraphText}>{t.privacy.p1_1}</Text>
          <Text style={styles.paragraphText}>{t.privacy.p1_2}</Text>

          <Text style={styles.subHeadingText}>{t.privacy.sub2}</Text>
          <Text style={styles.paragraphText}>{t.privacy.p2_1}</Text>
          <View style={styles.listWrapper}>{renderBulletList(t.privacy.usageItems)}</View>

          <Text style={styles.subHeadingText}>{t.privacy.sub3}</Text>
          <Text style={styles.paragraphText}>{t.privacy.p3_1}</Text>

          <Text style={styles.subHeadingText}>{t.privacy.sub4}</Text>
          <Text style={styles.paragraphText}>{t.privacy.p4_1}</Text>
          <Text style={styles.paragraphText}>{t.privacy.p4_2}</Text>
          <Text style={styles.paragraphText}>{t.privacy.p4_3}</Text>

          <Text style={styles.subHeadingText}>{t.privacy.sub5}</Text>
          <Text style={styles.paragraphText}>{t.privacy.p5_1}</Text>

          <Text style={styles.subHeadingText}>{t.privacy.sub6}</Text>
          <Text style={styles.paragraphText}>{t.privacy.p6_1}</Text>
          
          <View style={styles.noticeBox}>
            <Text style={styles.noticeText}>{t.privacy.notice}</Text>
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
  },
  subHeadingText: {
    fontSize: 13.5,
    fontWeight: "bold",
    color: "#1E293B",
    marginTop: 16,
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
  listWrapper: {
    paddingLeft: 4,
    marginBottom: 10,
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
  noticeBox: {
    backgroundColor: "#F8FAFC",
    padding: 12,
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: "#CC0000",
    marginTop: 16,
  },
  noticeText: {
    fontSize: 12.5,
    color: "#CC0000",
    fontWeight: "600",
    lineHeight: 18,
    textAlign: "center",
  },
});
