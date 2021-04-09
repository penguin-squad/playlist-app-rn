import * as React from 'react';
import { Text as DefaultText, View as DefaultView, TextInput as DefaultTextInput, TouchableOpacity as DefaultTouchableOpacity } from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';

export function useThemeColor(
  props: { light?: string; dark?: string },
  colorName: keyof typeof Colors.light & keyof typeof Colors.dark
) {
  const theme = useColorScheme();
  const colorFromProps = props[theme];

  if (colorFromProps) {
    return colorFromProps;
  } else {
    return Colors[theme][colorName];
  }
}

type ThemeProps = {
  lightColor?: string;
  darkColor?: string;
};

type ButtonProps = {
  btnType?: keyof typeof Colors.light & keyof typeof Colors.dark;
};


export type TextProps = ThemeProps & DefaultText['props'];
export type TextInputProps = ThemeProps & DefaultTextInput['props'];
export type ViewProps = ThemeProps & DefaultView['props'];
export type TouchableOpacityProps = ThemeProps & ButtonProps & DefaultTouchableOpacity['props'];

export function Text(props: TextProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

  return <DefaultText style={[{ color }, style]} {...otherProps} />;
}


export function TextInput(props: TextInputProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');
  const selectionColor = useThemeColor({ light: lightColor, dark: darkColor }, 'selectionColor');

  return <DefaultTextInput
    style={[{ color }, style]} {...otherProps} />;
}

export function View(props: ViewProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');

  return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />;
}

export function TouchableOpacity(props: TouchableOpacityProps) {
  const { style, lightColor, darkColor, btnType = 'primary', ...otherProps } = props;
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, btnType);
  return <DefaultTouchableOpacity 
    style={[{justifyContent: 'center', borderRadius: 7, backgroundColor }, style]} {...otherProps} />;
}