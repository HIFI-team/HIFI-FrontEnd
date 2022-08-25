import axios from 'axios';

const AuthApi = {
	requestJoin: async body => {
		const data = await axios.post('http://localhost:8000/auth/join', body);

		console.log(data);
		return data;
	},
	requestLogin: async body => {
		const data = await axios.post('http://localhost:8000/auth/login', body);

		console.log(data);
		return data;
	},
};

export default AuthApi;
