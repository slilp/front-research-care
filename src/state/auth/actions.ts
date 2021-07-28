export interface LoginPara {
  username: string;
  password: string;
}

export const signIn = async ({ username, password }: LoginPara) => {
  return true;
};

export const checkToken = async () => {
  return true;
};
