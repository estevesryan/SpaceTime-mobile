import { StatusBar } from 'expo-status-bar'
import { View, Text } from 'react-native'

export default function Memories() {
  return (
    <View className="flex-1 items-center justify-center bg-gray-900">
      <Text className="text-white">Memories</Text>

      <StatusBar style="light" />
    </View>
  )
}
