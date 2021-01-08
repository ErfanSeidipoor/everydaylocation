import React, { useEffect, useState } from "react";
import { View, StyleSheet, FlatList, Text} from "react-native";
import { StackScreenProps} from '@react-navigation/stack';
import { DaysStackParamList } from "./index";
import DayItem from "../../components/DayItem";
import { IDB_Day } from "../../DB/model";
import { DaysActions } from "../../DB/actions";

import { LogBox } from 'react-native';

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);


const Days = ({navigation}:StackScreenProps<DaysStackParamList>) => {

	const [wait, setWait] = useState(true)
	const [error, setError] = useState(false)
	const [days, setDays] = useState<IDB_Day[]>([])

	useEffect(()=>{
		setWait(true)
		DaysActions.getAll()
			.then(days_=>{
				setDays(days_)
				setWait(false)
			})
			.catch(err=>{
				setError(err)
				setWait(false)
			})
	},[])
	
	const renderWait = ()=> {
		if(wait && !error)
		return (
			<View style={styles.center}>
				<Text>{"please wait"}</Text>
			</View>
		)
	}

	const renderError = ()=> {
		if(!wait && error)
		return (
			<View style={styles.center}>
				<Text>{"please wait"}</Text>
			</View>
		)
	}


	const renderEmpty = ()=>{
		if(!wait && !error && days.length===0)
		return (
			<View style={styles.center}>
				<Text>{"Empty days"}</Text>
			</View>
		)
	}

	const renderDays = ()=> {
		if(!wait && !error && days.length>0) 
		return (
			<FlatList
				style={styles.FlatList}
				data={days}
				renderItem={
					({ item }) => 
						<DayItem
							onPress={()=>navigation.navigate("Details", {date:item.date})}
							date={item.date}
							length={item.geoPositions.length}
						/>
				}
				keyExtractor={item => `${item.date.toDateString()}`}
			/> 
		)
	}

	return (
		<View style={styles.center}>
			{renderWait()}
			{renderError()}
			{renderDays()}
			{renderEmpty()}
		</View>
	)
}

const styles = StyleSheet.create({
  center: {	  	
	flex: 1,
	justifyContent: "center",
	alignItems: "center",
	textAlign: "center",
  },
  FlatList: {
	width:'100%',
  }
});

export default Days