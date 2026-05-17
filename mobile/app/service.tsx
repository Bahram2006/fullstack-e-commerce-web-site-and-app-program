import React from "react";
import { StyleSheet, View, Text, ScrollView, StatusBar, Image, Dimensions, TouchableOpacity, Linking } from "react-native";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Colors } from "../constants/Colors";

const { width } = Dimensions.get("window");
const imageWidth = width - 56; // Konteyneriň padding-ine laýyk surat giňligi

export default function ServiceScreen() {
  // Bizin hyzmatlarymyz nokatly sanaw sanawy
  const servicesList = [
    "Kompýuter enjamlarynyň doly hyzmaty (abatlamak, proşiwka, programma üpjünçiligi);",
    "Dürli kompýuterleriň we noutbuklaryň diagnostikasy, gözlemek we näsazlyklaryny düzetmek;",
    "Ofis enjamlaryny (printerler, fakslar we ş.m.) abatlamak we profilaktika etmek;",
    "Struýnýý we lazer printerleri zaprawka etmek."
  ];

  // Nokatly sanaw gurýan professional funksiýa
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

      {/* Ýokarky Navbar */}
      <Header />

      <ScrollView 
        style={styles.container} 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.textCard}>
          
          <Text style={styles.pageTitle}>TEHNIKI HYZMAT</Text>

          <Text style={styles.paragraphText}>
            <Text style={styles.boldRedText}>Service Sumbar Computer</Text> – Aşgabadyň merkezinde ýerleşýän professional kompýuter hyzmat merkezidir. 10 ýyldan gowrak wagt bäri hyzmatlarymyzy şahsyýetlere we iri guramalara hödürleýäris.
          </Text>

          <Text style={styles.subHeadingText}>Bizin hyzmatlarymyz şular:</Text>

          <View style={styles.listWrapper}>{renderBulletList(servicesList)}</View>

          <TouchableOpacity 
            activeOpacity={0.7} 
            onPress={() => Linking.openURL("tel:+99362233759")}
            style={styles.phoneClickZone}
          >
            <Text style={styles.phoneText}>
              Telefon: <Text style={styles.boldPhoneNum}>+993 (62) 23-37-59</Text>
            </Text>
          </TouchableOpacity>

          <View style={styles.galleryContainer}>
            <Image 
              source={require("../assets/assets/Footer_sliders/about/service-1.jpg")} 
              style={styles.serviceImage} 
            />
          </View>

        </View>

        {/* Aşaky Footer */}
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
    height: imageWidth * 0.72, // Owadan proporsional beýiklik
    borderRadius: 4,
    resizeMode: "cover",
    backgroundColor: "#F1F5F9",
  },
});
