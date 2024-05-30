import React from 'react';
import DateContainer from './DateContainer';

const HistoryMoments = () => {
    const historyMoments = [
        { date: '2018', image: '../images/UNESCO-logo.png', title: 'UNESCO began recognizing the importance of dry stone walling as a cultural heritage practice', link: 'https://www.youtube.com/watch?v=0ROnc2OXzuY', linkText: 'Video - Art of dry stone walling, knowledge and techniques', info: "In 2018, dry stone walling was added to UNESCO's Representative List of the Intangible Cultural Heritage of Humanity. This recognition highlights the significance of this traditional construction method and aims to safeguard its techniques and knowledge for future generations." },
        { date: '2000+', image: '../images/pro-comp-wall.jpg', title: 'Revival of UK Dry Stone Walling: Heritage Meets Sustainability', link: '', linkText: '', info: 'UK dry stone walling has experienced a revival, driven by heritage conservation, environmental sustainability, and community projects. The Dry Stone Walling Association (DSWA) has led efforts in training and certification, preserving traditional skills. Modern applications include landscaping and art installations. The sustainable nature of these walls aligns with eco-friendly trends, and volunteer projects have bolstered community engagement. This resurgence blends traditional craftsmanship with contemporary needs.' },
        { date: '1968', image: '../images/DSWA_Logo_RGB.gif', title: 'The Dry Stone Walling Association (DSWA) was established', link: 'https://www.dswa.org.uk/', linkText: 'DSWA Website', info: 'The DSWA is a registered charity that works to advance education in the craft and heritage of dry stone walling for the public benefit.' },
        { date: '1930s', image: '../images/yorkshire-1920.png', title: 'Combating Unemployment in Yorkshire', link: 'https://historicengland.org.uk/images-books/photos/item/WSA01/01/07431#', linkText: 'Image - Historic England', info: "During the 1930s, amidst economic hardship and widespread unemployment, dry stone walling emerged as a solution to alleviate local economic struggles in Yorkshire. The government initiated projects to rebuild roadside walls, employing local laborers and craftsmen. These efforts not only provided much-needed jobs but also contributed to the preservation of the region’s landscape and heritage. Dry stone walling became a symbol of resilience and community spirit during challenging times, leaving a lasting impact on both the physical and social landscape of the area." },
        { date: '1801', image: '../images/wall-lakes.jpg', title: 'Parliamentary Enclosure Act of 1801', link: '', linkText: '', info: "The Parliamentary Enclosure Act of 1801 had a profound impact on the Lake District, transforming its traditional landscape and agricultural practices. By converting common lands into privately owned fields, the act aimed to boost agricultural productivity but also led to the displacement of many small farmers and rural workers who relied on these lands for grazing and subsistence. This shift not only altered the social fabric of the Lake District but also contributed to the region's characteristic patchwork of enclosed fields, still visible today." },
        { date: '1760-1840', image: '../images/yorkshire-dry-wall-pattern.jpg', title: 'Stone Walls in the Age of Industry', link: '', linkText: '', info: "The Industrial Revolution reshaped construction, altering the role of dry stone walls. Amidst urbanisation and mechanized farming, traditional craftsmanship endured in rural areas, while cities embraced mass-produced materials like bricks and concrete. This transition mirrored societal shifts, illustrating the clash between ancient techniques and modern innovation." },        
        { date: '1501-1900', image: '../images/wall-path.jpg', title: 'Colonial Legacies: Dry Stone Walls Across Continents', link: '', linkText: '', info: 'During the colonial expansion spanning the 16th to 19th centuries, European settlers transplanted dry stone walling techniques to distant lands like North America, Australia, and New Zealand, tailoring them to suit local environments. These walls assumed multifaceted roles as agricultural demarcations, enclosures for livestock, and poignant symbols of burgeoning settlements. Their enduring presence bears witness to the fusion of Old World traditions with the exigencies of new frontiers, forming an integral part of the cultural and agricultural tapestry of these regions.' },       
        { date: '1001-1800', image: '../images/wall-face-moss.jpg', title: 'Medieval Enclosure: Shaping Landscapes and Societies', link: '', linkText: '', info: 'From the 12th to 18th centuries, Medieval Enclosure Acts in Europe spurred dry stone wall construction. Landowners enclosed common lands, driving the proliferation of walls to demarcate holdings and regulate access. This reshaped rural landscapes and catalyzed social and economic shifts, marking a transition from communal to individualized land ownership.' },
        { date: '1066', image: '../images/wall-tower-wavey.jpg', title: 'Norman Conquest and the Evolution of English Dry Stone Walling', link: '', linkText: '', info: "The Norman Conquest of 1066 introduced new techniques to English dry stone walling, shaping its evolution. Norman lords incorporated continental styles into castle construction, influencing regional walling styles across the UK." },
        { date: '500BC-200', image: '../images/hadrians-wall-sunset.jpg', title: 'Roman Engineering: The Legacy of Dry Stone Walls', link: '', linkText: '', info: "The Roman Empire showcased unparalleled expertise in dry stone wall construction. These walls, like Hadrian's Wall and the Limes Germanicus, served as formidable defenses and agricultural demarcations. Roman engineering prowess, evident in precise fitting and strategic placement of stones, left a lasting legacy on European landscapes, influencing construction methods for centuries." },
        { date: '3100-2500BC', image: '../images/skara-brae.jpg', title: 'Skara Brae: Neolithic Village on Orkney', link: 'https://www.freeimages.com/photo/skara-brae-ancient-settlement-1204543', linkText: 'Photo by Gronvik on Freeimages.com', info: 'Skara Brae is a remarkably well-preserved Neolithic village located on the Orkney Islands off the north coast of Scotland. Dating back to around 3100-2500 BC, it is one of the oldest known settlements in Scotland and Europe. The village consists of several stone-built houses connected by passageways, all constructed using dry stone techniques without the use of mortar. Remarkably, the site remained hidden beneath sand dunes until it was uncovered by a storm in 1850. Skara Brae provides invaluable insights into the lives of Neolithic people, offering a glimpse into their architecture, daily activities, and social organization.' },

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
