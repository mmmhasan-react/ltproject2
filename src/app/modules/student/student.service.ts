import { Student } from './student.interface';
import { studentModel } from './student.model';

const createStudentIntoDb = async (student: Student) => {
  const rerult = await studentModel.create(student);
  return rerult;
};

export const studentServices = {
  createStudentIntoDb,
};
