import React, {memo} from 'react';
import {Image, Text, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';
import {IHeadlineState} from '../../redux/reducers/headlinesReducer';
import moment from 'moment';
import {useNavigation} from '@react-navigation/native';
import {SharedElement} from 'react-navigation-shared-element';
import {RootStackParamList} from '../../screens/Navigation/Navigation';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

type ProfileScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Detail'
>;

const NewsArticle: React.FC<{
  headline: IHeadlineState;
  index: number;
}> = ({headline, index}) => {
  const navigation: ProfileScreenNavigationProp = useNavigation();
  const handlePress = () => {
    navigation.navigate('Detail', {headlines: headline, headlineIndex: index});
  };
  console.log(`headline#${index}-image`);
  return (
    <TouchableOpacity
      activeOpacity={1}
      style={styles.container}
      onPress={handlePress}>
      <SharedElement
        style={styles.imageContainer}
        id={`headline#${index}-image`}>
        <Image
          source={{
            uri:
              headline?.urlToImage ?? 'https://via.placeholder.com/600/92c952',
            cache: 'force-cache',
          }}
          resizeMode={'cover'}
          style={styles.image}
        />
      </SharedElement>
      <LinearGradient
        colors={['#0000', '#000A', '#000']}
        style={styles.titleContainer}>
        <Text style={styles.text}>{headline?.title}</Text>
        <Text style={styles.timestamp}>
          {moment(headline?.publishedAt).format('HH:MM DD,MMMM')}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default memo(NewsArticle);
