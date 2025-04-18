import { Text, View } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
export default function Profile() {
  return (
    <View className="bg-primary flex-1 pt-10">
      <View className="flex justify-center items-center flex-1 flex-col gap-5">
        <AntDesign name="user" size={40} color={'#fff'} />
        <Text className='text-gray-500 text-base'>Profile</Text>
      </View>
    </View>
  );
}
