import React from 'react'
import Event from './Event'

const Events = (props) => {
  console.log(props.events)
  return props.events.map(event => <Event event={event} />
  )
}

export default Events
