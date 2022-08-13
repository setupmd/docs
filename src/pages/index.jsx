import React from 'react';
import Layout from '@theme/Layout';
import { useHistory } from '@docusaurus/router';
import { DyteButton } from '@dytesdk/react-ui-kit';

import {
  HomepageCard as Card,
  HomepageSection as Section,
} from '../components/HomepageComponents';
import GuidesSection from '../components/GuidesSection';
import EnhancementSection from '../components/EnhancementSection';

export default function Homepage() {
  const router = useHistory();

  return (
    <Layout
      description="Your one-stop-shop for Minecraft administration"
      wrapperClassName="homepage"
    >
      <div className="pad">
        <div className="center homepage-content">
          <div id="hero">
            <h2>V2 DOCS ARE HERE 🥳</h2>
            <p>
              Welcome to our modernised home for documentation, V2 docs aim to be faster and better designed for modern browsing. We are not a complete site and never will be, as things change our documentation will improve for the better.
            </p>
            <DyteButton onClick={() => router.push('/getting-started')}>
              Get Started &rarr;
            </DyteButton>
          </div>

          <Section title="🔗 Quick Links">
            <Card
              title="About This Project"
              description="Learn about the setup.md project and the objective it tries to achieve."
              to="/about"
            />
            <Card
              title="Admincraft Discord"
              description="A Minecraft server administration community with over 5000 members."
              to="https://discord.gg/admincraft"
            />
            <Card
              title="Github Contribution"
              description="This is the section for those looking to enhance our current resources."
              to="/contribute"
            />
            <Card
              title="YouHaveTrouble's Optimisation Guide"
              description="A well respected config optimisation resource, hosted externally to setup.md"
              to="https://github.com/YouHaveTrouble/minecraft-optimization"
            />
          </Section>

          <EnhancementSection title="✨ Server Enhancements" />
          
          <GuidesSection title="📖 Completed Guides" />

        </div>
      </div>
    </Layout>
  );
}
