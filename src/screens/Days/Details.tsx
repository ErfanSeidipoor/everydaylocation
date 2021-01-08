import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { StackScreenProps} from '@react-navigation/stack';
import { DaysStackParamList } from "./index";

import { Map } from "../../components/Map";
import { Polyline } from "../../components/Polyline";
import { IDB_Day } from "../../DB/model";
import { DaysActions } from "../../DB/actions";

const Details = (
  {
	route,
	navigation
  }:StackScreenProps<DaysStackParamList,"Details">) =>
{

	const { date } = route.params

	const [wait, setWait] = useState(true)
	const [error, setError] = useState(false)
	const [day, setDay] = useState<IDB_Day>()


	useEffect(()=>{
		setWait(true)
		DaysActions.get(date)
			.then(day_=>{

				if(!day_) {
					return navigation.navigate("Days", {})
				}				
				setDay(day_)
				setWait(false)
			})
			.catch(err=>{
				setError(err)
				setWait(false)
			})
	},[date])
	
	
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
		if(!wait && !error && day && day.geoPositions.length===0)
		return (
			<View style={styles.center}>
				<Text>{"Empty position"}</Text>
			</View>
		)
	}

	const renderRoute= ()=> {
		if(!wait && !error && day && day.geoPositions.length>0) 
		return (
			<View style={styles.map}>
				<Map>
					<Polyline
						type="Daily"
						key="testPolyline"
						route={day.geoPositions}
					/>
				</Map>
			</View>
		)
	}
	return (
		<View style={styles.center}>
			{renderWait()}
			{renderError()}
			{renderRoute()}
			{renderEmpty()}
		</View>
	)
};

const styles = StyleSheet.create({
	center: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		textAlign: "center",
	},
	map: {
		flex: 1,
		width: '100%',
	}
});

export default Details