import Alert from "@mui/material/Alert"

import React from 'react'

export default function Message({children, ...props}) {
  return (
    <Alert {...props} sx={{borderRadius: "0"}} severity={props.severity}>
      {children}
    </Alert>
  )
}
