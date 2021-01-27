import { Document, Types } from 'mongoose';

import { Trip } from './Trip';

export interface User extends Document {
  firstname: string;
  lastname: string;
  username: string;
  currentCity: Destination;
  profilePic: string;
  friends: Types.ObjectId[];
  sentFriendRequests: string[];
  receivedFriendRequests: string[];
  trips: Trip[];
  email: string;
  password: string;
  createdAt: string;
}

export interface Destination {
  formattedAddress: string;
  latitude: number;
  longitude: number;
}

export interface LoggedUser {
  username: string;
  password: string;
  token: string;
}

export interface IUser {
<<<<<<< HEAD
  user: {
    id: number,
    username: string,
    profilePic: string
  } | null;
=======
  user: {id: string} | null;
>>>>>>> f1ee5f359d4dcd2d2586d8362d1730e8e4629c48
  login: (userData: LoggedUser) => void;
  logout: () => void;
}
