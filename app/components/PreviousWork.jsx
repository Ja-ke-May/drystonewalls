import React from 'react';
import ImageCarousel from './ImageCarousel';

const PreviousWork = () => {

    const NoviceCompImages = 
     [
        { url: '../images/lakes-walling-comp-group.png', description: 'Group photo' },
        { url: '../images/novice-trophy.jpg', description: 'First walling competition win!' },
        { url: '../images/novice-comp-wall-jack.jpg', description: 'The wall and Jack 🐾' },
        { url: '../images/novice-comp-reverse.jpg', description: 'The other side' },
        { url: '../images/novice-certificate.jpg', description: 'Certificate' },
      ];

      const OtleyVolunteering = 
     [
        { url: '../images/shaping-copes.jpg', description: 'Making copes' },
        { url: '../images/otley-foundations.jpg', description: 'Foundations in' },
        { url: '../images/otley-foundation-stones.jpg', description: 'Wall started' },
      ];

      const DSWA1 = 
     [
        { url: '../images/different-wall-types.jpg', description: 'Dry Stone Walling Association Level 1 course' },
        { url: '../images/stripping-out-level1.jpg', description: 'Stripping Out' },
        { url: '../images/foundations-course-started-level1.jpg', description: 'Test day build' },
        { url: '../images/first-lift-level1.jpg', description: 'First lift' },
        { url: '../images/me-walling-level1.jpg', description: 'Action shot' },
        { url: '../images/throughs-on-level1.jpg', description: 'Throughs on' },
        { url: '../images/second-lift-level1.jpg', description: 'Second lift started' },
        { url: '../images/second-lift-2-level1.jpg', description: 'Almost there' },
        { url: '../images/field-wall-complete.jpg', description: 'Field Wall Complete' },
        { url: '../images/complete-sandstone-level1.jpg', description: 'Sandstone Wall Complete' },
      ];

      const YDSWG = 
     [
        { url: '../images/half-way-ydswg.jpg', description: 'Yorkshire Dry Stone Walling Guild' },
        { url: '../images/ydswg-wall.jpg', description: 'Complete' },
        { url: '../images/ydswg-wall-2.jpg', description: 'The other side' },
      ];

      const YorskshireDalesImages = 
     [
        { url: '../images/yd-gap-1.jpg', description: 'Walling near Settle' },
        { url: '../images/yd-gap-2.jpg', description: 'Big Gaps' },
        { url: '../images/yd-wall.jpg', description: 'Random shaped stone' },
        { url: '../images/yd-wall-2.jpg', description: 'Bit cold but looking good' },
      ];

      const RetainingWallImages =
      [
        { url: '../images/before-after-curved-retaining.jpg', description: 'Before/After curved garden wall' },
        { url: '../images/before-after-stepped-garden.jpg', description: 'Before/After stepped garden' },
      ];
 
 
  return (
    <>
           <div className='w-[100%] menu-background h-2 mt-5 mb-5'></div>
          <ImageCarousel images={NoviceCompImages} mainTitle={'Friends of Lakes, Walling Comp'} />
          <div className='w-[100%] menu-background h-2 mt-5 mb-5'></div>
          <ImageCarousel images={OtleyVolunteering} mainTitle={'Volunteer work'} />
          <div className='w-[100%] menu-background h-2 mt-5 mb-5'></div>
          <ImageCarousel images={DSWA1} mainTitle={'DSWA Level 1'} />
          <div className='w-[100%] menu-background h-2 mt-5 mb-5'></div>
          <ImageCarousel images={YDSWG} mainTitle={'Field wall YDSWG'} />
          <div className='w-[100%] menu-background h-2 mt-5 mb-5'></div>
          <ImageCarousel images={YorskshireDalesImages} mainTitle={'Yorkshire Dales'} />
          <div className='w-[100%] menu-background h-2 mt-5 mb-5'></div>
          <ImageCarousel images={RetainingWallImages} mainTitle={'Retaining walls'} />
    </>
  );};

export default PreviousWork;