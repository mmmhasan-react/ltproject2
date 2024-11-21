// in this file we write schema and model
import { Schema, model, connect } from 'mongoose';
import { Gurdian, LocalGurdian, Student, UserName } from './student.interface';

//schema
const userNameSchema = new Schema<UserName>({
  fisrtName: {
    type: String,
    required: true,
  },
  middleName: {
    type: String,
    required: true,
  },
});
const gurdianSchema = new Schema<Gurdian>({
  fatherName: { type: String, required: true },
  fatherOccupation: { type: String, required: true },
  fateherContactNo: { type: String, required: true },
  motherName: { type: String, required: true },
  motherOccapation: { type: String, required: true },
  motherContactNo: { type: String, required: true },
});
const localGurdianSchema = new Schema<LocalGurdian>({
  name: { type: String, required: true },
  occupation: { type: String, required: true },
  contactNo: { type: String, required: true },
  address: { type: String, required: true },
});
const studentSchema = new Schema<Student>({
  id: {
    type: String,
    required: true,
  },
  name: userNameSchema,
  gender: ['male', 'female'],
  dateOfBirth: { type: String },
  email: { type: String, required: true },
  contactNo: { type: String, required: true },
  emergencyContactNo: { type: String, required: true },
  bloodGroup: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
  presentAddress: { type: String, required: true },
  permanentAddress: { type: String, required: true },
  gurdian: gurdianSchema,
  localGurdian: localGurdianSchema,
  profileImg: { type: String, required: true },
  isActive: ['active', 'inactive'],
});

// create model
export const studentModel = model<Student>('Student', studentSchema);
