import React, { Component } from 'react';
import { Animated, Easing, Pressable } from 'react-native';

interface Props {
  children: React.ReactNode;
  disabled: boolean;
  hitSlop: object;
  onLongPress?: () => void;
  onPress: () => void;
  testID?: string;
  touchableStyle: object;
  viewStyle: object;
}

class AnimatedSqueeze extends Component<Props> {
  static defaultProps = {
    disabled: false,
    hitSlop: {},
    onLongPress: () => {},
    onPress: () => {},
    testID: null,
    touchableStyle: {},
    viewStyle: {},
  };

  SqueezeValue = new Animated.Value(0);

  animateIn = () => {
    this.SqueezeValue.setValue(0);
    Animated.timing(this.SqueezeValue, {
      duration: 200,
      easing: Easing.linear,
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  animateOut = () => {
    this.SqueezeValue.setValue(0);
    Animated.timing(this.SqueezeValue, {
      duration: 200,
      easing: Easing.linear,
      toValue: 0,
      useNativeDriver: true,
    }).start();
  };

  scaleAndGoTo = (longPress: boolean) => {
    const { onLongPress, onPress } = this.props;
    this.animateOut();
    if (longPress && onLongPress) {
      onLongPress();
    } else {
      onPress();
    }
  };

  render() {
    const { children, disabled, hitSlop, touchableStyle, viewStyle, testID } = this.props;
    const squeezee = this.SqueezeValue.interpolate({
      inputRange: [0, 0.3, 0.6, 1],
      outputRange: [1, 0.9, 0.8, 0.7],
    });

    return (
      <Animated.View testID={testID} style={[{ transform: [{ scale: squeezee }] }, viewStyle]}>
        <Pressable
          disabled={disabled}
          hitSlop={hitSlop}
          onLongPress={this.scaleAndGoTo.bind(this, true)}
          onPress={this.scaleAndGoTo.bind(this, false)}
          onPressIn={this.animateIn}
          onPressOut={this.animateOut}
          style={touchableStyle}
        >
          {children}
        </Pressable>
      </Animated.View>
    );
  }
}

export default AnimatedSqueeze;
