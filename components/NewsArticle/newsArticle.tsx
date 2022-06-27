import React, {memo} from 'react';
import {Image, Text, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';
import {IHeadlineState} from '../../redux/reducers/headlinesReducer';
import moment from 'moment';

const NewsArticle: React.FC<{
  headline: IHeadlineState;
}> = ({headline}) => {
  return (
    <TouchableOpacity activeOpacity={1} style={styles.container}>
      <Image
        source={{
          uri: headline?.urlToImage ?? 'https://via.placeholder.com/600/92c952',
          cache: 'force-cache',
        }}
        resizeMode={'cover'}
        style={styles.image}
      />
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
