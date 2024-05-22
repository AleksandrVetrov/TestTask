import {FC} from "react";
import Stack from "@mui/material/Stack";
import {Typography} from "@mui/material";
import * as React from "react";

type Props = {
    text: string,
    date: string,
}
const Comment:FC<Props> = (props:Props) => {
    return(
        <Stack>
            <Typography>{props.date}</Typography>
            <Typography>{props.text}</Typography>
        </Stack>
    )
}
export default Comment;