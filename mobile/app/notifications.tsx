import React from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity, StatusBar } from 'react-native';
import { AntDesign, FontAwesome5 } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

interface NotificationItem {
  id: string;
  date: string;
  title: string;
  content: string;
  type: 'product' | 'news' | 'system';
}

export default function NotificationsScreen() {
  const router = useRouter();

  const notifications: NotificationItem[] = [
    {
      id: '1',
      date: '25.04.2026 18:49',
      title: 'Täze harytlaryň gelmegi',
      content: 'UGREEN harytlarynyň täze tapgyry geldi. Dostlar, size ýakymly söwdalary arzuw edýäris! 😊',
      type: 'product',
    },
    {
      id: '2',
      date: '14.04.2026 16:40',
      title: 'Täzelikler',
      content: 'Hormatly dostlar, Ardesto brendi boýunça täzeligimiz bar! Indi bu brendiň harytlaryny satyn alanyňyzda, size ballar berler. Siz olary indiki söwdaňyzda islendik haryt üçin ulanyp bilersiňiz. 🤙😎',
      type: 'news',
    },
    {
      id: '3',
      date: '09.04.2026 16:56',
      title: 'Täze harytlaryň gelmegi',
      content: 'XIAOMI önümleriniň uly tapgyry geldi! Şeýle hem ähli bölümlerde, aýratyn-da noutbuklar, maglumat saklaýjy enjamlar, prosessorlar, öý goşlary, durmuş tehnikasy we başga-da köp sanly harytlarymyz täzelendi.\nGadyrly dostlar, täze söwdar üçin biziň dükanymyza howlugyň! Sizi aramyzda görmäge diýseň şat bolarys. 🤩',
      type: 'product',
    },
    {
      id: '4',
      date: '08.04.2026 16:44',
      title: 'Programma täzelenmesi v1.5.3',
      content: 'Programma üpjünçiligi täzelendi.',
      type: 'system',
    },
  ];

  return (
    <View style={styles.safeContainer}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} activeOpacity={0.7} style={styles.backButton}>
          <AntDesign name="left" size={18} color="#1E293B" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>BILDIRIŞLER</Text>
        <View style={styles.placeholder} />
      </View>

      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        {notifications.map((item) => (
          <View key={item.id} style={styles.card}>
            <Text style={styles.dateText}>{item.date}</Text>
            
            <View style={styles.titleRow}>
              {item.type === 'product' || item.type === 'news' ? (
                <FontAwesome5 name="box-open" size={13} color="#B45309" />
              ) : (
                <AntDesign name="setting" size={13} color="#1E293B" />
              )}
              <Text style={styles.cardTitle}>{item.title}</Text>
            </View>

            <Text style={styles.contentText}>{item.content}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: '#F4F6F9',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 50,
    paddingBottom: 16,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E2E8F0',
  },
  backButton: {
    padding: 4,
    width: 32,
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#0F172A',
    letterSpacing: 0.5,
  },
  placeholder: {
    width: 32,
  },
  container: {
    flex: 1,
    padding: 12,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 4,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  dateText: {
    fontSize: 11,
    color: '#94A3B8',
    marginBottom: 6,
    fontWeight: '500',
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 6,
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: '#1E293B',
  },
  contentText: {
    fontSize: 13,
    color: '#334155',
    lineHeight: 18,
  },
});
