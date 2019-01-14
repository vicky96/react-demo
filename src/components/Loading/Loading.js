import React from 'react'
import { string } from 'prop-types'
import loadingImg from './loading.gif'
import './Loading.less'

const Loading = ({ size = '60', width, height }) => {
  const w = width || size + 'px'
  const h = height || size + 'px'
  const l = - (width || size)/2 + 'px'
  const t = -(height || size)/2 + 'px'
  return (
    <div className="loading" style={{ marginLeft: l, marginTop: t }}>
      <img src={loadingImg} alt="" style={{ width: w, height: h }} />
    </div>
  )
}

const propTypes = {
  size: string
}

Loading.propTypes = propTypes

Loading.defaultProps = {
  size: '60'
}

export default Loading
