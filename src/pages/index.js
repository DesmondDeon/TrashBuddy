import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';

import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from '../sections/banner';
import CoreFeature from '../sections/core-feature';
import WorkFlow from '../sections/workflow';
import ContactComponent from 'components/contactComponent/ContactComponent';
import TestimonialCard from '../sections/testimonial';

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
        <Layout>
          <SEO title="NextJS Landing Page" />
          <Banner />
          <CoreFeature />
          <WorkFlow />
          <ContactComponent />
          <TestimonialCard />
        </Layout>
    </ThemeProvider>
  );
}
