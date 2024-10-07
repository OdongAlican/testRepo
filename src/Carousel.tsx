import React, { useState } from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Button } from '@mui/material';

interface Item {
    id: number;
    name: string;
    description: string;
    images: string[]; // Array of image URLs
}

const items: Item[] = [
    {
        id: 1,
        name: "Random Name #1",
        description: "Probably the most random thing you have ever seen!",
        images: ["https://via.placeholder.com/300x200?text=Image+1A", "https://via.placeholder.com/300x200?text=Image+1B", "https://via.placeholder.com/300x200?text=Image+1C"]
    },
    {
        id: 2,
        name: "Random Name #2",
        description: "Hello World!",
        images: ["https://via.placeholder.com/300x200?text=Image+2A", "https://via.placeholder.com/300x200?text=Image+2B", "https://via.placeholder.com/300x200?text=Image+2C"]
    },
    {
        id: 3,
        name: "Random Name #3",
        description: "This is an interesting item!",
        images: ["https://via.placeholder.com/300x200?text=Image+3A", "https://via.placeholder.com/300x200?text=Image+3B", "https://via.placeholder.com/300x200?text=Image+3C"]
    },
    {
        id: 4,
        name: "Random Name #4",
        description: "Just another random description!",
        images: ["https://via.placeholder.com/300x200?text=Image+4A", "https://via.placeholder.com/300x200?text=Image+4B", "https://via.placeholder.com/300x200?text=Image+4C"]
    },
    {
        id: 5,
        name: "Random Name #5",
        description: "Curiosity is the key to creativity!",
        images: ["https://via.placeholder.com/300x200?text=Image+5A", "https://via.placeholder.com/300x200?text=Image+5B", "https://via.placeholder.com/300x200?text=Image+5C"]
    },
    {
        id: 6,
        name: "Random Name #6",
        description: "Randomness is a way of life!",
        images: ["https://via.placeholder.com/300x200?text=Image+6A", "https://via.placeholder.com/300x200?text=Image+6B", "https://via.placeholder.com/300x200?text=Image+6C"]
    },
    {
        id: 7,
        name: "Random Name #7",
        description: "Embrace the unexpected!",
        images: ["https://via.placeholder.com/300x200?text=Image+7A", "https://via.placeholder.com/300x200?text=Image+7B", "https://via.placeholder.com/300x200?text=Image+7C"]
    },
    {
        id: 8,
        name: "Random Name #8",
        description: "The art of randomness!",
        images: ["https://via.placeholder.com/300x200?text=Image+8A", "https://via.placeholder.com/300x200?text=Image+8B", "https://via.placeholder.com/300x200?text=Image+8C"]
    },
    {
        id: 9,
        name: "Random Name #9",
        description: "Where randomness meets creativity!",
        images: ["https://via.placeholder.com/300x200?text=Image+9A", "https://via.placeholder.com/300x200?text=Image+9B", "https://via.placeholder.com/300x200?text=Image+9C"]
    },
    {
        id: 10,
        name: "Random Name #10",
        description: "Let your imagination run wild!",
        images: ["https://via.placeholder.com/300x200?text=Image+10A", "https://via.placeholder.com/300x200?text=Image+10B", "https://via.placeholder.com/300x200?text=Image+10C"]
    }
];

const buttonStyle = {
    width: '100px',
    height: '100px',
    fontSize: '16px',
};

const navButtonStyle = {
    ...buttonStyle,
    borderRadius: '50%',
    backgroundColor: '#007bff',
    color: 'white',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.3)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
};

const Example: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex(prevIndex => Math.min(prevIndex + 1, items.length - 3));
    };

    const handlePrev = () => {
        setCurrentIndex(prevIndex => Math.max(prevIndex - 1, 0));
    };

    return (
        <div style={{ position: 'relative', width: '100%', overflow: 'hidden' }}>
            <Button onClick={handlePrev} disabled={currentIndex === 0} style={{ ...buttonStyle, position: 'absolute', left: '10px', zIndex: 1 }}>
                Previous
            </Button>
            <Carousel
                index={currentIndex}
                autoPlay={false}
                navButtonsAlwaysVisible
                next={handleNext}
                prev={handlePrev}
                animation="slide"
                interval={5000}
                navButtonsProps={{ style: navButtonStyle }}
            >
                <ItemGroup items={items.slice(currentIndex, currentIndex + 3)} />
            </Carousel>
            <Button onClick={handleNext} disabled={currentIndex >= items.length - 3} style={{ ...buttonStyle, position: 'absolute', right: '10px', zIndex: 1 }}>
                Next
            </Button>
            <div style={{ height: '20px' }} />
        </div>
    );
};

const ItemGroup: React.FC<{ items: Item[] }> = ({ items }) => {
    return (
        <Paper style={{
            display: 'flex',
            justifyContent: 'space-around',
            padding: '20px',
            alignItems: "center",
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
            borderRadius: '8px',
        }}>
            {items.map((item, index) => (
                <div
                    key={item.id}
                    style={{
                        width: '25%',
                        margin: '0 10px',
                        textAlign: 'center',
                        padding: index === 1 ? '20px' : '10px',
                        backgroundColor: index === 1 ? '#f0f0f0' : 'teal',
                        minHeight: index === 1 ? "450px" : "350px",
                        borderRadius: '8px',
                        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
                        transition: 'transform 0.2s ease',
                        transform: index === 1 ? 'scale(1.05)' : 'scale(0.95)',
                    }}
                >
                    <ImageCarousel images={item.images} />
                    <h2>{item.name}</h2>
                    <p>{item.description}</p>
                    <Button className="CheckButton">Check it out!</Button>
                </div>
            ))}
        </Paper>
    );
};

const ImageCarousel: React.FC<{ images: string[] }> = ({ images }) => {
    return (
        <Carousel
            autoPlay={true}
            animation="fade"
            navButtonsAlwaysVisible
            indicators={false}
            interval={3000}
        >
            {images.map((image, index) => (
                <Paper key={index} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px' }}>
                    <img src={image} alt={`Carousel item ${index}`} style={{ maxHeight: '100%', maxWidth: '100%' }} />
                </Paper>
            ))}
        </Carousel>
    );
};

export default Example;
