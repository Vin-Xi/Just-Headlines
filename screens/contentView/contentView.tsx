import React from 'react';
import {IHeadlineState} from '../../redux/reducers/headlinesReducer';
import {
  Image,
  Text,
  TouchableOpacity,
  View,
  useColorScheme,
  ScrollView,
} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../Navigation/Navigation';
import styles from './styles'
import {SharedElement} from 'react-navigation-shared-element';

type Props = NativeStackScreenProps<RootStackParamList, 'Detail'>;

const ContentView: React.FC<{
  headline: IHeadlineState;
  route: Props['route'];
  navigation: Props['navigation'];
}> = ({headline, route, navigation}) => {
  const {headlineIndex, headlines} = route.params;
  const backgroundColor = useColorScheme() === 'dark' ? '#000' : '#fff';
  const color = useColorScheme() === 'dark' ? '#fff' : '#000';
  const contentColor = useColorScheme() === 'dark' ? '#bbb' : '#444';
  const readMoreBgColor = useColorScheme() === 'dark' ? '#222' : '#ddd';

  const handleURLPress = () => {
    undefined;
  };
  console.log(`headline#${headlineIndex}-image`);

  return (
    <>
      <ScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}
        style={[styles.container, {backgroundColor}]}
        contentContainerStyle={styles.contentContainer}>
        <SharedElement id={`headline#${headlineIndex}-image`}>
          <Image
            style={styles.image}
            source={{uri: headlines?.urlToImage}}
            resizeMode={'cover'}
          />
        </SharedElement>
        <Text style={[styles.title, {color}]}>{headlines?.title}</Text>
        <Text style={[styles.content, {color: contentColor}]}>
          {headlines?.content}
        </Text>
      </ScrollView>
      <View
        style={[styles.readMoreContainer, {backgroundColor: readMoreBgColor}]}>
        <Text style={[styles.readMoreText, {color}]} numberOfLines={2}>
          Read more at{' '}
          <Text style={styles.link} onPress={handleURLPress}>
            {headlines?.url}
          </Text>
        </Text>
      </View>
    </>
  );
};

(ContentView as any).sharedElements = (route: any) => {
  const {headlineIndex} = route.params;
  console.log(`headline#${headlineIndex}-image`);
  return [`headline#${headlineIndex}-image`];
};
export default ContentView;
