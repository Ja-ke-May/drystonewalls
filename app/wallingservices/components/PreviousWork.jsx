import React from 'react';
import ImageCarousel from '../../components/ImageCarousel';

const PreviousWork = () => {

    const NoviceCompImages = 
     [
      { url: '../images/lakes-walling-comp-group.png', description: 'Group photo', link: 'https://www.friendsofthelakedistrict.org.uk/', linkText: 'FriendsoftheLakeDistrict' },
        { url: '../images/novice-trophy.jpg', description: 'First walling competition win!', link: 'https://www.friendsofthelakedistrict.org.uk/', linkText: 'FriendsoftheLakeDistrict'  },
        { url: '../images/novice-comp-wall-jack.jpg', description: 'The wall and Jack 🐾', link: 'https://www.friendsofthelakedistrict.org.uk/', linkText: 'FriendsoftheLakeDistrict'  },
        { url: '../images/novice-comp-reverse.jpg', description: 'The other side', link: 'https://www.friendsofthelakedistrict.org.uk/', linkText: 'FriendsoftheLakeDistrict'  },
        { url: '../images/novice-certificate.jpg', description: 'Certificate', link: 'https://www.friendsofthelakedistrict.org.uk/', linkText: 'FriendsoftheLakeDistrict'  },
      ];

      const OtleyVolunteering = 
     [
        { url: '../images/shaping-copes.jpg', description: 'Making copes', link: 'https://www.otleyyorksdalesdswa.org/', linkText: 'otleyyorksdalesdswa' }, 
        { url: '../images/otley-foundations.jpg', description: 'Foundations in', link: 'https://www.otleyyorksdalesdswa.org/', linkText: 'otleyyorksdalesdswa' },
        { url: '../images/otley-foundation-stones.jpg', description: 'Wall started', link: 'https://www.otleyyorksdalesdswa.org/', linkText: 'otleyyorksdalesdswa' },
      ];

      const DSWA1 = 
     [
        { url: '../images/different-wall-types.jpg', description: 'Dry Stone Walling Association Level 1 course', link: 'https://www.dswa.org.uk/', linkText: 'DWSA'},
        { url: '../images/stripping-out-level1.jpg', description: 'Stripping Out', link: 'https://www.dswa.org.uk/', linkText: 'DWSA' },
        { url: '../images/foundations-course-started-level1.jpg', description: 'Test day build', link: 'https://www.dswa.org.uk/', linkText: 'DWSA' },
        { url: '../images/first-lift-level1.jpg', description: 'First lift', link: 'https://www.dswa.org.uk/', linkText: 'DWSA' },
        { url: '../images/me-walling-level1.jpg', description: 'Action shot', link: 'https://www.dswa.org.uk/', linkText: 'DWSA' },
        { url: '../images/throughs-on-level1.jpg', description: 'Throughs on', link: 'https://www.dswa.org.uk/', linkText: 'DWSA' },
        { url: '../images/second-lift-level1.jpg', description: 'Second lift started', link: 'https://www.dswa.org.uk/', linkText: 'DWSA' },
        { url: '../images/second-lift-2-level1.jpg', description: 'Almost there', link: 'https://www.dswa.org.uk/', linkText: 'DWSA' },
        { url: '../images/field-wall-complete.jpg', description: 'Field Wall Complete', link: 'https://www.dswa.org.uk/', linkText: 'DWSA' },
        { url: '../images/complete-sandstone-level1.jpg', description: 'Sandstone Wall Complete', link: 'https://www.dswa.org.uk/', linkText: 'DWSA' },
      ];

      const YDSWG = 
     [
        { url: '../images/half-way-ydswg.jpg', description: 'Yorkshire Dry Stone Walling Guild', link: 'https://www.ydswg.co.uk/', linkText: 'YDSWG'  },
        { url: '../images/ydswg-wall.jpg', description: 'Complete', link: 'https://www.ydswg.co.uk/', linkText: 'YDSWG'   },
        { url: '../images/ydswg-wall-2.jpg', description: 'The other side', link: 'https://www.ydswg.co.uk/', linkText: 'YDSWG'   },
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
          <ImageCarousel images={NoviceCompImages} mainTitle={'Friends of Lakes, walling comp'} />
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