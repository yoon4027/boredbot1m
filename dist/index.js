"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = __importDefault(require("./structures/client"));
const config_1 = require("./config");
const client = new client_1.default({ token: config_1.token });
client.start();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxpRUFBOEM7QUFDOUMscUNBQWlDO0FBQ2pDLE1BQU0sTUFBTSxHQUFnQixJQUFJLGdCQUFXLENBQUMsRUFBRSxLQUFLLEVBQUUsY0FBSyxFQUFFLENBQUMsQ0FBQztBQUM5RCxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYm9yZWRDbGllbnQgZnJvbSBcIi4vc3RydWN0dXJlcy9jbGllbnRcIjtcclxuaW1wb3J0IHsgdG9rZW4gfSBmcm9tIFwiLi9jb25maWdcIjtcclxuY29uc3QgY2xpZW50OiBib3JlZENsaWVudCA9IG5ldyBib3JlZENsaWVudCh7IHRva2VuOiB0b2tlbiB9KTtcclxuY2xpZW50LnN0YXJ0KCk7XHJcbiJdfQ==