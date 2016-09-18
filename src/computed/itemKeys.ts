import {Computed} from 'cerebral'

export default Computed({
  numberOfItems: 'settings.numberOfItems',
  items: 'items'  
}, props => {
  var keys = Object.keys(props.items);

  if (keys.length > props.numberOfItems) {
    keys = keys.slice(0, props.numberOfItems)
  }

  return keys;
})