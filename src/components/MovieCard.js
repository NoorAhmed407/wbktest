import {StyleSheet, Text, View} from 'react-native';
import React, {memo} from 'react';
import {Colors, Icons, Metrix} from '../config';
import {fonts, setFavoriteData} from '../config/Constants';
import PosterImage from './PosterImage';
import IconButton from './IconButton';
import Share from 'react-native-share';
import {IMAGE_URI} from '../../env';

function MovieCard({data, likedMovies, setLikedMovies}) {

  
  const onShare = async () => {
    try {
      const shareResponse = await Share.open({
        subject: 'Best Movie',
        message: 'Must Watch this movie ',
        url: `${IMAGE_URI}${data?.poster_path ?? ''}`,
      });
      console.log(shareResponse);
    } catch (err) {
      console.log('error', err?.message);
    }
  };

  const onLike = async () => {
    const newLikedMovies = {...likedMovies};

    if (!newLikedMovies[data?.id]) {
      newLikedMovies[data?.id] = data;
    } else {
      delete newLikedMovies[data?.id + ''];
    }

    setLikedMovies(newLikedMovies);

    //Saving in Local storage.
    setFavoriteData(newLikedMovies);
  };

  return (
    <View style={styles.cardContainer}>
      <PosterImage path={data?.poster_path} />
      <View style={styles.movieDetailsComtaimer}>
        <Text style={styles.movieNameStyle} numberOfLines={2}>
          {data?.title}
        </Text>
        <View>
          <Text style={styles.yearStyle}>
            {data?.release_date
              ? new Date(data?.release_date).getFullYear()
              : 'N/A'}{' '}
            | {data?.release_date ? data?.release_date : 'N/A'}
          </Text>
          <View style={{marginTop: Metrix.VerticalSize(40)}}>
            <View style={styles.ratinContaner}>
              <Icons.AntDesign
                name={'star'}
                color={Colors.primary}
                size={Metrix.customFontSize(18)}
              />
              <Text style={styles.ratingStyle}>{data?.popularity}</Text>
            </View>
            <View
              style={[
                styles.ratinContaner,
                {marginTop: Metrix.VerticalSize(20)},
              ]}>
              <IconButton iconName={'share'} onPress={onShare} />
              <IconButton
                iconName={likedMovies[data?.id] ? 'heart' : 'heart-outlined'}
                style={{marginLeft: Metrix.HorizontalSize(10)}}
                onPress={onLike}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    marginVertical: Metrix.VerticalSize(10),
    height: Metrix.VerticalSize(180),
  },

  movieDetailsComtaimer: {
    width: '60%',
    marginTop: Metrix.VerticalSize(5),
    marginLeft: Metrix.HorizontalSize(10),
  },
  movieNameStyle: {
    fontFamily: fonts.Bold,
    fontSize: Metrix.customFontSize(18),
    color: Colors.white,
  },
  yearStyle: {
    fontFamily: fonts.Light,
    fontSize: Metrix.customFontSize(14),
    color: Colors.white,
    marginTop: Metrix.VerticalSize(5),
  },
  ratingStyle: {
    fontFamily: fonts.Bold,
    fontSize: Metrix.customFontSize(22),
    color: Colors.primary,
    marginLeft: Metrix.VerticalSize(5),
  },
  ratinContaner: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default memo(MovieCard);
