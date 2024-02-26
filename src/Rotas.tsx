import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';

const Tab = createStackNavigator();

import Login from './Login';
import Cadastro from './Cadastro';
import Tabs from './Tabs/Index';

export default function Rotas(){
  return(
    <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="login" component={Login} options={{ headerShown:false }}/>
          <Tab.Screen name="cadastro" component={Cadastro} options={{ headerShown:false }}/>
          <Tab.Screen name="tabs" component={Tabs} options={{ headerShown:false }}/>
        </Tab.Navigator>
    </NavigationContainer>
   
 ) 
}