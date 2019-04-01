import React from 'react'
import PropTypes from 'prop-types'
import {
  Text,
  TouchableWithoutFeedback,
  StyleSheet,
  View
} from 'react-native'

const propTypes = {
  active: PropTypes.bool,
  group: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string
  }),
  handleGroupPress: PropTypes.func
}

function Group (props) {
  return (
    <View key={ props.group.id } style={ styles.container }>
      <TouchableWithoutFeedback
        onPress={ props.handleGroupPress }
      >
        <Text style={ props.active && styles.active }
        >
          { props.group.name }
        </Text>
      </TouchableWithoutFeedback>
    </View>
  )
}

Group.propTypes = propTypes

const styles = StyleSheet.create({
  container: {
    height: 100,
    padding: 16
  },
  active: {
    fontWeight: 'bold'
  }
})

export default Group
