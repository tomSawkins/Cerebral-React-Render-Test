import * as React from 'react'
import {connect} from 'cerebral-view-react'
import PropSignals from '../../signals';

interface PropsIn {
  itemKey: "string"
}

interface Props extends PropSignals, PropsIn {
  item: any
}

export default connect<PropsIn, Props>((props) => ({  
  item: "items."+props.itemKey   
}), function ListItem(props) {
  
  const onClick = () => {
    props.signals.changeActive({itemId: props.itemKey})
  }
  console.log("Render: " + props.itemKey)
  return (
    <li onClick={onClick} className={(props.item.isActive? "active" : "")}>
      {props.item.name} 
    </li>
  )
})