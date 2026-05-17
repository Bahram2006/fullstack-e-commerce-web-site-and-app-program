import React, { useEffect, useState } from "react";
import { StyleSheet, View, ScrollView, StatusBar, ActivityIndicator } from "react-native";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import { Colors } from "../../constants/Colors";
import SideBanners from "../../components/SideBanners";
import HomeTabs from "../../components/HomeTabs";
import ProductCard from "../../components/ProductCard";
import CompareBar from "../../components/CompareBar";
import { supabase } from "@/lib/supabase";

export default function HomeScreen() {
  // 🛠️ Ýalňyşlygy düzedýäris: products we loading state-leri koda doly goşuldy
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // Supabase-den harytlary çekýän funksiýa
  useEffect(() => {
    async function fetchProducts() {
      try {
        setLoading(true);
        const { data, error } = await supabase
          .from("products") 
          .select("*")
          .limit(10); // Ilkinji 10 harydy çekýäris

        if (error) {
          console.error("Supabase Error:", error.message);
        } else if (data) {
          setProducts(data);
        }
      } catch (err) {
        console.error("Fetch Error:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  return (
    <View style={styles.safeContainer}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#1A1A1A"
        translucent={false}
      />

      <Header />

      <ScrollView
        style={styles.container}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <Hero />

        <SideBanners
          onLeftPress={(index: number) => console.log(`Çep basyldy: ${index}`)}
          onRightPress={(index: number) => console.log(`Sag basyldy: ${index}`)}
        />

        <HomeTabs
          onTabChange={(tab: string) => console.log(`Saýlanan bölüm: ${tab}`)}
        />

        {/* 📦 Harytlar sanawy grid görnüşinde (2 sütünli) */}
        {loading ? (
          <ActivityIndicator size="small" color="#CC0000" style={{ marginTop: 20 }} />
        ) : (
          <View style={styles.productsGrid}>
            {/* 🛠️ Ýalňyşlygy düzedýäris: item parametriniň tipi (item: any) kesgitlendi */}
            {products.map((item: any) => (
              <ProductCard
                key={item.id}
                id={item.id}
                name={item.name}
                price={item.price}
                image_url={item.image_url}
                onPress={() => console.log(`${item.name} jikme-jikligine git`)}
                onAddToCart={() => console.log(`${item.name} sepete goşuldy`)}
              />
            ))}
          </View>
        )}
      </ScrollView>

      {/* Deňeşdirme paneli iň aşakda absolýut durar */}
      <CompareBar />
    </View>
  );
}

// 🛠️ Ýalňyşlygy düzedýäris: Öçen bütin styles (stiller) obýekti doly dikeldildi!
const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: Colors.background || "#F4F6F9",
  },
  container: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 24,
  },
  productsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 12,
    marginTop: 8,
  },
});
