import React from 'react'
import PropTypes from 'prop-types'
import {
  StyleSheet,
  View
} from 'react-native'
import GroupList from './GroupList'

const propTypes = {
  activeGroupId: PropTypes.string,
  groups: PropTypes.arrayOf(PropTypes.object),
  handleGroupPress: PropTypes.func
}

function Sidebar (props) {
  return (
    <View style={ styles.container }>
      <GroupList
        activeGroupId={ props.activeGroupId }
        groups={ props.groups }
        handleGroupPress={ props.handleGroupPress }
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#AAAAAA',
    width: 300
  }
})

Sidebar.propTypes = propTypes

export default Sidebar
