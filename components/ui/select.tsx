import React from "react";
import { View, Pressable, Image, Text, FlatList } from "react-native";
import { useRouter } from 'expo-router';

export default function Select() {
    const router = useRouter();
    return(
       <View className="w-full rounded-full h-64">
                {/* Flatlist for potential pull-to-refresh */}
                <FlatList
                    className="bg-backgroundPurple"
                    data={[1,2,3]}
                    renderItem={({ item }) => (
                        <View className="h-[00px] my-4 rounded-full bg-[#B3B3B3]">
                            {/* Navigates to 404 page for now */}
                            {/* Using NativeWind instead of Figma png for performance */}
                            {/* Available Robots added later, or else it doesn't scroll with list */}
                            {/* Robot text supposed to be text-base, text-lg looks better imo */}
                            <Pressable 
                                onPress={() => router.push('/+not-found')} 
                                className="w-md rounded-full px-6 mx-[10px] my-2"
                            >
                                <View className="flex-row items-center">
                                <Image 
                                    source={require('../../assets/images/robot.png')}
                                    className="w-6 mr-4" 
                                />
                                <Text className="text-robotText text-lg mr-3"> 
                                    Robot {item}
                                </Text>
                                <Text className="text-arrowColor text-md">▶</Text>
                                </View>
                            </Pressable>
                        </View>
                    )}
                    ListHeaderComponent={() => (
                        <View className="mt-20">
                        <Text className="text-white text-2xl text-base font-semibold text-center">
                            Available Robots
                        </Text>
                        </View>
                    )}
                    ItemSeparatorComponent={() => <View className="h-[50px]" />}
                    contentContainerStyle={{ paddingBottom: 20 }}
                />
            </View>
                        
    );
}
