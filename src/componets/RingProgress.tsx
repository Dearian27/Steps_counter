import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import Svg, { Circle, CircleProps, Rect } from 'react-native-svg';
import Animated, { useAnimatedProps, useSharedValue, withTiming } from 'react-native-reanimated';
import { AntDesign } from '@expo/vector-icons';

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

type RingProps = {
  progress: number;
  radius?: number;
  color?: string;
  strokeWidth?: number;
}
const RingProgress: React.FC<RingProps> = ({ progress, radius = 75, color = '#EE0F55', strokeWidth = 20 }) => {
  const innerRadius = radius - strokeWidth / 2;
  const circumference = 2 * Math.PI * innerRadius;

  const fill = useSharedValue(0);
  const animatedProps = useAnimatedProps(() => ({
    strokeDasharray: [circumference * fill.value, circumference],
  }))
  const DefaultCircleProps: CircleProps = {
    cx: radius,
    cy: radius,
    r: innerRadius,
    stroke: "#EE0F55",
    strokeWidth: strokeWidth,
    strokeLinecap: 'round',
    originX: radius,
    originY: radius,
    rotation: "-90",
  }

  useEffect(() => {
    fill.value = withTiming(progress, { duration: 2000 });
  }, [progress]);
  return (
    <View style={{
      height: radius * 2,
      width: radius * 2,
      // backgroundColor: "#fff"
    }}>
      <Svg>
        {/* Background circle */}
        <Circle
          {...DefaultCircleProps}
          opacity={0.22}
        />
        {/* Foreground circle */}
        <AnimatedCircle
          animatedProps={animatedProps}
          {...DefaultCircleProps}
        />
        <AntDesign
          name="arrowright"
          size={strokeWidth * 0.7}
          color="white"
          style={{
            position: "absolute",
            alignSelf: "center",
            top: (strokeWidth - strokeWidth * 0.7) / 2,
          }}
        />
      </Svg>
    </View>
  )
}
export default RingProgress