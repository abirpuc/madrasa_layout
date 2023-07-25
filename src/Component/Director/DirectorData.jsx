import React, {useState} from 'react';
import Button from '../../SharedComponent/Button/Button'
import Modal from './Modal'
const DirectorData = (props) => {
    const [isOpenModal, setOpenModal] = useState(false)
    const handleOpenModal = () =>{
        setOpenModal(true)
    }

    const handleCloseModal = () =>{
        setOpenModal(false)
    }
    
    return (
        <>
            <Button
                name= {props.btnName}
            />
            <img src={props.directorImg} alt=""/>
            <div className='director-info'>
                <p className='director__name'>{props.directorName}</p>
                <p className='director__designation'>{props.institution}</p>
                <button className='bani__btn' onClick={handleOpenModal}>আরও পড়ুন ...</button>
            </div>
            <Modal isOpen={isOpenModal} isClose = {handleCloseModal}>
                <h1>{props.modalTitle}</h1>
                <p>{props.bani}</p>
            </Modal>
        </>
    );
};

export default DirectorData;