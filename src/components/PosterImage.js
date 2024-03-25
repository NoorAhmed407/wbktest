import {ActivityIndicator,View, Image, StyleSheet} from 'react-native';
import React, {memo, useState} from 'react';
import {IMAGE_URI} from '../../env';
import {Colors, Metrix} from '../config';

const PosterImage = ({path}) => {
  const [imageLoader, setImageLoader] = useState(false);
  return (
    <View style={{width: Metrix.VerticalSize(120)}}>
      {imageLoader && (
        <View style={styles.imageLoaderContainer}>
          <ActivityIndicator size={'small'} color={Colors.primary} />
        </View>
      )}
      <Image
        source={{
          uri: `${IMAGE_URI}${path}`,
        }}
        style={styles.image}
        resizeMode={'stretch'}
        onLoadStart={() => setImageLoader(true)}
        onLoadEnd={() => setImageLoader(false)}
      />
    </View>
  );
};

export default memo(PosterImage);
const styles = StyleSheet.create({
  imageLoaderContainer: {
    marginTop: Metrix.VerticalSize(65),
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
  },
});
