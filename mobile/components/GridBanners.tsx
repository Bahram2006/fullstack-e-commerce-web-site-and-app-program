import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
// Ekran çetindäki boşluklary (12 + 12 = 24) we ortadaky boşlugy (12) aýyryp,
// her bir gutynyň takyk deň ýarym giňligini hasaplaýarys (Senior Grid Calculation)
const itemWidth = (width - 36) / 2;

// 8 sany aýratyn banner suratynyň takyk ýollary
const gridImages = [
  { id: '1', source: require('../assets/assets/Banners/Banner_1.jpg') },
  { id: '2', source: require('../assets/assets/Banners/Banner_2.jpg') },
  { id: '3', source: require('../assets/assets/Banners/Banner_3.jpg') },
  { id: '4', source: require('../assets/assets/Banners/Banner_4.jpg') },
  { id: '5', source: require('../assets/assets/Banners/Banner_5.jpg') },
  { id: '6', source: require('../assets/assets/Banners/Banner_6.jpg') },
  { id: '7', source: require('../assets/assets/Banners/Banner_7.jpg') },
  { id: '8', source: require('../assets/assets/Banners/Banner_8.jpg') },
];

interface GridBannersProps {
  onBannerPress?: (id: string) => void;
}

export default function GridBanners({ onBannerPress }: GridBannersProps) {
  return (
    <View style={styles.container}>
      {gridImages.map((item) => (
        <TouchableOpacity
          key={item.id}
          activeOpacity={0.85}
          onPress={() => onBannerPress?.(item.id)}
          style={styles.cardWrapper}
        >
          <Image source={item.source} style={styles.bannerImage} />
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap', // Elementler 2-den soň awtomatiki aşaky setire geçer
    justifyContent: 'space-between',
    paddingHorizontal: 12, // Çetki boşluklar
    marginTop: 12, // Uly slideriň aşagyndan goýulýan aralyk
    width: '100%',
  },
  cardWrapper: {
    width: itemWidth,
    height: itemWidth * 0.95, // Suratlar inedördüle golaý dizaýnda bolansoň proporsional beýiklik
    borderRadius: 6, // Çüňkleri owadan tegeleklenen
    backgroundColor: '#F8FAFC',
    marginBottom: 12, // Hatarara boşluk
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1, // Android üçin ýeňilçe kölege
  },
  bannerImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover', // Suraty gutynyň içine kemsiz ýerleşdirer
  },
});
