import { Hero } from '@algolia/ui-library';
import Layout from '@theme/Layout';
import React from 'react';

import ApplyForm from '../components/ApplyForm.js';
import DocSearchLogo from '../components/DocSearchLogo';

function ApplyPage() {
  return (
    <Layout
      title="Open Data Portal"
    >
      <div className="uil-pb-24">
        <Hero id="hero-apply" title={<DocSearchLogo width="100%" />} background="curves" />
        <ApplyForm />
      </div>
    </Layout>
  );
}

export default ApplyPage;
