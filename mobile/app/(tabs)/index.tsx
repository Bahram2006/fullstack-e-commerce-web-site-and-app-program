import React from 'react';
import { StyleSheet, View, ScrollView, StatusBar } from 'react-native';
import Header from '../../components/Header';
// import Hero from '../../components/Hero';
import { Colors } from '../../constants/Colors';

export default function HomeScreen() {
  return (
    <View style={styles.safeContainer}>
      <StatusBar barStyle="light-content" backgroundColor="#1A1A1A" translucent={false} />

      <Header />

      <ScrollView
        style={styles.container}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >

        {/* <Hero /> */}
        
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
