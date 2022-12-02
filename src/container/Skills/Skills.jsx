import React, { Fragment } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import CTabs from "../../components/Tabs/Tabs";
import CTabs2 from "../../components/Tabs/Tabs2";
import CTabs3 from "../../components/Tabs/Tabs3";
import { AppWrap, MotionWrap } from "../../wrapper";
import "./Skills.scss";

const Skills = () => {
  return (
    <Fragment>
      <h2 className="head-text mb-4">
        <span>Skills</span> & Experiences
      </h2>
      <Tabs>
        <TabList>
          <Tab>Style 1</Tab>
          <Tab>Style 2</Tab>
          <Tab>Style 3</Tab>
        </TabList>

        <TabPanel>
          <CTabs />
        </TabPanel>
        <TabPanel>
          <CTabs2 />
        </TabPanel>
        <TabPanel>
          <CTabs3 />
        </TabPanel>
      </Tabs>
    </Fragment>
  );
};

export default AppWrap(
  MotionWrap(Skills, "app__skills"),
  "skills",
  "app__whitebg"
);
