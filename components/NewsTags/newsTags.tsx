import React from 'react';
import {FlatList} from 'react-native';
import {NewsCategory} from '../../helper/constants';
import Tags from '../Tags';
import styles from './styles';

const NewsTags: React.FC<{
  selectedCategory: string;
  setSelectedCategory: Function;
}> = ({selectedCategory, setSelectedCategory}) => {
  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={Object.keys(NewsCategory)}
      keyExtractor={(item: string) => item}
      renderItem={({item}: any) => (
        <Tags
          category={item}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
  )}
      style={styles.list}
      contentContainerStyle={styles.contentContainer}></FlatList>
  );
};

export default NewsTags;
