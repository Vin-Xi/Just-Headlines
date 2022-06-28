import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {
  View,
  ActivityIndicator,
  FlatList,
  RefreshControl,
  useColorScheme,
} from 'react-native';
import {useAppDispatch} from '../../redux/store';
import {useSelector} from 'react-redux';
import {getHeadlines} from '../../redux/selectors/headlinesSelector';
import {isLoading} from '../../redux/selectors/statusSelectors';
import {fetchHeadlines} from '../../redux/actions/headlinesAction';
import uuid from 'react-native-uuid';
import styles from './styles';
import NewsArticle from '../../components/NewsArticle';
import NewsTags from '../../components/NewsTags';
import { NewsCategory } from '../../helper/constants';

const Headlines = () => {
  const dispatch = useAppDispatch();
  const headlines = useSelector(getHeadlines);
  const loading = useSelector(isLoading);
  const [selectedCategory,setSelectedCategory] = useState(NewsCategory.technology)
  useEffect(() => {
    dispatch(fetchHeadlines(selectedCategory));
  }, [dispatch,selectedCategory]);

  const handleRefresh = useCallback(() => {
    dispatch(fetchHeadlines(selectedCategory));
  }, [dispatch,selectedCategory]);
  const backgroundColor = useColorScheme() === 'dark' ? '#000' : '#fff';

  return (
    <View style={[styles.container,{backgroundColor}]}>
     <NewsTags 
      selectedCategory={selectedCategory}
      setSelectedCategory={setSelectedCategory}
     />
      {loading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          keyExtractor={() => uuid.v4()?.toString()}
          showsVerticalScrollIndicator={false}
          data={headlines}
          renderItem={({item,index}: any) => <NewsArticle headline={item} index={index} />}
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
