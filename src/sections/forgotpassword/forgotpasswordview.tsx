import { useState } from 'react';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import LoadingButton from '@mui/lab/LoadingButton';
import { alpha, useTheme } from '@mui/material/styles';
import InputAdornment from '@mui/material/InputAdornment';

import { useRouter } from 'next/navigation';
import { bgGradient } from '@/theme/css';

import Logo from '@/components/logo';
import Iconify from '@/components/iconify';
import { makeStyles } from 'tss-react/mui';
// ----------------------------------------------------------------------

export default function ForgotPasswordView() {
  const theme = useTheme();
  const {classes}=styles();
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);

  const handleClick = () => {
    router.push('/dashboard');
  };

  const renderForm = (
    <Box style={{flexDirection:'column',gap:5}}>
      <Stack spacing={3}>
        <Box style={{
          display:'flex',
          flexDirection:'column',
          gap:5
        }}>
        <TextField name="email" label="Email address" />
        <Button variant='contained'>
          Send
        </Button>
        </Box>
        <Divider sx={{ my: 3 }}>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              OR
            </Typography>
          </Divider>

        <Box style={{
          display:'flex',
          flexDirection:'column',
          gap:5
        }}>
        <TextField name="phone" label="Phone Number" />
        <Button variant='contained'>
          Send
        </Button>
        </Box>
        <TextField
          name="OTP"
          label="OTP"
        />
      </Stack>
      <Box 
      style={{
        gap:'10px',
        display:'flex',
        flexDirection:'column'
      }}>
        
      <TextField
          name="password"
          fullWidth
          label="New Password"
          sx={{marginTop:'10px'}}
          type={showPassword ? 'text' : 'password'}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                  <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

      <LoadingButton
        fullWidth
        size="large"
        type="submit"
        variant="contained"
        color="inherit"
        onClick={handleClick}
      >
        Reset
      </LoadingButton>
      </Box>
    </Box>
  );

  return (
    <Box
      sx={{
        ...bgGradient({
          color: alpha(theme.palette.background.default, 0.9),
          imgUrl: '/assets/background/overlay_4.jpg',
        }),
        height:'100vh',
      }}
      className={classes.container}
    >
      <Logo
        sx={{
          position: 'fixed',
          top: { xs: 16, md: 24 },
          left: { xs: 16, md: 24 },
        }}
      />

      <Stack alignItems="center" justifyContent="center" sx={{ height: 1 }}>
        <Card
          sx={{
            p: 5,
            width: 1,
            maxWidth: 420,}}>
          <Typography variant="h4">Forgot Password </Typography>

          <Typography variant="body2" sx={{ mt: 2, mb: 5 }}>
            Already have an account?
            <Link variant="subtitle2" sx={{ ml: 0.5 }} href={'/login'}>
              SignIn
            </Link>
          </Typography>

         

         
          {renderForm}

          
        </Card>
      </Stack>
    </Box>
  );
}

const styles=makeStyles()((theme)=>({
  container:{
   display:'grid',
   gridTemplateColumns:'1fr',
   height:'100vh'
  }
}))