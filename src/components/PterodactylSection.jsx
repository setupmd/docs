import React from 'react';
import {
  HomepageCard as Card,
  HomepageSection as Section,
} from './HomepageComponents';

export default function PterodactylSection({ title, className }) {
  return (
    <Section title={title} className={className}>
      <Card
        title="Panel Setup"
        description="This section focuses on the web aspect of deploying Pterodactyl."
        to="/guides/pterodactyl/panel"
      />
      <Card
        title="Wings Setup"
        description="This section focuses on the docker agent (Wings)."
        to="/guides/pterodactyl/wings"
      />
      <Card
        title="Node Setup"
        description="This section focuses on configuring the node, required for creating servers"
        to="/guides/pterodactyl/node"
      />
    </Section>
  );
}
