import React from 'react'
import PropTypes from 'prop-types'
import {
  StyleSheet,
  View,
  Button
} from 'react-native'

const propTypes = {
  toggleRead: PropTypes.func,
  delete: PropTypes.func,
  active: PropTypes.bool,
  mail: PropTypes.object
}

function Toolbar (props) {
  return (
    <View style={ styles.container }>
      { props.active && (
        <View style={ styles.buttons }>
          <View
            style={ styles.button }
          >
            <Button
              title={ `Mark as ${ props.mail.read ? 'unread' : 'read' }` }
              onPress={ props.toggleRead }
            />
          </View>
          <View
            style={ styles.button }
          >
            <Button
              title="Delete"
              onPress={ props.delete }
            />
          </View>
        </View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 100,
    backgroundColor: '#DDDDDD',
    padding: 20
  },
  buttons: {
    display: 'flex',
    flexDirection: 'column'
  },
  button: {
    display: 'flex',
    marginBottom: 10
  }
})

Toolbar.propTypes = propTypes

export default Toolbar
