import { PUBLIC_BASE_URL } from '$env/static/public';
// import { secretKey } from '$lib/server/secrets';

export const load = () => {
	console.log(`Base url ${PUBLIC_BASE_URL}`);
	return {};
};
