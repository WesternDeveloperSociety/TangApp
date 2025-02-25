import { Text, View, FlatList, Pressable, Image } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

/**
 * Margins from Figma
 * --------------------
 * Top bar: 76px
 * Bottom bar: 72px
 * Spacing between elements: 46px
 * Height for robot icon + text: 24px
 */
export default function Robots() {
    const insets = useSafeAreaInsets();
    const router = useRouter();

    return (
        <View className="flex-1">
            {/* Top bar */}
            <View style={{ paddingTop: insets.top }} className="bg-black">
                <View className="h-[76px] justify-end pb-2 pl-[27px]">
                    <Text className="text-white text-2xl font-semibold leading-[24px] tracking-[0.5px]">Robots</Text>
                </View>
            </View>

            <View className="flex-1 bg-backgroundPurple">
                {/* Flatlist for potential pull-to-refresh */}
                <FlatList
                    className="bg-backgroundPurple"
                    data={[1,2,3,4,5,6]}
                    renderItem={({ item }) => (
                        <>
                            {/* Navigates to 404 page for now */}
                            {/* Using NativeWind instead of Figma png for performance */}
                            {/* Available Robots added later, or else it doesn't scroll with list */}
                            {/* Robot text supposed to be text-base, text-lg looks better imo */}
                            <Pressable 
                                onPress={() => router.push('/_not-found')} 
                                className="bg-[#B3B3B3] rounded-full py-3 px-6 mx-[30px] flex-row items-center"
                            >
                                <Image 
                                    source={require('../../assets/images/robot.png')}
                                    className="w-6 h-6 mr-4" // 6*4=24px
                                />
                                <Text className="text-robotText text-lg leading-[24px] mr-3"> 
                                    Robot {item}
                                </Text>
                                <Text className="text-arrowColor text-sm">▶</Text>
                            </Pressable>
                        </>
                    )}
                    ListHeaderComponent={() => (
                        <Text className="text-white text-base font-semibold mt-[46px] mb-[46px] text-center">
                            Available Robots
                        </Text>
                    )}
                    ItemSeparatorComponent={() => <View className="h-[46px]" />}
                    contentContainerStyle={{ paddingBottom: 46 }}
                />
            </View>
        </View>
    );
}
