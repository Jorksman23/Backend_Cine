import express from 'express';
import { getComments, saveComments } from '../controller/CommentController.js';
import { verifyToken } from '../middleware/auth.js';

const router = express.Router();
router.post('/comment',verifyToken,saveComments);
router.get('/comment',verifyToken,getComments);
export const RouterComment =router;

