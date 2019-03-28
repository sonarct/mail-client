import React from 'react'
import PropTypes from 'prop-types'
import {
  Text,
  TouchableHighlight,
  View
} from 'react-native'

const propTypes = {
  group: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string
  }),
  handleGroupPress: PropTypes.func
}

function Group (props) {
  return (
    <View key={ props.group.id }>
    <TouchableHighlight
      onPress={ props.handleGroupPress }
    >
      <Text>
        { props.group.name }
      </Text>
    </TouchableHighlight>
    </View>
  )
}

Group.propTypes = propTypes

export default Group
