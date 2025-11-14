export type RootStackParamList = {
  Login: undefined;
  Join: undefined;
};

export type UserForm = {
  email: string;
  password: string;
  firstName?: string;
  lastName?: string;
  confirmPassword?: string;
};