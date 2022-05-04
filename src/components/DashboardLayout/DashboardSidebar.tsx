import React, { MouseEventHandler } from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Divider,
  Drawer,
  List,
} from '@mui/material';
import { Activity as ActivityIcon } from 'react-feather';
import NavItem from './NavItem';

const items = [
  {
    href: '/absentees',
    icon: ActivityIcon,
    title: 'Absentees',
  },
];

export type sideBarProps = {
  onMobileClose: MouseEventHandler<HTMLUListElement>,
  openMobile: boolean,
};

function DashboardSidebar({
  onMobileClose,
  openMobile,
} : sideBarProps): JSX.Element {
  const content = (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
      }}
    >
      <Divider />
      <Box sx={{ p: 2 }}>
        <List
          onClick={onMobileClose}

        >
          {items.map((item) => (
            <NavItem
              href={item.href}
              key={item.title}
              title={item.title}
              icon={item.icon}
            />
          ))}
        </List>
      </Box>
      <Box sx={{ flexGrow: 1 }} />
    </Box>
  );

  return (
    <>
      <Drawer
        sx={{ display: { lg: 'none', xs: 'block' } }}
        anchor="left"
        onClose={onMobileClose}
        open={openMobile}
        variant="temporary"
        PaperProps={{
          sx: {
            width: 256,
          },
        }}
      >
        {content}
      </Drawer>
      <Drawer
        sx={{ display: { xs: 'none', lg: 'block' } }}
        anchor="left"
        open
        variant="persistent"
        PaperProps={{
          sx: {
            width: 256,
          },
        }}
      >
        {content}
      </Drawer>
    </>
  );
}

DashboardSidebar.propTypes = {
  onMobileClose: PropTypes.func,
  openMobile: PropTypes.bool,
};

DashboardSidebar.defaultProps = {
  onMobileClose: () => {},
  openMobile: false,
};

export default DashboardSidebar;
