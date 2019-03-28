import React, { Component } from 'react'
import {
  StyleSheet,
  View
} from 'react-native'
import Sidebar from './Sidebar'
import MailList from './MailList'
import Content from './Content'
import Toolbar from './Toolbar'

class MailClient extends Component {
  constructor (props) {
    super(props)

    this.state = {
      mails: [],
      groups: [],
      activeGroup: null,
      activeMail: null
    }

    this.onSelectGroup = this.onSelectGroup.bind(this)
    this.onSelectMail = this.onSelectMail.bind(this)
  }

  getGroups () {
    return fetch(`http://localhost:8080/groups.json?param=${Date.now()}`)
      .then(response => response.json())
  }

  getMails () {
    return fetch(`http://localhost:8080/mails.json?param=${Date.now()}`)
      .then(response => response.json())
  }

  componentDidMount () {
    Promise.all([ this.getGroups(), this.getMails() ]).then(result => {
      this.setState({ groups: result[0], mails: result[1] })
    })
  }

  onSelectGroup (groupId) {
    this.setState({ activeGroup: groupId })
  }

  onSelectMail (mailId) {
    this.setState({ activeMail: mailId })
  }

  render () {
    const mailList = this.state.mails.filter(mail => mail.groupId === this.state.activeGroup)

    return (
      <View style={styles.container}>
        <Sidebar
          groups={ this.state.groups }
          handleGroupPress={ this.onSelectGroup }
        />
        <View style={ styles.main }>
          <View style={ styles.list }>
            <MailList
              list={ mailList }
              handleMailSelect={ this.onSelectMail }
            />
          </View>
          <View style={ styles.content }>
            <Toolbar />
            <Content
              mail={ this.state.mails.find(mail => mail.id === this.state.activeMail) }
            />
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#555555'
  },
  main: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#c6e28e'
  },
  list: {
    flex: 1
  },
  content: {
    flex: 1,
    flexDirection: 'column'
  }
})

export default MailClient
