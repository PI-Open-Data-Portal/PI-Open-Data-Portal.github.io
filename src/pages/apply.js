import { Hero } from '@algolia/ui-library';
import Layout from '@theme/Layout';
import React from 'react';

import ApplyForm from '../components/ApplyForm.js';

function ApplyPage() {
  return (
    <Layout
      title="Open Data Portal"
      description="Port Datbase"
    >
      <div className="uil-pb-24">
        <Hero id="hero-apply" title={<img src="/img/logo.png" alt="Logo" style={{maxWidth: '300px', margin: '0 auto', display: 'block'}} />} background="curves" />
        <ApplyForm />
      </div>
    </Layout>
  );
}

export default ApplyPage;
