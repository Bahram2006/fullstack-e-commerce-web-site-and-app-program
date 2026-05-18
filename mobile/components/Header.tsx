import React, { useState } from "react";
import AuthModal from "./AuthModal";
import { useRouter } from "expo-router";
import MenuDropdown from "./MenuDropdown";
import AIChatModal from "./AIChatModal";
import { useCartStore } from "../store/useCartStore";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Linking,
  TextInput,
  Dimensions,
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

const { width } = Dimensions.get("window");

export default function Header() {
  // Senior Dokunşy: Ilki funksiýany store-dan alýarys, soňra ony hasaplaýarys!
  const getTotalCount = useCartStore((state) => state.getTotalCount);
  const cartCount = getTotalCount();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const { lang, setLang } = useLangStore(); // Global dynamic store kemsiz birikdirildi
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [isAiChatOpen, setIsAiChatOpen] = useState(false); // AI Chat State goraldy

  const contactText = {
    tk: "Biziň bilen habarlaşyň...",
    ru: "Связаться с нами...",
    en: "Contact us...",
  };
  const langName = { tk: "Türkmen", ru: "Русский", en: "English" };
  const placeholderText = { tk: "Gözleg...", ru: "Поиск...", en: "Search..." };
  const flags = { tk: "🇹🇲", ru: "🇷🇺", en: "🇬🇧" };

  return (
    <View style={styles.container}>
      {/* 1. Ýokarky Inçe Zolak */}
      <View style={styles.topBar}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => {
            setIsContactOpen(!isContactOpen);
            setIsLangOpen(false);
            setIsProfileOpen(false);
          }}
          style={styles.topBarTrigger}
        >
          <Text style={styles.topBarText}>{contactText[lang]}</Text>
          <FontAwesome
            name={isContactOpen ? "caret-up" : "caret-down"}
            size={10}
            color="#94A3B8"
          />
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

      {/* Dropdown Listler */}
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
                setLang(item); // Mukaddes Senior Dokunşy: Bütin programmadaky dilleri hakyky çalyşýan funksiýa!
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

      {/* 2. Esasy Navbar Bölümi */}
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

          {/* AI CHAT DÜWMESI GORALDY */}
          <TouchableOpacity
            style={styles.iconButton}
            activeOpacity={0.7}
            onPress={() => {
              setIsAiChatOpen(true);
              setIsSearchOpen(false);
              setIsProfileOpen(false);
              setIsLangOpen(false);
              setIsContactOpen(false);
            }}
          >
            <Ionicons
              name="chatbubble-ellipses-outline"
              size={21}
              color="#FFFFFF"
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.iconButton}
            activeOpacity={0.7}
            onPress={() => router.push("/notifications")}
          >
            <Ionicons name="notifications-outline" size={21} color="#FFFFFF" />
          </TouchableOpacity>

          {/* 🛠️ SEBET DÜWMESI (Seniň hakyky store-uňdan gelýän cartCount zolagy kemsiz integrasiýa edildi) */}
          <TouchableOpacity
            style={styles.iconButton}
            activeOpacity={0.7}
            onPress={() => router.push("/cart")}
          >
            <View style={{ position: "relative" }}>
              <SimpleLineIcons name="bag" size={18} color="#FFFFFF" />
              {cartCount > 0 && (
                <View style={styles.cartBadgeRed}>
                  <Text style={styles.cartBadgeText}>{cartCount}</Text>
                </View>
              )}
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.iconButton}
            activeOpacity={0.7}
            onPress={() => {
              setIsMenuOpen(!isMenuOpen);
              setIsSearchOpen(false);
              setIsProfileOpen(false);
              setIsLangOpen(false);
              setIsContactOpen(false);
            }}
          >
            <Feather
              name={isMenuOpen ? "x" : "menu"}
              size={21}
              color={isMenuOpen ? Colors.primary : "#FFFFFF"}
            />
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
        {isMenuOpen && <MenuDropdown onClose={() => setIsMenuOpen(false)} />}
      </View>

      {/* 3. Gözleg Setiri (Kesilen ýeri kemsiz ýapyldy) */}
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
              <Feather name="search" size={16} color="#FFFFFF" />
            </TouchableOpacity>
          </View>
        </View>
      )}

      {/* Modallaryň bökdençsiz birikmesi */}
      <AuthModal
        visible={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
      />
      <AIChatModal
        visible={isAiChatOpen}
        onClose={() => setIsAiChatOpen(false)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  cartBadgeRed: {
    position: "absolute",
    top: -6,
    right: -8,
    backgroundColor: "#DC2626", // Hakyky Sumbar gyzyly
    width: 14,
    height: 14,
    borderRadius: 7,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#1A1A1A", // Navbar fony bilen garyşmaz ýaly
  },
  cartBadgeText: {
    color: "#FFFFFF",
    fontSize: 9,
    fontWeight: "bold",
    lineHeight: 10,
  },
  container: {
    width: "100%",
    backgroundColor: "#1A1A1A",
    zIndex: 999,
  },
  topBar: {
    height: 32,
    backgroundColor: "#111111",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 12,
    borderBottomWidth: 0.5,
    borderBottomColor: "#262626",
  },
  topBarTrigger: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    height: "100%",
  },
  topBarText: {
    color: "#94A3B8",
    fontSize: 11,
    fontWeight: "500",
  },
  dropdownMenu: {
    position: "absolute",
    top: 32,
    backgroundColor: "#FFFFFF",
    borderRadius: 4,
    padding: 6,
    zIndex: 1000,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 5,
    borderWidth: 1,
    borderColor: "#E2E8F0",
  },
  dropdownItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    paddingVertical: 8,
    paddingHorizontal: 10,
  },
  dropdownText: {
    fontSize: 12,
    color: "#1E293B",
    fontWeight: "600",
  },
  langDropdown: {
    right: 12,
    width: 120,
  },
  langItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 10,
  },
  langLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  flagEmoji: {
    fontSize: 14,
  },
  langItemText: {
    fontSize: 12,
    color: "#334155",
    fontWeight: "500",
  },
  activeLangText: {
    color: "#CC0000",
    fontWeight: "bold",
  },
  mainNavbar: {
    height: 56,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 12,
  },
  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  logoIconGroup: {
    width: 36,
    height: 36,
    backgroundColor: "#CC0000",
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  logoBigS: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginTop: -3,
  },
  logoSmallC: {
    fontSize: 9,
    fontWeight: "bold",
    color: "#FFFFFF",
    position: "absolute",
    bottom: 3,
    right: 5,
  },
  logoTextCol: {
    justifyContent: "center",
  },
  logoMainText: {
    fontSize: 13.5,
    fontWeight: "900",
    color: "#FFFFFF",
    letterSpacing: 0.5,
  },
  logoSubText: {
    fontSize: 8.5,
    fontWeight: "500",
    color: "#94A3B8",
    letterSpacing: 0.3,
    marginTop: -2,
  },
  actionsRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 2,
  },
  iconButton: {
    width: 36,
    height: 36,
    justifyContent: "center",
    alignItems: "center",
  },
  profileIconContainer: {
    position: "relative",
    width: 24,
    height: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  badgeRed: {
    position: "absolute",
    top: -2,
    right: -4,
    backgroundColor: "#DC2626",
    width: 11,
    height: 11,
    borderRadius: 5.5,
    justifyContent: "center",
    alignItems: "center",
  },
  badgeX: {
    color: "#FFFFFF",
    fontSize: 9,
    fontWeight: "bold",
    marginTop: -2,
  },
  searchBarWrapper: {
    backgroundColor: "#111111",
    paddingHorizontal: 12,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#222222",
  },
  searchContainer: {
    flexDirection: "row",
    height: 36,
    backgroundColor: "#262626",
    borderRadius: 4,
    overflow: "hidden",
    alignItems: "center",
  },
  searchInput: {
    flex: 1,
    paddingHorizontal: 12,
    color: "#FFFFFF",
    fontSize: 13,
  },
  searchSubmitButton: {
    backgroundColor: "#CC0000",
    width: 40,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
