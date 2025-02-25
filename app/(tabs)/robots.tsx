import React from 'react';
import { View, Text } from 'react-native';
import RobotBatteryStatus from '../../components/RobotBatteryStatus';

export default function Robots() {
  return (
    <View style={{ flex: 1, paddingTop: 50 }}>
      <Text style={{ textAlign: 'center', fontSize: 20, marginBottom: 16 }}>
        Robots Battery Status
      </Text>
      <RobotBatteryStatus />
    </View>
  );
}
