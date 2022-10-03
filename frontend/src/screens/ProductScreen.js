import React from 'react';
import { useParams } from 'react-router-dom';

export default function ProductScreen() {
	const params = useParams();
	const { slug } = params;
	console.log(params);
	return (
		<div>
			<h1>{slug} HEY</h1>
		</div>
	);
}
