// @flow

import React from 'react'
import { Iterable } from 'immutable'

/**
 * HOC that parse the immutable params to literals to wrapped component
 * @param {React.Component} - component to wrap
 * @returns {React.Component} - WrapComponent
* */
export const toJS = WrappedComponent => wrappedComponentProps => {
  const propsJS = Object.keys(wrappedComponentProps).reduce((newProps, wrappedComponentProp) => {
    return Object.assign({}, newProps, {
      [wrappedComponentProp]: Iterable.isIterable(wrappedComponentProps[wrappedComponentProp]) ? 
        wrappedComponentProps[wrappedComponentProp].toJS() : 
        wrappedComponentProps[wrappedComponentProp]
    })
  }, {})

  return <WrappedComponent {...propsJS} />
}

export default toJS
