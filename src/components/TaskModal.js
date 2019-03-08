import React from 'react';
import Modal from 'react-modal';

const TaskModal = (props) => (
    <Modal
        isOpen={!!props.selectedTask}
        onRequestClose={props.handleModalButton}
        contentLabel='Selected Task'
        className="modal"
        closeTimeoutMS={200}
    >
        <h3 className="modal__title">Selected Task</h3>
        {props.selectedTask && <p className="modal__body">{props.selectedTask}</p>}
        <button className="button" onClick={props.handleModalButton}>Got it</button>
    </Modal>
);

export default TaskModal;