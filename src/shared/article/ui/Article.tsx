import * as React from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import {FC, useState} from "react";
import {useTranslation} from "react-i18next";
import ModalButton from "../../modalButton/ui/ModalButton";
import {addComment} from "../../../store/postsSlice";
import {useDispatch} from "react-redux";
import {Button, TextField} from "@mui/material";
import Comment from "../../../shared/comment/ui/Comment"
import {Commentary} from "../../Types";

type Props = {
    id: string,
    title: string,
    description: string,
    fullText: string,
    comments: Commentary[],
}


const Article: FC<Props> = (props: Props) => {
    const [comment, setComment] = useState('');
    const dispatch = useDispatch();
    const {t} = useTranslation('translation', {keyPrefix: 'Article'});
    const [date, setDate] = useState(new Date().toLocaleDateString());

    const handleComment = (e: React.ChangeEvent<HTMLInputElement>) => {
        setComment(e.target.value);
    };
    const handleAddComment = () => {
        if (comment.trim()) {
            dispatch(addComment({postId: props.id, comment, date}));
            setComment('');

        }
    };
    return (
        <Stack direction={"column"} alignItems={'flex-start'}
               sx={{border: '3px solid gray', margin: '5px', padding: '10px'}}>
            <Typography variant='h2'>{props.title}</Typography>
            <Typography variant='body1'>{props.description}</Typography>
            <ModalButton buttonLabel={t('More')}>
                <Typography id="modal-modal-title" variant="h6" component="h2" sx={{whiteSpace: "pre-wrap"}}>
                    {props.fullText}
                </Typography>
            </ModalButton>
            <Stack spacing={1} alignItems={'flex-start'}>
            <Typography>{t('Comments')}:</Typography>
            {props.comments?.map(comment => (
               <Comment text={comment.text} date={comment.date}></Comment>
            ))}
            <TextField
                sx={{width: '500px'}}
                id="outlined-multiline-static"
                multiline
                rows={2}
                label={t('AddCommentField')}
                onChange={handleComment}
                value={comment}/>
            <Button onClick={handleAddComment}>{t('AddCommentButton')}</Button>
            </Stack>
        </Stack>
    );
}

export default Article;