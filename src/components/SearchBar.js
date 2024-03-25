import { StyleSheet,TouchableOpacity, View } from 'react-native'
import React, { memo } from 'react'
import { Colors, Icons, Metrix } from '../config'
import TextField from './TextField'

const SearchBar = ({searchText, setSearchText, onSearch, loading}) => {
  return (
    <View>
        <TextField
          value={searchText}
          placeholder={'Search The Movie'}
          onChangeText={text => setSearchText(text)}
          icon={
            <Icons.FontAwesome
              name={'search'}
              color={Colors.white}
              size={Metrix.customFontSize(18)}
            />
          }
        />
        <TouchableOpacity
          hitSlop={{left: 10, right: 10, top: 10, bottom: 10}}
          disabled={loading}
          onPress={onSearch}
          style={styles.searchBtnStyle}>
          <Icons.FontAwesome
            name={'search'}
            color={Colors.white}
            size={Metrix.customFontSize(16)}
          />
        </TouchableOpacity>
      </View>
  )
}

export default memo(SearchBar)


const styles = StyleSheet.create({
    searchBtnStyle: {
      position: 'absolute',
      zIndex: 100,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 10,
      borderRadius: 5,
      backgroundColor: Colors.primary,
      top: Metrix.VerticalSize(11),
      right: Metrix.HorizontalSize(3),
    },
  });