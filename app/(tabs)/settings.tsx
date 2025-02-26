import React, { useState } from 'react';
import { Text, View, Image, Switch, Pressable } from 'react-native';

export default function Settings() {
    const [isLocationEnabled, setIsLocationEnabled] = useState(false);

    const toggleSwitch = () => setIsLocationEnabled(prev => !prev);

    return (
        <View className="bg-black flex-1 p-4">
            {/* Header */}
            <Text className="text-center text-xl font-bold text-white">Settings</Text>

            {/* User Information & PFP */}
            <View className="flex-row items-center mt-8">
                <Image // Placeholder for profile picture
                    className="w-16 h-16 rounded-full mr-4"
                />
                <View>
                    <Text className="text-lg font-semibold text-white">Example User</Text>
                    <Text className="text-sm text-gray-400">example@gmail.com</Text>
                </View>
            </View>

            {/* Divider */}
            <View className="border-t border-gray-700 my-4" />

            {/* Location Access Toggle */}
            <View className="flex-row items-center justify-between">
                <Text className="text-base font-semibold text-white">Location Access</Text>
                <Switch
                    value={isLocationEnabled}
                    onValueChange={toggleSwitch}
                    thumbColor={isLocationEnabled ? "#B9E4C9" : "#f4f3f4"}
                    trackColor={{ false: "#767577", true: "#1FB28A" }}
                />
            </View>

            {/* Logout Button */}
            <View className="absolute bottom-10 left-0 right-0 items-center">
                <Pressable className="bg-red-500 px-6 py-3 rounded-full">
                    <Text className="text-white text-lg font-semibold">Logout</Text>
                </Pressable>
            </View>
        </View>
    );
}

