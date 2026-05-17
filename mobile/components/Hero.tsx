import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, View, Image, FlatList, Dimensions, NativeSyntheticEvent, NativeScrollEvent } from 'react-native';

const { width } = Dimensions.get('window');
// Slideriň takyk owadan giňligi we proporsional beýikligi
const sliderWidth = width;
const sliderHeight = width * 0.55; // Sumbaryň dizaýnyna laýyk 16:9 proporsiýa meňzeş

// 10 sany banner suratynyň takyk ýoly
const bannerImages = [
  require('../assets/assets/Banners/Banner_1.jpg'),
  require('../assets/assets/Banners/Banner_2.jpg'),
  require('../assets/assets/Banners/Banner_3.jpg'),
  require('../assets/assets/Banners/Banner_4.jpg'),
  require('../assets/assets/Banners/Banner_5.jpg'),
  require('../assets/assets/Banners/Banner_6.jpg'),
  require('../assets/assets/Banners/Banner_7.jpg'),
  require('../assets/assets/Banners/Banner_8.jpg'),
  require('../assets/assets/Banners/Banner_9.jpg'),
  require('../assets/assets/Banners/Banner_10.jpg'),
];

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);

  // Awtomatiki gezekli-gezegine geçiş ulgamy (Autoplay - Senior Logic)
  useEffect(() => {
    const interval = setInterval(() => {
      let nextIndex = activeIndex + 1;
      if (nextIndex >= bannerImages.length) {
        nextIndex = 0; // 10-njy suratdan soň ýene 1-nji surata dolanýar
      }
      
      flatListRef.current?.scrollToIndex({
        index: nextIndex,
        animated: true,
      });
      setActiveIndex(nextIndex);
    }, 3000); // Her 3 sekuntdan awtomatiki geçýär

    return () => clearInterval(interval);
  }, [activeIndex]);

  // El bilen süýşürilende haýsy sahypadadygyny anyklaýar
  const handleMomentumScrollEnd = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / sliderWidth);
    setActiveIndex(currentIndex);
  };

  return (
    <View style={styles.container}>
      {/* Uly Süýşýän Suratlar Bölümi */}
      <FlatList
        ref={flatListRef}
        data={bannerImages}
        keyExtractor={(_, index) => index.toString()}
        horizontal
        pagingEnabled // Suratyň ekranyň ortasynda durmagyny üpjün edýär
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={handleMomentumScrollEnd}
        renderItem={({ item }) => (
          <View style={styles.slideWrapper}>
            <Image source={item} style={styles.bannerImage} />
          </View>
        )}
      />

      {/* Aşaky Tegelek Noktalar (Pagination Dots) */}
      <View style={styles.paginationContainer}>
        {bannerImages.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              activeIndex === index ? styles.activeDot : styles.inactiveDot,
            ]}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: sliderWidth,
    height: sliderHeight,
    position: 'relative',
    backgroundColor: '#F1F5F9',
  },
  slideWrapper: {
    width: sliderWidth,
    height: sliderHeight,
  },
  bannerImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover', // Suraty gysman, gutyny kamil örtýär
  },
  paginationContainer: {
    position: 'absolute',
    bottom: 10, // Suratdaky ýaly aşaky çete golaý
    flexDirection: 'row',
    alignSelf: 'center',
    gap: 6, // Noktalaryň arasyndaky owadan boşluk
  },
  dot: {
    height: 6,
    borderRadius: 3,
  },
  activeDot: {
    width: 14, // Basylan nokat owadan we uzynrak durar (Sumbar dizaýny)
    backgroundColor: '#CC0000', // Sumbaryň gyzyl reňki
  },
  inactiveDot: {
    width: 6,
    backgroundColor: 'rgba(255, 255, 255, 0.6)', // Ýapyk ak reňk
  },
});
