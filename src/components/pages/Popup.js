import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { Button } from '../Button'
import HeroSection from '../HeroSection';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    // padding: theme.spacing(2, 4, 3),
  },
}));

export default function TransitionsModal(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button buttonStyle='btn--outline' buttonSize='btn--large' onClick={handleOpen}>
        {props.button}
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <i class="fas fa-times" onClick={handleClose} style={{position:'absolute', top:'10px', right:'10px', zIndex:'100', fontSize:'1.5rem', color:'white', cursor:'pointer'}}></i>
            <h2 id="transition-modal-title">{props.title}</h2>
            <img src={props.url} alt='' id="transition-modal-image"/>
          { props.link ? <HeroSection /> : '' }

          </div>
        </Fade>
      </Modal>
    </div>
  );
}
