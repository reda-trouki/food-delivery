import React from "react"
import {
  FlatList,
  Image,
  Pressable,
  Text,
  View,
} from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { ArrowLeftIcon, ChevronRightIcon } from "react-native-heroicons/solid"
import Entypo from "@expo/vector-icons/Entypo"

import { orders, Order } from "@/data/orders"
import { router } from "expo-router"

const Orders = () => {
  const renderOrder = ({ item }: { item: Order }) => {
    const isActive =
      item.status === "Preparing" || item.status === "On the way"

    return (
      <Pressable className="mb-4 overflow-hidden rounded-2xl bg-white shadow-sm">
        {/* Restaurant */}
        <View className="flex-row p-3">
          <Image
            source={{
              uri: `${item.restaurantImage}?auto=format&fit=crop&w=300&q=80`,
            }}
            className="h-20 w-20 rounded-xl"
          />

          <View className="ml-3 flex-1 justify-between">
            <View className="flex-row items-start justify-between">
              <View className="flex-1">
                <Text
                  className="font-lato-bold text-base text-gray-900"
                  numberOfLines={1}
                >
                  {item.restaurant}
                </Text>

                <Text className="mt-1 font-lato text-xs text-gray-500">
                  {item.date}
                </Text>
              </View>

              <Text className="font-lato-bold text-base text-gray-900">
                {item.total} MAD
              </Text>
            </View>

            <Text
              className="mt-2 font-lato text-xs text-gray-500"
              numberOfLines={1}
            >
              {item.items.join(" • ")}
            </Text>
          </View>
        </View>

        {/* Status */}
        <View className="border-t border-gray-100 px-3 py-3">
          <View className="flex-row items-center justify-between">
            <View className="flex-row items-center">
              <View
                className={`h-2.5 w-2.5 rounded-full ${item.status === "Delivered"
                    ? "bg-green-500"
                    : item.status === "Cancelled"
                      ? "bg-red-500"
                      : "bg-indigo-500"
                  }`}
              />

              <Text
                className={`ml-2 font-lato-bold text-sm ${item.status === "Delivered"
                    ? "text-green-600"
                    : item.status === "Cancelled"
                      ? "text-red-500"
                      : "text-indigo-600"
                  }`}
              >
                {item.status}
              </Text>

              {item.estimatedTime && (
                <Text className="ml-2 font-lato text-xs text-gray-500">
                  • {item.estimatedTime}
                </Text>
              )}
            </View>

            {isActive ? (
              <Pressable
                onPress={() => router.push("/track-order")}
                className="rounded-full bg-indigo-600 px-4 py-2"
              >
                <Text className="font-lato-bold text-xs text-white">
                  Track Order
                </Text>
              </Pressable>
            ) : (
              <Pressable className="flex-row items-center">
                <Text className="font-lato text-xs text-gray-500">
                  Details
                </Text>
                <ChevronRightIcon size={16} color="gray" />
              </Pressable>
            )}
          </View>
        </View>
      </Pressable>
    )
  }

  return (
    <SafeAreaView
      edges={["top"]}
      style={{ flex: 1, backgroundColor: "white" }}
    >
      <View className="flex-1 px-4">
        {/* Header */}
        <View className="mt-4 flex-row items-center justify-between">
          <Pressable className="rounded-full bg-gray-100 p-2">
            <ArrowLeftIcon size={22} />
          </Pressable>

          <Text className="font-lato-bold text-xl text-gray-900">
            My Orders
          </Text>

          <View className="rounded-full bg-black p-2">
            <Entypo
              name="shopping-bag"
              size={24}
              color="white"
            />
          </View>
        </View>

        {/* Tabs TODO: make it active */}
        <View className="my-6 flex-row rounded-xl bg-gray-100 p-1">
          <Pressable className="flex-1 rounded-lg bg-white py-3">
            <Text className="text-center font-lato-bold text-sm text-gray-900">
              All
            </Text>
          </Pressable>

          <Pressable className="flex-1 py-3">
            <Text className="text-center font-lato text-sm text-gray-500">
              Active
            </Text>
          </Pressable>

          <Pressable className="flex-1 py-3">
            <Text className="text-center font-lato text-sm text-gray-500">
              Completed
            </Text>
          </Pressable>
        </View>

        {/* Orders */}
        <FlatList
          data={orders}
          keyExtractor={(item) => item.id}
          renderItem={renderOrder}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: 120,
          }}
          ListHeaderComponent={
            <View className="mb-4">
              <Text className="font-lato-bold text-xl text-gray-900">
                Recent Orders
              </Text>

              <Text className="mt-1 font-lato text-sm text-gray-500">
                Your latest food orders
              </Text>
            </View>
          }
        />
      </View>
    </SafeAreaView>
  )
}

export default Orders