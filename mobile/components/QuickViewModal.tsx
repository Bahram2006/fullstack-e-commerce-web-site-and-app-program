import React from 'react';
import { StyleSheet, View, Text, Modal, Image, TouchableOpacity, Dimensions } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useQuickViewStore } from '../store/useQuickViewStore';

const { width, height } = Dimensions.get('window');

export default function QuickViewModal() {
  const { selectedProduct, isModalOpen, closeQuickView } = useQuickViewStore();

  if (!isModalOpen || !selectedProduct) return null;

  return (
    <Modal
      transparent={true}
      visible={isModalOpen}
      animationType="fade" // Ýumşak we professional peýda boluş
      onRequestClose={closeQuickView}
    >
      {/* Arkasyndaky Garaltma (Backdrop) */}
      <View style={styles.modalOverlay}>
        
        {/* Esasy Ak Guty (Sumbar Ak Karty) */}
        <View style={styles.modalContent}>
          
          {/* Ýokarky Ýapmak (X) Düwmesi */}
          <TouchableOpacity 
            style={styles.closeButton} 
            activeOpacity={0.7} 
            onPress={closeQuickView}
          >
            <AntDesign name="close" size={20} color="#64748B" />
          </TouchableOpacity>

          {/* Harydyň Uly Suraty */}
          <View style={styles.imageContainer}>
            <Image
              source={
                selectedProduct.image_url
                  ? { uri: selectedProduct.image_url }
                  : require('../assets/assets/1.png') // Default placeholder
              }
              style={styles.largeImage}
            />
          </View>

          {/* Iň Aşaky Gara Zolaktaky Haryt Ady (Birebir Sumbar) */}
          <View style={styles.bottomBar}>
            <Text style={styles.productNameText} numberOfLines={2}>
              {selectedProduct.name}
            </Text>
          </View>

        </View>

      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.65)', // Arkasyny takyk çalmsy-gara garaldar
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: width * 0.85, // Ekran giňliginiň 85%-i
    backgroundColor: '#FFFFFF',
    borderRadius: 4,
    overflow: 'hidden',
    position: 'relative',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 20,
  },
  closeButton: {
    position: 'absolute',
    top: 12,
    right: 12,
    zIndex: 50,
    padding: 4,
  },
  imageContainer: {
    width: '100%',
    height: width * 0.85, // Inedördül owadan uly surat meýdançasy
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    backgroundColor: '#FFFFFF',
    marginTop: 20, // X düwmesinden aşak düşürmek üçin
  },
  largeImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  bottomBar: {
    backgroundColor: '#1E1E24', // Hakyky saýtdaky ýaly gara inçe zolak
    paddingHorizontal: 16,
    paddingVertical: 14,
    width: '100%',
  },
  productNameText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '500',
    textAlign: 'center',
    lineHeight: 16,
  },
});
