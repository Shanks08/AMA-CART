import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Rating from './Rating';

export default function Product(props) {
	const { product } = props;
	return (
		<Card>
			<Link to={`/product/${product.slug}`}>
				<img src={product.image} alt={product.name} className="card-img-top" />
			</Link>
			<Card.Body>
				<Link to={`/product/${product.slug}`}>
					<Card.Title>{product.name}</Card.Title>
				</Link>
				<Rating
					rating={product.rating}
					numReviews={product.numReviews}
				></Rating>
				<Card.Text>
					<strong>${product.price}</strong>
				</Card.Text>
				<Button>Add to Card</Button>
			</Card.Body>
		</Card>
	);
}
