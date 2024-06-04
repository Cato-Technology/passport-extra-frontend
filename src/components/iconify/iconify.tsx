import PropTypes from 'prop-types';
import { ReactNode, forwardRef } from 'react';
import { Icon } from '@iconify/react';

import Box from '@mui/material/Box';

// ----------------------------------------------------------------------
type props={
  icon:any,
  width:number,
  sx:any,
  color:string
}
const Iconify = forwardRef(({ icon, width = 20, sx, ...other }:Partial<props>, ref) => (
  <Box
    ref={ref}
    component={Icon}
    className="component-iconify"
    icon={icon}
    sx={{ width, height: width, ...sx }}
    {...other}
  />
));



export default Iconify;
