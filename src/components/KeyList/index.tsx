import * as React from 'react'
import {connect} from 'cerebral-view-react'
import PropSignals from '../../signals';
import itemKeysComputed from '../../computed/itemKeys'
import ListItem from './ListItem'

interface Props extends PropSignals {
  itemKeys: string[]
}

export default connect<Props>({
  itemKeys: itemKeysComputed()
},  function KeyList(props: Props) {
    return (
      <ul>      
        { props.itemKeys.map(x => <ListItem key={x} itemKey={x} />) }     
      </ul>
    )
  }
)