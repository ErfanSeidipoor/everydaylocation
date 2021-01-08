import React, {useContext}  from "react";
import { View, Text, StyleSheet } from "react-native";
import { Map } from "../components/Map";
import { Point } from "../components/Point";
import { Polyline } from "../components/Polyline";

import { Context } from "./context";

const Today = () => {

	const { geoPositions } = useContext(Context)

	const renderLastGeoPosition = ()=>{
		if(geoPositions.length) {
			return (
				<Point
					type="NORMAL"
					number={13}
					calloutTitle={"normalPoint"}
					coordinate={geoPositions[geoPositions.length-1]}
					key="SAMPLEpOint"
				/>
			)
		}
	}

	const renderTodayRoute = () => {
		return (
			<Polyline
				type="Daily"
				key="testPolyline"
				route={geoPositions}
			/>
		)
	}

	return (
		<View style={styles.center}>
			<View style={styles.map}>
				<Map>
					{renderTodayRoute()}
					{renderLastGeoPosition()}
				</Map>
			</View>
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
	map: {
		flex: 1,
		width: '100%',
	}
});

export default Today;