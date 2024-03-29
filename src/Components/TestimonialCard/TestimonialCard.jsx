import React from 'react';
import { Card } from 'react-bootstrap';
import './TestimonialCard.css';

const TestimonialCard = ({ img, name, description, rating, profession }) => {
    return (
        <Card className='mx-2 ' style={{ width: '22rem', borderRadius: '6px' }}>
            <Card.Body>
                <Card.Title className='d-flex align-items-center'>
                    <img
                        src={img}
                        style={{ borderRadius: '100px' }}
                        alt=''
                        height='60px'
                        width='60px'
                    />
                    <div className='mx-3'>
                        <h4 style={{ color: '#020f24' }}>
                            {name} ({rating}/10)
                        </h4>
                        <h6 style={{ color: '#020f24' }}>{profession}</h6>
                    </div>
                </Card.Title>
                <Card.Text>{description}</Card.Text>
            </Card.Body>
        </Card>
    );
};

export default TestimonialCard;
