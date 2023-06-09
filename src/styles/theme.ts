import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  colors: {
    gray: {
      '900': '#181b23',
      '800': '#1f2029',
      '700': '#353646',
      '600': '#4B4D63',
      '500': '#616480',
      '400': '#797D9A',
      '300': '#9699B0',
      '200': '#B3B5C6',
      '100': '#D1D2DC',
      '50':  '#EEEEF2',
    },
    teal: {
      '900': '#1D4044',
      '50':  '#E6FFFA',
    }
  },
  fonts: {
    heading: 'Roboto',
    body: 'Roboto',
  },
  styles: {
    global: {
      body: {
        bg: 'gray.900',
        color: 'gray.50'
      }
    }
  },
  customStyles:{
   filled: {
     option: {
       _hover: { backgroundColor: "teal.200" },
       _selected: { backgroundColor: "teal.500", color: "white" },
       backgroundColor: "white",
       color: "black"
     }
   }
 }
})
