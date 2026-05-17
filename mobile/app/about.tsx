import React from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  StatusBar,
  Linking,
  TouchableOpacity,
} from "react-native";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Colors } from "../constants/Colors";

export default function AboutScreen() {
  // 1. Esasy harytlar sanawy
  const mainProducts = [
    "Şahsy kompýuterler, monobloklar;",
    "Ofis we oýun noutbuklary;",
    "Oýunçylar üçin toplumlaşdyryjy enjamlar we periferiýa enjamlary;",
    "Üznüksiz elektrik üpjünçiligi ulgamlary we bloklary;",
    "Ofis enjamlary we guramaçylykly tehnika;",
    "Ulgamlaýyn enjamlar;",
    "Dürli görnüşli periferiýa enjamlary, sarp ediş materiallary we ş.m.",
  ];

  // 2. Korporatiw müşderiler sanawy
  const corporateItems = [
    "Kiçi, orta we iri kärhanalar üçin täjirçilik enjamlaryny satyn almakda ýörite meýilleşdirilen bahalar göz öňünde tutulýar;",
    "Döwlet buýrujysyna öndürijiler bilen bilelikde ylalaşylan ýa-da işlenip düzülen taslamalar üçin aýratyn arzanladyşlar bilen döwlet pudagyna harytlary işjeň üpjün edýäris;",
  ];

  // 3. Bölek satuw müşderileri sanawy
  const retailItems = [
    "Aňryçäk derejede pes bahalar;",
    "Hünär derejeli we hoşniýetli menejerler;",
    "Harytlary Türkmenistanyň ähli ýerine “gapyňyza” eltip bermek.",
    "Onlaýn dükan (saýt marketpleýs ýa-da ikinji derejeli bazar däl).",
    "Saýtda döwürleýin arzanladyşlar.",
    "Kart arkaly töleg (onlaýn we töleg terminaly arkaly).",
    "Sarp edijileriň hukuklaryny goramak baradaky Türkmenistanyň kanunyna esaslanýan kepillik şertleri.",
  ];

  // 4. Hyzmatlaryň doly görnüşi sanawy
  const serviceItems = [
    "Saýtda bolan harytlaryň elmydama elýeterliligini kepillendirýäris.",
    "Hemişelik müşderiler üçin arzanladyşlar bar, uly sargytlar üçin bahalar goşmaça ara alnyp maslahatlaşylýar;",
    "Sargydyňyzy gysga wagtda Türkmenistanyň islendik şäherine ibereris.",
    "Dükanymyzyň hyzmat merkezi (enjamlary abatlamak we hyzmat etmek).",
    "Ýüze çykan ähli soraglary we islegleri ara alyp maslahatlaşmaga we çözmäge taýýardyrys.",
  ];

  // Nokatly sanawlary gurýan professional Senior funksiýa
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
        <View style={styles.textCard}>
          <Text style={styles.pageTitle}>BIZ BARADA</Text>

          {/* Giriş Paragraflary */}
          <Text style={styles.paragraphText}>
            <Text style={styles.boldRedText}>“Sumbar Computer”</Text> dükany
            2010-njy ýylda esaslandyryldy we korporatiw pudak we hususy
            müşderiler üçin IT enjamlarynyň ähli toplumynyň ygtybarly üpjün
            edijisi bolup durýar. Kompýuter enjamlarynyň bölek we lomaý satuw
            dükany.
          </Text>

          <Text style={styles.paragraphText}>
            <Text style={styles.boldRedText}>“Sumbar Computer”</Text> şu
            harytlaryň dürli görnüşlerini hödürleýär: şahsy kompýuterler,
            aýratyn toplumlaşdyryjylar, noutbuklar, periferiýa gurluşlary,
            kompýuter esbaplary, printerler, ofis guramaçylykly tehnikasy,
            öýjükli periferiýa we dünýäniň öňdebaryjy öndürijilerinden başga
            harytlar.
          </Text>

          {/* 1. SC-niň esasy harytlary */}
          <Text style={styles.subHeadingText}>SC-niň esasy harytlary:</Text>
          <View style={styles.listWrapper}>
            {renderBulletList(mainProducts)}
          </View>

          {/* 2. Korporatiw müşderiler */}
          <Text style={styles.subHeadingText}>
            Korporatiw müşderiler üçün enjamlar bilen üpjün etmek we taslamalary
            durmuşa geçirmek üçin hyzmatlaryň doly toplumy hödürlenýär:
          </Text>
          <View style={styles.listWrapper}>
            {renderBulletList(corporateItems)}
          </View>

          {/* 3. Bölek satuw müşderileri */}
          <Text style={styles.subHeadingText}>
            Bölek satuw müşderileri üçin:
          </Text>
          <View style={styles.listWrapper}>
            {renderBulletList(retailItems)}
          </View>

          {/* 4. Hyzmatlaryň doly görnüşi */}
          <Text style={styles.subHeadingText}>
            Müşderilerimiz üçin hyzmatlaryň doly görnüşi:
          </Text>
          <View style={styles.listWrapper}>
            {renderBulletList(serviceItems)}
          </View>

          {/* 5. Iş wagty bölümi */}
          <View style={styles.sectionDivider} />
          <Text style={styles.sectionHeadingText}>Iş wagty:</Text>
          <Text style={styles.infoDetailText}>
            Iş günleri: 9:00-dan 19:00-a çenli.
          </Text>
          <Text style={styles.infoDetailText}>
            Dynç güni: с 11:00-dan 19:00-a çenli.
          </Text>
          <Text style={styles.infoDetailTextSub}>
            Dükan we eltip bermek hyzmaty baýramçylyk günlerinde işlemeýär.
          </Text>

          {/* 6. Habarlaşmak bölümi */}
          <View style={styles.sectionDivider} />
          <Text style={styles.sectionHeadingText}>Habarlaşmak üçün:</Text>

          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => Linking.openURL("tel:+99312492343")}
          >
            <Text style={styles.infoDetailText}>
              <Text style={styles.boldLabel}>Tel.:</Text> +993 (12) 49-23-43,
              +993 (12) 26-13-69, +993 (62) 70-80-45
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => Linking.openURL("mailto:sumbar.computer@gmail.com")}
          >
            <Text style={styles.infoDetailText}>
              <Text style={styles.boldLabel}>e-mail:</Text>{" "}
              sumbar.computer@gmail.com
            </Text>
          </TouchableOpacity>

          <Text style={styles.infoDetailText}>
            <Text style={styles.boldLabel}>Instagram:</Text>{" "}
            sumbarcomputer_official
          </Text>

          <Text style={styles.addressText}>
            Dükanymyz A.Nyýazow (Hudayberdiýew, 4 mkr.) köçesi, 99 jaý salgysy
            boýunça Aşgabat şäheriniň merkezinde ýerleşýär (Hudaýberdiýew
            köçäniň hem-de Bomako köçäniň çatrygy, AŞTU-nyň garşysy)
          </Text>
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
  paragraphText: {
    fontSize: 13,
    color: "#334155",
    lineHeight: 20,
    marginBottom: 16,
    textAlign: "justify",
  },
  boldRedText: {
    fontWeight: "bold",
    color: "#CC0000",
  },
  subHeadingText: {
    fontSize: 13,
    fontWeight: "bold",
    color: "#1E293B",
    marginTop: 14,
    marginBottom: 10,
    lineHeight: 18,
  },
  listWrapper: {
    paddingLeft: 4,
    marginBottom: 8,
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
  sectionDivider: {
    width: "100%",
    height: 1,
    backgroundColor: "#F1F5F9",
    marginVertical: 16, 
  },
  sectionHeadingText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#1E293B",
    marginBottom: 10,
    textTransform: "uppercase",
  },
  infoDetailText: {
    fontSize: 13,
    color: "#334155",
    lineHeight: 18,
    marginBottom: 4,
  },
  infoDetailTextSub: {
    fontSize: 12,
    color: "#64748B",
    fontStyle: "italic",
    marginTop: 4,
  },
  boldLabel: {
    fontWeight: "700",
    color: "#1E293B",
  },
  addressText: {
    fontSize: 12.5,
    color: "#475569",
    lineHeight: 18,
    backgroundColor: "#F8FAFC",
    padding: 12,
    borderRadius: 4,
    marginTop: 12,
    borderWidth: 0.5,
    borderColor: "#E2E8F0",
  },
});
