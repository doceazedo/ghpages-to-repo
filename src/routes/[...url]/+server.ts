import { error, redirect } from '@sveltejs/kit';

export const GET = ({ params }) => {
	const { url } = params;
	if (!url.startsWith('https://')) throw error(400, 'URL must start with https://');
	if (!url.includes('github.io/')) throw error(400, 'Invalid github.io URL');

	const user = url?.split('https://')?.[1]?.split('.github.io')?.[0];
	const repo = url?.split('github.io/')[1]?.split('/')?.[0];

	if (!user || !repo) throw error(400, 'Invalid URL');

	throw redirect(301, `https://github.com/${user}/${repo}`);
};
