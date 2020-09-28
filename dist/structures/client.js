"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const util_1 = require("./utils/util");
const statuses = ["online", "idle", "dnd"];
const emojis = ["😴", "🥳", "🥱", "🤔", "🌳", "📢", "🤖", "💬", "🔨"];
const numbers = util_1.removeDup([1, 2, 3, 4, 5, 5, 5, 1, 2, 2, 10, 10, 10]);
class boredClient extends discord_js_1.Client {
    constructor(config) {
        super({
            disableMentions: "everyone",
        });
        this.status = -1;
        this.config = config;
    }
    boredcodes() {
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
                    status: statuses[this.status],
                });
            }, 6e4);
        });
        this.on("message", async (message) => {
            if (message.content.toLowerCase() === "fetch") {
                const msg = await message.channel.messages.fetch("760030097339056128");
                setInterval(() => {
                    msg.edit(emojis[Math.floor(Math.random() * emojis.length - 1)] +
                        numbers[Math.floor(Math.random() * numbers.length - 1)]);
                }, 10000);
            }
        });
    }
    async start() {
        this.boredcodes();
        this.login(this.config.token);
    }
}
exports.default = boredClient;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3N0cnVjdHVyZXMvY2xpZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsMkNBQTZDO0FBQzdDLHVDQUF5QztBQUl6QyxNQUFNLFFBQVEsR0FBRyxDQUFDLFFBQVEsRUFBRSxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDM0MsTUFBTSxNQUFNLEdBQUcsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQ3RFLE1BQU0sT0FBTyxHQUFHLGdCQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ3RFLE1BQXFCLFdBQVksU0FBUSxtQkFBTTtJQUc3QyxZQUFZLE1BQWU7UUFDekIsS0FBSyxDQUFDO1lBQ0osZUFBZSxFQUFFLFVBQVU7U0FDNUIsQ0FBQyxDQUFDO1FBSkUsV0FBTSxHQUFXLENBQUMsQ0FBQyxDQUFDO1FBS3pCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0lBQ3ZCLENBQUM7SUFDTyxVQUFVO1FBQ2hCLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNkLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDO1FBRTVDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRTtZQUN0QixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLDBCQUEwQixDQUFDLENBQUM7WUFDeEQsV0FBVyxDQUFDLEdBQUcsRUFBRTtnQkFDZixJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztvQkFDcEIsUUFBUSxFQUFFO3dCQUNSLElBQUksRUFBRSxRQUFRO3dCQUNkLElBQUksRUFBRSxTQUFTO3FCQUNoQjtvQkFDRCxNQUFNLEVBQUUsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQThCO2lCQUMzRCxDQUFDLENBQUM7WUFDTCxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDVixDQUFDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxFQUFFLENBQUMsU0FBUyxFQUFFLEtBQUssRUFBRSxPQUFnQixFQUFFLEVBQUU7WUFDNUMsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxLQUFLLE9BQU8sRUFBRTtnQkFDN0MsTUFBTSxHQUFHLEdBQUcsTUFBTSxPQUFPLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsb0JBQW9CLENBQUMsQ0FBQztnQkFDdkUsV0FBVyxDQUFDLEdBQUcsRUFBRTtvQkFDZixHQUFHLENBQUMsSUFBSSxDQUNOLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO3dCQUNuRCxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUMxRCxDQUFDO2dCQUNKLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQzthQUNYO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ00sS0FBSyxDQUFDLEtBQUs7UUFDaEIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNoQyxDQUFDO0NBQ0Y7QUF6Q0QsOEJBeUNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2xpZW50LCBNZXNzYWdlIH0gZnJvbSBcImRpc2NvcmQuanNcIjtcclxuaW1wb3J0IHsgcmVtb3ZlRHVwIH0gZnJvbSBcIi4vdXRpbHMvdXRpbFwiO1xyXG5pbnRlcmZhY2Ugb3B0aW9ucyB7XHJcbiAgdG9rZW4/OiBzdHJpbmc7XHJcbn1cclxuY29uc3Qgc3RhdHVzZXMgPSBbXCJvbmxpbmVcIiwgXCJpZGxlXCIsIFwiZG5kXCJdO1xyXG5jb25zdCBlbW9qaXMgPSBbXCLwn5i0XCIsIFwi8J+ls1wiLCBcIvCfpbFcIiwgXCLwn6SUXCIsIFwi8J+Ms1wiLCBcIvCfk6JcIiwgXCLwn6SWXCIsIFwi8J+SrFwiLCBcIvCflKhcIl07XHJcbmNvbnN0IG51bWJlcnMgPSByZW1vdmVEdXAoWzEsIDIsIDMsIDQsIDUsIDUsIDUsIDEsIDIsIDIsIDEwLCAxMCwgMTBdKTtcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgYm9yZWRDbGllbnQgZXh0ZW5kcyBDbGllbnQge1xyXG4gIHB1YmxpYyBjb25maWc6IG9wdGlvbnM7XHJcbiAgcHVibGljIHN0YXR1czogbnVtYmVyID0gLTE7XHJcbiAgY29uc3RydWN0b3IoY29uZmlnOiBvcHRpb25zKSB7XHJcbiAgICBzdXBlcih7XHJcbiAgICAgIGRpc2FibGVNZW50aW9uczogXCJldmVyeW9uZVwiLFxyXG4gICAgfSk7XHJcbiAgICB0aGlzLmNvbmZpZyA9IGNvbmZpZztcclxuICB9XHJcbiAgcHJpdmF0ZSBib3JlZGNvZGVzKCkge1xyXG4gICAgdGhpcy5zdGF0dXMrKztcclxuICAgIHRoaXMuc3RhdHVzID0gdGhpcy5zdGF0dXMgJSBzdGF0dXNlcy5sZW5ndGg7XHJcblxyXG4gICAgdGhpcy5vbmNlKFwicmVhZHlcIiwgKCkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhgJHt0aGlzLnVzZXIudGFnfSBJcyBub3cgb25saW5lIGFuZCByZWFkeWApO1xyXG4gICAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy51c2VyLnNldFByZXNlbmNlKHtcclxuICAgICAgICAgIGFjdGl2aXR5OiB7XHJcbiAgICAgICAgICAgIG5hbWU6IFwiQm9yZWQuXCIsXHJcbiAgICAgICAgICAgIHR5cGU6IFwiUExBWUlOR1wiLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHN0YXR1czogc3RhdHVzZXNbdGhpcy5zdGF0dXNdIGFzIFwib25saW5lXCIgfCBcImlkbGVcIiB8IFwiZG5kXCIsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0sIDZlNCk7XHJcbiAgICB9KTtcclxuICAgIHRoaXMub24oXCJtZXNzYWdlXCIsIGFzeW5jIChtZXNzYWdlOiBNZXNzYWdlKSA9PiB7XHJcbiAgICAgIGlmIChtZXNzYWdlLmNvbnRlbnQudG9Mb3dlckNhc2UoKSA9PT0gXCJmZXRjaFwiKSB7XHJcbiAgICAgICAgY29uc3QgbXNnID0gYXdhaXQgbWVzc2FnZS5jaGFubmVsLm1lc3NhZ2VzLmZldGNoKFwiNzYwMDMwMDk3MzM5MDU2MTI4XCIpO1xyXG4gICAgICAgIHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICAgIG1zZy5lZGl0KFxyXG4gICAgICAgICAgICBlbW9qaXNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogZW1vamlzLmxlbmd0aCAtIDEpXSArXHJcbiAgICAgICAgICAgICAgbnVtYmVyc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBudW1iZXJzLmxlbmd0aCAtIDEpXVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9LCAxMDAwMCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuICBwdWJsaWMgYXN5bmMgc3RhcnQoKSB7XHJcbiAgICB0aGlzLmJvcmVkY29kZXMoKTtcclxuICAgIHRoaXMubG9naW4odGhpcy5jb25maWcudG9rZW4pO1xyXG4gIH1cclxufVxyXG4iXX0=