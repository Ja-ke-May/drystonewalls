import React from 'react';
import DateContainer from './DateContainer';

const HistoryMoments = () => {
    const historyMoments = [
        { date: '01/01/2021', image: '../images/wall-cope.jpg', title: 'History 1', info: 'History information 1' },
        { date: '02/01/1621', image: '../images/lakes-walling-comp-group.png', title: 'History 2', info: 'History information 2' },
    ];
 
    return (
        <>
            {historyMoments.map((moment, index) => (
                < DateContainer key={index} historyMoment={moment} />
            ))}
        </>
    );
};

export default HistoryMoments;
