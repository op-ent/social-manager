import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";

export default function Twitter() {
  return (
    <Tabs>
      <TabList>
        <Tab>Timeline</Tab>
        <Tab>Tweet</Tab>
        <Tab>DMs</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <p>one!</p>
        </TabPanel>
        <TabPanel>
          <p>two!</p>
        </TabPanel>
        <TabPanel>
          <p>three!</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}
