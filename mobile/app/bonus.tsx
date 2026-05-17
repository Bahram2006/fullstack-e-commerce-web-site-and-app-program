import React from "react";
import { StyleSheet, View, Text, ScrollView, StatusBar, Dimensions } from "react-native";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Colors } from "../constants/Colors";

const { width } = Dimensions.get("window");

export default function BonusScreen() {
  
  const earningRules = [
    "Bal toplamak sistemasy şol sistemanyň täsir edýän harytlaryny satyn almak arkaly ballar toplanylýar.",
    "Satyn almak web sahypasyndan ýa-da programmadan edilmeli. Hasaplama diňe sargyt “Tamamlanan” statusyna eýe bolandan soň, ýagny “eltip bermek we tölemek” üçin ähli şertler ýerine ýetirilenden soň ýüze çykýar. Welaýatlara eltip bermek hyzmatynyň we kuryer gullugyndan pul serişdeleriniň gelip gowuşmagynyň belli bir wagt alýandygyny dykkatyňyza ýetirýäris. Şol sebäpli, ballar sargyt gowşurylan badyna däl-de, biraz wagtdan soňra hasaplanar.",
    "Ballar diňe satyn almazdan ozal hasaba goşulan (registrasiýa eden) ulanyjylara berilýär. Toplanan ballaryň sanyny ulanyjynyň “Hasabynda” yzarlap bolýar.",
    "Bal toplamak ulgamy häzirki wagtda arzanladyş yglan edilen önümlere degişli däldir."
  ];

  const usingRules = [
    "Diňe v.1.2.0 ýa-da has ýokary wersiýa bolan programmadan satyn alanyňyzda bal sarp edip bilersiňiz (AppStore ýa-da GooglePlay-dan alyp bilersiňiz).",
    "Häzirki wagtda arzanladyşyň bardygyna ýa-da ýokdugyna garamazdan, islendik önüme bal sarp edip bilersiňiz.",
    "Ballary nagt görnüşinde gaýtaryp alyp bolmaýar ýa-da dükanda ulanyp bolmaýar.",
    "Ballar umumy sargydyň 50% -inden köp bolmaly däldir."
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
      <StatusBar barStyle="light-content" backgroundColor="#1A1A1A" translucent={false} />

      <Header />

      <ScrollView 
        style={styles.container} 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.textCard}>
          
          <Text style={styles.pageTitle}>BAL TOPLAMAK ULGAMY</Text>

          <Text style={styles.paragraphText}>
            <Text style={styles.boldRedText}>Sumbar Computer</Text> onlaýn dükanynda hasaba alnan ulanyjylar üçin bal sistemasy hereket edýär. Haryt satyn alynanda, satyn alyja indiki satyn almak üçin sarp edip biljek bonus ballary berilýär.
          </Text>

          <Text style={styles.subHeadingText}>Ballary almagyň esasy düzgünleri:</Text>
          <View style={styles.listWrapper}>{renderBulletList(earningRules)}</View>

          <View style={styles.noteBox}>
            <Text style={styles.noteText}>
              <Text style={{ fontWeight: "bold" }}>Bellik:</Text> Bal toplamak programmasy ähli önümlere degişli däl! Satyn alyja satyn almak üçin ballar bilen üpjün edilen önümler, bahanyň gapdalynda degişli nyşan bilen bellik edilendir.
            </Text>
          </View>

          <View style={styles.sectionDivider} />

          <Text style={styles.subHeadingText}>Ballary ulanmagyň esasy düzgünleri:</Text>
          <View style={styles.listWrapper}>{renderBulletList(usingRules)}</View>

          <Text style={styles.subHeadingText}>Hasaplama nusgasy:</Text>
          <Text style={styles.paragraphText}>
            Meselem 100 bal topladyňyz we 100 manatlyk sargyt satyn almak isleýärsiňiz, 50 manadynyzy bal bilen ýapyp bilersiňiz, galanlary üçin nagt tölemeli bolarsyňyz.
          </Text>
          <Text style={styles.paragraphText}>
            100 bal toplap, 200 manatlyk haryt satyn alan bolsaňyz, bu sargyt üçin 100 balyň hemmesini sarp edip bilersiňiz, harydyň galan möçberini harydy alanyňyzda nagt ýa-da kartoçka arkaly onlaýn töleg tölenmeli.
          </Text>

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
