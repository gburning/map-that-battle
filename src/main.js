import App from './app.html'
import { Store } from 'svelte/store.js';

const store = new Store({
	mapSrc: 'https://i.redd.it/jw7quc7o5oc31.jpg',
	mapWidth: 0,
	mapHeight: 0,
	mapScale: 100,
	mapFitWidth: true,
	mapFitHeight: false,
	mapLoaded: false,
	gridSquaresPerRow: 10,
	gridEnabled: true,
	gridColor: '#ffffff',
	gridOpacity: 50,
	fogEnabled: true,
	fogOpacity: 90,
	fogBrushSize: 100,
	fogBrushEffect: 'remove'
});

const app = new App({
	target: document.body,
	store
})

export default app