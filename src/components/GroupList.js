import React from 'react'
import PropTypes from 'prop-types'
import {
  View
} from 'react-native'
import Group from './Group'

const propTypes = {
  groups: PropTypes.arrayOf(PropTypes.object),
  handleGroupPress: PropTypes.func
}

function GroupList (props) {
  return (
    <View>
      {
        props.groups.map(group => (
          <Group
            group={ group }
            key={ group.id }
            handleGroupPress={ () => props.handleGroupPress(group.id) }
          />
        ))
      }
    </View>
  )
}

GroupList.propTypes = propTypes

export default GroupList
