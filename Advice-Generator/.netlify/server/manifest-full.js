export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.96e45af4.js","app":"_app/immutable/entry/app.ff94f59d.js","imports":["_app/immutable/entry/start.96e45af4.js","_app/immutable/chunks/index.cf84f0aa.js","_app/immutable/chunks/singletons.257da12c.js","_app/immutable/entry/app.ff94f59d.js","_app/immutable/chunks/index.cf84f0aa.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js')
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
};
