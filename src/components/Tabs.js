import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React, {memo} from 'react';
import {Colors, Metrix} from '../config';
import {fonts} from '../config/Constants';

const Tabs = ({tabs, selected = 0, setSelectedTab, tabStyle = {}}) => {
  return (
    <View style={styles.tabContainer}>
      {tabs?.map((val, ind) => (
        <TouchableOpacity
          key={ind + ''}
          activeOpacity={0.7}
          onPress={() => setSelectedTab(ind)}
          style={[
            styles.tab,
            tabStyle,
            {
              backgroundColor: selected == ind ? Colors.primary : Colors.gray,
            },
          ]}>
          <Text
            numberOfLines={1}
            style={[styles.tabText, {color: Colors.white}]}>
            {val}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default memo(Tabs);

const styles = StyleSheet.create({
  tabContainer: {
    backgroundColor: Colors.gray,
    borderRadius: 8,
    flexDirection: 'row',
  },
  tabContainerWrapper: {
    marginVertical: Metrix.VerticalSize(10),
    borderWidth: 1,
    borderColor: Colors.secondary,
    backgroundColor: '#F9FAFB',
    borderRadius: 8,
    padding: Metrix.VerticalSize(2),
  },
  tab: {
    width: '49%',
    paddingVertical: Metrix.VerticalSize(10),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginHorizontal: Metrix.HorizontalSize(2),
    marginVertical: Metrix.VerticalSize(2),
  },
  tabText: {fontSize: Metrix.customFontSize(14), fontFamily: fonts.SemiBold},
});
