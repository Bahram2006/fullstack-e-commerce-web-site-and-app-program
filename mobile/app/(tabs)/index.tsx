import React, { useEffect, useState, useRef } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  StatusBar,
  ActivityIndicator,
  TouchableOpacity,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import { Colors } from "../../constants/Colors";
import SideBanners from "../../components/SideBanners";
import HomeTabs from "../../components/HomeTabs";
import ProductCard from "../../components/ProductCard";
import CompareBar from "../../components/CompareBar";
import QuickViewModal from "../../components/QuickViewModal";
import AuthModal from "../../components/AuthModal";
import ShopReviews from "../../components/ShopReviews";
import Footer from "@/components/Footer";
import ComplaintModal from "../../components/ComplaintModal"; // 🛠️ FIKS 1: ComplaintModal importy goşuldy
import { supabase } from "@/lib/supabase";
import RateAuthModal from "../../components/RateAuthModal";

export default function HomeScreen() {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [isRateAuthOpen, setIsRateAuthOpen] = useState(false);

  // 🛠️ FIKS 2: Nasazlyk beren we öçen arza modal state-i doly goşuldy!
  const [isComplaintOpen, setIsComplaintOpen] = useState(false);

  const [showScrollTopBtn, setShowScrollTopBtn] = useState(false);
  const scrollRef = useRef<ScrollView>(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        setLoading(true);
        const { data, error } = await supabase
          .from("products")
          .select("*")
          .limit(10);

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

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const offsetY = event.nativeEvent.contentOffset.y;
    if (offsetY > 300) {
      setShowScrollTopBtn(true);
    } else {
      setShowScrollTopBtn(false);
    }
  };

  const scrollToTop = () => {
    scrollRef.current?.scrollTo({
      y: 0,
      animated: true,
    });
  };

  return (
    <View style={styles.safeContainer}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#1A1A1A"
        translucent={false}
      />

      <Header />

      <ScrollView
        ref={scrollRef}
        style={styles.container}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      >
        <Hero />

        <SideBanners
          onLeftPress={(index: number) => console.log(`Çep basyldy: ${index}`)}
          onRightPress={(index: number) => console.log(`Sag basyldy: ${index}`)}
        />

        <HomeTabs
          onTabChange={(tab: string) => console.log(`Saýlanan bölüm: ${tab}`)}
        />

        {loading ? (
          <ActivityIndicator
            size="small"
            color="#CC0000"
            style={{ marginTop: 20 }}
          />
        ) : (
          <View style={styles.productsGrid}>
            {products.map((item: any) => (
              <ProductCard
                key={item.id}
                id={item.id}
                name={item.name}
                price={item.price}
                image_url={item.image_url}
                onPress={() => console.log(`${item.name} jikme-jikligine git`)}
                onAddToCart={() => console.log(`${item.name} sepete goşuldy`)}
                onHeartPress={() => setIsAuthOpen(true)}
              />
            ))}
          </View>
        )}

        <ShopReviews onRatePress={() => setIsRateAuthOpen(true)} />

        <View style={{ zIndex: 1, position: "relative" }}>
          <Footer onComplainPress={() => setIsComplaintOpen(true)} />
        </View>
      </ScrollView>

      {showScrollTopBtn && (
        <TouchableOpacity
          style={styles.scrollTopButton}
          activeOpacity={0.85}
          onPress={scrollToTop}
        >
          <AntDesign name="arrow-up" size={18} color="#FFFFFF" />
        </TouchableOpacity>
      )}

      <CompareBar />
      <QuickViewModal />
      <AuthModal visible={isAuthOpen} onClose={() => setIsAuthOpen(false)} />

      {/* 🛠️ FIKS 3: ComplaintModal iň aşakda absolýut bökdençsiz goşuldy */}
      <ComplaintModal
        visible={isComplaintOpen}
        onClose={() => setIsComplaintOpen(false)}
      />
      <RateAuthModal
        visible={isRateAuthOpen}
        onClose={() => setIsRateAuthOpen(false)}
        onLoginPress={() => setIsAuthOpen(true)} // 🛠️ Basylanda hakyky "HASABYMA GIR" (telefon) modalyny açar!
      />
    </View>
  );
}

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
  scrollTopButton: {
    position: "absolute",
    bottom: 20,
    right: 20,
    backgroundColor: "#CC0000",
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 999,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 8,
  },
});
