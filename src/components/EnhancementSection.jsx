import React from 'react';
import {
  HomepageCard as Card,
  HomepageSection as Section,
} from './HomepageComponents';

export default function EnhancementSection({ title, className }) {
  return (
    <Section title={title} className={className}>
      <Card
        title="Anti-X Tools"
        description="A way to disable certain mechanisms / change functionality for your Java based server."
        to="/enhancements/anti-x"
      />
      <Card
        title="Server Economy"
        description="A crash course into server economics and highly adopted plugins for you to try."
        to="/enhancements/economy"
      />
      <Card
        title="Server Permissions"
        description="A crash course into server permissions, recommended plugins and storage types."
        to="/enhancements/permissions"
      />
      <Card
        title="Server Plugins"
        description="Recommended plugins that give your players an enhanced experience."
        to="/enhancements/plugins"
      />
    </Section>
  );
}
