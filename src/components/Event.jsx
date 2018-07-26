import React from 'react'
import {Button, Card, Image} from 'semantic-ui-react'
import {Message} from 'semantic-ui-react'
import highkitty from '../img/highkitty.jpg'
import mediumkitty from '../img/mediumkitty.jpeg'
import lowkitty from '../img/lowkitty.jpeg'

const LOW_THRESHOLD = 1.0/3.0
const MED_THRESHOLD = 2.0/3.0

// https://repl.it/repls/MadeupSnowOpposites

  const Event = (props) => {
    let image = highkitty

    if (props.event.probability < LOW_THRESHOLD) {
      image = lowkitty
    } else if (props.event.probability < MED_THRESHOLD) {
      image = mediumkitty
    }

    return (
      <Card>
      <Card.Content>
        <Image floated='right' size='mini' src={image} />
        <Card.Header> {`${props.event.event_name}`}</Card.Header>
        <Card.Description>
        {`${props.event.venue_name}`}
        </Card.Description>
      </Card.Content>
      <div>
        <Message>% goes here</Message>
      </div>
      <div>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green'>
            More Information
          </Button>
        </div>
      </Card.Content>
      </div>
    </Card>
  )
}

export default Event
