import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';
import headlines from '../Headlines';
import contentView from '../ContentView';
import {IHeadlineState} from '../../redux/reducers/headlinesReducer';
import WebViewScreen from '../WebView/webView';
export type RootStackParamList = {
  Headlines: undefined;
  Detail: {
    headlines: IHeadlineState;
    headlineIndex: number;
  };
  'Web View':{
    url:string
  }
};

const Stack = createSharedElementStackNavigator();

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerStyle:{
          backgroundColor:'#343434',
          height:40,
          
        },
        headerTintColor:'#dcdcdc',
        headerTitleStyle:{
          fontWeight:'bold',
        },
        headerTitleAlign:'center',
        
      }}>
        <Stack.Screen name="Headlines" component={headlines} />
        <Stack.Screen
          name="Detail"
          component={contentView}
          options={{
            cardStyleInterpolator: ({current: {progress}}) => {
              console.log(progress);
              return {
                cardStyle: {
                  opacity: progress,
                },
              };
            },
          }}
        />
        <Stack.Screen name="Web View" component={WebViewScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
