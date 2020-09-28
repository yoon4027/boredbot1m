import boredClient from "./structures/client";
import { token } from "./config";
const client: boredClient = new boredClient({ token });
client.start();
