import React from 'react';
import DateContainer from './DateContainer';

const HistoryMoments = () => {
    const historyMoments = [
        { date: '2018', image: '../images/UNESCO-logo.png', title: 'UNESCO began recognizing the importance of dry stone walling as a cultural heritage practice', link: 'https://www.youtube.com/watch?v=0ROnc2OXzuY', linkText: 'Video - Art of dry stone walling, knowledge and techniques', info: "In 2018, , dry stone walling was added to UNESCO's Representative List of the Intangible Cultural Heritage of Humanity. This recognition highlights the significance of this traditional construction method and aims to safeguard its techniques and knowledge for future generations." },
        { date: '2000+', image: '../images/wall-trees.jpg', title: 'Revival of UK Dry Stone Walling: Heritage Meets Sustainability', link: '', linkText: '', info: 'UK dry stone walling has experienced a revival, driven by heritage conservation, environmental sustainability, and community projects. The Dry Stone Walling Association (DSWA) has led efforts in training and certification, preserving traditional skills. Modern applications include landscaping and art installations. The sustainable nature of these walls aligns with eco-friendly trends, and volunteer projects have bolstered community engagement. This resurgence blends traditional craftsmanship with contemporary needs.' },
        { date: '1968', image: '../images/DSWA_Logo_RGB.gif', title: 'The Dry Stone Walling Association (DSWA) was established', link: 'https://www.dswa.org.uk/', linkText: 'DSWA Website', info: 'The DSWA is a registered charity that works to advance education in the craft and heritage of dry stone walling for the public benefit.' },
        { date: '1930s', image: '../images/yorkshire-1920.png', title: 'Combating Unemployment in Yorkshire', link: 'https://historicengland.org.uk/images-books/photos/item/WSA01/01/07431#', linkText: 'Image - Historic England', info: 'During the 1930s, amidst economic hardship and widespread unemployment, dry stone walling emerged as a solution to alleviate local economic struggles in the West Riding of Yorkshire. The government initiated projects to rebuild roadside walls, employing local laborers and craftsmen. These efforts not only provided much-needed jobs but also contributed to the preservation of the region’s landscape and heritage. Dry stone walling became a symbol of resilience and community spirit during challenging times, leaving a lasting impact on both the physical and social landscape of the area.' },
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
