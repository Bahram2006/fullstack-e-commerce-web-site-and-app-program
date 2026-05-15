import React, { useState } from "react";
import AuthModal from "./AuthModal";
import { useRouter } from "expo-router";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Linking,
  TextInput,
} from "react-native";
import {
  SimpleLineIcons,
  Feather,
  Ionicons,
  FontAwesome,
  Entypo,
} from "@expo/vector-icons";
import { Colors } from "../constants/Colors";
import { useLangStore } from "../store/useLangStore";
import ProfileDropdown from "./ProfileDropdown";

export default function Header() {
  const router = useRouter();
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const { lang, setLang } = useLangStore();
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [searchText, setSearchText] = useState("");

  const contactText = {
    tk: "Biziň bilen habarlaşyň...",
    ru: "Связаться с нами...",
    en: "Contact us...",
  };
  const langName = { tk: "Türkmen", ru: "Русский", en: "English" };
  const placeholderText = { tk: "Gözleg", ru: "Поиск", en: "Search" };
  const flags = { tk: "🇹🇲", ru: "🇷🇺", en: "🇬🇧" };

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <TouchableOpacity
          style={styles.iconButton}
          activeOpacity={0.7}
          onPress={() => router.push("/notifications")}
        >
          <Ionicons name="notifications-outline" size={21} color="#FFFFFF" />
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => {
            setIsLangOpen(!isLangOpen);
            setIsContactOpen(false);
            setIsProfileOpen(false);
          }}
          style={styles.topBarTrigger}
        >
          <Entypo name="globe" size={13} color="#94A3B8" />
          <Text style={styles.topBarText}>{langName[lang]}</Text>
        </TouchableOpacity>
      </View>

      {isContactOpen && (
        <View style={[styles.dropdownMenu, { left: 12 }]}>
          <TouchableOpacity
            style={styles.dropdownItem}
            onPress={() => Linking.openURL("tel:+99312492343")}
          >
            <Feather name="phone" size={13} color="#1E293B" />
            <Text style={styles.dropdownText}>+993 (12) 49-23-43</Text>
          </TouchableOpacity>
        </View>
      )}

      {isLangOpen && (
        <View style={[styles.dropdownMenu, styles.langDropdown]}>
          {(["tk", "ru", "en"] as const).map((item) => (
            <TouchableOpacity
              key={item}
              style={styles.langItem}
              onPress={() => {
                setLang(item);
                setIsLangOpen(false);
              }}
            >
              <View style={styles.langLeft}>
                <Text style={styles.flagEmoji}>{flags[item]}</Text>
                <Text
                  style={[
                    styles.langItemText,
                    lang === item && styles.activeLangText,
                  ]}
                >
                  {langName[item]}
                </Text>
              </View>
              {lang === item && (
                <FontAwesome name="check" size={12} color="#CC0000" />
              )}
            </TouchableOpacity>
          ))}
        </View>
      )}

      <View style={styles.mainNavbar}>
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

        <View style={styles.actionsRow}>
          <TouchableOpacity
            style={styles.iconButton}
            activeOpacity={0.7}
            onPress={() => {
              setIsSearchOpen(!isSearchOpen);
              setIsProfileOpen(false);
            }}
          >
            <Feather
              name={isSearchOpen ? "x" : "search"}
              size={20}
              color={isSearchOpen ? Colors.primary : "#FFFFFF"}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.iconButton}
            activeOpacity={0.7}
            onPress={() => {
              setIsProfileOpen(!isProfileOpen);
              setIsSearchOpen(false);
              setIsLangOpen(false);
              setIsContactOpen(false);
            }}
          >
            <View style={styles.profileIconContainer}>
              <SimpleLineIcons
                name="user"
                size={18}
                color={isProfileOpen ? Colors.primary : "#3B82F6"}
              />
              <View style={styles.badgeRed}>
                <Text style={styles.badgeX}>×</Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.iconButton} activeOpacity={0.7}>
            <Ionicons name="notifications-outline" size={21} color="#FFFFFF" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton} activeOpacity={0.7}>
            <SimpleLineIcons name="bag" size={18} color="#FFFFFF" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton} activeOpacity={0.7}>
            <Feather name="menu" size={21} color="#FFFFFF" />
          </TouchableOpacity>
        </View>

        {isProfileOpen && (
          <ProfileDropdown
            onClose={() => {
              setIsProfileOpen(false);
              setIsAuthModalOpen(true);
            }}
          />
        )}
      </View>

      {isSearchOpen && (
        <View style={styles.searchBarWrapper}>
          <View style={styles.searchContainer}>
            <TextInput
              style={styles.searchInput}
              placeholder={placeholderText[lang]}
              placeholderTextColor="#94A3B8"
              value={searchText}
              onChangeText={setSearchText}
              autoFocus={true}
            />
            <TouchableOpacity
              style={styles.searchSubmitButton}
              activeOpacity={0.8}
            >
              <Feather name="search" size={18} color="#FFFFFF" />
            </TouchableOpacity>
          </View>
        </View>
      )}
      <AuthModal
        visible={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.navBg,
    paddingTop: 36,
    position: "relative",
    zIndex: 999,
  },
  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 10,
    backgroundColor: Colors.topBarBg,
  },
  topBarTrigger: { flexDirection: "row", alignItems: "center", gap: 5 },
  topBarText: { color: "#94A3B8", fontSize: 12, fontWeight: "400" },
  dropdownMenu: {
    position: "absolute",
    top: 68,
    backgroundColor: "#FFFFFF",
    borderRadius: 4,
    width: 150,
    paddingVertical: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 6,
    zIndex: 1000,
  },
  langDropdown: { right: 12, width: 140 },
  dropdownItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#F1F5F9",
  },
  dropdownText: { color: "#1E293B", fontSize: 12 },
  langItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  langLeft: { flexDirection: "row", alignItems: "center", gap: 8 },
  flagEmoji: { fontSize: 15 },
  langItemText: { fontSize: 13, color: "#334155" },
  activeLangText: { color: "#CC0000", fontWeight: "500" },
  mainNavbar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 14,
    backgroundColor: Colors.navBg,
  },
  logoContainer: { flexDirection: "row", alignItems: "center", gap: 8 },
  logoIconGroup: {
    position: "relative",
    width: 28,
    height: 28,
    justifyContent: "center",
    alignItems: "center",
  },
  logoBigS: {
    color: "#FFFFFF",
    fontSize: 26,
    fontWeight: "900",
    fontStyle: "italic",
    position: "absolute",
    top: -4,
    left: 0,
  },
  logoSmallC: {
    color: "#CC0000",
    fontSize: 20,
    fontWeight: "900",
    fontStyle: "italic",
    position: "absolute",
    bottom: -4,
    right: 0,
  },
  logoTextCol: { justifyContent: "center" },
  logoMainText: {
    color: "#FFFFFF",
    fontSize: 17,
    fontWeight: "bold",
    letterSpacing: 0.5,
    lineHeight: 17,
  },
  logoSubText: {
    color: "#CC0000",
    fontSize: 8,
    fontWeight: "700",
    letterSpacing: 1.5,
    lineHeight: 8,
    marginTop: 2,
  },
  actionsRow: { flexDirection: "row", alignItems: "center", gap: 14 },
  iconButton: {
    justifyContent: "center",
    alignItems: "center",
    width: 28,
    height: 28,
  },
  profileIconContainer: {
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
  },
  badgeRed: {
    position: "absolute",
    top: -4,
    right: -5,
    backgroundColor: "#CC0000",
    width: 10,
    height: 10,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  badgeX: { color: "#FFFFFF", fontSize: 8, fontWeight: "bold", lineHeight: 9 },
  searchBarWrapper: {
    backgroundColor: Colors.navBg,
    paddingHorizontal: 12,
    paddingBottom: 12,
  },
  searchContainer: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    borderRadius: 4,
    height: 40,
    overflow: "hidden",
    alignItems: "center",
  },
  searchInput: {
    flex: 1,
    height: "100%",
    paddingHorizontal: 12,
    fontSize: 14,
    color: "#1E293B",
  },
  searchSubmitButton: {
    backgroundColor: Colors.primary,
    width: 44,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
