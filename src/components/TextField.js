import React, { memo } from 'react';
import { TextInput, View, StyleSheet } from 'react-native';
import { Colors, Metrix } from '../config';

function TextField({
  secureTextEntry = false,
  onChangeText = () => { },
  value = '',
  placeholderTextColor = Colors.white,
  style = {},
  multiline = false,
  keyboardType = 'default',
  noOfLines = 1,
  placeholder = "",
  disable = true,
  autofocus=false,
  onFocus=()=>{},
  icon=null
}) {
  return (
    
    <View>
       {
        icon && (
          <View style={styles.iconContainer}>
            {icon}
          </View>
        )
       }
        <TextInput
          autoFocus={autofocus}
          style={{ ...styles.input, ...style, paddingLeft: Metrix.HorizontalSize(icon ? 40 : 20), textAlignVertical: multiline ? 'top' : 'center' }}
          placeholder={placeholder}
          keyboardType={keyboardType}
          value={value}
          numberOfLine={noOfLines}
          multiline={multiline}
          secureTextEntry={secureTextEntry}
          onChangeText={onChangeText}
          placeholderTextColor={placeholderTextColor}
          editable={disable}
          onFocus={onFocus}
        />
    </View>

  );
}

export default memo(TextField);

const styles = StyleSheet.create({
  iconContainer: {
    position: 'absolute',
    zIndex: 10,
    top: Metrix.VerticalSize(20),
    left: Metrix.HorizontalSize(15),
  },
  input: {
    backgroundColor: Colors.gray,
    marginTop: Metrix.VerticalSize(10),
    width: '100%',
    height: Metrix.VerticalSize(40),
    fontSize: Metrix.customFontSize(13),
    padding: 5,
    color: Colors.white,
    borderRadius: 8,
    borderColor: Colors.white,
    borderWidth: 1,
  },
});
