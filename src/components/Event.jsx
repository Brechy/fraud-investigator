import React from 'react'
import {Card, Image} from 'semantic-ui-react'
import {Message} from 'semantic-ui-react'
import highkitty from '../img/highkitty.jpg'
import mediumkitty from '../img/mediumkitty.jpeg'
import lowkitty from '../img/lowkitty.jpeg'
import MoreInfo from './MoreInfo'
import '../App.css';


const LOW_THRESHOLD = 1.0/3.0
const MED_THRESHOLD = 2.0/3.0

const percent = (x) => {
x*=100
return x.toFixed(1) + '%'
}

  const Event = (props) => {
    let image = highkitty
    let color = "red"

    if(props.event.probability < LOW_THRESHOLD) {
      image = lowkitty
      color = "green"
    } else if (props.event.probability < MED_THRESHOLD) {
      image = mediumkitty
      color = "yellow"
    }

    return (
    <Card>
      <Card.Content>
        <Image floated='right' size='mini' src={image} />
        <Card.Header> {`${props.event.event_name}`}</Card.Header>
        <Card.Description>@
          {`${props.event.venue_name}`}
        </Card.Description>
        </Card.Content>
          <Message color={color}>There is a {percent(props.event.probability)} chance of fraud</Message>
        <div>
        <Card.Content extra>
          <div className='ui two buttons'>
            <MoreInfo country={props.event.country} currency={props.event.currency} max={props.event.max_sales} tickets={props.event.tickets_sold} />
          </div>
        </Card.Content>
        </div>
      </Card>
  )
}

export default Event
