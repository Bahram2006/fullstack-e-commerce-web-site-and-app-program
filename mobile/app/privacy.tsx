import React from "react";
import { StyleSheet, View, Text, ScrollView, StatusBar, Dimensions } from "react-native";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Colors } from "../constants/Colors";

const { width } = Dimensions.get("window");

export default function PrivacyScreen() {
  // 2. Maglumatlary ulanmak bölümindäki nokatly sanaw
  const usageItems = [
    "Şahsy zerurlyklaryňyza laýyk gelýän hyzmatlary etmek;",
    "Şahsylaşdyrylan mahabaty teklip etmek;",
    "Saýtymyzy gowulandyrmak;",
    "Ulanyjylaryň goldaw ulgamyny gowulandyrmak;",
    "Telefon belgisi we elektron poçta arkaly siz bilen habarlaşmak."
  ];

  // Nokatly sanawlary owadan gurýan Senior funksiýa
  const renderBulletList = (items: string[]) => {
    return items.map((item, index) => (
      <View key={index} style={styles.bulletItemRow}>
        <Text style={styles.bulletDot}>•</Text>
        <Text style={styles.bulletItemText}>{item}</Text>
      </View>
    ));
  };

  return (
    <View style={styles.safeContainer}>
      <StatusBar barStyle="light-content" backgroundColor="#1A1A1A" translucent={false} />

      {/* Ýokarky Navbar */}
      <Header />

      <ScrollView 
        style={styles.container} 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Esasy Ak Akylly Guty (Text Card) */}
        <View style={styles.textCard}>
          
          {/* Baş Sözbaşy */}
          <Text style={styles.pageTitle}>GIZLINLIK SYÝASATY</Text>

          {/* 1. Maglumatlary ýygnamak */}
          <Text style={styles.subHeadingText}>1. Maglumatlary ýygnamak</Text>
          <Text style={styles.paragraphText}>
            Saýtda hasaba alnanyňyzda, hasabyňyza gireniňizde we eltip bermek üçin görnüşi dolduranyňyzda, biz maglumat ýygnaýarys. Maglumat hasaba alyş telefon belgiňizi, e-mail (habarnamalara ýazylan bolsaňyz), eltip bermek salgysyny öz içine alýar.
          </Text>
          <Text style={styles.paragraphText}>
            Mundan başga-da, biz kompýuteriňizi we brauzeriňizi, şol sanda IP-ňizi, şeýle hem saýtymyzda talap edilýän sahypanyň salgysyny awtomatiki ýagdaýda hasaba alýarys.
          </Text>

          {/* 2. Maglumatlary ulanmak */}
          <Text style={styles.subHeadingText}>2. Maglumatlary ulanmak</Text>
          <Text style={styles.paragraphText}>
            Sizden ýygnaýan maglumatlarymyz şu aşakdakylar üçin ulanylýar:
          </Text>
          <View style={styles.listWrapper}>{renderBulletList(usageItems)}</View>

          {/* 3. Şahsy maglumatlary goramak */}
          <Text style={styles.subHeadingText}>3. Şahsy maglumatlary goramak</Text>
          <Text style={styles.paragraphText}>
            Biz bu saýtymyzda toplanan maglumatlaryň ýeke-täk eýesi bolup durýarys. Şahsy maglumatlaryňyz satylmaz ýa-da islendik sebäp bilen üçünji taraplara geçirilmez.
          </Text>

          {/* 4. Maglumatlary üçünji taraplara aýan etmek */}
          <Text style={styles.subHeadingText}>4. Maglumatlary üçünji taraplara aýan etmek</Text>
          <Text style={styles.paragraphText}>
            Biz üçünji tarap kompaniýalara şahsy maglumatlary bermeýäris, paýlaşmaýarys ýa-da satmaýarys.
          </Text>
          <Text style={styles.paragraphText}>
            Eger kezzaplykda şübheler, adamlaryň howpsuzlygyna fiziki taýdan howp salýan hereketlerde şübheler bar bolsa, kanunlarda talap edilýän ýagdaýda, jenaýatyň öňüni almak ýa-da derňewe kömek etmek üçin maglumatlary paýlaşmaga taýýardyrys.
          </Text>
          <Text style={styles.paragraphText}>
            Marketing, mahabat we ş.m. maksatlary üçin beýleki kompaniýalara gizlin däl we şahsy däl maglumatlar berlip bilner.
          </Text>

          {/* 5. Maglumatlary goramak */}
          <Text style={styles.subHeadingText}>5. Maglumatlary goramak</Text>
          <Text style={styles.paragraphText}>
            Şahsy maglumatlaryňyzyň saklanmagyny üpjün etmek üçin dürli howpsuzlyk serişdelerini ulanýarys. Döwrebap şifrlemek siziň hyzmatyňyzda. Diňe belli bir tabşyryk bilen işleýän işgärleriň (mysal üçin, tehniki goldaw ýa-da saýty ulanmak) şahsy maglumatlara elýeterliligi bar. Gizlin maglumatlaryň saklanýan serwerleri we kompýuterleri howpsuz gurşawda ýerleşýär.
          </Text>

          {/* 6. “Cookie” faýllaryny ulanmak */}
          <Text style={styles.subHeadingText}>6. “Cookie” faýllaryny ulanmak</Text>
          <Text style={styles.paragraphText}>
            “Cookie” faýllarymyz saýta elýeterliligi gowulandyrmak we gaýtalanýan saparlary kesgitlemek üçin ulanylýar. Mundan Genetic-da, olar iň gyzykly talaplary yzarlamaga mümkinçilik berýär. “Cookie” faýllar hiç hili gizlin maglumat bermeýärler.
          </Text>
          
          <View style={styles.noticeBox}>
            <Text style={styles.noticeText}>
              Saýtymyzyň hyzmatlarindan ulanmak bilen Siz gizlinlik syýasatymyz bilen awtomatiki razylaşýarsyňyz.
            </Text>
          </View>

        </View>

        {/* Aşaky Footer */}
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
  textCard: {
    backgroundColor: "#FFFFFF",
    marginHorizontal: 12,
    marginTop: 14,
    marginBottom: 16,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#E2E8F0",
    paddingHorizontal: 16,
    paddingTop: 20,
    paddingBottom: 24,
  },
  pageTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#1E293B",
    textAlign: "center",
    letterSpacing: 0.5,
    marginBottom: 20,
  },
  subHeadingText: {
    fontSize: 13.5,
    fontWeight: "bold",
    color: "#1E293B",
    marginTop: 16,
    marginBottom: 8,
    lineHeight: 18,
  },
  paragraphText: {
    fontSize: 13,
    color: "#334155",
    lineHeight: 20,
    marginBottom: 12,
    textAlign: "justify",
  },
  listWrapper: {
    paddingLeft: 4,
    marginBottom: 10,
  },
  bulletItemRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    width: "100%",
    marginBottom: 6,
  },
  bulletDot: {
    fontSize: 14,
    color: "#475569",
    marginRight: 8,
    lineHeight: 16,
  },
  bulletItemText: {
    fontSize: 13,
    color: "#334155",
    flex: 1,
    lineHeight: 18,
  },
  noticeBox: {
    backgroundColor: "#F8FAFC",
    padding: 12,
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: "#CC0000", // Dykgat çekiji inçe Sumbar gyzyl ramkasy
    marginTop: 16,
  },
  noticeText: {
    fontSize: 12.5,
    color: "#CC0000",
    fontWeight: "600",
    lineHeight: 18,
    textAlign: "center",
  },
});
