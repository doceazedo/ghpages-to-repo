import { error, redirect } from '@sveltejs/kit';

export const GET = ({ params }) => {
	let { url } = params;
	if (!url.includes('github.io/')) throw error(400, 'Invalid github.io URL');

	if (url.startsWith('https://')) url = url.split('https://')[0];

	const user = url?.split('.github.io')?.[0];
	const repo = url?.split('github.io/')[1]?.split('/')?.[0];

	if (!user || !repo) throw error(400, 'Invalid URL');

	throw redirect(301, `https://github.com/${user}/${repo}`);
};
