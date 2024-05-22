import { FC } from 'react';
import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';


const Footer: FC = () => {

  const { t } = useTranslation('translation', { keyPrefix: 'Footer' });
  return <Stack alignItems='center' justifyContent='center' sx={{
    bgcolor: '#333333',
    bottom: 0,
    width: '100%',
    height:'5%',
    marginTop:'15px',
  }}>
    <Typography sx={{ color: 'white', textAlign: 'center' }}>{t('Footer')}</Typography>
  </Stack>;
};
export default Footer;