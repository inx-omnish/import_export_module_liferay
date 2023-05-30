import React from 'react';
import ExportComponent from './Components/ExportComponent';

const App = () => {
	return (
		<div>
			<ExportComponent title="This is an Export Module" description={<p>This is an <strong>ExportComponent</strong> and it is rendered from the <span className='bold__text'>"export-module"</span></p>} />
		</div>
	);
}

export default App