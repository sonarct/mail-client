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
      {
        props.mail && (
          <Text>{ props.mail.content }</Text>
        )
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 20
  }
})

Content.propTypes = propTypes

export default Content
