import {FC} from "react";
import Stack from "@mui/material/Stack";
import Articles from "../../../widgets/articles/ui/Articles";
import ModalButton from "../../../shared/modalButton/ui/ModalButton";
import AddArticle from "../../../features/addArticle/ui/AddArticle";
import {useTranslation} from "react-i18next";
import Statistic from "../../../widgets/statictic/ui/Statistic";

const Home: FC = () => {
    const {t} = useTranslation('translation');
    return (
        <Stack>
            <Articles></Articles>
            <ModalButton buttonLabel={t('AddButton')}><AddArticle/></ModalButton>
            <Statistic></Statistic>
        </Stack>
    )
}

export default Home;