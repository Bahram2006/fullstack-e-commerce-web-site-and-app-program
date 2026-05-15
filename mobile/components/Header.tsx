import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Linking } from 'react-native';
import { SimpleLineIcons, Feather, Ionicons, FontAwesome } from '@expo/vector-icons';
import { Colors } from '../constants/Colors';
import { useLangStore } from '../store/useLangStore';

export default function Header() {
  const { lang } = useLangStore();
  // Sanawyň açyk ýa-da ýapykdygyny dolandyrýan ýagdaý (state)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const contactText = {
    tk: 'Biziň bilen habarlaşyň...',
    ru: 'Связаться с нами...',
    en: 'Contact us...',
  };

  const langName = {
    tk: 'Türkmen',
    ru: 'Русский',
    en: 'English',
  };

  // Telefon we email basylanda awtomatiki jaň etmek funksiýalary
  const handlePressLink = (url: string) => {
    Linking.openURL(url).catch((err) => console.error("Baglanyşyk açylmady:", err));
  };

  return (
    <View style={styles.container}>
      {/* 1. Ýokarky Inçe Zolak (Top Bar) */}
      <View style={styles.topBar}>
        <TouchableOpacity 
          activeOpacity={0.7} 
          onPress={() => setIsDropdownOpen(!isDropdownOpen)}
          style={styles.contactTrigger}
        >
          <Text style={styles.topBarText}>{contactText[lang]}</Text>
          <FontAwesome 
            name={isDropdownOpen ? "caret-up" : "caret-down"} 
            size={12} 
            color="#94A3B8" 
          />
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.langSelector} activeOpacity={0.7}>
          <View style={styles.blueDot} />
          <Text style={styles.langText}>{langName[lang]}</Text>
        </TouchableOpacity>
      </View>

      {/* 📞 Hakyky Klonlanan Arassa Dropdown List */}
      {isDropdownOpen && (
        <View style={styles.dropdownMenu}>
          <TouchableOpacity style={styles.dropdownItem} onPress={() => handlePressLink('tel:+99312492343')}>
            <Feather name="phone" size={14} color="#1E293B" />
            <Text style={styles.dropdownText}>+993 (12) 49-23-43 (Dükan)</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.dropdownItem} onPress={() => handlePressLink('tel:+99312261369')}>
            <Feather name="phone" size={14} color="#1E293B" />
            <Text style={styles.dropdownText}>+993 (12) 26-13-69 (Dükan)</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.dropdownItem} onPress={() => handlePressLink('tel:+99362708045')}>
            <Feather name="smartphone" size={14} color="#1E293B" />
            <Text style={styles.dropdownText}>+993 (62) 70-80-45 (Operator)</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.dropdownItem} onPress={() => handlePressLink('tel:+99362233759')}>
            <Feather name="smartphone" size={14} color="#1E293B" />
            <Text style={styles.dropdownText}>+993 (62) 23-37-59 (Tehniki hyzmat)</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.dropdownItem, { borderBottomWidth: 0 }]} onPress={() => handlePressLink('mailto:sumbar.computer@gmail.com')}>
            <Feather name="mail" size={14} color="#1E293B" />
            <Text style={styles.dropdownText}>sumbar.computer@gmail.com</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* 2. Aşaky Esasy Navbar (Main Navbar) */}
      <View style={styles.mainNavbar}>
        <View style={styles.logoContainer}>
          <View style={styles.logoBadge}>
            <Text style={styles.logoS}>S</Text>
            <View style={styles.logoRedLines} />
          </View>
          <View style={styles.logoTextCol}>
            <Text style={styles.logoMainText}>SUMBAR</Text>
            <Text style={styles.logoSubText}>COMPUTER</Text>
          </View>
        </View>

        <View style={styles.actionsRow}>
          <TouchableOpacity style={styles.iconButton} activeOpacity={0.7}>
            <Feather name="search" size={18} color="#FFFFFF" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.iconButton} activeOpacity={0.7}>
            <View style={styles.profileIconContainer}>
              <SimpleLineIcons name="user" size={16} color="#3B82F6" />
              <View style={styles.badgeRed}>
                <Text style={styles.badgeX}>×</Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.iconButton} activeOpacity={0.7}>
            <Ionicons name="notifications-outline" size={19} color="#FFFFFF" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.iconButton} activeOpacity={0.7}>
            <SimpleLineIcons name="bag" size={16} color="#FFFFFF" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.iconButton} activeOpacity={0.7}>
            <Feather name="menu" size={20} color="#FFFFFF" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.navBg,
    paddingTop: 36,
    position: 'relative',
    zIndex: 999, // Dropdown öňe çyksyn diýip
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: Colors.topBarBg,
  },
  contactTrigger: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  topBarText: {
    color: '#94A3B8',
    fontSize: 12,
    fontWeight: '400',
  },
  langSelector: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  blueDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#3B82F6',
  },
  langText: {
    color: '#94A3B8',
    fontSize: 12,
    fontWeight: '400',
  },
  dropdownMenu: {
    position: 'absolute',
    top: 64, // Ýokarky top bar-dan aşakda durnukly ýeri
    left: 12,
    backgroundColor: '#FFFFFF',
    borderRadius: 6,
    width: 280,
    paddingVertical: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 5,
    zIndex: 1000,
  },
  dropdownItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F1F5F9',
  },
  dropdownText: {
    color: '#1E293B',
    fontSize: 12,
    fontWeight: '500',
  },
  mainNavbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 12,
    backgroundColor: Colors.navBg,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoBadge: {
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    width: 24,
    height: 24,
  },
  logoS: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: '900',
    transform: [{ skewX: '-15deg' }],
  },
  logoRedLines: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 3,
    backgroundColor: Colors.primary,
  },
  logoTextCol: {
    justifyContent: 'center',
    marginLeft: 6,
  },
  logoMainText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 0.5,
    lineHeight: 16,
  },
  logoSubText: {
    color: Colors.primary,
    fontSize: 7,
    fontWeight: '700',
    letterSpacing: 1,
    lineHeight: 7,
    marginTop: 2,
  },
  actionsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  iconButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 32,
    height: 32,
  },
  profileIconContainer: {
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    width: 24,
    height: 24,
  },
  badgeRed: {
    position: 'absolute',
    top: -4,
    right: -4,
    backgroundColor: Colors.primary,
    width: 10,
    height: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeX: {
    color: '#FFFFFF',
    fontSize: 8,
    fontWeight: 'bold',
    lineHeight: 9,
  },
});
