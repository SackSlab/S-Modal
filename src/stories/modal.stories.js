/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
// import { action } from "@storybook/addon-actions";
// import { linkTo } from "@storybook/addon-links";

import App from "../App.vue";

storiesOf("S-Modal", module)
  .add(
    "Default modal",
    () => ({
      components: { App },
      template: "<app></app>"
    }),
    {
      notes: "# THIS IS DEFAULT MODAL"
    }
  )
  .add(
    "With custom slots",
    () => ({
      components: { App },
      template: `
        <app>
            <div slot="header">
                <h1>This is a custom header</h1>
            </div>
            <div slot="body">
                <p>This is a custom body</p>
            </div>
            <div slot="footer">
                <p>This is a custom footer</p>
                <button>Close Modal</button>
            </div>
        </app>
        `
    }),
    {
      notes: "# THIS IS DEFAULT MODAL"
    }
  );
