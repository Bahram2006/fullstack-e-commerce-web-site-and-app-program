import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useLangStore } from '../../store/useLangStore'; // Store adyny we ýoluny barlaň

export default function ProfileScreen() {
  // Senior Dokunşy: Sözleri global reactive 't' obýektinden alýarys
  const { t } = useLangStore();

  return (
    <View style={styles.center}>
      <Text style={styles.text}>{t.profile.pageTitle}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  center: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: '#F8FAFC' 
  },
  text: { 
    fontSize: 16, 
    fontWeight: 'bold', 
    color: '#1E293B' 
  }
});
