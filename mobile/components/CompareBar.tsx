import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, Dimensions } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useCompareStore } from '../store/useCompareStore';
import { useLangStore } from '../store/useLangStore'; // Senior Dokunşy: Store birikdirildi

const { width } = Dimensions.get('window');

export default function CompareBar() {
  const { t } = useLangStore(); // Reactive terjime obýekti
  const { compareItems, isCompareBarOpen, setCompareBarOpen } = useCompareStore();

  // Panel ýapyk bolsa ýa-da hiç hili haryt saýlanmadyk bolsa görkezmeýäris
  if (!isCompareBarOpen || compareItems.length === 0) return null;

  return (
    <View style={styles.barContainer}>
      
      {/* Ýokarky Maglumat Zolagy */}
      <View style={styles.mainRow}>
        <View style={styles.textBlock}>
          <Text style={styles.infoText}>{t.compare.addedText}</Text>
          <Text style={styles.infoTextSub}>{t.compare.limitText}</Text>
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
          <Text style={styles.compareButtonText}>{t.compare.btnText}</Text>
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

// Seniň original kemsiz dizaýn stilleriň (CSS)
const styles = StyleSheet.create({
  barContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#1E1E24',
    padding: 14,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    zIndex: 9999,
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
    borderColor: '#CC0000',
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
