import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Button from "./Button";

function App() {
  const tabData = {
    titles: ["Title 1", "Title 2", "Title 3"],
    contents: ["Content 1", "Content 2", "Content 3"],
  };

  return (
    <>
      <Tabs selectedTabClassName="active-tab">
        <TabList className="flex">
          {tabData.titles.map((title, index) => (
            <Tab className="mx-2 inactive-tab">
              <Button>{title}</Button>
            </Tab>
          ))}
        </TabList>

        {tabData.contents.map((content, index) => (
          <TabPanel>
            <h2>{content}</h2>
          </TabPanel>
        ))}
      </Tabs>
    </>
  );
}

export default App;
