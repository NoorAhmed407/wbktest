import { Animated, Easing, StyleSheet, Text } from 'react-native'
import React, { memo, useRef, useEffect } from 'react'
import { Colors, Metrix } from '../config';
import { fonts } from '../config/Constants';


const AnimatedText = ({title, color=Colors.white, animationDelayInSeconds=1, titleStyle = {}}) => {
    const scaleAnim = useRef(new Animated.Value(0.5)).current;
    const opacityAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
      Animated.parallel([
        Animated.timing(scaleAnim, {
          toValue: 1,
          duration: animationDelayInSeconds * 1000,
          easing: Easing.elastic(1),
          useNativeDriver: true,
        }),
        Animated.timing(opacityAnim, {
          toValue: 1,
          duration: animationDelayInSeconds * 1000,
          useNativeDriver: true,
        })
      ]).start();
    }, [scaleAnim, opacityAnim]);

  return (
    <Animated.View style={{transform: [{scale: scaleAnim}], opacity: opacityAnim}}>
      <Text style={{ ...styles.title, color: color , ...titleStyle,}}>{title}</Text>
    </Animated.View>
  )
}

export default memo(AnimatedText);

const styles = StyleSheet.create({
    title: { fontFamily: fonts.Medium, fontSize: Metrix.customFontSize(24)},
    subTitle: { fontFamily: fonts.Regular, fontSize: Metrix.customFontSize(14)}
});
