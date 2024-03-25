import { StyleSheet, Text } from 'react-native'
import React, { memo } from 'react'
import { Colors, Metrix } from '../config'
import { fonts } from '../config/Constants'

const ListEmpty = ({message}) => {
  return (
    <Text style={styles.listEmptyStyle}>{message}</Text>
  )
}

export default memo(ListEmpty)

const styles = StyleSheet.create({
    listEmptyStyle: {
        fontFamily: fonts.Regular,
        color: Colors.white,
        fontSize: Metrix.customFontSize(14),
        textAlign: 'center',
        marginTop: Metrix.VerticalSize(20)
      },
})