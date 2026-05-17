import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity, Dimensions } from "react-native";
import { Feather, Ionicons, FontAwesome } from "@expo/vector-icons";
import { useCompareStore } from "../store/useCompareStore"; // 🛠️ Zustand goşuldy

const { width } = Dimensions.get("window");
const cardWidth = (width - 34) / 2;

interface ProductProps {
  id: string;
  name: string;
  price: number;
  image_url?: string | null;
  onPress?: () => void;
  onAddToCart?: () => void;
}

export default function ProductCard({ id, name, price, image_url, onPress, onAddToCart }: ProductProps) {
  // 🛠️ Deňeşdirme saklaýjysyndan maglumatlary çekýäris
  const { compareItems, toggleCompare } = useCompareStore();
  const isCompared = compareItems.some((item) => item.id === id);

  return (
    <TouchableOpacity style={styles.cardContainer} activeOpacity={0.95} onPress={onPress}>
      
      {/* 1. Sağ Üst Köşedeki 3'li İkon Topary */}
      <View style={styles.headerIcons}>
        
        {/* 🛠️ Deňeşdirme Çek-gutujygy (Birebir Sumbar) */}
        <TouchableOpacity 
          style={styles.iconAction} 
          activeOpacity={0.7}
          onPress={() => toggleCompare({ id, name, image_url: image_url || null })}
        >
          {isCompared ? (
            // Bellenen bolsa: Gyzyl içi doly galoçka guty
            <FontAwesome name="check-square" size={16} color="#CC0000" />
          ) : (
            // Bellenmedik bolsa: Adaty inçe çal guty
            <FontAwesome name="square-o" size={16} color="#94A3B8" />
          )}
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.iconAction} activeOpacity={0.7}>
          <Feather name="search" size={15} color="#94A3B8" />
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.iconAction} activeOpacity={0.7}>
          <Ionicons name="heart-outline" size={17} color="#DC2626" />
        </TouchableOpacity>
      </View>

      {/* 2. Önüm Suraty */}
      <View style={styles.imageWrapper}>
        <Image
          source={image_url ? { uri: image_url } : require("../assets/assets/1.png")}
          style={styles.productImage}
        />
      </View>

      {/* 3. Önüm Maglumatlary */}
      <View style={styles.infoContainer}>
        <Text style={styles.productName} numberOfLines={3}>{name}</Text>
        <View style={styles.redDivider} />
        <View style={styles.priceRow}>
          <Text style={styles.productPrice}>
            {price.toFixed(2)} <Text style={styles.tmtText}>TMT</Text>
          </Text>
        </View>
        <TouchableOpacity style={styles.addToCartButton} activeOpacity={0.85} onPress={onAddToCart}>
          <Text style={styles.addToCartText}>SEBEDE GOŞ</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}

// Stiller öňküsi ýaly galýar...
const styles = StyleSheet.create({
  cardContainer: { width: cardWidth, backgroundColor: "#FFFFFF", borderRadius: 4, marginBottom: 14, borderWidth: 1, borderColor: "#E2E8F0", position: "relative", paddingTop: 28 },
  headerIcons: { position: "absolute", top: 8, right: 8, flexDirection: "row", alignItems: "center", gap: 8, zIndex: 20 },
  iconAction: { padding: 2 },
  imageWrapper: { width: "100%", height: cardWidth * 0.85, justifyContent: "center", alignItems: "center", paddingHorizontal: 12 },
  productImage: { width: "100%", height: "100%", resizeMode: "contain" },
  infoContainer: { paddingHorizontal: 12, paddingBottom: 12, alignItems: "center" },
  productName: { fontSize: 12, fontWeight: "500", color: "#1E293B", textAlign: "center", lineHeight: 16, height: 48, marginBottom: 6 },
  redDivider: { width: 40, height: 1.5, backgroundColor: "#CC0000", marginBottom: 10 },
  priceRow: { marginBottom: 10 },
  productPrice: { fontSize: 14, fontWeight: "bold", color: "#111827" },
  tmtText: { fontSize: 11, fontWeight: "500", color: "#94A3B8" },
  addToCartButton: { backgroundColor: "#CC0000", width: "100%", paddingVertical: 8, borderRadius: 20, justifyContent: "center", alignItems: "center" },
  addToCartText: { color: "#FFFFFF", fontSize: 11, fontWeight: "bold", letterSpacing: 0.5 },
});
