import './styles/reset-style.scss';


function requireAll(r) {
	r.keys().map(r);

}

requireAll(require.context('./blocks', true, /^\.\/[^/]+\/[^/.]+\.(js|css|scss|sass|less)$/));





