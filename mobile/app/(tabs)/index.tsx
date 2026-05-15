import React from 'react';
import { StyleSheet, View, ScrollView, StatusBar } from 'react-native';
import Header from '../../components/Header';
// import Hero from '../../components/Hero'; // Slider komponentimiz
import { Colors } from '../../constants/Colors';

export default function HomeScreen() {
  return (
    <View style={styles.safeContainer}>
      <StatusBar barStyle="light-content" backgroundColor="#1A1A1A" translucent={false} />

      {/* 100/100 Klonlanan Navbar Dropdown-lary bilen */}
      <Header />

      <ScrollView
        style={styles.container}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* 🖼️ Hakyky Sumbar dizaýnyndaky uly aksiýa slideri */}
        {/* <Hero /> */}
        
        {/* Indiki ädimlerde bärde kategoriýalar we harytlar durar */}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: Colors.background, // #F4F6F9
  },
  container: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 24,
  },
});
