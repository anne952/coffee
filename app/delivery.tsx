import React from 'react';
import MapView from 'react-native-maps';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, View, Text, Image } from 'react-native';

export default function App() {

    const handleBack = () => {
        router.replace('/orders');
    }

  return (
    <View style={styles.container}>
      <MapView style={styles.map} />
      <Ionicons 
      name="arrow-back-outline"
      onPress={handleBack}
       size={20} 
       color="black" 
       className='border-2 border-gray-300 rounded-lg p-2 w-10 absolute top-10 left-10 bg-slate-300' />    
      <View className="absolute bottom-0 left-0 right-0 p-4 bg-white">
      <View className='w-10 h-2 bg-gray-300 rounded-full ml-40'></View>
        <Text className="text-lg font-bold text-center mt-2">
          10 minoutes left
          </Text>
        <Text className="text-sm text-gray-500 text-center mt-1">Estimated time of arrival</Text>
        <View className='flex flex-row gap-2 justify-center mt-4'>
            <View className='w-20 h-1 bg-green-400 rounded-full'></View>
            <View className='w-20 h-1 bg-green-400 rounded-full'></View>
            <View className='w-20 h-1 bg-green-400 rounded-full'></View>
            <View className='w-20 h-1 bg-gray-400 rounded-full'></View>
        </View>

        <View className='flex flex-row justify-between items-center mt-4 gap-2 p-2 border-2 border-gray-300 rounded-lg'>
                <Ionicons name="location-outline" size={40} color="black" className='border-2 border-gray-300 rounded-lg p-2' />    
            <View className='ml-2'>
                <Text className="text-lg font-bold">Delivered your order</Text>
                <Text className="text-sm text-gray-500 w-2/3">We will deliver your goods to you in the shortes possible time</Text>
            </View>
        </View>

        <View className='flex flex-row justify-between items-center mt-4 gap-2 p-2 '>
            <Image source={require('../assets/images/coffee.png')} className='w-20 h-20 rounded-lg' />
            <View className='ml-2'>
                <Text className="text-lg font-bold">Brooklyn Simmons</Text>
                <Text className="text-sm text-gray-500 ">Persoonal Courier</Text>
            </View>
            <Ionicons name="call-outline" size={40} color="black" className='border-2 border-gray-300 rounded-lg p-2' />    
            </View>
            <View className='p-2'></View>
        </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});
