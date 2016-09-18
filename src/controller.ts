import {Controller} from 'cerebral'
import model from './model'
import changeActive from './chains/changeActive'
import Devtools from 'cerebral-module-devtools'

const controller = Controller(model)

export interface CoreSignals {
  changeActive: (input: { itemId: string }) => void
}

controller.addSignals({
  changeActive: changeActive
})

controller.addModules({
  devtools: Devtools(),
})

export default controller
