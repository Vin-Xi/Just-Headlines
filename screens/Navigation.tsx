import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';
import headlines from './headlines';
import contentView from './contentView';

import {IHeadlineState} from '../redux/reducers/headlinesReducer';

export type RootStackParamList = {
  Headlines: undefined;
  Detail: {
    headlines: IHeadlineState;
    headlineIndex: number;
  };
};

const Stack = createSharedElementStackNavigator();

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
