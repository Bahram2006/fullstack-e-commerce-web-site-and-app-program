import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { useCartStore } from '../../store/useCartStore';

export default function CartScreen() {
  const { items, getTotalPrice, clearCart } = useCartStore();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Meniň Sebedim</Text>
      
      <ScrollView style={styles.scroll}>
        {items.length === 0 ? (
          <Text style={styles.emptyText}>Sebediňiz boş dur.</Text>
        ) : (
          items.map((item) => (
            <View key={item.id} style={styles.itemRow}>
              <Text style={styles.itemName}>{item.name} (x{item.quantity})</Text>
              <Text style={styles.itemPrice}>{item.price * item.quantity} TMT</Text>
            </View>
          ))
        )}
      </ScrollView>

      <View style={styles.footer}>
        <Text style={styles.totalText}>Jemi: {getTotalPrice()} TMT</Text>
        <TouchableOpacity style={styles.clearButton} onPress={clearCart}>
          <Text style={styles.clearText}>Sebedi Arassala</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8FAFC', paddingTop: 50, paddingHorizontal: 16 },
  title: { fontSize: 22, fontWeight: 'bold', color: '#1E293B', marginBottom: 16 },
  scroll: { flex: 1 },
  emptyText: { color: '#64748B', textAlign: 'center', marginTop: 40 },
  itemRow: { flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#FFFFFF', padding: 12, borderRadius: 6, marginBottom: 8 },
  itemName: { fontSize: 14, color: '#1E293B', fontWeight: '500' },
  itemPrice: { fontSize: 14, color: '#EF4444', fontWeight: 'bold' },
  footer: { borderTopWidth: 1, borderTopColor: '#E2E8F0', paddingVertical: 16, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  totalText: { fontSize: 18, fontWeight: 'bold', color: '#1E293B' },
  clearButton: { backgroundColor: '#EF4444', paddingVertical: 8, paddingHorizontal: 12, borderRadius: 4 },
  clearText: { color: '#FFFFFF', fontWeight: 'bold', fontSize: 12 }
});
