import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
// Ortada diňe 2 piksel owadan inçe çyzyk (boşluk) galar ýaly edýäris. 
// Çetlerde bolsa hiç hili boşluk galmaz (Senior Responsive Calculation).
const bannerWidth = (width - 2) / 2;

const bannerPairs = [
  {
    left: require('../assets/assets/Banners/Banner_1.jpg'),
    right: require('../assets/assets/Banners/Banner_2.jpg'),
  },
  {
    left: require('../assets/assets/Banners/Banner_3.jpg'),
    right: require('../assets/assets/Banners/Banner_4.jpg'),
  },
  {
    left: require('../assets/assets/Banners/Banner_5.jpg'),
    right: require('../assets/assets/Banners/Banner_6.jpg'),
  },
  {
    left: require('../assets/assets/Banners/Banner_7.jpg'),
    right: require('../assets/assets/Banners/Banner_8.jpg'),
  },
];

interface SideBannersProps {
  onLeftPress?: (index: number) => void;
  onRightPress?: (index: number) => void;
}

export default function SideBanners({ onLeftPress, onRightPress }: SideBannersProps) {
  const [currentPairIndex, setCurrentPairIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPairIndex((prevIndex) => 
        prevIndex === bannerPairs.length - 1 ? 0 : prevIndex + 1
      );
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  const currentPair = bannerPairs[currentPairIndex];

  return (
    <View style={styles.container}>
      {/* Çep tarapdaky guty */}
      <TouchableOpacity 
        activeOpacity={0.9} 
        onPress={() => onLeftPress?.(currentPairIndex)}
        style={styles.bannerWrapper}
      >
        <Image source={currentPair.left} style={styles.bannerImage} />
      </TouchableOpacity>

      {/* Sag tarapdaky guty */}
      <TouchableOpacity 
        activeOpacity={0.9} 
        onPress={() => onRightPress?.(currentPairIndex)}
        style={styles.bannerWrapper}
      >
        <Image source={currentPair.right} style={styles.bannerImage} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 0, // MÖHÜM: Çetki boşluklar doly aýryldy!
    marginVertical: 4,    // Ýokarky uly slider bilen aradaky inçe boşluk
    width: '100%',
  },
  bannerWrapper: {
    width: bannerWidth,
    height: bannerWidth * 1.02, // Hakyky saýtdaky ýaly proporsional beýiklik
    backgroundColor: '#F8FAFC',
  },
  bannerImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});
