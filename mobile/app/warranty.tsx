import React from "react";
import { StyleSheet, View, Text, ScrollView, StatusBar, Image, Dimensions } from "react-native";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Colors } from "../constants/Colors";

const { width } = Dimensions.get("window");
const imageWidth = width - 56; 

export default function WarrantyScreen() {
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
          
          <Text style={styles.pageTitle}>KEPILLILIK</Text>

          <Text style={styles.subHeadingText}>Kepilligiň şertleri:</Text>

          <Text style={styles.paragraphText}>
            Aşakda görkezilen kepillikli şertler sarp edijä we şol bir wagtda ýerine ýetirijä hem degişlidir. Bu şertler Türkmenistanyň döwlet syýasatynyň guramaçylyk-hukuk, durmuş-ykdysady esaslaryny we sarp edijileri goramak babatyndaky kanunyň esaslaryny düzýär.
          </Text>

          <Text style={styles.romanHeadingText}>I. Kepilligiň borçnamalary</Text>

          <View style={styles.numberedItemRow}>
            <Text style={styles.itemNumber}>1.</Text>
            <Text style={styles.itemText}>
              Öndüriji tarapyndan kesgitlenen kepillik möhleti bolmadyk ýagdaýynda, şeýle hem gulluk möhleti döwründe kepillik berilmeýän komponentli harytlardan başgalaryna (sarp ediş materiallary, kartrijler, CD-DVD diskleri, sumkalar, metal we plastmassa önümleri, podstawkalar, berkidijiler, kabeller, gurallar, elektron komponentleri bolmadyk harytlar, şeýle hem programma üpjünçiligi, islendik operasion ulgamy, programmalar we ş.m.) ýerine ýetiriji harytlara kepilligiň möhletini kesgitleýär.
            </Text>
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
