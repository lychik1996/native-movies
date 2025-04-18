import { Text, View } from "react-native";
import Feather from '@expo/vector-icons/Feather';
export default function Saved(){
    return(
        <View className="bg-primary flex-1 pt-10">
      <View className="flex justify-center items-center flex-1 flex-col gap-5">
        <Feather name="bookmark" size={40} color={'#fff'} />
        <Text className='text-gray-500 text-base'>Save</Text>
      </View>
    </View>
    )
}