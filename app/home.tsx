import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { ScrollView, Text, TextInput, View } from "react-native";
import Cart from "../component/cart";

export default function Home (){
    const handleLogin = () => {
        router.replace("/detail");
    };

    return (
        <View className="flex-1 bg-gray-100">
            <View className="bg-black h-60">
                <View className="m-8">
                    <Text 
                    className="text-gray-400 text-sm mt-10">
                        Location
                        </Text>
                    <Text 
                    className="text-white text-md ">
                        Bilzen, Tanjungbalai
                        </Text>
                </View>
                <View className=" m-2 flex flex-row justify-center items-center gap-1 ">
                    <View className="input_search relative">
                    <Ionicons name="search-outline" size={24} color="gray" className="absolute left-6 top-2 -translate-y-1/2 z-10" />
                    <TextInput placeholder="Search coffee" className="bg-gray-200 -mt-3 rounded-lg p-2  m-5 pl-10 w-72"/>
                    </View>
                    <Text className="text-white text-center bg-orange-400 rounded-lg p-2 w-10 -mt-8">- -</Text>
                </View>
                <View className=" bg-orange-400 h-30 m-8 rounded-lg p-5 -mt-2 ">
                    <Text className="text-white  bg-red-500 p-1 w-1/4 rounded-lg text-center">
                        Promo
                    </Text>
                    <Text className="text-white font-bold text-3xl shadow-2xl shadow-black mt-2">
                        Buy one get
                    </Text>
                    <Text className="text-white font-bold text-3xl shadow-md ">
                        one free
                    </Text>
                </View>
            </View>
          
            <View className="flex flex-row justify-center items-center gap-5 m-5 p-28">
                <Text className= "text-white text-sm bg-orange-400 rounded-lg p-2 ">Categories</Text>
                <Text className=" text-md ">Tea</Text>
                <Text className=" text-md ">Snacks</Text>
                <Text className=" text-md ">Merchandise</Text>
            </View>        
            
            <ScrollView className="flex-1 -mt-20" showsVerticalScrollIndicator={false}>
                <View className="flex flex-row  justify-between ">
                    <Cart
                        id="1"
                        name="Coffee"
                        price={10000}
                        sous_title="Coffee"
                        image={require("../assets/images/coffee.png")}
                        source={require("../assets/images/coffee.png")}
                        note={4.5}
                    />
                    <Cart
                        id="1"
                        name="Coffee"
                        price={10000}
                        sous_title="Coffee"
                        image={require("../assets/images/coffee.png")}
                        source={require("../assets/images/coffee.png")}
                        note={4.5}
                    />
                </View>

                <View className="flex flex-row  justify-between">
                    <Cart
                        id="1"
                        name="Coffee"
                        price={10000}
                        sous_title="Coffee"
                        image={require("../assets/images/coffee.png")}
                        source={require("../assets/images/coffee.png")}
                        note={4.5}
                    />
                    <Cart
                        id="1"
                        name="Coffee"
                        price={10000}
                        sous_title="Coffee"
                        image={require("../assets/images/coffee.png")}
                        source={require("../assets/images/coffee.png")}
                        note={4.5}
                    />
                </View>
                
               
            </ScrollView>

            <View className="bg-white w-full rounded-3xl flex flex-row justify-between items-center p-6">
                <View className="-mt-2">
                <Ionicons name="home-outline" size={20} color="brown" className='p-4 ' /> 
                <View className="bg-amber-500 w-10 h-1 ml-2 -mt-3 rounded-full"></View>   
                </View>
            <Ionicons name="list-outline" size={20} color="black" className='p-4 ' onPress={handleLogin} />    
            <Ionicons name="cart-outline" size={20} color="black" className='p-4 ' />    
            <Ionicons name="notifications-outline" size={20} color="black" className='p-2 w-10' />    
            </View>
        </View>
    );
}