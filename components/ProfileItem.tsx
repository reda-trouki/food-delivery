import { Pressable, Text, View } from "react-native"
import { ChevronRightIcon } from "react-native-heroicons/solid"

export const ProfileItem = ({
  icon,
  title,
  subtitle,
}: {
  icon: React.ReactNode
  title: string
  subtitle: string
}) => {
  return (
    <Pressable className="flex-row items-center border-b border-gray-200 px-4 py-4">
      <View className="h-10 w-10 items-center justify-center rounded-xl bg-indigo-100">
        {icon}
      </View>

      <View className="ml-3 flex-1">
        <Text className="font-lato-bold text-sm text-gray-900">
          {title}
        </Text>

        <Text
          className="mt-1 font-lato text-xs text-gray-500"
          numberOfLines={1}
        >
          {subtitle}
        </Text>
      </View>

      <ChevronRightIcon size={18} color="#9ca3af" />
    </Pressable>
  )
}