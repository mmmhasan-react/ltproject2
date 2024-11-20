// in this file we write schema and model
import { Schema, model, connect } from 'mongoose';
import { Student } from './student.interface';

//schema

const studentSchema = new Schema<Student>({
  id: {
    type: String,
  },
});

///8-6 Create an schema for a student videro er 6.59