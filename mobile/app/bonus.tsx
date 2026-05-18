import React from "react";
import { StyleSheet, View, Text, ScrollView, StatusBar, Dimensions } from "react-native";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Colors } from "../constants/Colors";
import { useLangStore } from "../store/useLangStore"; // Senior Dokunşy

const { width } = Dimensions.get("window");

export default function BonusScreen() {
  const { t } = useLangStore(); // Global dynamic terjime obýekti

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
          
          <Text style={styles.pageTitle}>{t.bonus.title}</Text>

          <Text style={styles.paragraphText}>
            <Text style={styles.boldRedText}>Sumbar Computer</Text>
            {t.bonus.p1}
          </Text>

          <Text style={styles.subHeadingText}>{t.bonus.earningHeading}</Text>
          <View style={styles.listWrapper}>{renderBulletList(t.bonus.earningRules)}</View>

          <View style={styles.noteBox}>
            <Text style={styles.noteText}>
              <Text style={{ fontWeight: "bold" }}>Bellik:</Text> {t.bonus.note}
            </Text>
          </View>

          <View style={styles.sectionDivider} />

          <Text style={styles.subHeadingText}>{t.bonus.usingHeading}</Text>
          <View style={styles.listWrapper}>{renderBulletList(t.bonus.usingRules)}</View>

          <Text style={styles.subHeadingText}>{t.bonus.exampleHeading}</Text>
          <Text style={styles.paragraphText}>{t.bonus.example1}</Text>
          <Text style={styles.paragraphText}>{t.bonus.example2}</Text>

        </View>

        <Footer />
      </ScrollView>
    </View>
  );
}

// Seniň original kemsiz dizaýn stilleriň
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
    marginBottom: 14,
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
    marginTop: 14,
    marginBottom: 12,
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
    marginBottom: 10,
  },
  bulletDot: {
    fontSize: 14,
    color: "#475569",
    marginRight: 10,
    lineHeight: 16,
  },
  bulletItemText: {
    fontSize: 13,
    color: "#334155",
    flex: 1,
    lineHeight: 19,
    textAlign: "justify",
  },
  noteBox: {
    backgroundColor: "#FFFBEB",
    padding: 12,
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: "#F59E0B",
    marginTop: 6,
    marginBottom: 6,
  },
  noteText: {
    fontSize: 12.5,
    color: "#B45309",
    lineHeight: 18,
  },
  sectionDivider: {
    width: "100%",
    height: 1,
    backgroundColor: "#F1F5F9",
    marginVertical: 14,
  },
});
