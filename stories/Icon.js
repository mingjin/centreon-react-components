import React from "react";
import { storiesOf } from "@storybook/react";
import { IconAction, IconClose, IconContent, IconInfo } from "../src";

storiesOf("Icon", module).add(
  "Icon - action",
  () => <IconAction iconActionType="update" />,
  { notes: "A very simple component" }
);

storiesOf("Icon", module).add("Icon - close small", () => <IconClose iconType="small" />, {
  notes: "A very simple component"
});

storiesOf("Icon", module).add("Icon - close middle", () => <IconClose iconType="middle" />, {
  notes: "A very simple component"
});

storiesOf("Icon", module).add("Icon - close big", () => <IconClose iconType="big" />, {
  notes: "A very simple component"
});

storiesOf("Icon", module).add(
  "Icon - content",
  () => <IconContent iconContentType="add" iconContentColor="green" />,
  { notes: "A very simple component" }
);

storiesOf("Icon", module).add(
  "Icon - info",
  () => <IconInfo iconName="state" />,
  { notes: "A very simple component" }
);