import React from 'react'
import {Button, Card, Image} from 'semantic-ui-react'
import {Message} from 'semantic-ui-react'

const LOW_THRESHOLD = 1.0/3.0
const MED_THRESHOLD = 2.0/3.0

// https://repl.it/repls/MadeupSnowOpposites

  const Event = (props) => (
    <Card>
      <Card.Content>
        <Image floated='right' size='mini' src='' />
        <Card.Header>{`${props.event.event_name}`}</Card.Header>
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

export default Event
