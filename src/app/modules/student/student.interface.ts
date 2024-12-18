import { Schema, model, connect } from 'mongoose';

export type Gurdian = {
  fatherName: string;
  fatherOccupation: string;
  fateherContactNo: string;
  motherName: string;
  motherOccapation: string;
  motherContactNo: string;
};

export type UserName = {
  fisrtName: string;
  middleName: string;
  lastName: string;
};

export type LocalGurdian = {
  name: string;
  occupation: string;
  contactNo: string;
  address: string;
};

export type Student = {
  id: string;
  name: UserName;
  gender: 'male' | 'female';
  dateOfBirth: string;
  email: string;
  contactNo: string;
  emergencyContactNo: string;
  bloodGroup: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
  presentAddress: string;
  permanentAddress: string;
  gurdian: Gurdian;
  localGurdian: LocalGurdian;
  profileImg: string;
  isActive: 'active' | 'inactive';
};
