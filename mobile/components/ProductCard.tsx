import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { AntDesign, Ionicons } from "@expo/vector-icons";

const { width } = Dimensions.get("window");
// Ekran kenar boşlukları (12+12) ve ortadaki boşluğu (10) çıkarıp 2'ye bölüyoruz
const cardWidth = (width - 34) / 2;

interface ProductProps {
  id: string;
  name: string;
  price: number;
  image_url?: string | null;
  is_new?: boolean;
  onPress?: () => void;
  onAddToCart?: () => void;
}

export default function ProductCard({
  name,
  price,
  image_url,
  is_new,
  onPress,
  onAddToCart,
}: ProductProps) {
  return (
    <TouchableOpacity
      style={styles.cardContainer}
      activeOpacity={0.9}
      onPress={onPress}
    >
      {/* Üst İkonlar ve "TÄZE" Rozeti */}
      <View style={styles.cardHeader}>
        {is_new ? (
          <View style={styles.badgeNew}>
            <Text style={styles.badgeText}>TÄZE</Text>
          </View>
        ) : (
          <View />
        )}

        {/* Sumbar Tarzı Sağ Üst İkonlar (Değiştirme ve Kalp) */}
        <View style={styles.headerIcons}>
          <TouchableOpacity style={styles.iconAction} activeOpacity={0.7}>
            <Ionicons name="git-compare-outline" size={16} color="#64748B" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconAction} activeOpacity={0.7}>
            {/* 56-njy setirdäki öňki kod: <AntDesign name="hearto" size={16} color="#64748B" /> */}

            <AntDesign name="heart" size={16} color="#64748B" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Önüm Suraty (Görüntü null ise Placeholder yüklenir) */}
      <View style={styles.imageWrapper}>
        <Image
          source={
            image_url ? { uri: image_url } : require("../assets/assets/1.png") // Projenizdeki varsayılan haryt resmi
          }
          style={styles.productImage}
        />
      </View>

      {/* Önüm Maglumatlary */}
      <View style={styles.infoContainer}>
        <Text style={styles.productName} numberOfLines={2}>
          {name}
        </Text>

        {/* Baha ve Sepet Dügmesi Satırı */}
        <View style={styles.priceRow}>
          <Text style={styles.productPrice}>{price} TMT</Text>

          <TouchableOpacity
            style={styles.cartButton}
            activeOpacity={0.8}
            onPress={onAddToCart}
          >
            <Ionicons name="basket-outline" size={16} color="#FFFFFF" />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    width: cardWidth,
    backgroundColor: "#FFFFFF",
    borderRadius: 6,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#E2E8F0",
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 8,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10,
  },
  badgeNew: {
    backgroundColor: "#CC0000",
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 3,
  },
  badgeText: {
    color: "#FFFFFF",
    fontSize: 9,
    fontWeight: "bold",
  },
  headerIcons: {
    flexDirection: "row",
    gap: 6,
  },
  iconAction: {
    backgroundColor: "rgba(248, 250, 252, 0.8)",
    padding: 4,
    borderRadius: 12,
  },
  imageWrapper: {
    width: "100%",
    height: cardWidth * 0.9,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 25,
    padding: 10,
  },
  productImage: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  infoContainer: {
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: "#F1F5F9",
  },
  productName: {
    fontSize: 12,
    fontWeight: "600",
    color: "#1E293B",
    height: 32, // İki satır için sabit yükseklik (Dizanı bozmamak için Senior kuralı)
    marginBottom: 8,
  },
  priceRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  productPrice: {
    fontSize: 13,
    fontWeight: "700",
    color: "#CC0000", // Sumbar Kırmızısı
  },
  cartButton: {
    backgroundColor: "#CC0000",
    padding: 6,
    borderRadius: 4,
  },
});
