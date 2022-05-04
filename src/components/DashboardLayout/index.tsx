import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { experimentalStyled } from '@mui/material';
import DashboardNavbar from './DashboardNavbar';
import DashboardSidebar from './DashboardSidebar';

const DashboardLayoutRoot = experimentalStyled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  display: 'grid',
  gridTemplateColumns: '1fr',
  height: '100%',
  overflow: 'hidden',
  width: '100%',
  [theme.breakpoints.up('lg')]: {
    gridTemplateColumns: '255px 1fr',
  },
}));

const DashboardLayoutWrapper = experimentalStyled('div')(() => ({
  display: 'flex',
  flex: '1 1 auto',
  overflow: 'hidden',
}));

const DashboardLayoutContainer = experimentalStyled('div')({
  display: 'flex',
  flex: '1 1 auto',
  overflow: 'hidden',
});

const DashboardLayoutContent = experimentalStyled('div')({
  flex: '1 1 auto',
  height: '100%',
  overflow: 'auto',
});

function DashboardLayout(): JSX.Element {
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <DashboardLayoutRoot>
      <DashboardSidebar
        onMobileClose={() => setMobileNavOpen(false)}
        openMobile={isMobileNavOpen}
      />
      <DashboardNavbar onMobileNavOpen={() => setMobileNavOpen(true)} />
      <DashboardLayoutWrapper>
        <DashboardLayoutContainer>
          <DashboardLayoutContent>
            <Outlet />
          </DashboardLayoutContent>
        </DashboardLayoutContainer>
      </DashboardLayoutWrapper>
    </DashboardLayoutRoot>
  );
}

export default DashboardLayout;
