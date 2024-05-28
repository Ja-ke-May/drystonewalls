import React from 'react';

const BuildingBasics = () => {
    
  const handleScrollToBatter = () => {
    const batterSection = document.getElementById('batter');
    batterSection.scrollIntoView({ behavior: "smooth" });
  };

  const handleScrollToCopes = () => {
    const copesSection = document.getElementById('copes');
    copesSection.scrollIntoView({ behavior: "smooth" });
  };

  const handleScrollToCourse = () => {
    const courseSection = document.getElementById('course');
    courseSection.scrollIntoView({ behavior: "smooth" });
  };

  const handleScrollToFace = () => {
    const faceSection = document.getElementById('face');
    faceSection.scrollIntoView({ behavior: "smooth" });
  };

  const handleScrollToFill = () => {
    const fillSection = document.getElementById('fill');
    fillSection.scrollIntoView({ behavior: "smooth" });
  };

  const handleScrollToFoundation = () => {
    const foundationSection = document.getElementById('foundation');
    foundationSection.scrollIntoView({ behavior: "smooth" });
  };

  const handleScrollToPinning = () => {
    const pinningSection = document.getElementById('pinning');
    pinningSection.scrollIntoView({ behavior: "smooth" });
  };

  const handleScrollToTraced = () => {
    const tracedSection = document.getElementById('traced');
    tracedSection.scrollIntoView({ behavior: "smooth" });
  };

  const handleScrollToThroughs = () => {
    const throughsSection = document.getElementById('throughs');
    throughsSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative mt-20 z-20">
      <section id="building-basics" className="p-6 bg-black bg-opacity-80 mx-auto text-center text-white md:max-w-[100%]">
        <div className="text-xl flex items-center justify-center inset-x-0 mb-4">
          <h3 className='font-bold'>Building basics</h3>
        </div>
        <div className="md:text-lg">
          <p>In both working environments and competitions, the traditional approach to walling involves dismantling a few metres of deteriorated wall and reconstructing it using the available stone. With meticulous craftsmanship, a well-built wall can endure for centuries, showcasing the legacy of this age-old practice.</p>
          
          <div className='w-[100%] menu-background h-2 mt-5 mb-5'></div>


          <p className='mt-8 mb-4'>Before we get started here's some of the lingo you might need to refer to: 
          </p>
          <div className='text-md'>   
            <p id="batter" className='text-lg mt-2 font-bold text-green-600'><strong>Batter</strong> - <span className='text-md font-normal text-white'>The slight lean or slope intentionally built into the wall's structure, ensuring stability by widening the base compared to the top.
            </span>
            </p>      
            <p id="copes" className='text-lg mt-2 font-bold text-green-600'><strong>Copes</strong> - <span className='text-md font-normal text-white'>The top or coping stones of a wall, providing a finished edge and protecting the wall's core from weathering.
            </span>
            </p>
            <p id="course" className='text-lg mt-2 font-bold text-green-600'><strong>Course</strong> - <span className='text-md font-normal text-white'>A continuous horizontal layer of similarly sized stones within a wall. Each course is built upon the one below it, contributing to the overall structure and stability of the wall.
            </span>
            </p>
            <p id="face" className='text-lg mt-2 font-bold text-green-600'><strong>Face</strong> - <span className='text-md font-normal text-white'>The visible side of both the wall and individual stones. Its quality affects the wall's appearance and structural integrity.
            </span></p>
            <p id="fill" className='text-lg mt-2 font-bold text-green-600'><strong>Fill</strong> - <span className='text-md font-normal text-white'>Small stones used to fill gaps between larger stones in the centre of the wall, providing structural support and stability to the wall.
            </span>
            </p>
            <p id="foundation" className='text-lg mt-2 font-bold text-green-600'><strong>Foundation</strong> - <span className='text-md font-normal text-white'>The lowest part of the wall, laid below ground level, providing stability and distributing the weight of the wall evenly.
            </span>
            </p>
            <p id="pinning" className='text-lg mt-2 font-bold text-green-600'><strong>Pinning</strong> - <span className='text-md font-normal text-white'>The process of securing stones in place with smaller, usually flat stones, to prevent movement and maintain stability.
            </span>
            </p>
            <p id="traced" className='text-lg mt-2 font-bold text-green-600'><strong>Traced</strong> - <span className='text-md font-normal text-white'>Stones laid lengthwise along the face of the wall, reducing structural integrity.
            </span>
            </p>
            <p id="throughs" className='text-lg mt-2 font-bold text-green-600'><strong>Throughs</strong> - <span className='text-md font-normal text-white'> Large stones placed through the width of the wall, these tie the wall together.
            </span>
            </p>
          </div>

          <div className='w-[100%] menu-background h-2 mt-10 mb-5'></div>

          <p className='mt-8'>When rebuilding a dry stone wall, attention to detail in each step ensures a structurally sound and an aesthetically pleasing result:</p>
         
          <div className="mt-4">
            <p><strong>Stripping out</strong>
            <div className='w-full flex justify-center mt-4 mb-4'>
      <img 
      src='../images/stripping-out-level1-2.jpg' 
      alt='dry stone wall stripped out'
      className='max-h-60 max-w-60 md:max-w-80 md:max-h-80 lg:max-h-96 lg:max-w-96'
       />
      </div>
             Carefully dismantle the existing wall, try to place each stone down with its <a onClick={handleScrollToFace} className='underline hover:text-green-600'>face</a>, facing towards the wall, this will help when building and selecting stones. 
            <br />
            Set aside the largest and longest stones, known as <a onClick={handleScrollToThroughs} className='underline hover:text-green-600'>throughs</a>, you don't want to break these! 
            <br />
            Large stones to be used as <a onClick={handleScrollToFoundation} className='underline hover:text-green-600'>foundations</a> should be positioned close to the wall to reduce the need for heavy lifting or prolonged movement.
            <br />
            Place top stones or <a onClick={handleScrollToCopes} className='underline hover:text-green-600'>copes</a> out of the working area to avoid damage and to save them for the end.
            <br />
            Any small stones should be placed in a pile or bucket to be used as <a onClick={handleScrollToFill} className='underline hover:text-green-600'>fill</a>.
            </p>

            <p className='mt-4'><strong>Foundations</strong>
            <div className='w-full flex justify-center mt-4 mb-4'>
      <img 
      src='../images/otley-foundations.jpg' 
      alt='dry stone wall foundations'
      className='max-h-60 max-w-60 md:max-w-80 md:max-h-80 lg:max-h-96 lg:max-w-96'
       />
      </div>
            Begin by excavating the area where the foundation stones will be positioned. Ensure they are placed on solid ground.
            <br />
            Utilise the largest stones to establish the foundation of the wall. These should be arranged side by side, ensuring a level surface for the subsequent <a onClick={handleScrollToCourse} className='underline hover:text-green-600'>course</a>
            <br />
            Position the stones 'length in' to the wall. Stones placed lengthwise along the face are referred to as <a onClick={handleScrollToTraced} className='underline hover:text-green-600'>traced</a>.
            <br />
            In the centre of the foundation, use the largest fill stones, securely placing each one until level. Avoid <a onClick={handleScrollToPinning} className='underline hover:text-green-600'>pinning</a> any foundation stones as this will significantly affect the stability of the wall. Instead, level the stones by digging the ground underneath.</p>
           
            <p className='mt-4'><strong>First lift</strong>
            <div className='w-full flex justify-center mt-4 mb-4'>
      <img 
      src='../images/first-lift-level1-2.jpg' 
      alt='dry stone wall first lift'
      className='max-h-60 max-w-60 md:max-w-80 md:max-h-80 lg:max-h-96 lg:max-w-96'
       />
      </div>
            The first lift consists of the courses of stones between the foundation and the through stones, typically at the centre wall height.
            <br />
            The stability of a wall relies on its base being wider than its top, we call this <a onClick={handleScrollToBatter} className='underline hover:text-green-600'>batter</a>. This slight lean, observable on each side, is crucial for maintaining structural integrity.
            <br />
            Ensure proper construction technique by placing each stone across the gaps on the course below. Ideally, each stone should span across two stones and reach the center of each.
             <br />
             Maintain a consistent level for each course using walling lines. If using lines is not feasible, periodically step back from the wall every few stones to visually inspect your work for levelness.
             <br />
             Secure any unstable stones at the rear with fill material, these are called pins. Avoid pinning the wall from the face side, as this can cause displacement as the wall settles over time.
             <br />
             Again the centre of the wall after each course should be packed with fill. Do not use loose gravel or earth unless that is the local style, in most walls these will allow movement which can cause a collapse.</p>

            <p className='mt-4'><strong>Throughs</strong>
            <div className='w-full flex justify-center mt-4 mb-4'>
      <img 
      src='../images/throughs-on-level1-2.jpg' 
      alt='dry stone wall with placed through stones'
      className='max-h-60 max-w-60 md:max-w-80 md:max-h-80 lg:max-h-96 lg:max-w-96'
       />
      </div> 
            Through stones play a critical role in the stability and cohesion of your wall. If you have only one through stone, it should be positioned at the center height of the wall to provide balanced support. When dealing with multiple through stones, it's essential to distribute them evenly across the wall, ensuring consistent reinforcement.
            <br />
Throughs need to be placed as flat and stable as possible. Given their typically heavier weight, exercise additional caution and enlist assistance when required.
            <br />
            Observing the style of nearby walls can provide valuable insight into through stone placement. Some walls may feature flush through stones, while others might have them protruding slightly on one or both sides. Aim to match this style to maintain visual consistency and structural integrity.          
            <br />
            Through stones serve to unify both sides of the wall, acting as key elements in its overall strength. By placing them thoughtfully and securely, you enhance the wall's durability and resilience.
            </p>
           
            <p className='mt-4'><strong>Second lift</strong>
            <div className='w-full flex justify-center mt-4 mb-4'>
      <img 
      src='../images/second-lift-level1-2.jpg' 
      alt='dry stone wall second lift'
      className='max-h-60 max-w-60 md:max-w-80 md:max-h-80 lg:max-h-96 lg:max-w-96'
       />
      </div> 
            Moving on to the second lift, continue building your wall using remaining stones while adhering to the principles established in the first lift. 
<br />
A key point to remember is to save some of the flattest stones for the top, using these before the copes are placed will make life much easier. 
<br />
Keep a close eye on the batter to ensure the wall maintains the proper width as it rises. Near the top, ensure the width is suitable for the copes. This attention to detail is crucial for both structural integrity and aesthetic appeal.
            </p>
            
            <p className='mt-4'><strong>Copes</strong>
            <div className='w-full flex justify-center mt-4 mb-4'>
      <img 
      src='../images/wall-rough.jpg' 
      alt='dry stone wall coping stones'
      className='max-h-60 max-w-60 md:max-w-80 md:max-h-80 lg:max-h-96 lg:max-w-96'
       />
      </div> 
            Complete the wall with top/coping stones, use a line above the wall to keep level, the trick to this is to have each stone almost touch the line, usually at its highest centre point. Do not allow any stone to touch the line or they wil not stay level. Each stone should sit securley on the top stones of the wall crossing the joints so no stone is left lose.</p>
          </div>
          
          <div className='w-[100%] menu-background h-2 mt-5 mb-5'></div>
          
          <p className='mt-8'>By diligently adhering to these steps, builders can craft dry stone walls that are not only durable and visually striking but also serve as a testament to their impeccable craftsmanship and unwavering attention to detail.</p>
          <div className='w-full flex justify-center mt-4 mb-4'>
      <img 
      src='../images/curved-dry-stone-wall.jpg' 
      alt='dry stone wall and road'
      className='max-h-80 max-w-60 md:max-w-96 md:max-h-96 brightness-[1.35]'
       />
      </div> 
      </div>
      </section>
    </div>
  );
};

export default BuildingBasics;
