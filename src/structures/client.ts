import { Client, Message } from "discord.js";
import { removeDup } from "./utils/util";
interface options {
  token?: string;
}
const statuses = ["online", "idle", "dnd"];
const emojis = ["😴", "🥳", "🥱", "🤔", "🌳", "📢", "🤖", "💬", "🔨"];
const numbers = removeDup([1, 2, 3, 4, 5, 5, 5, 1, 2, 2, 10, 10, 10]);
export default class boredClient extends Client {
  public config: options;
  public status: number = -1;
  constructor(config: options) {
    super({
      disableMentions: "everyone",
    });
    this.config = config;
  }
  private boredcodes() {
    this.status++;
    this.status = this.status % statuses.length;

    this.once("ready", () => {
      console.log(`${this.user.tag} Is now online and ready`);
      setInterval(() => {
        this.user.setPresence({
          activity: {
            name: "Bored.",
            type: "PLAYING",
          },
          status: statuses[this.status] as "online" | "idle" | "dnd",
        });
      }, 6e4);
    });
    this.on("message", async (message: Message) => {
      if (message.content.toLowerCase() === "fetch") {
        const msg = await message.channel.messages.fetch("760030097339056128");
        setInterval(() => {
          msg.edit(
            emojis[Math.floor(Math.random() * emojis.length - 1)] +
              numbers[Math.floor(Math.random() * numbers.length - 1)]
          );
        }, 10000);
      }
    });
  }
  public async start() {
    this.boredcodes();
    this.login(this.config.token);
  }
}
