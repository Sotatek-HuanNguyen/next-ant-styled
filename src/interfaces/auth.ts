export interface User {
  role?: string;
  blocked?: boolean;
  confirmed?: boolean;
  createdAt?: string;
  email?: string;
  id?: number | string;
  name?: string | null;
  phone?: string;
  provider?: string | null;
  surname?: string;
  updatedAt?: string;
  username?: string;
  avatar?: any;
  userType?: any;
  nickname?: string | null;
  locale?: string;
}

export interface UserModel {
  id: number;
  firstName: string;
  lastName: string;
  imgUrl: string;
  userName: string;
  email: {
    name: string;
    verified: boolean;
  };
  phone: {
    number: string;
    verified: boolean;
  };
  sex: 'male' | 'female';
  birthday: string;
  lang: 'en' | 'de';
  country: string;
  city: string;
  address1: string;
  address2?: string;
  zipcode: number;
  website?: string;
  socials?: {
    twitter?: string;
    facebook?: string;
    linkedin?: string;
  };
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  accessToken: string;
  email: string;
  expired_access: string;
  expired_refresh: string;
  id: number;
  name: string;
  refreshToken: string;
  type: string;
}
