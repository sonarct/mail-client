import React from 'react'
import PropTypes from 'prop-types'
import { Text, View, TouchableOpacity } from 'react-native'

const propTypes = {
  list: PropTypes.arrayOf(PropTypes.object),
  handleMailSelect: PropTypes.func
}

function MailList (props) {
  return (
    <View>
      {
        props.list.map(mail => (
          <TouchableOpacity
            key={ mail.id }
            onPress={ () => props.handleMailSelect(mail.id) }
          >
            <Text>
              { mail.theme }
            </Text>
          </TouchableOpacity>
        ))
      }
    </View>
  )
}

MailList.propTypes = propTypes

export default MailList;
