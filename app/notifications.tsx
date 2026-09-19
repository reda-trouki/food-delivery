import React from "react"
import {
  FlatList,
  Pressable,
  Text,
  View,
} from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import {
  ArrowLeftIcon,
  BellIcon,
  ChevronRightIcon,
  CheckCircleIcon,
  ClockIcon,
  TagIcon,
  TruckIcon,
} from "react-native-heroicons/solid"

import { router } from "expo-router"

type NotificationType =
  | "order"
  | "delivery"
  | "promotion"
  | "system"

type Notification = {
  id: string
  title: string
  message: string
  time: string
  type: NotificationType
  unread: boolean
}

const notifications: Notification[] = [
  {
    id: "1",
    title: "Order confirmed",
    message: "Your order from Burger House has been confirmed.",
    time: "2 min ago",
    type: "order",
    unread: true,
  },
  {
    id: "2",
    title: "Your order is on the way",
    message: "Your delivery partner is heading to your location.",
    time: "15 min ago",
    type: "delivery",
    unread: true,
  },
  {
    id: "3",
    title: "Order delivered",
    message: "Your order from Pizza House was delivered successfully.",
    time: "Yesterday",
    type: "order",
    unread: false,
  },
  {
    id: "4",
    title: "Special offer for you",
    message: "Get 20% off your next order. Limited time only!",
    time: "Yesterday",
    type: "promotion",
    unread: false,
  },
  {
    id: "5",
    title: "New restaurants nearby",
    message: "Discover new restaurants available in your area.",
    time: "2 days ago",
    type: "system",
    unread: false,
  },
]

const Notifications = () => {
  const getIcon = (type: NotificationType) => {
    switch (type) {
      case "order":
        return <CheckCircleIcon size={22} color="#4F46E5" />

      case "delivery":
        return <TruckIcon size={22} color="#4F46E5" />

      case "promotion":
        return <TagIcon size={22} color="#4F46E5" />

      default:
        return <BellIcon size={22} color="#4F46E5" />
    }
  }

  const renderNotification = ({
    item,
  }: {
    item: Notification
  }) => {
    return (
      <Pressable
        className={`mb-3 rounded-2xl p-4 ${
          item.unread ? "bg-indigo-50" : "bg-white"
        }`}
      >
        <View className="flex-row">
          {/* Icon */}
          <View className="h-12 w-12 items-center justify-center rounded-full bg-indigo-100">
            {getIcon(item.type)}
          </View>

          {/* Content */}
          <View className="ml-3 flex-1">
            <View className="flex-row items-start justify-between">
              <View className="flex-1 pr-2">
                <View className="flex-row items-center">
                  <Text
                    className={`font-lato-bold text-base ${
                      item.unread
                        ? "text-gray-900"
                        : "text-gray-700"
                    }`}
                  >
                    {item.title}
                  </Text>

                  {item.unread && (
                    <View className="ml-2 h-2 w-2 rounded-full bg-indigo-600" />
                  )}
                </View>

                <Text
                  className="mt-1 font-lato text-sm leading-5 text-gray-500"
                  numberOfLines={2}
                >
                  {item.message}
                </Text>
              </View>

              <ChevronRightIcon size={18} color="#9CA3AF" />
            </View>

            <View className="mt-3 flex-row items-center">
              <ClockIcon size={14} color="#9CA3AF" />

              <Text className="ml-1 font-lato text-xs text-gray-400">
                {item.time}
              </Text>
            </View>
          </View>
        </View>
      </Pressable>
    )
  }

  return (
    <SafeAreaView
      edges={["top"]}
      style={{
        flex: 1,
        backgroundColor: "#F9FAFB",
      }}
    >
      <View className="flex-1 px-4">
        {/* Header */}
        <View className="mt-4 flex-row items-center justify-start gap-4">
          <Pressable
            onPress={() => router.back()}
            className="rounded-full bg-slate-200 p-2"
          >
            <ArrowLeftIcon size={22} color="#111827" />
          </Pressable>

          <View className="flex-row items-center">
            <Text className="font-lato-bold text-xl text-gray-900">
              Notifications
            </Text>

            <View className="ml-2 h-2.5 w-2.5 rounded-full bg-indigo-600" />
          </View>
        </View>

        {/* Header info */}
        <View className="mb-5 mt-6">
          <View className="flex-row items-center justify-between">
            <View>
              <Text className="font-lato-bold text-xl text-gray-900">
                Recent
              </Text>

              <Text className="mt-1 font-lato text-sm text-gray-500">
                Stay updated with your orders
              </Text>
            </View>

            <Pressable>
              <Text className="font-lato-bold text-sm text-indigo-600">
                Mark all read
              </Text>
            </Pressable>
          </View>
        </View>

        {/* Notifications */}
        <FlatList
          data={notifications}
          keyExtractor={(item) => item.id}
          renderItem={renderNotification}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: 120,
          }}
          ListEmptyComponent={
            <View className="mt-20 items-center">
              <View className="h-20 w-20 items-center justify-center rounded-full bg-gray-100">
                <BellIcon size={36} color="#9CA3AF" />
              </View>

              <Text className="mt-5 font-lato-bold text-lg text-gray-900">
                No notifications
              </Text>

              <Text className="mt-2 text-center font-lato text-sm text-gray-500">
                You&apos;re all caught up!
              </Text>
            </View>
          }
        />
      </View>
    </SafeAreaView>
  )
}

export default Notifications