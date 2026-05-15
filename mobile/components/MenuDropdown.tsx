import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity, Dimensions, Image } from 'react-native';
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import { Colors } from '../constants/Colors';

const { height } = Dimensions.get('window');

// 🖼️ Geçiren hakyky suratlaryňyzy takyk birikdirýän Map ulgamy
const iconMap: { [key: string]: any } = {
  '1': require('../assets/assets/1.png'),
  '1-2': require('../assets/assets/1-2.png'),
  '1-3': require('../assets/assets/1-3.png'),
  '2': require('../assets/assets/2.png'),
  '2-1': require('../assets/assets/2-1.png'),
  '2-2': require('../assets/assets/2-2.png'),
  '2-3': require('../assets/assets/2-3.png'),
  '2-4': require('../assets/assets/2-4.png'),
  '2-5': require('../assets/assets/2-5.png'),
  '2-6': require('../assets/assets/2-6.png'),
  '2-7': require('../assets/assets/2-7.png'),
  '2-8': require('../assets/assets/2-8.png'),
  '2-9': require('../assets/assets/2-9.png'),
  '2-10': require('../assets/assets/2-10.png'),
  '2-11': require('../assets/assets/2-11.png'),
  '2-12': require('../assets/assets/2-12.png'),
  '3': require('../assets/assets/3.png'),
  '3-1': require('../assets/assets/3-1.png'),
  '3-2': require('../assets/assets/3-2.png'),
  '3-3': require('../assets/assets/3-3.png'),
  '3-4': require('../assets/assets/3-4.png'),
  '3-5': require('../assets/assets/3-5.png'),
  '3-6': require('../assets/assets/3-6.png'),
  '3-7': require('../assets/assets/3-7.png'),
  '3-8': require('../assets/assets/3-8.png'),
  '3-9': require('../assets/assets/3-9.png'),
  '3-10': require('../assets/assets/3-10.png'),
  '3-11': require('../assets/assets/3-11.png'),
  '3-12': require('../assets/assets/3-12.png'),
  '3-13': require('../assets/assets/3-13.png'),
};

interface SubCategory {
  id: string;
  name: string;
  iconKey: string;
}

interface Category {
  id: string;
  name: string;
  iconKey: string;
  subs: SubCategory[];
}

interface MenuDropdownProps {
  onClose: () => void;
}

export default function MenuDropdown({ onClose }: MenuDropdownProps) {
  const [expandedCat, setExpandedCat] = useState<string | null>(null);

  // 📝 Suratda duran hakyky Sumbar Kategoriýa atlary we suratlaryň takyk baglanyşygy
  const categories: Category[] = [
    {
      id: '1',
      name: 'MONITORLAR',
      iconKey: '1',
      subs: [
        { id: '1-2', name: 'Monitorlar', iconKey: '1-2' },
        { id: '1-3', name: 'Monitorlar üçin berkidijiler we goýujylar', iconKey: '1-3' }
      ]
    },
    {
      id: '2',
      name: 'PK DUZUJILERI',
      iconKey: '2',
      subs: [
        { id: '2-1', name: 'Pk ucin korpuslar', iconKey: '2-1' },
        { id: '2-2', name: 'Esasy platalar', iconKey: '2-2' },
        { id: '2-3', name: 'Prosessorlar (CPU)', iconKey: '2-3' },
        { id: '2-4', name: 'Yadyn moduly (RAM)', iconKey: '2-4' },
        { id: '2-5', name: 'Wideo kartalar', iconKey: '2-5' },
        { id: '2-6', name: 'Tizlendiriji gaty disk (SSD)', iconKey: '2-6' },
        { id: '2-7', name: 'Icki gaty diskler (HDD)', iconKey: '2-7' },
        { id: '2-8', name: 'Optiki toplayjylar (DWD RW)', iconKey: '2-8' },
        { id: '2-9', name: 'Tok upjuncilik blogy', iconKey: '2-9' },
        { id: '2-10', name: 'Howa we suwly sowadyjylar', iconKey: '2-10' },
        { id: '2-11', name: 'Korpuslar ucin aksessuarlar', iconKey: '2-11' },
        { id: '2-12', name: 'Termo interfeysleri', iconKey: '2-12' },
      ]
    },
    {
      id: '3',
      name: 'PERIFERIYALAR',
      iconKey: '3',
      subs: [
        { id: '3-1', name: 'Esbaplar periferiya ucin', iconKey: '3-1' },
        { id: '3-2', name: 'Kompyuter sycanjygy', iconKey: '3-2' },
        { id: '3-3', name: 'Klawiaturalar', iconKey: '3-3' },
        { id: '3-4', name: 'Sycanjyk ucin halycalar', iconKey: '3-4' },
        { id: '3-5', name: 'Gulaklyklar', iconKey: '3-5' },
        { id: '3-6', name: 'Kolonkalar we saundbarlar', iconKey: '3-6' },
        { id: '3-7', name: 'Portatiw kolonkalary', iconKey: '3-7' },
        { id: '3-8', name: 'WEB kamera', iconKey: '3-8' },
        { id: '3-9', name: 'Mikrofonlar', iconKey: '3-9' },
        { id: '3-10', name: 'Oyun konsollary we esbaplar', iconKey: '3-10' },
        { id: '3-11', name: 'Oyun ucin kontrollerler', iconKey: '3-11' },
        { id: '3-12', name: 'Wideo oyunlary', iconKey: '3-12' },
        { id: '3-13', name: 'Dok stansiyalar we HUB-lar', iconKey: '3-13' },
      ]
    },
  ];

  const handleToggleExpand = (id: string) => {
    setExpandedCat(expandedCat === id ? null : id);
  };

  return (
    <View style={styles.dropdownContainer}>
      {/* Gyzyl Başlyk */}
      <View style={styles.redHeader}>
        <View style={styles.headerLeft}>
          <MaterialCommunityIcons name="menu" size={18} color="#FFFFFF" />
          <Text style={styles.headerTitle}>ÄHLI HARYTLAR</Text>
        </View>
        <TouchableOpacity onPress={onClose} activeOpacity={0.7}>
          <AntDesign name="close" size={18} color="#FFFFFF" />
        </TouchableOpacity>
      </View>

      {/* Kategoriýa Scroll Sanawy */}
      <ScrollView style={styles.listScroll} showsVerticalScrollIndicator={false}>
        {categories.map((cat) => {
          const isExpanded = expandedCat === cat.id;
          return (
            <View key={cat.id} style={styles.categoryWrapper}>
              {/* Esasy Setir */}
              <TouchableOpacity 
                style={[styles.categoryItem, isExpanded && styles.activeCategoryItem]} 
                activeOpacity={0.7}
                onPress={() => handleToggleExpand(cat.id)}
              >
                <View style={styles.itemLeft}>
                  {/* 🖼️ Siziň hakyky reňkli suratyňyz */}
                  <Image source={iconMap[cat.iconKey]} style={styles.catIcon} />
                  <Text style={[styles.itemText, isExpanded && styles.activeItemText]}>{cat.name}</Text>
                </View>
                <AntDesign name={isExpanded ? "caret-up" : "caret-down"} size={10} color={isExpanded ? '#CC0000' : '#94A3B8'} />
              </TouchableOpacity>

              {/* 📂 Açylýan Içki Sub-Kategoriýalar */}
              {isExpanded && cat.subs.length > 0 && (
                <View style={styles.subContainer}>
                  {cat.subs.map((sub) => (
                    <TouchableOpacity key={sub.id} style={styles.subItem} activeOpacity={0.7}>
                      {/* Sub-kategoriýanyň hakyky öz inçe suraty */}
                      <Image source={iconMap[sub.iconKey]} style={styles.subIcon} />
                      <Text style={styles.subItemText}>{sub.name}</Text>
                    </TouchableOpacity>
                  ))}
                </View>
              )}
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  dropdownContainer: { position: 'absolute', top: 48, left: 12, right: 12, backgroundColor: '#FFFFFF', borderRadius: 4, maxHeight: height - 180, shadowColor: '#000', shadowOffset: { width: 0, height: 6 }, shadowOpacity: 0.2, shadowRadius: 6, elevation: 10, zIndex: 3000, borderWidth: 1, borderColor: '#E2E8F0', overflow: 'hidden' },
  redHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#CC0000', paddingHorizontal: 14, paddingVertical: 12 },
  headerLeft: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  headerTitle: { color: '#FFFFFF', fontSize: 14, fontWeight: 'bold' },
  listScroll: { backgroundColor: '#FFFFFF' },
  categoryWrapper: { borderBottomWidth: 1, borderBottomColor: '#F1F5F9' },
  categoryItem: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 14, paddingVertical: 14 },
  activeCategoryItem: { backgroundColor: '#F8FAFC' },
  itemLeft: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  catIcon: { width: 20, height: 20, resizeMode: 'contain' },
  itemText: { fontSize: 13, fontWeight: '700', color: '#1E293B' },
  activeItemText: { color: '#CC0000' },
  subContainer: { backgroundColor: '#F8FAFC', paddingLeft: 20, paddingBottom: 6 },
  subItem: { flexDirection: 'row', alignItems: 'center', gap: 12, paddingVertical: 10, borderBottomWidth: 1, borderBottomColor: '#F1F5F9', paddingRight: 14 },
  subIcon: { width: 18, height: 18, resizeMode: 'contain' },
  subItemText: { fontSize: 12, color: '#475569', fontWeight: '500', flex: 1 }
});
