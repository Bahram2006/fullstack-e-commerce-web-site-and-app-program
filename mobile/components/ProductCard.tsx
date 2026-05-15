import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Product } from '../types/product';
import { useCartStore } from '../store/useCartStore';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const addItem = useCartStore((state) => state.addItem);

  return (
    <View style={styles.card}>
      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.price}>{product.price} TMT</Text>
      <TouchableOpacity style={styles.button} onPress={() => addItem(product)}>
        <Text style={styles.buttonText}>🛒 Sebede goş</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { backgroundColor: '#FFFFFF', padding: 16, borderRadius: 8, marginBottom: 12, borderWidth: 1, borderColor: '#E2E8F0' },
  name: { fontSize: 16, fontWeight: 'bold', color: '#1E293B' },
  price: { fontSize: 14, color: '#EF4444', marginVertical: 4, fontWeight: '600' },
  button: { backgroundColor: '#1E293B', padding: 8, borderRadius: 4, alignItems: 'center', marginTop: 4 },
  buttonText: { color: '#FFFFFF', fontWeight: 'bold', fontSize: 13 }
});
