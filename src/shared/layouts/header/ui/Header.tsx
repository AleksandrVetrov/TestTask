import { FC } from 'react';
import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';
import { useTranslation } from 'react-i18next';
import {Button} from "@mui/material";

const Header: FC = () => {
    const { i18n } = useTranslation();
    const changeLanguage = (language:string) => {
            i18n.changeLanguage(language);
        };
    const { t } = useTranslation('translation', { keyPrefix: 'Header' });
  return (
    <Stack direction="row" justifyContent="space-around" alignItems="center" sx={{ marginTop: '20px' }} spacing={6}>
      <Stack alignItems="center">
        <Link>Logo</Link>
      </Stack>
        <Stack direction="row" spacing={6} alignItems="center">
            <Link href={'/'} underline={'none'} sx={{color: '#838383', fontSize: '1.2rem'}}>{t('HeaderLinkOne')}</Link>
            <Button sx={{color: '#838383'}} onClick={() => changeLanguage('en')}>English</Button>
            <Button sx={{color: '#838383'}} onClick={() => changeLanguage('ru')}>Русский</Button>
        </Stack>
    </Stack>
  );
};

export default Header;