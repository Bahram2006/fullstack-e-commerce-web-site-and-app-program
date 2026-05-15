import React from "react";
import { StyleSheet, View, ScrollView, StatusBar } from "react-native";
import Header from "../../components/Header";
// import Hero from '../../components/Hero';
import { Colors } from "../../constants/Colors";

export default function HomeScreen() {
  return (
    <View style={styles.safeContainer}>
      {/* Android/iOS ýokarky status bar reňkini we stilini sazlaýarys */}
      <StatusBar barStyle="light-content" backgroundColor="#1E293B" />

      {/* 1. Täze Klonlan Türkmence/Rusça Navbar */}
      <Header />

      {/* Baş sahypanyň galan aşaky bölekleri üçin ScrollView */}
      <ScrollView
        style={styles.container}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* 2. Uly Slider / Aksiýa Bannerleri */}
        {/* <Hero /> */}

        {/* Kategoriýalar sanawy, Tabs we Harytlar geljekde şu ýere goşular */}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  container: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 24, // Aşakdan gysylmazlygy üçin boşluk
  },
});
