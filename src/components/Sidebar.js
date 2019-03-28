import React from 'react'
import PropTypes from 'prop-types'
import {
  StyleSheet,
  Text,
  View
} from 'react-native'
import GroupList from './GroupList'

const propTypes = {
  groups: PropTypes.arrayOf(PropTypes.object),
  handleGroupPress: PropTypes.func
}

function Sidebar (props) {
  return (
    <View style={ styles.container }>
      <Text>Sidebar</Text>
      <GroupList
        groups={ props.groups }
        handleGroupPress={ props.handleGroupPress }
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#4286f4',
    width: 300
  }
})

Sidebar.propTypes = propTypes

export default Sidebar
