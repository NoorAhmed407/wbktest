import {ActivityIndicator, StyleSheet, View} from 'react-native';
import React, { memo } from 'react';
import {Colors, Metrix} from '../config';

const Loader = ({loading}) => {
  

  return loading ? (
    <View style={styles.loadingContainer}>
      <View style={styles.loadingWrapper}>
        <ActivityIndicator size="large" color={Colors.white} />
      </View>
    </View>
  ) : null;
};

export default memo(Loader);

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    height: Metrix.VerticalSize(),
    width: Metrix.HorizontalSize(),
    position: 'absolute',
    zIndex: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingWrapper: {
    paddingHorizontal: Metrix.VerticalSize(15),
    paddingVertical: Metrix.VerticalSize(15),
    borderRadius: Metrix.VerticalSize(100),
    backgroundColor: Colors.black,
    padding: 2,
  },
});
