import React from 'react';
import { View, Text, FlatList, Image } from 'react-native';

//robot info
type Robot = {
  id: string;      //robot id (1,2,3)
  name: string;    //robot name
  battery: number; //battery percentage
};

//array to display robot data
const robots: Robot[] = [
  { id: '1', name: 'Robot 1', battery: 58 },
  { id: '2', name: 'Robot 2', battery: 100 },
  { id: '3', name: 'Robot 3', battery: 24 },
];

export default function RobotBatteryStatus() {  //export default functional component to display the data 

  const renderRobotItem = ({ item }: { item: Robot }) => {  //receives an object with the current "item" of type Robot
    return (
      //card-like view with white background, rounded corners, and shadow
      <View className="mb-3 p-4 bg-white rounded-lg shadow-md">
        {/*Places the icon and robot name on the left and the battery percentage on the right*/}
        <View className="flex-row items-center justify-between mb-2">
          <View className="flex-row items-center">
            <Image
              source={require('../assets/images/robot.png')} 
              className="w-6 h-6 mr-2"
            />
            {/*Robot text stuff*/}
            <Text className="text-gray-800 font-semibold">{item.name}</Text>
          </View>
          {/*Battery percentage text*/}
          <Text className="text-gray-800">{item.battery}%</Text>
        </View>

        {/*Progress bar showing battery level visually*/}
        <View className="w-full h-2 bg-gray-300 rounded-full">
          <View
            className="h-full bg-green-400 rounded-full"
            style={{ width: `${item.battery}%` }}
          />
        </View>
      </View>
    );
  };

  //Renders the list of robots using flatlist
  return (
    <View className="px-4 mt-4 bg-gray-100 flex-1">
      <FlatList
        data={robots} //data is the array of robots
        keyExtractor={(item) => item.id}  //tells flatlist how to get a unique key using the id
        renderItem={renderRobotItem}  //tells flatlist how to render each robot.
      />
    </View>
  );
}
