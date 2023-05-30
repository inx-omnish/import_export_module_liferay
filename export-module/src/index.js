import { render } from '@liferay/frontend-js-react-web';
import App from './App';
import ExportComponent from './Components/ExportComponent';

export default function main(params) {
	render(App, params, document.getElementById(params.portletElementId));
}

export { ExportComponent }