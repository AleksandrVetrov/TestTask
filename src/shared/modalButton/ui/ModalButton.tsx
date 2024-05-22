import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import {FC} from "react";
import * as React from "react";


const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    height: '60%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    overflow: 'auto',
    display: 'block',
};

type Props = {
    children: JSX.Element | JSX.Element[];
    buttonLabel: string;

}


const ModalButton: FC<Props> = (props:Props) => {


    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    }
    const handleClose = () => setOpen(false);
    return (
        <Stack direction={"column"} justifyContent={'center'} alignItems={'center'}>
            <Button onClick={handleOpen} sx={{padding: 0}}>{props.buttonLabel}</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Stack sx={style} alignItems="center" justifyContent='center'>
                    {props.children}
                </Stack>
            </Modal>
        </Stack>
    );
}
export default ModalButton;
