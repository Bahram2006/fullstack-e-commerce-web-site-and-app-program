import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, Dimensions } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useCompareStore } from '../store/useCompareStore';

const { width } = Dimensions.get('window');

export default function CompareBar() {
  const { compareItems, isCompareBarOpen, clearCompare, setCompareBarOpen } = useCompareStore();

  // Panel ýapyk bolsa ýa-da hiç hili haryt saýlanmadyk bolsa görkezmeýäris
  if (!isCompareBarOpen || compareItems.length === 0) return null;

  return (
    <View style={styles.barContainer}>
      
      {/* Ýokarky Maglumat Zolagy */}
      <View style={styles.mainRow}>
        <View style={styles.textBlock}>
          <Text style={styles.infoText}>Haryt deňeşdirmek üçin goşuldy.</Text>
          <Text style={styles.infoTextSub}>Siz diňe 4 sany haryt goşup bilýäniňiz.</Text>
        </View>

        {/* Goşulan Harytlaryň Kiçijik Suratlary (Max 4 sany) */}
        <View style={styles.imagesRow}>
          {compareItems.map((item) => (
            <View key={item.id} style={styles.imgWrapper}>
              <Image 
                source={item.image_url ? { uri: item.image_url } : require('../assets/assets/1.png')} 
                style={styles.thumbImage} 
              />
            </View>
          ))}
        </View>
      </View>

      {/* Aşaky Düwmeler Setiri */}
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.compareButton} activeOpacity={0.8}>
          <Text style={styles.compareButtonText}>Harytlary deňeşdirmek</Text>
        </TouchableOpacity>

        {/* Ýapmak (X) Düwmesi */}
        <TouchableOpacity 
          style={styles.closeButton} 
          activeOpacity={0.7}
          onPress={() => setCompareBarOpen(false)}
        >
          <AntDesign name="close" size={16} color="#94A3B8" />
        </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  barContainer: {
    position: 'absolute',
    bottom: 0, // Ekranyň iň aşagynda absolýut durar (Senior Overlay Rule)
    left: 0,
    right: 0,
    backgroundColor: '#1E1E24', // Hakyky saýtdaky ýaly goýy gara/indigo reňk
    padding: 14,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    zIndex: 9999, // Hemme zadyň iň üstünde durmagy üçin
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 20,
  },
  mainRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 14,
  },
  textBlock: {
    flex: 1,
    paddingRight: 10,
  },
  infoText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '600',
  },
  infoTextSub: {
    color: '#94A3B8',
    fontSize: 11,
    marginTop: 2,
  },
  imagesRow: {
    flexDirection: 'row',
    gap: 6,
  },
  imgWrapper: {
    width: 40,
    height: 40,
    backgroundColor: '#FFFFFF',
    borderRadius: 4,
    padding: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  thumbImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  buttonRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  compareButton: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#CC0000', // Gyzyl ramka
    borderRadius: 4,
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  compareButtonText: {
    color: '#CC0000',
    fontSize: 12,
    fontWeight: 'bold',
  },
  closeButton: {
    borderWidth: 1,
    borderColor: '#334155',
    borderRadius: 4,
    width: 38,
    height: 38,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
});
