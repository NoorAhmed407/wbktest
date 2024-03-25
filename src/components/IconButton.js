import {TouchableOpacity} from 'react-native';
import React, { memo } from 'react';
import {Colors, Icons, Metrix} from '../config';

const IconButton = ({onPress, iconName, style}) => {
  return (
    <TouchableOpacity
      style={style}
      onPress={onPress}
      hitSlop={{top: 5, left: 5, right: 5, bottom: 5}}>
      <Icons.Entypo
        name={iconName}
        color={Colors.primary}
        size={Metrix.customFontSize(24)}
      />
    </TouchableOpacity>
  );
};

export default memo(IconButton);
