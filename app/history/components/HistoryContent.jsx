import React from 'react';
import HistoryIntro from './HistoryIntro';
import Timeline from './Timeline';

const HistoryContent = () => {
  return (
    <div className="relative mt-10 z-20">
      <section id="history-content">

       <HistoryIntro />
       
       <Timeline />
       
      </section>
    </div>
  );
};

export default HistoryContent;
