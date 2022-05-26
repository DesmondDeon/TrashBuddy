/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container } from 'theme-ui';
import SectionHeader from 'components/section-header';
import Performance from 'assets/feature/performance.svg';

const data = [
  {
    id: 1,
    imgSrc: Performance,
    altText: 'Fast Performance',
    title: 'Fast Performance',
    text:
      'Valet Living sets the bar for what constitutes proper service. Trash and recycling are collected five nights a week at Valet Living communities doorsteps. We can also tailor days and times to meet the specific requirements of your community. <br /> Looking for a trusted and effective trash collection service at your doorstep? Simply request a free quote for our services, and we will work with you to fulfill the needs of your community. From doorstep trash pickup and valet recycling to several bids for multiple communities in or out of the same area, we can provide all of the services your community demands.'
  },
];

export default function Feature() {
  return (
   <section sx={{ variant: 'section.feature' }}>
     <Container>
       <SectionHeader 
        slogan="Quality Features"
        title="Amazing useful features"
       />
     </Container>
   </section>
  );
}

const styles = {
  grid: {
    pt: [0, null, null, null, null, null, 2],
    px: [5, 6, 0, null, 7, 8, 7],
    gridGap: [
      '40px 0',
      null,
      '45px 30px',
      null,
      '60px 50px',
      '70px 50px',
      null,
      '80px 90px',
    ],
    gridTemplateColumns: ['repeat(1,1fr)', null, 'repeat(2,1fr)'],
  },
};
