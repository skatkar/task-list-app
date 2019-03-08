import React from 'react';

// Stateless functional components
const Action = (props) => (
    <button className="big-button"
    onClick={props.handlePick}
        disabled={!props.hasTasks}
        >
        Which task should I do first?
    </button>
);

export default Action;