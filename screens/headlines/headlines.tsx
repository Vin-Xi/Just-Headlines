import React, {useCallback, useEffect, useMemo} from 'react';
import {
  View,
  ActivityIndicator,
  FlatList,
  RefreshControl,
} from 'react-native';
import {useAppDispatch} from '../../redux/store';
import {useSelector} from 'react-redux';
import {getHeadlines} from '../../redux/selectors/headlinesSelector';
import {isLoading} from '../../redux/selectors/statusSelectors';
import {fetchHeadlines} from '../../redux/actions/headlinesAction';
import uuid from 'react-native-uuid';
import styles from './styles';
import NewsArticle from '../../components/NewsArticle';

const Headlines = () => {
  const dispatch = useAppDispatch();
  const headlines = useSelector(getHeadlines);
  const loading = useSelector(isLoading);

  useEffect(() => {
    dispatch(fetchHeadlines());
  }, [dispatch]);

  const handleRefresh = useCallback(() => {
    dispatch(fetchHeadlines());
  }, [dispatch]);

  return (
    <View style={[styles.container]}>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          keyExtractor={() => uuid.v4()?.toString()}
          showsVerticalScrollIndicator={false}
          data={headlines}
          renderItem={({item, index}: any) => <NewsArticle headline={item} />}
          style={styles.list}
          refreshControl={
            <RefreshControl refreshing={loading} onRefresh={handleRefresh} />
          }
        />
      )}
    </View>
  );
};

export default Headlines;
