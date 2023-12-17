import { Router } from "express";
import { chatCompletionValidator, validate } from "../utils/validators";
import { verifyToken } from "../utils/token-manager";
import {
  deleteChats,
  generateChatCompletion,
  sendChatsToUser,
} from "../controllers/chat-controller";

const chatRoutes = Router();

chatRoutes.post(
  "/new",
  validate(chatCompletionValidator),
  verifyToken,
  generateChatCompletion
);
chatRoutes.get("/all-chats", verifyToken, sendChatsToUser);
chatRoutes.delete("/delete", verifyToken, deleteChats);

export default chatRoutes;
