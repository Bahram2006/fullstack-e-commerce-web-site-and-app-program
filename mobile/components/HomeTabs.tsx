import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useLangStore } from '../store/useLangStore'; // Senior Dokunşy: Global store birikdirildi

type TabType = 'maslahat' | 'taze' | 'meshur';

interface HomeTabsProps {
  onTabChange?: (selectedTab: TabType) => void;
}

export default function HomeTabs({ onTabChange }: HomeTabsProps) {
  const { t } = useLangStore(); // Reactive terjime obýekti
  const [activeTab, setActiveTab] = useState<TabType>('maslahat');

  const handleTabPress = (tab: TabType) => {
    setActiveTab(tab);
    if (onTabChange) {
      onTabChange(tab);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView 
        horizontal={true} 
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
      >
        {/* MASLAHAT BERILÝÄNLER */}
        <TouchableOpacity 
          activeOpacity={0.7} 
          onPress={() => handleTabPress('maslahat')}
          style={[styles.tabButton, activeTab === 'maslahat' && styles.activeTabButton]}
        >
          <Text style={[styles.tabText, activeTab === 'maslahat' && styles.activeTabText]}>
            {t.home.recommended}
          </Text>
        </TouchableOpacity>

        {/* TÄZELER */}
        <TouchableOpacity 
          activeOpacity={0.7} 
          onPress={() => handleTabPress('taze')}
          style={[styles.tabButton, activeTab === 'taze' && styles.activeTabButton]}
        >
          <Text style={[styles.tabText, activeTab === 'taze' && styles.activeTabText]}>
            {t.home.news}
          </Text>
        </TouchableOpacity>

        {/* MEŞHURLAR */}
        <TouchableOpacity 
          activeOpacity={0.7} 
          onPress={() => handleTabPress('meshur')}
          style={[styles.tabButton, activeTab === 'meshur' && styles.activeTabButton]}
        >
          <Text style={[styles.tabText, activeTab === 'meshur' && styles.activeTabText]}>
            {t.home.popular}
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

// Seniň original kemsiz dizaýn stilleriň (CSS)
const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginTop: 16,
    marginBottom: 8,
  },
  scrollContainer: {
    paddingHorizontal: 12, 
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20, 
  },
  tabButton: {
    paddingBottom: 6,
    borderBottomWidth: 2,
    borderBottomColor: 'transparent',
  },
  activeTabButton: {
    borderBottomColor: '#CC0000',
  },
  tabText: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#1E293B',
    letterSpacing: 0.3,
  },
  activeTabText: {
    color: '#CC0000',
  },
});
