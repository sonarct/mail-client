import React from 'react'
import PropTypes from 'prop-types'
import { Text, View, TouchableOpacity, StyleSheet, FlatList } from 'react-native'

const propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    subject: PropTypes.string,
    id: PropTypes.string
  })),
  activeMailId: PropTypes.string,
  handleMailSelect: PropTypes.func
}

function MailList (props) {
  return (
    <FlatList
      data={ props.list.map(mail => ({ ...mail, key: mail.id })) }
      renderItem={ ({ item }) => (
          <TouchableOpacity
            key={ item.id }
            onPress={ () => props.handleMailSelect(item.id) }
            style={ { ...styles.mail, ...(props.activeMailId === item.id) && styles.active } }
          >
            <Text style={ !item.read && styles.unread }>
              { item.from }
            </Text>
            <Text
              style={ !item.read && styles.unread }
              ellipsizeMode="tail"
              numberOfLines={ 1 }
            >
              { item.subject }
            </Text>
          </TouchableOpacity>
      )}
      ItemSeparatorComponent={ () => (
        <View style={ styles.separator } />
      )}
    >
    </FlatList>
  )
}

MailList.propTypes = propTypes

const styles = StyleSheet.create({
  mail: {
    height: 60,
    padding: 16,
    backgroundColor: '#FFFFFF'
  },
  unread: {
    fontWeight: 'bold'
  },
  active: {
    backgroundColor: '#BBBBBB'
  },
  separator: {
    height: 1,
    backgroundColor: '#444444'
  }
})

export default MailList;
