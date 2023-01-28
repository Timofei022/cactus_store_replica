import React from 'react';

const Backdrop = ({ state }) => {

    const showBackdrop = () => {
        if(state) {
            return {
                zIndex: 150,
                opacity: 1
            }
        }
    }

    return (
        <div 
            className="backdrop" 
            style={showBackdrop()}
        />
    );
};

export default Backdrop;