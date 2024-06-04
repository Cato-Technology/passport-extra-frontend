import { ReactNode, useState,useEffect } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/navigation';
import Box from '@mui/material/Box';

import Nav from './nav';
import Main from './main';
import Header from './header';

// ----------------------------------------------------------------------

export default function DashboardLayout({ children }:any) {
  const [openNav, setOpenNav] = useState(false);
  enum EUserType{
    ADMIN="ADMIN",
    USER="USER"
  }
  const router=useRouter();
  const [loggedIn,setLoggedIn]=useState<Boolean>(false);
  const[userType,setUserType]=useState<EUserType>(EUserType.USER);
  useEffect(()=>{
    if(!loggedIn){
      router.push('/login')}else{
        if(userType==EUserType.ADMIN){
          router.push('/admin');
        }else if(userType==EUserType.USER){
          router.push('/user');
        }
      };
     
  },[])
  return (
    <>
      <Header onOpenNav={() => setOpenNav(true)} />

      <Box
        sx={{
          minHeight: 1,
          display: 'flex',
          flexDirection: { xs: 'column', lg: 'row' },
        }}
      >
        <Nav openNav={openNav} onCloseNav={() => setOpenNav(false)} />

        <Main>{children}</Main>
      </Box>
    </>
  );
}

DashboardLayout.propTypes = {
  children: PropTypes.node,
};
