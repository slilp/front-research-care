export interface LoginPara {
  username: string;
  password: string;
}

export const signIn = async ({ username, password }: LoginPara) => {
  console.log(username);
  console.log(password);

  return true;
};

export const checkToken = async () => {
  return true;
};
