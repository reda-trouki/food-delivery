import React from "react"
import {
  Image,
  Pressable,
  Text,
  View,
} from "react-native"
import MapView, {
  Marker,
  Polyline,
  PROVIDER_GOOGLE,
} from "react-native-maps"
import {
  ArrowLeftIcon,
  PhoneIcon,
  ChatBubbleLeftIcon,
  CheckCircleIcon,
  ClockIcon,
} from "react-native-heroicons/solid"
import Entypo from "@expo/vector-icons/Entypo"
import { SafeAreaView } from "react-native-safe-area-context"
import { useNavigation } from "expo-router"

const TrackOrder = () => {
  const router = useNavigation();
  const restaurant = {
    latitude: 31.6340,
    longitude: -8.0085,
  }

  const deliveryLocation = {
    latitude: 31.6285,
    longitude: -8.0125,
  }

  const destination = {
    latitude: 31.6258,
    longitude: -8.0072,
  }

  const routeCoordinates = [
    restaurant,
    {
      latitude: 31.6328,
      longitude: -8.0100,
    },
    {
      latitude: 31.6302,
      longitude: -8.0115,
    },
    deliveryLocation,
    {
      latitude: 31.6270,
      longitude: -8.0100,
    },
    destination,
  ]

  return (
    <View className="flex-1 bg-white">
      {/* Map */}
      <View className="absolute inset-0">
        <MapView
          provider={PROVIDER_GOOGLE}
          style={{ flex: 1 }}
          initialRegion={{
            latitude: 31.6305,
            longitude: -8.0095,
            latitudeDelta: 0.015,
            longitudeDelta: 0.015,
          }}
          showsUserLocation
          showsMyLocationButton={false}
          showsCompass={false}
          toolbarEnabled={false}
        >
          {/* Restaurant */}
          <Marker coordinate={restaurant}>
            <View className="h-11 w-11 items-center justify-center rounded-full bg-white shadow">
              <View className="h-9 w-9 items-center justify-center rounded-full bg-orange-500">
                <Entypo name="shop" size={20} color="white" />
              </View>
            </View>
          </Marker>

          {/* Delivery Guy */}
          <Marker coordinate={deliveryLocation}>
            <View className="h-12 w-12 items-center justify-center rounded-full bg-indigo-600">
              <Entypo name="direction" size={24} color="white" />
            </View>
          </Marker>

          {/* Destination */}
          <Marker coordinate={destination}>
            <View className="h-11 w-11 items-center justify-center rounded-full bg-white shadow">
              <View className="h-9 w-9 items-center justify-center rounded-full bg-green-500">
                <Entypo name="home" size={19} color="white" />
              </View>
            </View>
          </Marker>

          {/* Route */}
          <Polyline
            coordinates={routeCoordinates}
            strokeWidth={5}
            strokeColor="#4f46e5"
          />
        </MapView>
      </View>

      {/* Top controls */}
      <SafeAreaView
        edges={["top"]}
        className="absolute left-0 right-0"
      >
        <View className="mx-4 mt-3 flex-row items-center justify-between">
          <Pressable onPress={() => router.goBack()} className="rounded-full bg-white p-3 shadow">
            <ArrowLeftIcon size={22} color="black" />
          </Pressable>

          <View className="rounded-full bg-white px-4 py-3 shadow">
            <Text className="font-lato-bold text-sm text-gray-900">
              Track Order
            </Text>
          </View>

          <Pressable className="rounded-full bg-white p-3 shadow">
            <Entypo
              name="shopping-bag"
              size={22}
              color="black"
            />
          </Pressable>
        </View>
      </SafeAreaView>

      {/* Bottom panel */}
      <View className="absolute bottom-0 left-0 right-0 rounded-t-4xl bg-white px-5 pb-8 pt-5 shadow-lg">
        {/* Handle */}
        <View className="mb-5 self-center">
          <View className="h-1.5 w-12 rounded-full bg-gray-300" />
        </View>

        {/* Status */}
        <View className="flex-row items-center justify-between">
          <View>
            <Text className="font-lato-bold text-xl text-gray-900">
              Your order is on the way
            </Text>

            <View className="mt-2 flex-row items-center">
              <ClockIcon size={16} color="#4f46e5" />

              <Text className="ml-1 font-lato-medium text-sm text-indigo-600">
                Arriving in 15–20 min
              </Text>
            </View>
          </View>

          <View className="rounded-full bg-indigo-100 px-3 py-2">
            <Text className="font-lato-bold text-xs text-indigo-600">
              #ORD-001
            </Text>
          </View>
        </View>

        {/* Progress */}
        <View className="mt-6 flex-row items-center">
          <View className="items-center">
            <View className="h-8 w-8 items-center justify-center rounded-full bg-green-500">
              <CheckCircleIcon size={20} color="white" />
            </View>
            <Text className="mt-1 font-lato text-[10px] text-gray-500">
              Confirmed
            </Text>
          </View>

          <View className="mx-2 h-0.5 flex-1 bg-green-500" />

          <View className="items-center">
            <View className="h-8 w-8 items-center justify-center rounded-full bg-green-500">
              <CheckCircleIcon size={20} color="white" />
            </View>
            <Text className="mt-1 font-lato text-[10px] text-gray-500">
              Preparing
            </Text>
          </View>

          <View className="mx-2 h-0.5 flex-1 bg-indigo-600" />

          <View className="items-center">
            <View className="h-8 w-8 items-center justify-center rounded-full bg-indigo-600">
              <Entypo name="direction" size={17} color="white" />
            </View>
            <Text className="mt-1 font-lato-bold text-[10px] text-indigo-600">
              On the way
            </Text>
          </View>

          <View className="mx-2 h-0.5 flex-1 bg-gray-200" />

          <View className="items-center">
            <View className="h-8 w-8 items-center justify-center rounded-full bg-gray-200">
              <Entypo name="home" size={16} color="#9ca3af" />
            </View>
            <Text className="mt-1 font-lato text-[10px] text-gray-400">
              Delivered
            </Text>
          </View>
        </View>

        {/* Delivery guy */}
        <View className="mt-6 flex-row items-center rounded-2xl bg-gray-50 p-3">
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
            }}
            className="h-14 w-14 rounded-full"
          />

          <View className="ml-3 flex-1">
            <Text className="font-lato-bold text-base text-gray-900">
              Youssef Amrani
            </Text>

            <Text className="mt-1 font-lato text-xs text-gray-500">
              Your delivery partner
            </Text>

            <View className="mt-1 flex-row items-center">
              <Text className="text-xs">★</Text>
              <Text className="ml-1 font-lato-bold text-xs text-gray-700">
                4.9
              </Text>
              <Text className="ml-1 font-lato text-xs text-gray-400">
                • 250+ deliveries
              </Text>
            </View>
          </View>

          {/* Call */}
          <Pressable className="mr-2 h-11 w-11 items-center justify-center rounded-full bg-indigo-100">
            <PhoneIcon size={19} color="#4f46e5" />
          </Pressable>

          {/* Chat */}
          <Pressable className="h-11 w-11 items-center justify-center rounded-full bg-indigo-600">
            <ChatBubbleLeftIcon size={19} color="white" />
          </Pressable>
        </View>

        {/* Destination */}
        <View className="mt-4 flex-row items-center">
          <View className="h-9 w-9 items-center justify-center rounded-full bg-gray-100">
            <Entypo name="location-pin" size={20} color="#4f46e5" />
          </View>

          <View className="ml-3">
            <Text className="font-lato-bold text-sm text-gray-900">
              Delivering to
            </Text>

            <Text className="mt-0.5 font-lato text-xs text-gray-500">
              25 Avenue Mohammed VI, Marrakech
            </Text>
          </View>
        </View>
      </View>
    </View>
  )
}

export default TrackOrder