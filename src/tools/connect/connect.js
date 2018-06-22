import { connect } from 'react-redux'
import toJS from './toJS'

/**
 * connect to store and parse the immutable object to literal
 * configs -> Presentation -> Container
* */
const connectToJS = (...configs) => Component => connect(...configs)(toJS(Component))

export default connectToJS
