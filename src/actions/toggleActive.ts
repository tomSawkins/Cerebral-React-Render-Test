function toggleActive ({input, state}) {

  var item = state.get('items.'+input.itemId);
  state.set('items.'+input.itemId+'.isActive', !item.isActive)
}

export default toggleActive
