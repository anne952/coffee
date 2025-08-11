import { router } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";
import "../global.css";

export default function Index() {
  const handleLogin = () => {
    router.replace("/home");
  };


  return (
   <View className="flex-1 bg-black">
    <Image 
    source={require("../assets/images/coffee.png")}
     className="w-full h-[510px]"  />
     <View className="-mt-10">
     <Text className="text-white font-bold text-[30px] text-center  tracking-wide ">Fall in love with </Text>
     <Text className="text-white font-bold text-[30px] text-center p-1 ">Coffee in blissfull </Text>
     <Text className="text-white font-bold text-[30px] text-center p-1">Delight !</Text>
     <Text className="text-gray-400 text-sm text-center mt-4">Wellcome to our cozy coffe corner, where</Text>
     <Text className="text-gray-400 text-sm text-center ">every cup is a delightful for you.</Text>
     </View>
     <TouchableOpacity className="m-5 " onPress={handleLogin}>
     <Text className="text-white font-bold text-lg bg-[#965808] text-center mt-2 p-4 rounded-lg m-2">Get Started</Text>
     </TouchableOpacity>
   </View>
  );
}
