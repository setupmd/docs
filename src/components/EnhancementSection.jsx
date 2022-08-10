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
        description="Understand the types of preventative plugins / configurations that exist for Java servers."
        to="/enhancements/anti-x/intro"
      />
      <Card
        title="Server Permissions"
        description="Understand the concept of permission files, recommended permission plugins and storage types."
        to="/enhancements/permissions/intro"
      />
      <Card
        title="Server Plugins"
        description="A collection of essential plugins that can be used for every server 'type' and a breakdown of their configuration files."
        to="/enhancements/plugins/intro"
      />
    </Section>
  );
}
