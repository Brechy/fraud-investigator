import React, { Component } from 'react'
import { Button, Modal } from 'semantic-ui-react'

class MoreInfo extends Component {
  state = { open: false }

  show = size => () => this.setState({ size, open: true })
  close = () => this.setState({ open: false })

  render() {
    const { open, size } = this.state

    return (
      <div>
        <Button basic color="blue" onClick={this.show('tiny')}>More Information</Button>

        <Modal size={size} open={open} onClose={this.close}>
          <Modal.Header>More information</Modal.Header>
          <Modal.Content>
            <p>How would you like to proceed?</p>
          </Modal.Content>
          <Modal.Actions>
            <Button negative>Report Event</Button>
            <Button positive icon='checkmark' labelPosition='right' content='Approve Event' />
          </Modal.Actions>
        </Modal>
      </div>
    )
  }
}

export default MoreInfo
