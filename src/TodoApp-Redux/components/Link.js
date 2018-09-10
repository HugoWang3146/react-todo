import React from 'react'
import { Button } from '@material-ui/core'

const Link = ({ active, children, onClick }) => (
  <Button variant="contained" color="primary" disabled={active} onClick={onClick} >{children}</Button>
)

export default Link
