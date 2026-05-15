import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { SimpleLineIcons } from "@expo/vector-icons";
import { useLangStore } from "../store/useLangStore";

interface ProfileDropdownProps {
  onClose: () => void;
}

export default function ProfileDropdown({ onClose }: ProfileDropdownProps) {
  const { lang } = useLangStore();

  const loginText = {
    tk: "Hasabyma gir",
    ru: "Войти в кабинет",
    en: "Login",
  };

  return (
    <View style={styles.dropdownMenu}>
      <TouchableOpacity
        style={styles.dropdownItem}
        activeOpacity={0.7}
        onPress={() => {
          onClose();
        }}
      >
        <SimpleLineIcons name="login" size={13} color="#1E293B" />
        <Text style={styles.dropdownText}>{loginText[lang]}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  dropdownMenu: {
    position: "absolute",
    top: 48,
    right: 110,
    backgroundColor: "#FFFFFF",
    borderRadius: 4,
    width: 140,
    paddingVertical: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 6,
    zIndex: 2000,
  },
  dropdownItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  dropdownText: {
    color: "#1E293B",
    fontSize: 12,
    fontWeight: "500",
  },
});
