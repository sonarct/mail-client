import React, { Component } from 'react'
import {
  StyleSheet,
  View
} from 'react-native'
import uuidv4 from 'uuid/v4'
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
      activeGroupId: null,
      activeMailId: null
    }

    this.onSelectGroup = this.onSelectGroup.bind(this)
    this.onSelectMail = this.onSelectMail.bind(this)
    this.onToggleRead = this.onToggleRead.bind(this)
    this.onDelete = this.onDelete.bind(this)
  }

  fetchGroups () {
    return fetch('https://api.myjson.com/bins/mngga')
      .then(response => response.json())
  }

  fetchMails () {
    return fetch('https://api.myjson.com/bins/1hjn16')
      .then(response => response.json())
  }

  componentDidMount () {
    Promise.all([ this.fetchGroups(), this.fetchMails() ]).then(result => {
      const groups = result[0].map(item => ({ ...item, id: uuidv4() }))
      const mails = result[1].map(item => ({ ...item, id: uuidv4() }))

      this.setState({
        groups,
        mails,
        activeGroupId: groups.find(group => group.name === 'All').id
      })
    })
  }

  onSelectGroup (groupId) {
    this.setState({ activeGroupId: groupId })
  }

  onSelectMail (mailId) {
    this.setState({ activeMailId: mailId })

    if (!this.state.mails.find(mail => mail.id === mailId).read) {
      this.onToggleRead()
    }
  }

  onToggleRead () {
    const mails = this.state.mails.map(mail => mail.id === this.state.activeMailId ?
        { ...mail, read: !mail.read } :
        mail
    )

    this.setState({ mails })
  }

  onDelete () {
    const mails = this.state.mails.filter(mail => mail.id !== this.state.activeMailId)

    this.setState({ mails, activeMailId: null })
  }

  getMails () {
    const activeGroup = this.state.groups.find(group => group.id === this.state.activeGroupId)

    return activeGroup.mail.length === 0 ?
      this.state.mails :
      this.state.mails.filter(mail => {
        return activeGroup.mail.reduce((acc, pattern) => {
          return mail.from.indexOf(pattern) !== -1 || acc
        }, false)
    })
  }

  getMail () {
    return this.state.mails.find(mail => mail.id === this.state.activeMailId)
  }

  render () {
    if (this.state.groups.length === 0) {
      return null
    }

    const mailList = this.getMails()
    const mail = this.getMail()

    return (
      <View style={styles.container}>
        <Sidebar
          activeGroupId={ this.state.activeGroupId }
          groups={ this.state.groups }
          handleGroupPress={ this.onSelectGroup }
        />
        <View style={ styles.main }>
          <View style={ styles.list }>
            <MailList
              list={ mailList }
              handleMailSelect={ this.onSelectMail }
              activeMailId={ this.state.activeMailId }
            />
          </View>
          <View style={ styles.content }>
            <Toolbar
              active={ !!this.state.activeMailId }
              toggleRead={ this.onToggleRead }
              delete={ this.onDelete }
              mail={ mail }
            />
            <Content
              mail={ mail }
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
    flexDirection: 'row'
  },
  main: {
    flex: 1,
    flexDirection: 'row'
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
