import { extendTheme } from 'native-base'
import { StyleSheet } from 'react-native'

export const TEMAS = extendTheme({
  colors: {
    gray: {
      300: '#8D8D99'
    },
    blue: {
      500: '#339CFF',
      800: '#0B3B60',
    },
    white: '#fff',
    black: '#000'
  },
  backgroudColor:{
    blue: {
      500: '#339CFF',
      800: '#0B3B60',
    }
  },
fontSizes: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 20,
    xl: 24
  }
})

export const styles = StyleSheet.create({
  Logo:{
    alignSelf: "center",
    marginTop:40,
  }
})
