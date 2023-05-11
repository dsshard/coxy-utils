"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.randomFromArray = void 0;
const randomFromArray = (items) => items[Math.floor(Math.random() * items.length)];
exports.randomFromArray = randomFromArray;
