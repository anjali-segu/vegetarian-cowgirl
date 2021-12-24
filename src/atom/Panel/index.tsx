import * as React from 'react';
import ReactDOM from 'react-dom';
import Box from '@mui/material/Box';
import {makeStyles} from '@mui/styles'


interface Props {
  children: any,
  backgroundColor?: string,
}

const useStyles = makeStyles(
  (theme: any) => {
    return {
      panel: (props:Props) => {
        return {
          paddingBottom: theme.spacing(7),
          paddingLeft: theme.spacing(5),
          paddingRight: theme.spacing(5),
          paddingTop: theme.spacing(10),
          backgroundColor: props.backgroundColor,
        }
      }
    }
  }
)

const Panel = (props:Props) => {
  const {children} = props
  const classes = useStyles(props)

  return (
    <Box className={classes.panel}>
      {children}
    </Box>
  )
}

Panel.defaultProps = {
  backgroundColor: '000000',
}

export default Panel
