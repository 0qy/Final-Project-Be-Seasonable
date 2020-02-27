import React from 'react'
import { connect } from 'react-redux'

function Waiting (props) {
  return props.pending
    ? <div data-testid={'waiting'}>
      <img style={{ width: '200px' }} src='/placeholder.gif' alt='🌶️ HOLD UP BUDDY 🌶️' />
    </div>
    : null
}

function mapStateToProps (state) {
  return {
    pending: state.pending
  }
}

export default connect(mapStateToProps)(Waiting)
