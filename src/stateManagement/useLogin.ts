import { ChangeEvent } from "react";
import { create } from "zustand";
type LoginInfo = {
	username: string;
	password: string;
};

interface LoginProps {
	loginData: LoginInfo;
	setLogin: (e: ChangeEvent<HTMLInputElement>) => void;
}

const useLogin = create<LoginProps>((set) => ({
	loginData: {
		username: "",
		password: "",
	},
	setLogin: (e) => set((store) => ({ loginData: { ...store.loginData, [e.target.name]: e.target.value } })),
}));

export default useLogin;
