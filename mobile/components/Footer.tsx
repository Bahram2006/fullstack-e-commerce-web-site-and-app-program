import React, { useState } from "react";
import { useRouter } from "expo-router";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
  Linking,
  Dimensions,
} from "react-native";
import { Feather, FontAwesome, Ionicons } from "@expo/vector-icons";

const { width } = Dimensions.get("window");

const brandSliders = [
  require("../assets/assets/Footer_sliders/slider_1.png"),
  require("../assets/assets/Footer_sliders/slider_2.png"),
  require("../assets/assets/Footer_sliders/slider_3.png"),
  require("../assets/assets/Footer_sliders/slider_4.png"),
  require("../assets/assets/Footer_sliders/slider_5.png"),
  require("../assets/assets/Footer_sliders/slider_6.png"),
  require("../assets/assets/Footer_sliders/slider_7.png"),
  require("../assets/assets/Footer_sliders/slider_8.png"),
  require("../assets/assets/Footer_sliders/slider_9.png"),
  require("../assets/assets/Footer_sliders/slider_10.png"),
  require("../assets/assets/Footer_sliders/slider_11.png"),
  require("../assets/assets/Footer_sliders/slider_12.png"),
  require("../assets/assets/Footer_sliders/slider_13.png"),
  require("../assets/assets/Footer_sliders/slider_14.png"),
  require("../assets/assets/Footer_sliders/slider_15.png"),
  require("../assets/assets/Footer_sliders/slider_16.png"),
  require("../assets/assets/Footer_sliders/slider_17.png"),
  require("../assets/assets/Footer_sliders/slider_18.png"),
  require("../assets/assets/Footer_sliders/slider_19.png"),
  require("../assets/assets/Footer_sliders/slider_20.png"),
];

interface FooterProps {
  onComplainPress?: () => void;
}

export default function Footer({ onComplainPress }: FooterProps) {
  // 🛠️ MÖHÜM GÖRNÜŞ: router funksiýasy kemsiz çagyryldy we öňki onComplainPress hem 100% goraldy!
  const router = useRouter();
  const [email, setEmail] = useState("");

  return (
    <View style={styles.container}>
      {/* 1. BRENDLERIŇ SÜÝŞÝÄN SLIDERI */}
      <View style={styles.brandSliderWrapper}>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.brandScrollContent}
        >
          {brandSliders.map((img, index) => (
            <View key={index} style={styles.brandImageContainer}>
              <Image source={img} style={styles.brandImage} />
            </View>
          ))}
        </ScrollView>
      </View>

      {/* 2. ESASY GARA BÖLEK */}
      <View style={styles.mainFooterBody}>
        {/* Sumbar Uly Logo */}
        <View style={styles.logoContainer}>
          <View style={styles.logoIconGroup}>
            <Text style={styles.logoBigS}>S</Text>
            <Text style={styles.logoSmallC}>C</Text>
          </View>
          <View style={styles.logoTextCol}>
            <Text style={styles.logoMainText}>SUMBAR</Text>
            <Text style={styles.logoSubText}>COMPUTER</Text>
          </View>
        </View>

        {/* Aragatnaşyk maglumatlary */}
        <View style={styles.contactsList}>
          <View style={styles.contactItem}>
            <Ionicons
              name="location-outline"
              size={16}
              color="#94A3B8"
              style={styles.iconStyle}
            />
            <Text style={styles.contactText}>
              Türkmenistan, Aşgabat, köç. A.Nyýazow (Hudaýberdiýew), jaý 99
            </Text>
          </View>

          <TouchableOpacity
            style={styles.contactItem}
            activeOpacity={0.7}
            onPress={() => Linking.openURL("mailto:sumbar.computer@gmail.com")}
          >
            <Feather
              name="mail"
              size={14}
              color="#94A3B8"
              style={styles.iconStyle}
            />
            <Text style={styles.contactText}>sumbar.computer@gmail.com</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.contactItem}
            activeOpacity={0.7}
            onPress={() => Linking.openURL("tel:+99312492343")}
          >
            <Feather
              name="phone"
              size={14}
              color="#94A3B8"
              style={styles.iconStyle}
            />
            <Text style={styles.contactText}>+993 (12) 49-23-43</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.contactItem}
            activeOpacity={0.7}
            onPress={() => Linking.openURL("tel:+99362708045")}
          >
            <Feather
              name="smartphone"
              size={14}
              color="#94A3B8"
              style={styles.iconStyle}
            />
            <Text style={styles.contactText}>+993 (62) 70-80-45</Text>
          </TouchableOpacity>

          {/* Sosial Ulgamlar */}
          <View style={styles.socialRow}>
            <TouchableOpacity style={styles.socialItem} activeOpacity={0.7}>
              <FontAwesome name="instagram" size={14} color="#94A3B8" />
              <Text style={styles.socialText}>Instagram</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialItem} activeOpacity={0.7}>
              <FontAwesome name="font" size={12} color="#94A3B8" />
              <Text style={styles.socialText}>TikTok</Text>
            </TouchableOpacity>
          </View>
        </View>

                <Text style={styles.aboutShortText}>
          Sumbar Computer - Türkmenistanda kompýuter we periferiýa enjamlary dükany
        </Text>

        {/* 🛠️ INFORMATIW BAGLANYŞYKLAR (Ähli düwmeler 100% kemsiz sazlandy) */}
        <View style={styles.linksGrid}>
          {/* Çep Sütün */}
          <View style={styles.linksColumn}>
            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.linkItemBtn}
              onPress={() => router.push("/about")}
            >
              <Text style={styles.linkItemText}>Biz barada</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              activeOpacity={0.7} 
              style={styles.linkItemBtn}
              onPress={() => router.push("/warranty")}
            >
              <Text style={styles.linkItemText}>Kepillilik</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              activeOpacity={0.7} 
              style={styles.linkItemBtn}
              onPress={() => router.push("/gallery")}
            >
              <Text style={styles.linkItemText}>Galereýa</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              activeOpacity={0.7} 
              style={styles.linkItemBtn}
              onPress={() => router.push("/privacy")}
            >
              <Text style={styles.linkItemText}>Gizlinlik syýasaty</Text>
            </TouchableOpacity>
          </View>

          {/* Sag Sütün */}
          <View style={styles.linksColumn}>
            <TouchableOpacity 
              activeOpacity={0.7} 
              style={styles.linkItemBtn}
              onPress={() => router.push("/service")}
            >
              <Text style={styles.linkItemText}>Tehniki hyzmat</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              activeOpacity={0.7} 
              style={styles.linkItemBtn}
              onPress={() => router.push("/delivery")}
            >
              <Text style={styles.linkItemText}>Eltip bermek we töleg</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              activeOpacity={0.7} 
              style={styles.linkItemBtn}
              onPress={() => router.push("/brands")}
            >
              <Text style={styles.linkItemText}>Brendler</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              activeOpacity={0.7} 
              style={styles.linkItemBtn}
              onPress={() => router.push("/bonus")}
            >
              <Text style={styles.linkItemText}>Bal toplamak ulgamy</Text>
            </TouchableOpacity>
          </View>
        </View>


        {/* 🛠️ TÄZE GOŞULAN BÖLEKLER (BIREBIR GÖRSELŇIZE GÖRÄ) */}

        {/* E-poçta Abuna Ulgamy */}
        <Text style={styles.sectionHeading}>Täzeliklere abuna boluň</Text>
        <TextInput
          style={styles.emailInput}
          placeholder="E-poçtaňyz"
          placeholderTextColor="#94A3B8"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />

        {/* Nägilelik Bildirmek Düwmesi */}
        <Text style={styles.sectionHeading}>
          Websaýty gowulaşdyrmaga kömek ediň
        </Text>
        <TouchableOpacity
          style={styles.complainButton}
          activeOpacity={0.8}
          onPress={onComplainPress} // 🛠️ DIŇE ŞU SETIR GOŞULER!
        >
          <Text style={styles.complainButtonText}>Nägilelik bildirmek</Text>
        </TouchableOpacity>

        {/* Programmany Ýükläň */}
        <Text style={styles.sectionHeading}>Programmany ýükläň:</Text>
        <View style={styles.appsRow}>
          {/* App Store Düwmesi (Wagtlaýyn Öwadan Text/Icon Gurluşy) */}
          <TouchableOpacity style={styles.appStoreBtn} activeOpacity={0.8}>
            <FontAwesome name="apple" size={16} color="#FFFFFF" />
            <View style={styles.appBtnTexts}>
              <Text style={styles.appBtnMiniText}>Download on the</Text>
              <Text style={styles.appBtnMainText}>App Store</Text>
            </View>
          </TouchableOpacity>

          {/* Google Play Düwmesi */}
          <TouchableOpacity style={styles.appStoreBtn} activeOpacity={0.8}>
            <FontAwesome name="android" size={15} color="#FFFFFF" />
            <View style={styles.appBtnTexts}>
              <Text style={styles.appBtnMiniText}>GET IT ON</Text>
              <Text style={styles.appBtnMainText}>Google Play</Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* Inçe separator we Iň Aşaky Copyright Ýazgysy */}
        <View style={styles.footerDivider} />
        <Text style={styles.copyrightText}>© 2026 sumbar-computer.com</Text>
        <Text style={styles.copyrightTextSub}>Ähli hukuklary goraglydyr.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#1A1A1A",
  },
  brandSliderWrapper: {
    backgroundColor: "#2E2E38",
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: "#3F3F46",
  },
  brandScrollContent: {
    paddingHorizontal: 12,
    alignItems: "center",
    gap: 24,
  },
  brandImageContainer: {
    width: 75,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  brandImage: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  mainFooterBody: {
    backgroundColor: "#1A1A1A",
    paddingHorizontal: 16,
    paddingTop: 24,
    paddingBottom: 24,
  },
  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 20,
  },
  logoIconGroup: {
    backgroundColor: "#CC0000",
    paddingHorizontal: 7,
    paddingVertical: 3,
    borderRadius: 2,
  },
  logoBigS: { color: "#FFFFFF", fontSize: 18, fontWeight: "bold" },
  logoSmallC: { color: "#FFFFFF", fontSize: 11, alignSelf: "flex-end" },
  logoTextCol: { flexDirection: "column" },
  logoMainText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
    letterSpacing: 1.2,
  },
  logoSubText: {
    color: "#FFFFFF",
    fontSize: 9,
    letterSpacing: 0.5,
    marginTop: -2,
  },
  contactsList: {
    gap: 12,
    marginBottom: 20,
  },
  contactItem: {
    flexDirection: "row",
    alignItems: "flex-start",
    width: "100%",
  },
  iconStyle: {
    width: 22,
    marginTop: 2,
  },
  contactText: {
    color: "#94A3B8",
    fontSize: 12,
    flex: 1,
    lineHeight: 16,
    fontWeight: "500",
  },
  socialRow: {
    flexDirection: "row",
    gap: 16,
    marginTop: 4,
  },
  socialItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  socialText: {
    color: "#94A3B8",
    fontSize: 12,
    fontWeight: "500",
  },
  aboutShortText: {
    color: "#FFFFFF",
    fontSize: 13,
    fontWeight: "bold",
    lineHeight: 18,
    marginBottom: 24,
  },
  linksGrid: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 20,
  },
  linksColumn: {
    width: "48%",
    gap: 12,
  },
  linkItemBtn: {
    paddingVertical: 2,
  },
  linkItemText: {
    color: "#94A3B8",
    fontSize: 12,
    fontWeight: "500",
  },
  // 🛠️ TÄZE GOŞULAN SECTION STIllERI
  sectionHeading: {
    color: "#FFFFFF",
    fontSize: 13,
    fontWeight: "bold",
    marginTop: 18,
    marginBottom: 8,
  },
  emailInput: {
    backgroundColor: "#FFFFFF",
    width: "100%",
    height: 40,
    borderRadius: 2,
    paddingHorizontal: 12,
    fontSize: 13,
    color: "#1E293B",
  },
  complainButton: {
    width: "100%",
    height: 40,
    borderWidth: 1,
    borderColor: "#CC0000",
    borderRadius: 2,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
  },
  complainButtonText: {
    color: "#CC0000",
    fontSize: 12,
    fontWeight: "bold",
  },
  appsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    gap: 10,
    marginBottom: 10,
  },
  appStoreBtn: {
    backgroundColor: "#000000",
    borderWidth: 1,
    borderColor: "#3F3F46",
    borderRadius: 4,
    flex: 1,
    height: 42,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
  appBtnTexts: {
    flexDirection: "column",
  },
  appBtnMiniText: {
    color: "#94A3B8",
    fontSize: 7,
    fontWeight: "500",
    textTransform: "uppercase",
  },
  appBtnMainText: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "bold",
    marginTop: -2,
  },
  footerDivider: {
    width: "100%",
    height: 0.5,
    backgroundColor: "#3F3F46",
    marginTop: 24,
    marginBottom: 12,
  },
  copyrightText: {
    color: "#94A3B8",
    fontSize: 12,
    fontWeight: "500",
  },
  copyrightTextSub: {
    color: "#64748B",
    fontSize: 11,
    marginTop: 2,
  },
});
