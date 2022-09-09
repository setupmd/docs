import React from 'react';
import {
  HomepageCard as Card,
  HomepageSection as Section,
} from './HomepageComponents';

export default function GuidesSection({ title, className }) {
  return (
    <Section title={title} className={className}>
      <Card
        title="Configure Dynmap"
        description="Introductory breakdown of the popular Dynmap plugin for your server."
        to="/guides/dynmap"
      />
      <Card
        title="Deploy a server in OCI"
        description="Learn how to configure a Minecraft server utilising Oracle Cloud free tier."
        to="/guides/oracle-cloud"
      />
      <Card
        title="Deploy Pterodactyl"
        description="Learn how to deploy Pterodactyl control panel (and wings) using Ubuntu LTS."
        to="/guides/pterodactyl"
      />
      <Card
        title="Deploy Pufferpanel"
        description="Learn how to deploy Pufferpanel (and Pufferd) using Ubuntu LTS."
        to="/guides/pufferpanel"
      />
    </Section>
  );
}
