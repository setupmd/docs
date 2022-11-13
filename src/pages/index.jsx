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
            <h2>Welcome to setup.md</h2>
            <p>
              The one-stop-shop index site for all your Minecraft needs, the goal with this project is collate the best possible information into one central location. If we cannot find documentation that is clear to understand, updated with relevant information as times progresses and is consise with minimal additional bloat then we will write our own documentation.
            </p>
            <DyteButton onClick={() => router.push('/docs')}>
              Get Started &rarr;
            </DyteButton>
          </div>

          <Section title="🔗 Quick Links">
            <Card
              title="Admincraft Discord"
              description="A Minecraft server administration community with over 5000 members."
              to="https://discord.gg/WYYxXBRUwE"
            />
            <Card
              title="KennyTV's Explaining Signed Chat"
              description="Your guide to understanding signed chat and reporting in 1.19.1, hosted externally to setup.md"
              to="https://gist.github.com/kennytv/ed783dd244ca0321bbd882c347892874#file-readme-md"
            />
            <Card
              title="Luckperms Web Config Generator"
              description="A web tool for generating luckperms config.yml files that can be uploaded to your server."
              to="https://mc.tools/dashboard/permissions/luckperms"
            />
            <Card
              title="Understanding Spark"
              description="Spark isn't the easiest to understand but the official documentation is the best place to start"
              to="https://spark.lucko.me/docs/guides/Finding-lag-spikes"
            />
            <Card
              title="YouHaveTrouble's Optimisation Guide"
              description="A well respected config optimisation resource, hosted externally to setup.md"
              to="https://github.com/YouHaveTrouble/minecraft-optimization"
            />
            <Card
              title=" Blank-Cheque's regex filter for slurs "
              description="A repository with several configs regarding slurs, hosted externally to setup.md"
              to="https://github.com/Blank-Cheque/Slurs"
            />
          </Section>

          <EnhancementSection title="✨ Server Enhancements" />
          
          <GuidesSection title="📖 Completed Guides" />

        </div>
      </div>
    </Layout>
  );
}
