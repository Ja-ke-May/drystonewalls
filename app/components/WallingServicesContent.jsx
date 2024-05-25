import React from 'react';
import Link from 'next/link';
import ImageCarousel from './ImageCarousel';

const WallingServicesContent = () => {

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
        { url: '../images/yd-wall.jpg', description: 'Lots of random shaped stone' },
        { url: '../images/yd-wall-2.jpg', description: 'Bit cold but looking good' },
      ];

      const RetainingWallImages =
      [
        { url: '../images/before-after-curved-retaining.jpg', description: 'Before/After curved garden wall' },
        { url: '../images/before-after-stepped-garden.jpg', description: 'Before/After stepped garden' },
      ];
 
 
  return (
    <>
    <div className="relative mt-20 z-20 max-w-[100%]">
      <div id="walling-services-opening" className="p-6 bg-black bg-opacity-80 mx-auto text-center text-white md:max-w-[100%]">
        <div className="text-xl flex items-center justify-center inset-x-0 mb-4">
        <h2 className='underline hover:text-green-600'><Link href="/wallingservices" passHref>Walling Services</Link></h2>
        </div>
        <div className="text-lg">
          <p>
          Located in Huddersfield, I offer field walling/gapping services starting at £40 per meter. 
          <br />
          Every job is unique, so please <span className='underline hover:text-green-600'><Link href="/contact" passHref>reach out</Link></span> for a personalized quote. 
          </p>
        
  
          <div className='flex w-full items-center justify-center'>
          <img
          src='../images/me-walling-level1.jpg'
          className="m-4 max-h-60 max-w-60 lg:max-h-80 lg:max-w-80"
          alt='man building dry stone wall'
          />
          </div>

          <p>
          I'm also available for work throughout the UK; <span className='underline hover:text-green-600'><Link href="/contact" passHref>contact</Link></span> me to discuss your needs.
          </p>
        </div>
      </div>
      </div>

<div className="relative mt-20 z-20 max-w-[100%]">
      <div className="p-6 bg-black bg-opacity-80 mx-auto text-center text-white">
        <div className="text-xl flex items-center justify-center inset-x-0 mb-4">
        <h3><u>Previous Work</u></h3>
        </div>
        <div className="text-lg">
          <p>
           Please view my previous work below. Click/tap the left or right buttons to view more.
           </p>
           <br />
           <div className='w-[100%] menu-background h-2'></div>
          <ImageCarousel images={NoviceCompImages} mainTitle={'Friends of Lakes, Walling Competition'} />
          <div className='w-[100%] menu-background h-2'></div>
          <ImageCarousel images={OtleyVolunteering} mainTitle={'Volunteer work'} />
          <div className='w-[100%] menu-background h-2'></div>
          <ImageCarousel images={DSWA1} mainTitle={'DSWA Level 1'} />
          <div className='w-[100%] menu-background h-2'></div>
          <ImageCarousel images={YDSWG} mainTitle={'Field wall YDSWG'} />
          <div className='w-[100%] menu-background h-2'></div>
          <ImageCarousel images={YorskshireDalesImages} mainTitle={'Yorkshire Dales'} />
          <div className='w-[100%] menu-background h-2'></div>
          <ImageCarousel images={RetainingWallImages} mainTitle={'Retaining walls'} />
        </div>
      </div>
    </div>
    </>
  );};

export default WallingServicesContent;