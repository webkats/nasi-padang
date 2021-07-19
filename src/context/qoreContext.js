import { QoreClient } from "@feedloop/qore-client";
import createQoreContext from "@feedloop/qore-react";
import config from "./qore.config.json";
import schema from "./qore.schema.json";

import cookies from "js-cookie";

const client = new QoreClient({
  ...config,
  getToken: () => cookies.get("token"),
});

client.init(schema);

const qoreContext = createQoreContext(client);
export default qoreContext;
