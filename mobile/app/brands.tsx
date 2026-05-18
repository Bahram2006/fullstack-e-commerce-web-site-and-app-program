import React from "react";
import { useLangStore } from "../store/useLangStore";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  StatusBar,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Colors } from "../constants/Colors";

const { width } = Dimensions.get("window");
// Ekran çetlerini doly örtýän, ortadan ýarym inçe çyzykly 2 sütün giňlik hasaplamasy
const itemWidth = width / 2;

interface BrandItem {
  id: string;
  name: string;
  count: number;
  is_official: boolean;
  image: any;
}

export default function BrandsScreen() {
  // Siziň Brends papkaňyzdaky suratlary takyk we durnukly çagyrýan sanaw (Senior Asset Array)
  const brandsData: BrandItem[] = [
    {
      id: "1",
      name: "70mai",
      count: 1,
      is_official: false,
      image: require("../assets/assets/Footer_sliders/Brends/1.png"),
    },
    {
      id: "2",
      name: "AORUS",
      count: 2,
      is_official: true,
      image: require("../assets/assets/Footer_sliders/Brends/2.png"),
    },
    {
      id: "3",
      name: "DEERMA",
      count: 1,
      is_official: false,
      image: require("../assets/assets/Footer_sliders/Brends/3.png"),
    },
    {
      id: "4",
      name: "FURY",
      count: 7,
      is_official: true,
      image: require("../assets/assets/Footer_sliders/Brends/4.png"),
    },
    {
      id: "5",
      name: "GAMER STORM",
      count: 11,
      is_official: false,
      image: require("../assets/assets/Footer_sliders/Brends/5.png"),
    },
    {
      id: "6",
      name: "MIJIA",
      count: 57,
      is_official: false,
      image: require("../assets/assets/Footer_sliders/Brends/6.png"),
    },
    {
      id: "7",
      name: "NEXTOOL",
      count: 3,
      is_official: false,
      image: require("../assets/assets/Footer_sliders/Brends/7.png"),
    },
    {
      id: "8",
      name: "PREDATOR",
      count: 5,
      is_official: false,
      image: require("../assets/assets/Footer_sliders/Brends/8.png"),
    },
    {
      id: "9",
      name: "PREDATOR",
      count: 5,
      is_official: false,
      image: require("../assets/assets/Footer_sliders/Brends/9.png"),
    },
    {
      id: "10",
      name: "PREDATOR",
      count: 5,
      is_official: false,
      image: require("../assets/assets/Footer_sliders/Brends/10.png"),
    },
    {
      id: "11",
      name: "PREDATOR",
      count: 5,
      is_official: false,
      image: require("../assets/assets/Footer_sliders/Brends/11.png"),
    },
    {
      id: "12",
      name: "PREDATOR",
      count: 5,
      is_official: false,
      image: require("../assets/assets/Footer_sliders/Brends/12.png"),
    },
    {
      id: "13",
      name: "PREDATOR",
      count: 5,
      is_official: false,
      image: require("../assets/assets/Footer_sliders/Brends/13.png"),
    },
    {
      id: "14",
      name: "PREDATOR",
      count: 5,
      is_official: false,
      image: require("../assets/assets/Footer_sliders/Brends/14.png"),
    },
    {
      id: "15",
      name: "PREDATOR",
      count: 5,
      is_official: false,
      image: require("../assets/assets/Footer_sliders/Brends/15.png"),
    },
    {
      id: "16",
      name: "PREDATOR",
      count: 5,
      is_official: false,
      image: require("../assets/assets/Footer_sliders/Brends/16.png"),
    },
    {
      id: "17",
      name: "PREDATOR",
      count: 5,
      is_official: false,
      image: require("../assets/assets/Footer_sliders/Brends/17.png"),
    },
    {
      id: "18",
      name: "PREDATOR",
      count: 5,
      is_official: false,
      image: require("../assets/assets/Footer_sliders/Brends/18.png"),
    },
    {
      id: "19",
      name: "PREDATOR",
      count: 5,
      is_official: false,
      image: require("../assets/assets/Footer_sliders/Brends/19.png"),
    },
    {
      id: "20",
      name: "PREDATOR",
      count: 5,
      is_official: false,
      image: require("../assets/assets/Footer_sliders/Brends/20.png"),
    },
    {
      id: "21",
      name: "PREDATOR",
      count: 5,
      is_official: false,
      image: require("../assets/assets/Footer_sliders/Brends/21.png"),
    },
    {
      id: "22",
      name: "PREDATOR",
      count: 5,
      is_official: false,
      image: require("../assets/assets/Footer_sliders/Brends/22.png"),
    },
    {
      id: "23",
      name: "PREDATOR",
      count: 5,
      is_official: false,
      image: require("../assets/assets/Footer_sliders/Brends/23.png"),
    },
    {
      id: "24",
      name: "PREDATOR",
      count: 5,
      is_official: false,
      image: require("../assets/assets/Footer_sliders/Brends/24.png"),
    },
    {
      id: "25",
      name: "PREDATOR",
      count: 5,
      is_official: false,
      image: require("../assets/assets/Footer_sliders/Brends/25.png"),
    },
    {
      id: "26",
      name: "PREDATOR",
      count: 5,
      is_official: false,
      image: require("../assets/assets/Footer_sliders/Brends/26.png"),
    },
    {
      id: "27",
      name: "PREDATOR",
      count: 5,
      is_official: false,
      image: require("../assets/assets/Footer_sliders/Brends/27.png"),
    },
    {
      id: "28",
      name: "PREDATOR",
      count: 5,
      is_official: false,
      image: require("../assets/assets/Footer_sliders/Brends/28.png"),
    },
    {
      id: "29",
      name: "PREDATOR",
      count: 5,
      is_official: false,
      image: require("../assets/assets/Footer_sliders/Brends/29.png"),
    },
    {
      id: "30",
      name: "PREDATOR",
      count: 5,
      is_official: false,
      image: require("../assets/assets/Footer_sliders/Brends/30.png"),
    },
    {
      id: "31",
      name: "PREDATOR",
      count: 5,
      is_official: false,
      image: require("../assets/assets/Footer_sliders/Brends/31.png"),
    },
    {
      id: "32",
      name: "PREDATOR",
      count: 5,
      is_official: false,
      image: require("../assets/assets/Footer_sliders/Brends/32.png"),
    },
    {
      id: "33",
      name: "PREDATOR",
      count: 5,
      is_official: false,
      image: require("../assets/assets/Footer_sliders/Brends/33.png"),
    },
    {
      id: "34",
      name: "PREDATOR",
      count: 5,
      is_official: false,
      image: require("../assets/assets/Footer_sliders/Brends/34.png"),
    },
    {
      id: "35",
      name: "PREDATOR",
      count: 5,
      is_official: false,
      image: require("../assets/assets/Footer_sliders/Brends/35.png"),
    },
    {
      id: "36",
      name: "PREDATOR",
      count: 5,
      is_official: false,
      image: require("../assets/assets/Footer_sliders/Brends/36.png"),
    },
  ];

  const { t } = useLangStore();
    // Senior Dokunşy: return içindäki ähli statik elementler global 't' obýektine baglandy
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
        {/* Sahypanyň Ak Fon we Uly Sözbaşy Bölümi */}
        <View style={styles.mainWrapper}>
          <Text style={styles.pageTitle}>{t.brands.title}</Text>

          <View style={styles.brandsGrid}>
            {brandsData.map((item) => (
              <TouchableOpacity
                key={item.id}
                style={styles.brandCard}
                activeOpacity={0.85}
                onPress={() => console.log(`${item.name} ${t.brands.pressedLog}`)}
              >
                <View style={styles.imageWrapper}>
                  <Image source={item.image} style={styles.brandImage} />
                </View>

                {item.is_official && (
                  <View style={styles.officialBadge}>
                    <MaterialIcons name="verified" size={13} color="#0EA5E9" />
                    <Text style={styles.officialText}>{t.brands.officialPartner}</Text>
                  </View>
                )}

                {/* Brend Ady we Haryt Sany */}
                <Text style={styles.brandNameText}>
                  {item.name}{" "}
                  <Text style={styles.countText}>({item.count})</Text>
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <Footer />
      </ScrollView>
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
    paddingBottom: 0,
  },
  mainWrapper: {
    backgroundColor: "#FFFFFF",
    marginTop: 14,
    marginBottom: 16,
    marginHorizontal: 12,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#E2E8F0",
    overflow: "hidden",
  },
  pageTitle: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#1E293B",
    textAlign: "center",
    letterSpacing: 0.5,
    paddingVertical: 18,
    borderBottomWidth: 1,
    borderBottomColor: "#E2E8F0",
    textTransform: "uppercase",
  },
  brandsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    width: "100%",
  },
  brandCard: {
    width: itemWidth - 13, // Margin we çetleri hasaba alyp takyk deň sütün
    height: 170, // Suratyňyzdaky ýaly kemsiz inedördül dizaýn beýikligi
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#E2E8F0",
    alignItems: "center",
    justifyContent: "center",
    padding: 12,
    backgroundColor: "#FFFFFF",
  },
  imageWrapper: {
    width: "85%",
    height: 65,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
  },
  brandImage: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  officialBadge: {
    flexDirection: "row",
    alignItems: "center",
    gap: 3,
    marginBottom: 6,
    marginTop: -2,
  },
  officialText: {
    fontSize: 11,
    color: "#475569",
    fontWeight: "500",
  },
  brandNameText: {
    fontSize: 12.5,
    fontWeight: "bold",
    color: "#1E293B",
    textAlign: "center",
    marginTop: 4,
  },
  countText: {
    fontSize: 12,
    fontWeight: "500",
    color: "#94A3B8", // Çalrak owadan haryt sany ýazgysy
  },
});
