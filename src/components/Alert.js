import React from 'react'

function Alert(param) {
  return (

 param.Alert && <div className={`alert alert-${param.Alert.type} alert-dismissible fade show`} role="alert">
  <strong>{param.Alert.msg}...</strong>
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
  )
}

export default Alert