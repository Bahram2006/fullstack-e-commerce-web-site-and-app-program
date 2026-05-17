import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";

interface ReviewItem {
  id: string;
  name: string;
  rating: number;
  title: string;
  date: string;
  comment: string;
  is_real_customer: boolean;
}

export default function ShopReviews({
  onRatePress,
}: {
  onRatePress?: () => void;
}) {
  const reviews: ReviewItem[] = [
    {
      id: "1",
      name: "Begench",
      rating: 4,
      title: "Gowy",
      date: "27.04.2026",
      comment:
        "Все хорошо, но все никак не привезут шире ассортимент коннекторов https://amazon.com...",
      is_real_customer: true,
    },
    {
      id: "2",
      name: "Kadyr Wepayew",
      rating: 5,
      title: "Örän gowy",
      date: "22.04.2026",
      comment:
        "Лучший магазин! Обменяли бракованные наушники, даже когда гарантия вышла paru дней назад. Не бросили in беде, поступили п...",
      is_real_customer: true,
    },
    {
      id: "3",
      name: "Эмин",
      rating: 5,
      title: "Örän gowy",
      date: "31.03.2026",
      comment:
        "Приобрел in этом магазине стол. Качество отличное, покупкой вполне доволен. Весь товар был идеально укомплектован.",
      is_real_customer: false,
    },
    {
      id: "4",
      name: "Myrat Yarmetow",
      rating: 5,
      title: "Örän gowy",
      date: "16.03.2026",
      comment:
        "Arman pulym azyrak, bolmasa gerek däl zatlara çenli alasym gelýä. Sebäp baha GOWY, hyzmat GOWY, ähli hyzmatlar ýuridiki...",
      is_real_customer: true,
    },
  ];

  const renderStars = (rating: number, size = 12) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <FontAwesome
        key={index}
        name={index < rating ? "star" : "star-o"}
        size={size}
        color="#F59E0B"
        style={{ marginRight: 2 }}
      />
    ));
  };

  return (
    <View style={styles.container}>
      {/* 1. DÜKANA DEGIŞLI TESWIRLER Sözbaşy */}
      <Text style={styles.sectionTitle}>DÜKANA DEGIŞLI TESWIRLER</Text>

      {/* 2. Reýting we Baha Beriň Zolagy */}
      <View style={styles.ratingSummaryCard}>
        <View style={styles.summaryLeft}>
          <Text style={styles.bigRatingText}>4.69</Text>
          <View style={styles.starsRow}>{renderStars(5, 14)}</View>
          <Text style={styles.totalReviewsText}>(193)</Text>
        </View>

        <TouchableOpacity
          style={styles.rateButton}
          activeOpacity={0.7}
          onPress={onRatePress}
        >
          <Text style={styles.rateButtonText}>Baha beriň</Text>
        </TouchableOpacity>
      </View>

      {/* 3. Teswirleriň Sanawy */}
      <View style={styles.reviewsList}>
        {reviews.map((item) => (
          <View key={item.id} style={styles.reviewCard}>
            <View style={styles.cardHeaderRow}>
              <View style={styles.headerLeftPart}>
                <View style={styles.starsRow}>{renderStars(item.rating)}</View>
                <Text style={styles.reviewTitle}>{item.title}</Text>
              </View>
              <Text style={styles.reviewDate}>{item.date}</Text>
            </View>

            <View style={styles.userInfoRow}>
              <View style={styles.avatarIcon}>
                <FontAwesome name="user-circle-o" size={16} color="#94A3B8" />
              </View>
              <Text style={styles.userName}>{item.name}</Text>

              {item.is_real_customer && (
                <View style={styles.verifiedBadge}>
                  <MaterialIcons name="verified" size={12} color="#0EA5E9" />
                  <Text style={styles.verifiedText}>Hakyky müşderi</Text>
                </View>
              )}
            </View>

            <Text style={styles.commentText} numberOfLines={3}>
              {item.comment}
            </Text>
          </View>
        ))}
      </View>

      {/* 🛠️ MÖHÜM BÖLEK: Ähli teswirler uly gyzyl düwmesi iň aşakda goşuldy (Birebir Sumbar) */}
      <TouchableOpacity style={styles.allReviewsButton} activeOpacity={0.85}>
        <Text style={styles.allReviewsText}>Ähli teswirler</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    marginTop: 16,
    paddingHorizontal: 12,
    paddingTop: 16,
    paddingBottom: 20, // Düwmeden aşakda owadan boşluk
    borderTopWidth: 1,
    borderTopColor: "#E2E8F0",
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#1E293B",
    textAlign: "center",
    letterSpacing: 0.5,
    marginBottom: 16,
  },
  ratingSummaryCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E2E8F0",
    padding: 14,
    borderRadius: 4,
    marginBottom: 16,
  },
  summaryLeft: {
    alignItems: "flex-start",
  },
  bigRatingText: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#CC0000",
    lineHeight: 32,
  },
  starsRow: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 4,
  },
  totalReviewsText: {
    fontSize: 11,
    color: "#94A3B8",
  },
  rateButton: {
    borderWidth: 1,
    borderColor: "#94A3B8",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 4,
  },
  rateButtonText: {
    fontSize: 12,
    color: "#475569",
    fontWeight: "500",
  },
  reviewsList: {
    width: "100%",
    marginBottom: 16, // Düwme bilen aradaky owadan boşluk
  },
  reviewCard: {
    borderBottomWidth: 1,
    borderBottomColor: "#F1F5F9",
    paddingVertical: 14,
  },
  cardHeaderRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerLeftPart: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  reviewTitle: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#1E293B",
  },
  reviewDate: {
    fontSize: 11,
    color: "#94A3B8",
  },
  userInfoRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 6,
    marginBottom: 8,
    gap: 6,
  },
  avatarIcon: {
    justifyContent: "center",
    alignItems: "center",
  },
  userName: {
    fontSize: 12,
    fontWeight: "600",
    color: "#475569",
  },
  verifiedBadge: {
    flexDirection: "row",
    alignItems: "center",
    gap: 2,
    marginLeft: 4,
  },
  verifiedText: {
    fontSize: 11,
    color: "#94A3B8",
    fontStyle: "italic",
  },
  commentText: {
    fontSize: 12,
    color: "#334155",
    lineHeight: 16,
  },
  // 🛠️ Ähli Teswirler Düwmesiniň Uly Hilli Stilleri
  allReviewsButton: {
    backgroundColor: "#CC0000", // Sumbar gyzyly
    width: "100%",
    paddingVertical: 12,
    borderRadius: 4, // Inçe owadan tegeleklenen gyralar
    justifyContent: "center",
    alignItems: "center",
    marginTop: 4,
    shadowColor: "#CC0000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  allReviewsText: {
    color: "#FFFFFF",
    fontSize: 13,
    fontWeight: "bold",
    letterSpacing: 0.3,
  },
});
