import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {memo, useEffect, useState} from 'react';
import {fonts, getFavoritesMovies} from '../config/Constants';
import {Colors, Metrix} from '../config';
import {ListEmpty, MovieCard} from '.';

const Favorites = () => {
  const [likedMovies, setLikedMovies] = useState([]);

  const renderMovies = ({item}) => (
    <MovieCard
      data={item}
      isLiked
      likedMovies={likedMovies}
      setLikedMovies={setLikedMovies}
    />
  );

  useEffect(() => {
    getFavoritesMovies().then(res => setLikedMovies(res ?? {}));
  }, []);
  return (
    <View>
      <Text style={styles.favoriteTextStyle}>Your Favorite Movies</Text>
      <View style={{marginVertical: Metrix.VerticalSize(20)}}>
        <FlatList
          data={Object.values(likedMovies)}
          renderItem={renderMovies}
          keyExtractor={item => item?.id?.toString()}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={<ListEmpty message={'No Item Found!'} />}
          style={{height: Metrix.VerticalSize(570)}}
        />
      </View>
    </View>
  );
};

export default memo(Favorites);

const styles = StyleSheet.create({
  favoriteTextStyle: {
    color: Colors.white,
    fontFamily: fonts.Bold,
    marginVertical: Metrix.VerticalSize(10),
    fontSize: Metrix.customFontSize(18),
  },
});
