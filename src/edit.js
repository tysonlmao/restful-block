import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import getEndpointData from '../inc/requests';

export default function Edit() {
	const blockProps = useBlockProps();
	const [responseData, setResponseData] = wp.element.useState(null);

	wp.element.useEffect(() => {
		async function fetchData() {
			try {
				const data = await getEndpointData('https://catfact.ninja/fact');
				console.log('API Response:', data); // Log the API response
				setResponseData(data.fact);
			} catch (error) {
				console.error('API Error:', error); // Log any errors
			}
		}
		fetchData();
	}, []);

	return (
		<p {...blockProps}>
			{responseData ? responseData : __('Loading...')}
		</p>
	);
}
