import Stack from "@mui/material/Stack";
import {FC} from "react";
import {useSelector} from "react-redux";
import {Typography} from "@mui/material";
import {useTranslation} from "react-i18next";
import {Post} from "../../../shared/Types";


const Statistic:FC = () => {
    const {t} = useTranslation('translation', {keyPrefix: 'Statistic'});
    const posts:Post[] = useSelector(state => state.posts.posts);
    const wordsCount = () =>{
        let result = 0;
        posts.forEach(post => result += post.fullText.split(' ').length)
        return result;
    }
    const commentsCount = () =>{
        let result = 0;
        posts.forEach(post => result += post.comments.length)
        return result;
    }
    return(
        <Stack sx={{marginLeft:'15px'}}>
            <Typography>{t('WordsCount')+ " : " + wordsCount()}</Typography>
            <Typography>{t('ArticlesCount')+ " : " + posts.length}</Typography>
            <Typography>{t('CommentsCount')+ " : " + commentsCount()}</Typography>
        </Stack>
    )
}
export default Statistic;