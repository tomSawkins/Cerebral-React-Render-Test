import * as React from 'react'
import {connect} from 'cerebral-view-react'
import PropSignals from '../../signals';

interface PropsIn extends PropSignals {
  item: any
}

interface Props extends PropSignals, PropsIn {
  
}

export default connect<Props>({
}, function ListItem(props: Props) {
  
  const onClick = () => {
    props.signals.changeActive({itemId: props.item.index})
  }
  console.log("Render: " + props.item.index)
  return (
    <li onClick={onClick} className={(props.item.isActive? "active" : "")}>
      {props.item.name} 
    </li>
  )
});