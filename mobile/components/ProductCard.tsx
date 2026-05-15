import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, Dimensions } from 'react-native';
import { Product } from '../types/product';
import { Colors } from '../constants/Colors';
import { useCartStore } from '../store/useCartStore';

const { width } = Dimensions.get('window');

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  // Zustand store-dan sebede haryt goşýan funksiýany alýarys
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image_url: product.image_url || '',
    });
  };

  return (
    <View style={styles.card}>
      {/* Halanylýanlar (Ýürek) Düwmesi */}
      <TouchableOpacity style={styles.favoriteButton} activeOpacity={0.7}>
        <Text style={styles.heartIcon}>♡</Text>
      </TouchableOpacity>

      {/* Haryt Suraty */}
      <View style={styles.imageContainer}>
        <Image 
          source={{ uri: product.image_url || 'https://placeholder.com' }} 
          style={styles.image} 
          resizeMode="contain" 
        />
      </View>

      {/* Haryt Ady */}
      <Text style={styles.name} numberOfLines={2}>
        {product.name}
      </Text>

      {/* Baha we Sebede Goşmak Seksiyasy */}
      <View style={styles.footerRow}>
        <Text style={styles.price}>{product.price} TMT</Text>
        <TouchableOpacity 
          style={styles.cartButton} 
          onPress={handleAddToCart}
          activeOpacity={0.7}
        >
          <Text style={styles.cartIcon}>🛒</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { 
    backgroundColor: '#FFFFFF', 
    width: (width - 44) / 2, 
    padding: 12, 
    borderRadius: 8, 
    borderWidth: 1, 
    borderColor: '#E2E8F0', 
    marginBottom: 12, 
    position: 'relative' 
  },
  favoriteButton: { 
    position: 'absolute', 
    top: 8, 
    right: 8, 
    zIndex: 10 
  },
  heartIcon: { 
    fontSize: 20, 
    color: Colors.textMuted 
  },
  imageContainer: { 
    height: 120, 
    justifyContent: 'center', 
    alignItems: 'center', 
    marginVertical: 8 
  },
  image: { 
    width: '100%', 
    height: '100%' 
  },
  name: { 
    fontSize: 13, 
    fontWeight: '500', 
    color: Colors.text, 
    height: 36, 
    lineHeight: 18 
  },
  footerRow: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    marginTop: 8 
  },
  price: { 
    fontSize: 15, 
    fontWeight: 'bold', 
    color: Colors.primary 
  },
  cartButton: { 
    backgroundColor: '#F1F5F9', 
    width: 34, 
    height: 34, 
    borderRadius: 17, 
    justifyContent: 'center', 
    alignItems: 'center' 
  },
  cartIcon: { 
    fontSize: 14 
  }
});
