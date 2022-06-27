import React, {useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator
} from 'react-native';
import {useAppDispatch} from '../redux/store';
import {useSelector} from 'react-redux';
import {getHeadlines} from '../redux/selectors/headlinesSelector';
import {isSuccess} from '../redux/selectors/statusSelectors';
import {fetchHeadlines} from '../redux/actions/headlinesAction';

const Headlines = () => {
  const dispatch = useAppDispatch();
  const headlines = useSelector(getHeadlines);
  const sucess = useSelector(isSuccess);

  useEffect(() => {
    dispatch(fetchHeadlines());
  }, [dispatch]);

  return (
    <View>
      {sucess
        ? headlines.map(headline => {
            return (
              <View key={headline.title}>
                <Text>{headline.title}</Text>
              </View>
            );
          })
        : <ActivityIndicator size='large'/>}
    </View>
  );
};

export default Headlines;
