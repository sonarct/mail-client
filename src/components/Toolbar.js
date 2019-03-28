import React from 'react'
import {
  StyleSheet,
  Text,
  View
} from 'react-native'

function Toolbar (props) {
  return (
    <View style={ styles.container }>
      <Text>Toolbar</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 40,
    backgroundColor: '#bffcdf'
  }
})

export default Toolbar
