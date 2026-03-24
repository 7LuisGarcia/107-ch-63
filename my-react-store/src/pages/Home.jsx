import { IconBallFootball } from '@tabler/icons-react';
import './Home.css'; // <-- Add this

function Home() {
    return (
        <div className="home-wrapper text-center">
            <h1 className="home-title">Home</h1>

            <IconBallFootball stroke={2} size={60} className="home-icon" />

            <p className="home-tagline">
                Best Online Store for Soccer Cleats
            </p>

            <div className="home-description">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, voluptatem iusto! 
                    Deleniti rem et consequuntur voluptates, iure aliquid saepe esse voluptas quae soluta 
                    consequatur exercitationem delectus modi fuga facere quibusdam.
                </p>
            </div>

            <img
                className="home-image"
                src="https://plus.unsplash.com/premium_photo-1663133611323-69d98d17de90?w=1000&auto=format&fit=crop&q=60"
                alt="Soccer cleats"
            />
        </div>
    );
}

export default Home;