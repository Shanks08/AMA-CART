import React, { useEffect, useReducer } from 'react';
import axios from 'axios';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Product from '../component/Product';

const reducer = (state, action) => {
	switch (action.type) {
		case 'FETCH_REQUEST':
			return { ...state, loding: true };
		case 'FETCH_SUCCESS':
			return { ...state, products: action.payload, loading: false };
		case 'FETCH_FAIL':
			return { ...state, loading: false, error: action.payload };
		default:
			return state;
	}
};

export default function HomeScreen() {
	const [{ loading, error, products }, dispatch] = useReducer(reducer, {
		loading: true,
		error: '',
		products: [],
	});
	// const [products, setProducts] = useState([]);
	useEffect(() => {
		const fetchData = async () => {
			dispatch({ type: 'FETCH_REQUEST' });
			try {
				const result = await axios.get('/api/products');
				dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
			} catch (error) {
				dispatch({ type: 'FETCH_FAIL', payload: error.message });
			}
			// setProducts(result.data);
		};
		fetchData();
	}, []);
	return (
		<div>
			<h1>Featured Products</h1>
			<div className="products">
				{loading ? (
					<div>Loading...</div>
				) : error ? (
					<div>{error}</div>
				) : (
					<Row>
						{products.map((product) => (
							<Col key={product.slug} sm={6} md={4} lg={3} className="mb-3">
								<Product product={product}></Product>
							</Col>
						))}
					</Row>
				)}
			</div>
		</div>
	);
}