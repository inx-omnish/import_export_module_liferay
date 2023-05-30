import React from 'react';
import { ExportComponent } from "export-module"

const App = () => {
	return (<div>
		<ExportComponent
			title="This is an Import Module"
			description={<p>This is an <strong>ExportComponent</strong> and it is rendered from the <span className='bold__text'>"import-module"</span></p>}
		/>
	</div>
	);
}
export default App