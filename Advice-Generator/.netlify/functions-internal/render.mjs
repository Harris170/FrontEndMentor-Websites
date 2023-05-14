import { init } from '../serverless.js';

export const handler = init({
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.31d1aa1d.js","app":"_app/immutable/entry/app.4393e8cd.js","imports":["_app/immutable/entry/start.31d1aa1d.js","_app/immutable/chunks/index.cf84f0aa.js","_app/immutable/chunks/singletons.9ceeccd7.js","_app/immutable/entry/app.4393e8cd.js","_app/immutable/chunks/index.cf84f0aa.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('../server/nodes/0.js'),
			() => import('../server/nodes/1.js'),
			() => import('../server/nodes/2.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
});
