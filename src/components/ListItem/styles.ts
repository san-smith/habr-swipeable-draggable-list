import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  root: {
    height: 80,
    backgroundColor: '#031d44',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: { 
    fontWeight: 'bold', 
    color: '#e57a44',
    fontSize: 32,
  },
  active: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
  hidden: {
    height: 80,
    backgroundColor: '#d6eadf',
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingRight: 80,
  }
})