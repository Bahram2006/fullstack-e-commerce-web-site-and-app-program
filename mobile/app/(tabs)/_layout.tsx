import { Tabs } from 'expo-router';
import { SimpleLineIcons, AntDesign, Feather } from '@expo/vector-icons';
import { Colors } from '../../constants/Colors';

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: '#64748B',
        tabBarStyle: {
          backgroundColor: '#FFFFFF',
          borderTopWidth: 1,
          borderTopColor: '#E2E8F0',
          height: 60,
          paddingBottom: 8,
          paddingTop: 8,
        },
        headerShown: false, // Mönü sahypalarynyň hem ýokarsyny doly ýapýarys
      }}
    >
      <Tabs.Screen name="index" options={{ title: 'Baş sahypa', tabBarIcon: ({ color }) => <AntDesign name="home" size={20} color={color} /> }} />
      <Tabs.Screen name="categories" options={{ title: 'Kategoriýalar', tabBarIcon: ({ color }) => <AntDesign name="appstore" size={19} color={color} /> }} />
      <Tabs.Screen name="cart" options={{ title: 'Sebet', tabBarIcon: ({ color }) => <SimpleLineIcons name="bag" size={18} color={color} /> }} />
      <Tabs.Screen name="profile" options={{ title: 'Profil', tabBarIcon: ({ color }) => <Feather name="user" size={20} color={color} /> }} />
    </Tabs>
  );
}
