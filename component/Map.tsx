import React from 'react';
import { Dimensions, Platform, Text, View } from 'react-native';

interface MapComponentProps {
  latitude?: number;
  longitude?: number;
  title?: string;
}

export default function MapComponent({ 
  latitude = 3.5952, 
  longitude = 99.5956, 
  title = "Coffee Shop Bilzen" 
}: MapComponentProps) {
  const { width } = Dimensions.get('window');

  // Fallback pour le web
  if (Platform.OS === 'web') {
    return (
      <View className="w-full h-64 rounded-lg bg-gray-200 justify-center items-center">
        <Text className="text-gray-600 text-center mb-2">
          📍 {title}
        </Text>
        <Text className="text-gray-500 text-sm text-center">
          Latitude: {latitude}{'\n'}
          Longitude: {longitude}
        </Text>
        <Text className="text-gray-400 text-xs text-center mt-2">
          Carte disponible sur mobile
        </Text>
      </View>
    );
  }

  // Import dynamique pour éviter les erreurs sur le web
  const MapView = require('react-native-maps').default;
  const { Marker } = require('react-native-maps');

  return (
    <View className="w-full h-64 rounded-lg overflow-hidden bg-gray-200">
      <MapView
        style={{ 
          width: width - 32,
          height: 256
        }}
        initialRegion={{
          latitude,
          longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        showsUserLocation={false}
        showsMyLocationButton={false}
      >
        <Marker
          coordinate={{
            latitude,
            longitude,
          }}
          title={title}
          description="Votre café préféré"
          pinColor="orange"
        />
      </MapView>
    </View>
  );
} 