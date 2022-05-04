import React from 'react';
import PropTypes from 'prop-types';
import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

function DashboardNavbar({
  onMobileNavOpen,
}:{onMobileNavOpen:any}): JSX.Element {
  return (
    <AppBar elevation={0} sx={{ display: { lg: 'block', xs: 'block' } }}>
      <Toolbar variant="dense">
        <IconButton
          edge="start"
          aria-label="menu"
          sx={{ mr: 2 }}
          color="inherit"
          onClick={onMobileNavOpen}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          variant="h6"
          color="inherit"
          component="div"
        >
          Absence Manager
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

DashboardNavbar.propTypes = {
  onMobileNavOpen: PropTypes.func,
};

DashboardNavbar.defaultProps = {
  onMobileNavOpen: () => {},
};

export default DashboardNavbar;
