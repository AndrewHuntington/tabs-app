import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

function App() {
  const [borderColor, setBorderColor] = useState("border-green-600");

  return (
    <>
      <Tabs>
        <TabList className="flex">
          <Tab className="mx-2">
            <button
              className={`border-2 ${borderColor} rounded-full`}
              onClick={() =>
                setBorderColor((borderColor) =>
                  borderColor === "border-green-600"
                    ? "border-red-600"
                    : "border-green-600"
                )
              }
            >
              Title 1
            </button>
          </Tab>
          <Tab>Title 2</Tab>
        </TabList>

        <TabPanel>
          <h2>Any content 1</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
      </Tabs>
    </>
  );
}

export default App;
