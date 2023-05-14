export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon-32x32.png","icon-dice.svg","pattern-divider-desktop.svg","pattern-divider-mobile.svg"]),
	mimeTypes: {".png":"image/png",".svg":"image/svg+xml"},
	_: {
		client: {"start":"_app/immutable/entry/start.74d41705.js","app":"_app/immutable/entry/app.8d581869.js","imports":["_app/immutable/entry/start.74d41705.js","_app/immutable/chunks/index.cf84f0aa.js","_app/immutable/chunks/singletons.fbd2bf1f.js","_app/immutable/entry/app.8d581869.js","_app/immutable/chunks/index.cf84f0aa.js"],"stylesheets":[],"fonts":[]},
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
