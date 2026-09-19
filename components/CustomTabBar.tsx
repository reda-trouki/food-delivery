import React, { useEffect, useRef } from "react";
import {
  Animated,
  Dimensions,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";

import {
  HomeIcon,
  MagnifyingGlassIcon,
  ReceiptPercentIcon,
  UserIcon,
} from "react-native-heroicons/solid";

const { width } = Dimensions.get("window");

const TAB_BAR_MARGIN = 10;
const TAB_BAR_WIDTH = width - TAB_BAR_MARGIN * 2;
const TAB_WIDTH = TAB_BAR_WIDTH / 4;

const CIRCLE_SIZE = 60;

const icons = [
  HomeIcon,
  MagnifyingGlassIcon,
  ReceiptPercentIcon,
  UserIcon,
];

const CustomTabBar = ({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) => {
  const translateX = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.spring(translateX, {
      toValue: state.index * TAB_WIDTH + (TAB_WIDTH - CIRCLE_SIZE) / 2,
      useNativeDriver: true,
      damping: 18,
      stiffness: 180,
    }).start();
  }, [state.index]);

  return (
    <View style={styles.container}>
      {/* Animated circle */}
      <Animated.View
        style={[
          styles.circle,
          {
            transform: [{ translateX }],
          },
        ]}
      />

      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];

        const isFocused = state.index === index;

        const Icon = icons[index];

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <Pressable
            key={route.key}
            onPress={onPress}
            style={styles.tab}
          >
            <Icon
              size={24}
              color={isFocused ? "#ffffff" : "#9CA3AF"}
            />

            {isFocused && (
              <Text style={styles.label}>
                {options.title}
              </Text>
            )}
          </Pressable>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 15,
    left: 10,
    right: 10,
    height: 75,

    borderRadius: 40,
    backgroundColor: "#ffffff",

    flexDirection: "row",
    alignItems: "center",

    elevation: 10,
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 5,
    },
  },

  tab: {
    width: TAB_WIDTH,
    height: "100%",

    alignItems: "center",
    justifyContent: "center",

    zIndex: 2,
  },

  circle: {
    position: "absolute",

    width: CIRCLE_SIZE,
    height: CIRCLE_SIZE,

    borderRadius: CIRCLE_SIZE / 2,

    backgroundColor: "#F97316",

    zIndex: 1,
  },

  label: {
    color: "#ffffff",
    fontSize: 10,
    fontWeight: "600",
    marginTop: 2,
  },
});

export default CustomTabBar;