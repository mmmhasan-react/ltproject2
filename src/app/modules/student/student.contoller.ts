import { Request, Response } from 'express';
import { studentServices } from './student.service';

const createStudent = async (req: Request, res: Response) => {
  try {
    const student = req.body;

    // will call service function to send data

    const result = studentServices.createStudentIntoDb(student);
    res.status(200).json({
      success: true,
      messege: 'student created',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

export const studentContollers = {
  createStudent,
};
