import { ArrowRightIcon, ChevronRightIcon, ClockIcon, HeartIcon, MagnifyingGlassIcon, MapPinIcon, SparklesIcon, TruckIcon } from 'react-native-heroicons/outline';
import { BellIcon, StarIcon } from 'react-native-heroicons/solid';

import { foodCategories } from '@/data/foodCategories';
import { restaurants } from '@/data/restaurants';
import { FlatList, Image, Pressable, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { popularRestaurants } from '@/data/popularRestaurants';
import { router } from 'expo-router';

export default function Home() {
  const openRestaurants = restaurants.filter(
    (restaurant) => restaurant.isOpen
  );
  return (
    <SafeAreaView edges={["top"]} style={{ flex: 1, backgroundColor: "white"}}>
      <ScrollView className='flex-1 px-4 mt-4 mb-24'>
        <View className="flex-row justify-between items-center">
          <View className="flex-row items-center gap-2">
            <View >
              <MapPinIcon size={32} color={"orange"} />
            </View>
            <View>
              <Text className="font-lato uppercase text-xs tracking-[0.15em] text-orange-500">DELIVER TO</Text>
              <Text className="font-lato text-sm text-slate-400">Halal Lab office</Text>
            </View>
          </View>
          <Pressable onPress={() => router.push("/notifications")} className="bg-black rounded-full p-2">
            <BellIcon size={32} color={"white"} />
          </Pressable>
        </View>
        <View className="my-5 gap-4 overflow-hidden">
          <Text className="text-lg font-lato">Hey Halal, <Text className="font-lato-bold">Good Afternoon!</Text></Text>
          <View className="flex-row items-center gap-2 bg-gray-100 rounded-xl p-2">
            <MagnifyingGlassIcon size={24} color={"gray"} />
            <TextInput placeholder="Search dishes, restaurants" />
          </View>
        </View>
        <View className='gap-4 my-4'>
          <View className='flex-row justify-between items-center'>
            <Text className='font-lato-bold text-xl'>Categories</Text>
            <TouchableOpacity className='flex-row items-center'>
              <Text className='font-lato text-gray-500'>See All</Text>
              <ChevronRightIcon size={16} color={"#6a7282"} />
            </TouchableOpacity>
          </View>
          <View>
            <FlatList
              data={foodCategories}
              keyExtractor={(item) => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ paddingHorizontal: 16, gap: 12 }}
              renderItem={({ item }) => (
                <View className="items-center">
                  <View className="h-16 w-16 items-center justify-center rounded-full bg-gray-100">
                    <Text className="text-2xl">{item.icon}</Text>
                  </View>

                  <Text className="font-lato mt-2 text-sm font-medium text-gray-700">
                    {item.name}
                  </Text>
                </View>
              )}
            />
          </View>
        </View>
        <View className='gap-4'>
          <View className='flex-row justify-between items-center'>
            <Text className='font-lato-bold text-xl'> 🔥 Popular near you</Text>
            <TouchableOpacity className='flex-row items-center'>
              <Text className='font-lato text-gray-500'>See All</Text>
              <ChevronRightIcon size={16} color={"#6a7282"} />
            </TouchableOpacity>
          </View>
          <View>
            <FlatList
              horizontal
              data={popularRestaurants}
              keyExtractor={(item) => item.id}
              showsVerticalScrollIndicator={false}
              contentContainerClassName="gap-4"
              renderItem={({ item }) => (
                <View className='relative'>
                  <View className='absolute z-999 top-4 left-4 bg-green-200 rounded-full px-2 py-0.5'>
                    {item.isOpen
                    ? (<Text className='font-lato text-green-900'>• Open</Text>)
                    : (<Text className='font-lato text-red-900'>• Closed</Text>)
                    }
                  </View>
                  <View className='absolute z-999 top-4 right-4'>
                    <HeartIcon size={24} color={"white"} />
                  </View>
                  <Image
                    source={{ uri: item.image }}
                    className="w-full h-36 rounded-xl"
                    resizeMode="cover"
                  />
                  <View className="flex-1 justify-center px-3">
                    <View className='flex-row justify-between items-center'>
                      <Text className="text-xl font-lato">
                        {item.name}
                      </Text>
                      <View className='bg-green-100 px-1 rounded-full'>
                        <Text className='font-lato text-sm'>{item.cuisine}</Text>
                      </View>
                    </View>
                    <View className="mt-2 flex-row items-center gap-3">
                      <View className='flex-row justify-center items-center gap-1'>
                        <StarIcon size={20} color={"orange"} />
                        <Text className="font-lato text-xs">
                          {item.rating}
                        </Text>
                      </View>
                      <View className='flex-row justify-center items-center gap-1'>
                        <TruckIcon size={20} color={"orange"} />
                        <Text className="font-lato text-xs">
                          {item.deliveryFee !== 0 ? item.deliveryFee : "Free"}
                          MAD
                        </Text>
                      </View>
                      <View className='flex-row justify-center items-center gap-1'>
                        <ClockIcon size={20} color={"orange"} />
                        <Text className="font-lato text-">
                          {item.deliveryTime}
                        </Text>
                      </View>
                    </View>
                    <View className='mt-2 flex-row items-center'>
                      <MapPinIcon size={20} />
                      <Text className='font-lato'>{item.distance}  |  {item.priceLevel}</Text>
                    </View>
                  </View>
                </View>
              )}
            />
          </View>
          <View className='relative bg-green-900 w-full rounded-2xl p-2 gap-2 overflow-hidden'>
            <View className='absolute -top-1 right-2 w-1/2'>
              <Image
                source={require("@/assets/food/food-offer.png")}
                className='w-48 h-48'
                resizeMode='cover'
              />
            </View>
            <View className='flex-row items-center gap-1'>
              <View className='bg-orange-400 rounded-full p-0.5'>
                <SparklesIcon size={20} color={"white"} />
              </View>
              <Text className='font-lato-bold text-white'>Special Offer</Text>
            </View>
            <View>
              <Text className='font-lato-bold text-4xl text-white'>20% OFF</Text>
              <Text className='font-lato-bold text-white'>On your first order</Text>
            </View>
            <TouchableOpacity className='flex-row justify-center items-center gap-4 bg-orange-400 w-1/2 p-2 rounded-xl'>
              <Text className='font-lato-bold text-xl text-white'>Order Now</Text>
              <ArrowRightIcon color={"white"} />
            </TouchableOpacity>
          </View>
          <View className='gap-4'>
            <View className='flex-row justify-between items-center'>
              <Text className='font-lato-bold text-xl'> 🍴 Open Restaurants</Text>
              <TouchableOpacity className='flex-row items-center'>
                <Text className='font-lato text-gray-500'>See All</Text>
                <ChevronRightIcon size={16} color={"#6a7282"} />
              </TouchableOpacity>
            </View>
            <View>
              <FlatList
                horizontal
                data={openRestaurants}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
                contentContainerClassName="gap-4"
                renderItem={({ item }) => (
                  <View className='relative w-48'>
                    <View className='absolute z-999 top-4 right-4'>
                      <HeartIcon size={24} color={"white"} />
                    </View>
                    <Image
                      source={{ uri: item.image }}
                      className="h-36 rounded-xl"
                      resizeMode="cover"
                    />
                    <View className="flex-1 justify-center px-3">
                      <View className='flex-row justify-between items-center'>
                        <Text className="font-lato">
                          {item.name}
                        </Text>
                      </View>
                      <View className="mt-2 flex-row flex-wrap items-center gap-3">
                        <View className='flex-row justify-center items-center gap-1'>
                          <StarIcon size={20} color={"orange"} />
                          <Text className="font-lato text-xs">
                            {item.rating}
                          </Text>
                        </View>
                        <View className='flex-row justify-center items-center gap-1'>
                          <TruckIcon size={20} color={"orange"} />
                          <Text className="font-lato text-xs">
                            {item.deliveryFee !== 0 ? item.deliveryFee : "Free"}
                            MAD
                          </Text>
                        </View>
                        <View className='flex-row justify-center items-center gap-1'>
                          <ClockIcon size={20} color={"orange"} />
                          <Text className="font-lato text-xs">
                            {item.deliveryTime}
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>
                )}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}