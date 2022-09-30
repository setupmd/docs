import React from 'react';
import Layout from '@theme/Layout';
import { useHistory } from '@docusaurus/router';

export default function Homepage() {
  const router = useHistory();

  return (
    <Layout
      description="We answer the most common questions about our project here, this page is updated as and when we don't want to repeat ourselves any further on a particular point."
      wrapperClassName="homepage"
    >
      <div className="pad">
        <div className="center homepage-content">
          <div id="hero">
            <h2>Frequently Asked Questions</h2>
          </div>
          <div id="">
            <h3>Who is setup.md for?</h3>
            <p>
              In short '<strong>everyone</strong>', this project was started so information of value could be collated into a single pane of glass. We're not looking to reinvent the wheel, the goal is to be considered an 'index site' (basically like a search engine) where we will either link to the best articles that already exist on a topic or we will write something from the ground up. We're backed by many members of the <a href="https://discord.gg/admincraft">Admincraft</a> Discord server, a community that homes over 5,000 members with knowledge that covers a wide range of fields.
            </p>
            <p>
              We don't however just want to end things here, plugin developers are welcome and encouraged to open PRs to import their plugin(s) documentation to the repository. 
            </p>
          </div>
          <br/>
          <div id="">
            <h3>How can I help improve the content?</h3>
            <p>
              For those who are looking to add new / improve existing content to our index you should totally check out <a href="/contribute">this page</a> which covers everything.
            </p>
          </div>
          <br/>
          <div id="">
            <h3>I have an idea for something not covered, how can I suggest it?</h3>
            <p>
              For this we'd recommend using our <a href="https://smd.gg/discord">Discord server</a>, we utilise the forum channels for clarity and consolidation to a single location. Once enough information has been fed into the channel a project contributor will submit the idea along with supporting comments for documenting, at this stage the initial thread will be locked and closed.
            </p>
            <p>
              <small>A full list of commands for our bot can be found <a href="https://smd.gg/dscsg">here</a>.</small>
            </p>
          </div>
          <br/>

        </div>
      </div>
    </Layout>
  );
}
