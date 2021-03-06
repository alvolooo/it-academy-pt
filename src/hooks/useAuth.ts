import { useTypedSelector } from "./useTypedSelector";

interface LoginData {
  login: string;
  name: string;
  token: string;
}

type UseAuthType = {
  login(): Promise<LoginData>;
};

// @ts-ignore
function getData(): Promise<LoginData> {
  return new Promise<LoginData>((resolve) => {
    const state = useTypedSelector((state) => state.auth);
    setTimeout(
      () =>
        resolve({
          login: state.login,
          name: state.name,
          token: state.token,
        }),
      2000
    );
  });
}
export const useAuth = (): UseAuthType => {
  const login = async () => {
    const result = await getData();
    return result;
  };
  return {
    login,
  };
};
