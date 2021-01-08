import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';

import Days from "./Days";
import Details from "./Details";

export type DaysStackParamList = {
  Details: {
	date: Date
  },
  Days: {},
}
const Stack = createStackNavigator<DaysStackParamList>();

export default ()=>{
	return (
        	<Stack.Navigator>
				<Stack.Screen
					name="Days"
					component={Days}
					options={{
						title: 'Previous Days ',
					}}
				/>
				<Stack.Screen
					name="Details"
					component={Details}
					options={{
						title: 'Details',
					}}
				/>
			</Stack.Navigator>
	)
};