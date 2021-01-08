import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Button,
  StatusBar,
  
} from 'react-native';


import 'react-native-gesture-handler';
import { NavigationContainer, RouteProp } from '@react-navigation/native';
import { createStackNavigator, StackNavigationProp, StackScreenProps} from '@react-navigation/stack';


type RootStackParamList = {
  Details: {
    userId: string
  },
  Home: {},

  Root: {},
  Profile:{
    name: string
  },
  Setting: {}
};
const RootStack = createStackNavigator<RootStackParamList>();


function ProfileScreen(
  { navigation }: StackScreenProps<RootStackParamList,'Profile'>
) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Profile Screen</Text>
    </View>
  )
}

function SettingScreen(
  { navigation }: StackScreenProps<RootStackParamList,'Setting'>
) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Setting Screen</Text>
    </View>
  )
}

function Root() {
  return (
    <RootStack.Navigator>
      <RootStack.Screen name="Profile" component={ProfileScreen} />
      <RootStack.Screen name="Setting" component={SettingScreen} />
    </RootStack.Navigator>
  );
}


function DetailsScreen(
  { navigation, route }: StackScreenProps<RootStackParamList,'Details'>
) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

    <Text>Details Screen {`${JSON.stringify(route,undefined, 3)}`}</Text>

      <Button
        title={"Go Back to Home"}
        onPress={()=>navigation.navigate({name:"Home",params:{}})}
      />


      <Text>Details</Text>
      <Button
        title={"Go Again to Details"}
        onPress={()=>navigation.push("Details",{userId: "123"})}
      />


      <Text>Back</Text>
      <Button
        title={"Back"}
        onPress={()=>navigation.goBack()}
      />


      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      />

    </View>
  );
}


type HomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Home'
>;


function HomeScreen(
  { navigation, route }: StackScreenProps<RootStackParamList,'Home'>
) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen {`${JSON.stringify(route,undefined, 3)}`}</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate({name:"Details",params: {userId: "123"}})}
      />
      
      <Button
        title="Go to Root"
        onPress={() => navigation.navigate({name:"Root",params: {screen:"Setting",params:{user:"erfan"}}})}
      />
    </View>
  );
}




const App = () => {
  return (
    <NavigationContainer>
        <RootStack.Navigator>

          <RootStack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              title: 'OverviewTitle ',
            }}
          />
          <RootStack.Screen
            name="Details"
            component={DetailsScreen}
            options={({route}:{route: RouteProp<RootStackParamList, "Details">})=>{ 

              return ({
                title: `Details ${route.params.userId}` ,
                headerStyle: {
                  backgroundColor: '#f4511e',
                },
                headerRight: () => (
                  <Button
                    onPress={() => ('This is a button!')}
                    title="Info"
                    color="#fff"
                  />
                )
              })
            }}
            initialParams={{userId: "123"}}
          />
          <RootStack.Screen
            name="Root"
            options={{headerShown: false }}   
            component={Root}
          />
        </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default App