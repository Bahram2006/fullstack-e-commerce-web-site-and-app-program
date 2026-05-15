import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function CategoriesScreen() {
  return (
    <View style={styles.center}>
      <Text style={styles.text}>Kategoriýalar Sahypasy</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  center: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#F8FAFC' },
  text: { fontSize: 16, fontWeight: 'bold', color: '#1E293B' }
});
