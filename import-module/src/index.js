import { render } from '@liferay/frontend-js-react-web';
import App from './App';

export default function main(params) {
	render(App, params, document.getElementById(params.portletElementId));
}
