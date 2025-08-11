import { MaterialIcons } from '@expo/vector-icons';
import { Image, ImageSourcePropType, Text, View } from "react-native";

interface CartProps {
    id: string;
    name: string;
    price: number;
    sous_title: string;
    image: string;
    source: ImageSourcePropType;
    note: number;
}

export default function Cart({ id, name, price, image, source, note, sous_title }: CartProps) {                                                                                                                                                             
    return (
        <View>
             <View style={{
                width: 160,
                height: 240,
                margin: 12,
                backgroundColor: 'white',
                shadowColor: '#6b7280',
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.3,
                shadowRadius: 8,
                borderRadius: 8,
                elevation: 5
             }}>
                <View style={{ padding: 8 }}>
                    <View style={{ position: 'relative' }}>
                        {image && 
                        <Image 
                        source={source} 
                        style={{
                            width: 144,
                            height: 144,
                            borderRadius: 8,
                            marginLeft: 1
                        }}
                        resizeMode="cover"
                         />}
                        <View style={{
                            position: 'absolute',
                            top: 8,
                            right: 8,
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: 4
                        }}>
                            <MaterialIcons name="star" size={24} color="#FFD700" />
                            <Text style={{ color: 'white', fontSize: 14 }}>{note}</Text>
                        </View>
                    </View>
                    <Text style={{ 
                        fontWeight: 'bold', 
                        fontSize: 18, 
                        marginLeft: 8 
                    }}>{name}</Text>
                    <Text style={{ 
                        color: '#d1d5db', 
                        fontSize: 12, 
                        marginLeft: 8 
                    }}>{sous_title}</Text>

                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: 45,
                        marginTop: 2,
                        
                    }}>
                        <Text style={{ fontWeight: 'bold' }}>${price}</Text>
                        <Text style={{
                            backgroundColor: '#fb923c',
                            borderRadius: 8,
                            padding: 8,
                            width: 40,
                            textAlign: 'center',
                            color: 'white'
                        }}> + </Text>
                    </View>
                </View>
            </View>
        </View>
    )
}  