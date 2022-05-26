/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from '../components/section-header';
import FeatureCardColumn from 'components/feature-card-column.js';
import Performance from 'assets/key-feature/performance.svg';
import Partnership from 'assets/key-feature/partnership.svg';
import Subscription from 'assets/key-feature/subscription.svg';
import Support from 'assets/key-feature/support.svg';
import { IoMdThumbsDown } from 'react-icons/io';

const data = [
  {
    id: 1,
    imgSrc: Performance,
    altText: 'Trash Preparation',
    title: 'Trash Preparation',
    text:
      'Varying communities employ distinct waste containers and have different collection dates and service times. Verify collection dates, service times, and any missing garbage containers with your community management team.',
  },
  {
    id: 2,
    imgSrc: Partnership,
    altText: 'Ready for Pickup',
    title: 'Ready for Pickup',
    text:
      'Outside your front entrance, place the container containing your tightly knotted garbage bag.',
  },
  {
    id: 3,
    imgSrc: Subscription,
    altText: 'You are Done',
    title: 'You are Done',
    text:
      'Simply return the container to your unit by 9:00 a.m. the following morning.',
  },
  {
    id: 4,
    imgSrc: Support,
    altText: 'Customer Support',
    title: 'Customer Support',
    text:
      'If you need additional assistance outside what we have discussed please do not hesitate to fill out our contact form, and we can work out the details.',
  },
];

export default function KeyFeature() {
  return (
   <section sx={{ variant: 'section.keyFeature' }} id="how it work">
     <Container>
       <SectionHeader
       slogan="Our Service"
       title="How It Works"
       />

       <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCardColumn 
              key={item.id}
              src={item.imgSrc}
              alt={item.altText}
              title={item.title}
              text={item.text}
            />
          ))}
       </Grid>
     </Container>
   </section>
  );
}

const styles = {
  grid: {
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    gridGap: [
      '35px 0',
      null,
      '40px 40px',
      '50px 60px',
      '30px',
      '50px 40px',
      '55px 90px',
    ],
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(4,1fr)',
    ],
  },
};
