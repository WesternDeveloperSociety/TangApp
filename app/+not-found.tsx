import { Link, Stack } from 'expo-router';
import { Text, View } from 'react-native';


export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Oops!' }} />
      <View className="flex items-center">
        <Text className="my-[50]">This screen doesn't exist yet :(</Text> 
          <Link href="/">Go to home screen</Link>
      </View>
    </>
  );
}


