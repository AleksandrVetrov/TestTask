import Stack from "@mui/material/Stack";
import {FC, useState} from "react";
import {TextField, Typography, Button} from "@mui/material";
import {useTranslation} from "react-i18next";
import {useDispatch} from "react-redux";
import {addPost} from '../../../store/postsSlice'


const AddArticle: FC = () => {
    const {t} = useTranslation('translation', {keyPrefix: 'AddPost'});
    const [textTitle, setTitle] = useState('');
    const [textDescription, setDescription] = useState('');
    const [textFullText, setFullText] = useState('');
    const dispatch = useDispatch();

    const handleTitle = (e:React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    };


    const handleDescription= (e:React.ChangeEvent<HTMLInputElement>) => {
        setDescription(e.target.value);
    };


    const handleFullText = (e:React.ChangeEvent<HTMLInputElement>) => {
        setFullText(e.target.value);
    };

    const handleSubmit = () => {
        dispatch(addPost({
            id: new Date().toISOString(),
            title:textTitle,
            description:textDescription,
            fullText: textFullText,
            comments:[],
        }))
        setFullText('');
        setDescription('');
        setTitle('');
    }


    return (
        <Stack spacing={2} alignItems={'center'}  flexDirection={'column'} >
            <Typography variant={'h3'}>{t('Title')}</Typography>
            <TextField
                sx={{width:'500px'}}
                id="outlined-multiline-static"
                multiline
                rows={2}
                label={t('TitlePlaceholder')}
                onChange={handleTitle}
                value={textTitle}/>
            <TextField
                sx={{width:'500px'}}
                id="outlined-multiline-static"
                multiline
                rows={2}
                label={t('DescriptionPlaceholder')}
                onChange={handleDescription}
                value={textDescription}/>
            <TextField
                sx={{width:'500px'}}
                id="outlined-multiline-static"
                multiline
                rows={4}
                label={t('FullTextPlaceholder')}
                onChange={handleFullText}
                value={textFullText}/>
            <Button onClick={handleSubmit} variant="contained">{t('Button')}</Button>
        </Stack>
    )
}
export default AddArticle;