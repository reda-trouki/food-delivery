import React from "react"
import {
  Image,
  Pressable,
  ScrollView,
  Text,
  View,
} from "react-native"
import {
  HeartIcon,
  MapPinIcon,
  PencilIcon,
  QuestionMarkCircleIcon,
  BellIcon,
  CreditCardIcon,
  Cog6ToothIcon,
} from "react-native-heroicons/outline"
import Entypo from "@expo/vector-icons/Entypo"
import { SafeAreaView } from "react-native-safe-area-context"
import { ProfileItem } from "@/components/ProfileItem"

const Profile = () => {
  return (
    <SafeAreaView
      edges={["top"]}
      style={{ flex: 1, backgroundColor: "white" }}
    >
      <ScrollView
        className="flex-1 px-4"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 120 }}
      >
        {/* Header */}
        <View className="relative mt-4 flex-row items-center justify-between">
          <View className="absolute top-1 right-1 rounded-full bg-black p-2">
            <Entypo
              name="shopping-bag"
              size={24}
              color="white"
            />
          </View>
        </View>

        {/* Profile Card */}
        <View className="mt-7 items-center">
          <View className="relative">
            <Image
              source={{
                uri: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=300&q=80",
              }}
              className="h-28 w-28 rounded-full"
            />

            <Pressable className="absolute bottom-0 right-0 rounded-full bg-indigo-600 p-2">
              <PencilIcon size={16} color="white" />
            </Pressable>
          </View>

          <Text className="mt-4 font-lato-bold text-xl text-gray-900">
            Reda Trouki
          </Text>

          <Text className="mt-1 font-lato text-sm text-gray-500">
            reda@example.com
          </Text>
        </View>

        {/* Quick Stats */}
        <View className="mt-7 flex-row rounded-2xl bg-gray-50 p-4">
          <View className="flex-1 items-center">
            <Text className="font-lato-bold text-lg text-gray-900">
              24
            </Text>
            <Text className="mt-1 font-lato text-xs text-gray-500">
              Orders
            </Text>
          </View>

          <View className="w-px bg-gray-200" />

          <View className="flex-1 items-center">
            <Text className="font-lato-bold text-lg text-gray-900">
              8
            </Text>
            <Text className="mt-1 font-lato text-xs text-gray-500">
              Favorites
            </Text>
          </View>

          <View className="w-px bg-gray-200" />

          <View className="flex-1 items-center">
            <Text className="font-lato-bold text-lg text-gray-900">
              4.9
            </Text>
            <Text className="mt-1 font-lato text-xs text-gray-500">
              Rating
            </Text>
          </View>
        </View>

        {/* Account */}
        <View className="mt-7">
          <Text className="mb-3 font-lato-bold text-lg text-gray-900">
            Account
          </Text>

          <View className="overflow-hidden rounded-2xl bg-gray-50">
            <ProfileItem
              icon={<PencilIcon size={21} color="#4f46e5" />}
              title="Edit Profile"
              subtitle="Update your personal information"
            />

            <ProfileItem
              icon={<MapPinIcon size={21} color="#4f46e5" />}
              title="Delivery Addresses"
              subtitle="Manage your saved addresses"
            />

            <ProfileItem
              icon={<CreditCardIcon size={21} color="#4f46e5" />}
              title="Payment Methods"
              subtitle="Manage cards and payment options"
            />

            <ProfileItem
              icon={<HeartIcon size={21} color="#4f46e5" />}
              title="Favorites"
              subtitle="Your favorite restaurants"
            />
          </View>
        </View>

        {/* Preferences */}
        <View className="mt-7">
          <Text className="mb-3 font-lato-bold text-lg text-gray-900">
            Preferences
          </Text>

          <View className="overflow-hidden rounded-2xl bg-gray-50">
            <ProfileItem
              icon={<BellIcon size={21} color="#4f46e5" />}
              title="Notifications"
              subtitle="Manage your notifications"
            />

            <ProfileItem
              icon={<Cog6ToothIcon size={21} color="#4f46e5" />}
              title="Settings"
              subtitle="App preferences and security"
            />

            <ProfileItem
              icon={
                <QuestionMarkCircleIcon
                  size={21}
                  color="#4f46e5"
                />
              }
              title="Help & Support"
              subtitle="Get help with your orders"
            />
          </View>
        </View>

        {/* Logout */}
        <Pressable className="mt-7 flex-row items-center justify-center rounded-2xl border border-red-100 bg-red-50 py-4">
          <Text className="font-lato-bold text-sm text-red-500">
            Log Out
          </Text>
        </Pressable>

        <Text className="mt-5 text-center font-lato text-xs text-gray-400">
          Version 1.0.0
        </Text>
      </ScrollView>
    </SafeAreaView>
  )
}



export default Profile