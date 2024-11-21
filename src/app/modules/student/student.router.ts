import express from 'express';
import { studentContollers } from './student.contoller';

const router = express.Router();
//will call cntroller
router.post('/create-student', studentContollers.createStudent);

//8-8 Create route , service and controller
finised