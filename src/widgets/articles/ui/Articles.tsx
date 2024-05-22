import {FC} from "react";
import {useSelector} from "react-redux";
import Article from "../../../shared/article/ui/Article";
import Stack from "@mui/material/Stack";
import {Post} from "../../../shared/Types";

const Articles:FC = () => {
    const posts = useSelector(state => state.posts.posts);
    return(
        <Stack>

            {
                posts.map((post:Post) => <Article id={post.id} title={post.title} description={post.description} fullText={post.fullText} comments={post.comments}/>)
            }

        </Stack>
    )
}
export default Articles;