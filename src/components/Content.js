import React from 'react'
import PropTypes from 'prop-types'
import {
  StyleSheet,
  Text,
  View
} from 'react-native'

const propTypes = {
  mail: PropTypes.object
}

function Content (props) {
  return (
    <View style={ styles.container }>
      <Text>Content</Text>
      {
        props.mail ? (
          <Text>{ props.mail.body }</Text>
        ) : (
          <Text>initial empty state</Text>
        )
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e28ed9'
  }
})

Content.propTypes = propTypes

export default Content
