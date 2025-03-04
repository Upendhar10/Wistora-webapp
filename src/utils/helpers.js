import { LiveChatMock } from "./mock";
export function generateRandomMessage() {
  return LiveChatMock[Math.floor(Math.random() * LiveChatMock.length)];
}
