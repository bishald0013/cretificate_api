import express from 'express';
import ParticipantController from '../controllers/participantController.js';

const router = express.Router();
const participantController = new ParticipantController();

router.post('/createParticipant', participantController.addParticipant);

export default router;
