"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = __importDefault(require("dotenv"));
var server_1 = __importDefault(require("./models/server"));
dotenv_1.default.config();
var server = new server_1.default;
server.listen();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsa0RBQTRCO0FBQzVCLDJEQUFxQztBQUVyQyxnQkFBTSxDQUFDLE1BQU0sRUFBRSxDQUFBO0FBRWYsSUFBTSxNQUFNLEdBQUcsSUFBSSxnQkFBTSxDQUFBO0FBRXpCLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBkb3RlbnYgZnJvbSAnZG90ZW52JztcclxuaW1wb3J0IFNlcnZlciBmcm9tICcuL21vZGVscy9zZXJ2ZXInO1xyXG5cclxuZG90ZW52LmNvbmZpZygpXHJcblxyXG5jb25zdCBzZXJ2ZXIgPSBuZXcgU2VydmVyXHJcblxyXG5zZXJ2ZXIubGlzdGVuKCkiXX0=