import { popularSearches } from '@/data/popularSearches'
import { suggestedRestaurants } from '@/data/suggestedRestaurants'
import Entypo from '@expo/vector-icons/Entypo'
import React from 'react'
import { FlatList, Image, Pressable, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { MagnifyingGlassIcon } from 'react-native-heroicons/outline'
import { AdjustmentsHorizontalIcon, ArrowLeftIcon } from 'react-native-heroicons/solid'
import { SafeAreaView } from 'react-native-safe-area-context'

const Search = () => {
  return (
    <SafeAreaView edges={["top"]} style={{ flex: 1, backgroundColor: "white" }}>
      <ScrollView className='flex-1 px-4 mt-4 mb-24'>
        <View className="flex-row justify-between items-center">
          <View className="flex-row items-center gap-2">
            <View className='bg-gray-200 p-2 rounded-full shadow'>
              <ArrowLeftIcon />
            </View>
          </View>
          <View>
            <Text className='font-lato text-xl'>Search Restaurants</Text>
          </View>
          <View className="bg-black rounded-full p-2">
            <Entypo name="shopping-bag" size={32} color={"white"} />
          </View>
        </View>
        <View className="my-5 gap-4 overflow-hidden">
          <View className="flex-row justify-evenly items-center gap-2 bg-gray-100 rounded-xl p-2">
            <MagnifyingGlassIcon size={24} color={"gray"} />
            <TextInput placeholder="Search dishes, restaurants" />
            <TouchableOpacity className='bg-gray-200 p-2 rounded-xl'>
              <AdjustmentsHorizontalIcon size={24} />
            </TouchableOpacity>
          </View>
        </View>
        <View className="mt-6">
          <View className="mb-4 flex-row items-center justify-between">
            <Text className="font-lato-bold text-xl text-gray-900">
              Popular Searches
            </Text>

            <Text className="font-lato text-sm text-gray-500">
              See all
            </Text>
          </View>

          <FlatList
            data={popularSearches}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            contentContainerStyle={{ gap: 14 }}
            renderItem={({ item }) => (
              <Pressable
                className="w-24 items-center"
                onPress={() => console.log("Search:", item.searchQuery)}
              >
                <Image
                  source={{ uri: `${item.image}?auto=format&fit=crop&w=200&q=80` }}
                  className="h-20 w-20 rounded-full"
                />

                <Text
                  className="mt-2 font-lato-medium text-sm text-gray-800"
                  numberOfLines={1}
                >
                  {item.name}
                </Text>
              </Pressable>
            )}
          />
        </View>
        <View className="mt-7">
          <View className="mb-4 flex-row items-center justify-between">
            <Text className="font-lato-bold text-xl text-gray-900">
              Suggested Restaurants
            </Text>

            <Pressable>
              <Text className="font-lato-medium text-sm text-indigo-600">
                See all
              </Text>
            </Pressable>
          </View>

          <FlatList
            data={suggestedRestaurants}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            contentContainerStyle={{ gap: 16 }}
            renderItem={({ item }) => (
              <Pressable className="w-64 overflow-hidden rounded-2xl bg-white shadow-sm">
                {/* Restaurant Image */}
                <View className="relative">
                  <Image
                    source={{
                      uri: `${item.image}?auto=format&fit=crop&w=600&q=80`,
                    }}
                    className="h-36 w-full"
                  />

                  {/* Rating */}
                  <View className="absolute bottom-3 left-3 flex-row items-center rounded-full bg-white px-2.5 py-1">
                    <Text className="text-sm">★</Text>
                    <Text className="ml-1 font-lato-bold text-xs text-gray-900">
                      {item.rating}
                    </Text>
                  </View>
                </View>

                {/* Info */}
                <View className="p-3">
                  <Text
                    className="font-lato-bold text-base text-gray-900"
                    numberOfLines={1}
                  >
                    {item.name}
                  </Text>

                  <Text
                    className="mt-1 font-lato text-xs text-gray-500"
                    numberOfLines={1}
                  >
                    {item.cuisine}
                  </Text>

                  <View className="mt-3 flex-row items-center">
                    <Text className="font-lato-medium text-xs text-gray-600">
                      🛵 {item.deliveryTime}
                    </Text>

                    <Text className="mx-2 text-gray-300">•</Text>

                    <Text className="font-lato-medium text-xs text-gray-600">
                      {item.deliveryFee}
                    </Text>
                  </View>
                </View>
              </Pressable>
            )}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Search