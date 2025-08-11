import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Image, Text, View } from "react-native";

export default function Detail() {

    const handleBack = () => {
        router.replace('/home');
    }

    const handleAddToCart = () => {
        router.replace('/orders');
    }

    return (
        <View className="flex-1 bg-gray-100">
            <View className="flex flex-row justify-between items-center p-4 mt-9">
                <Ionicons name="arrow-back" size={24} color="black" onPress={handleBack} />
                <Text 
                className="text-2xl font-bold">
                    Detail
                    </Text>
                <Ionicons name="heart-outline" size={24} color="black" />
            </View>

            <View className="flex flex-row justify-center items-center p-4 -mt-10">
                <Image 
                source={require('../assets/images/coffee.png')} 
                 className="w-full h-72 rounded-xl bg-center bg-cover mt-10" />
            </View>

            <View className="m-4 -mt-1">
            <Text 
            className="text-2xl font-bold">
                Caffe Mocha
                </Text>

            <View className="flex flex-row justify-between items-center mt-4">
                <Text className="text-sm">
                    Caffe Mocha
                    </Text>
                <View className=" gap-4 flex flex-row">
                <Ionicons name="pricetag-outline" size={24} color="black" />
                <Text className="text-sm">$10.00</Text>
                <Ionicons name="add-circle-outline" size={24} color="black" />
                </View>
            </View>
            <View className="gap-1 flex flex-row  items-center mt-2">
            <Ionicons name="star-outline" size={24} color="black" />
            <Text className="text-xl font-bold">4.8</Text>
            <Text className="text-sm"> (230)</Text>
            </View>
            </View>
            <View className="border-b border-gray-400 m-5 -mt-1"></View>
            <View className="m-4">
                <Text className="text-xl font-bold 6mt-4">Description</Text>
                <Text className="text-sm mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos...
                <Text className="text-amber-600 font-bold">Read More</Text>
                </Text>
            </View>

            <Text className="text-xl font-bold p-4">Size</Text>
            <View className="flex flex-row justify-between items-center m-2 ">
                <Text className="text-lg bg-white shadow-xl rounded-lg p-2 w-28 border border-gray-400 text-center">S</Text>
                <Text className="text-lg bg-amber-500 shadow-xl rounded-lg p-2 w-28 text-center">M</Text>
                <Text className="text-lg bg-white shadow-xl rounded-lg p-2 w-28 border border-gray-400 text-center">L</Text>                
            </View>

        <View className="bg-white shadow-xl rounded-3xl p-6 flex flex-row justify-between items-center ">
            <View className=" m-2 ">
                <Text className="text-lg text-gray-500">Price</Text>
                <Text className="text-lg   text-amber-500">$ 4.53</Text>
            </View>
            <Text className="text-lg text-white font-bold bg-amber-500 rounded-xl p-4 w-60  text-center" onPress={handleAddToCart}>Buy Now</Text>
        </View>
        </View>
    )
}