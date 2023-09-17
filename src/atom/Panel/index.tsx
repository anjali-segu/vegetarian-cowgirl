import * as React from 'react';
import Box from '@mui/material/Box';
import { theme } from '../../utils/theme';


interface Props {
  children: React.ReactElement,
  backgroundColor?: string,
}


const Panel = (props: Props) => {
  const { children } = props

  return (
    <Box sx={{
      paddingBottom: theme.spacing(7),
      paddingLeft: theme.spacing(5),
      paddingRight: theme.spacing(5),
      paddingTop: theme.spacing(10),
      backgroundColor: props.backgroundColor,
    }}>
      {children}
    </Box>
  )
}

Panel.defaultProps = {
  backgroundColor: '000000',
}

export default Panel
