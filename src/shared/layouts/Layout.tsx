import { FC } from 'react';
import Header from './header/ui/Header';
import Footer from './footer/ui/Footer';
import Stack from '@mui/material/Stack';

type Props = {
  children: JSX.Element | JSX.Element[];
}

const Layout: FC<Props> = (props: Props) => {
  return (
    <Stack justifyContent="space-between" sx={{ height: '100vh',  width:'100%'}}>
      <Header/>
      {props.children}
      <Footer/>
    </Stack>
  );
};
export default Layout;