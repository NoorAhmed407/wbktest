import {Alert, FlatList, Keyboard, View} from 'react-native';
import React, {memo, useEffect, useRef, useState} from 'react';
import {Metrix} from '../config';
import {ListEmpty, Loader, MovieCard} from '.';
import {BASE_URL, TOKEN} from '../../env';
import {getFavoritesMovies} from '../config/Constants';
import SearchBar from './SearchBar';

const SearchMovies = () => {
  const [loading, setLoading] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [movies, setMovies] = useState([]);
  const [likedMovies, setLikedMovies] = useState({});
  const pageNo = useRef();

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

  const onSearch = () => {
    Keyboard.dismiss();
    pageNo.current = 1;

    if (!searchText) {
      return Alert.alert('Error', 'Please search something');
    }

    getMovies();
  };

  const getMovies = async () => {
    const endPoint = `/search/movie?query=${searchText}&page=${pageNo.current}`;
    const option = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${TOKEN}`,
      },
    };
    setLoading(true);
    try {
      let response = await fetch(`${BASE_URL}${endPoint}`, option);
      let data = await response?.json();
      setLoading(false);

      const {results} = data;

      setMovies(pageNo.current == 1 ? results : [...movies, ...results]);
      pageNo.current = pageNo.current + 1;
    } catch (err) {
      setLoading(false);
      return Alert.alert('Error', 'Something Went Wrong');
    }
  };

  return (
    <View>
      <SearchBar
        searchText={searchText}
        setSearchText={setSearchText}
        loading={loading}
        onSearch={onSearch}
      />
      <View style={{marginVertical: Metrix.VerticalSize(20)}}>
        <FlatList
          data={movies}
          renderItem={renderMovies}
          keyExtractor={item => item?.id?.toString()}
          showsVerticalScrollIndicator={false}
          onEndReached={() => (movies?.length > 0 ? getMovies() : null)}
          ListEmptyComponent={
            <ListEmpty message={'No Item Found! Search Your Favorite Movie'} />
          }
          onEndReachedThreshold={0.1}
          style={{height: Metrix.VerticalSize(570)}}
        />
      </View>
      <Loader loading={loading} />
    </View>
  );
};

export default memo(SearchMovies);
