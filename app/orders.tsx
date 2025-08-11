import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Image, Text, View } from "react-native";

export default function Orders() {

    const handleBack = () => {
        router.replace('/detail');
    }

    const handleDelivery = () => {
        router.replace('/delivery');
    }

    return (
        <View className="flex-1 bg-gray-100">
            <View className="flex flex-row items-center p-4 mt-9">
                <Ionicons name="arrow-back" size={24} color="black" onPress={handleBack} />
                <Text className="text-2xl font-bold ml-28">Orders</Text>
            </View>

           <View className="flex flex-row justify-between items-center ml-10">
           <View className="flex flex-row items-center bg-gray-200 rounded-lg p-1 w-80">
            <Text className="font-bold text-white text-lg p-2 bg-amber-500 rounded-lg w-40 text-center">
                Deliver
            </Text>
            <Text className="text-lg text-gray-500 w-40 text-center">
                Pick up
            </Text>
           </View>
           </View>
           
           <View className="ml-10 mt-5">
           <Text className="text-xl font-bold ">Delivery Address</Text>
           <Text className="text-md mt-5 font-bold"> JI. Kpg Sutoyo</Text>
           <Text className="text-sm text-gray-500 "> Kpg. Sutoyo No 620, Bilzen, Tanjungbalai</Text>

           <View className="flex flex-row items-center mt-5">
            
            <View className=" flex flex-row  bg-white items-center border border-gray-300 rounded-full p-1 w-32">
            <Ionicons name="pencil-outline" size={20} color="black" className="ml-1" />
            <Text className="text-sm  ml-2">Edit Address</Text>
            </View>

            <View className=" flex flex-row bg-white  items-center border border-gray-300 rounded-full p-1 w-32 ml-2">
            <Ionicons name="book-outline" size={20} color="black" className="ml-1" />
            <Text className="text-sm  ml-2">Add Note</Text>
            </View>          
            </View>
           {/* fin view ml */}
           </View>

           {/* petite ligne */}
           <View className="border-b border-gray-300 w-11/12 ml-5 mt-5"></View>

            {/* add cart */}
            <View className="flex flex-row justify-between items-center ml-10 mt-5">
                <Image source={require('../assets/images/coffee.png')} className="w-20 h-20 rounded-lg"/>
            <View className="ml-5">
                <Text className="text-lg font-bold">Caffe Mocha</Text>      
                <Text className="text-sm text-gray-500">Deep Foam</Text>
            </View>
            <View className="flex flex-row items-center gap-2 -mt-5 w-40">
            <Ionicons name="remove-outline" size={20} color="black" className="ml-8 bg-white rounded-full p-1" />
            <Text>1</Text>
            <Ionicons name="add-outline" size={20} color="black" className="ml-1 bg-white rounded-full p-1" />
            </View>
            
            </View>

           

                    {/* petite ligne */}
           <View className="border-b border-gray-300 w-full mt-5"></View>

           <View className="flex flex-row mt-10  bg-white rounded-lg p-4 w-11/12 ml-5 shadow-lg shadow-gray-300">
           <Ionicons name="pricetag-outline" size={20} color="black" className=" p-1 " />
           <Text className="text-lg font-bold">1 Discount is Applies</Text>
           <Ionicons name="arrow-forward-outline" size={20} color="black" className="ml-28  p-1" />
           </View>

           <Text className="text-lg font-bold ml-10 mt-10">Payement Summary</Text>

           <View className="flex flex-row justify-between items-center m-5 ml-10 mt-5">
           <Text className="text-lg ">Price</Text>
           <Text className="text-lg ">$ 4.53</Text>
            </View>

            <View className="flex flex-row justify-between items-center ml-10 ">
           <Text className="text-lg ">Delivery Fee</Text>
           <View className="mr-4">
           <Text className="text-lg -ml-4 ">$ 4.53</Text>
           </View>
            </View>

            <View className="bg-white rounded-3xl p-4 mt-4">
            <View className="flex flex-row justify-between items-center ml-10 ">
                <View className="mr-4 flex flex-row">
                <Ionicons name="wallet-outline" size={20} color="black" className=" p-1" />
                 <View className="">
                 <Text className="text-lg font-bold ">Cash/Wallet</Text>  
                 <Text className="text-lg  text-amber-600">$ 5.53</Text>                            
                 </View>
                </View>

            <View className="mr-4">
            <Ionicons name="arrow-forward-outline" size={20} color="black" className=" p-1" />
           </View>
            </View>
            <Text className="text-lg text-white font-bold bg-amber-500 rounded-xl p-4 w-11/12 m-5 mt-1 text-center" onPress={handleDelivery}>
                Order
                </Text>
            </View>

        </View>
    )
}