import * as React from 'react'
import {connect} from 'cerebral-view-react'
import KeyList from '../KeyList'
import ItemList from '../ItemList'

interface Props {
  type: string
}

export default connect<Props>({
  type: 'settings.listType'
},
  function App(props) {
    return (
      <div>
         {(props.type == "key" && <KeyList /> )}
         {(props.type == "item" && <ItemList /> )}
      </div>
    )
  }
)
