import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import Svg, { Circle, Rect } from 'react-native-svg';
import Animated, { useAnimatedProps, useSharedValue, withTiming } from 'react-native-reanimated';

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
          cx={radius}
          cy={radius}
          r={innerRadius}
          opacity={0.22}
          stroke="#EE0F55"
          strokeWidth={strokeWidth}
        />
        {/* Foreground circle */}
        <AnimatedCircle
          animatedProps={animatedProps}
          cx={radius}
          cy={radius}
          r={innerRadius}
          stroke="#EE0F55"
          strokeWidth={strokeWidth}
          strokeLinecap='round'
          rotation="-90"
          originX={radius}
          originY={radius}
        />
      </Svg>
    </View>
  )
}
export default RingProgress