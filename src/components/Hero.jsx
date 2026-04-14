import './Hero.css';

export default function Hero() {
    return (
        <div class="hero-section">
            <div>
                <h2>About Seattle</h2>
                <p>Seattle is a vibrant city in the Pacific Northwest known for its stunning natural surroundings, with water, mountains, and evergreen forests all nearby. It’s home to iconic landmarks like the Space Needle and the bustling Pike Place Market, where visitors can explore local food, art, and culture. Seattle also has a rich music and tech scene, being the birthplace of artists like Nirvana and the headquarters of major companies like Amazon and Microsoft. Known for its rainy weather and coffee culture, Seattle offers a unique blend of urban energy and natural beauty.</p>
            </div>
            <div className='image-container'>
                <img src="https://upload.wikimedia.org/wikipedia/commons/5/58/Seattle_Center_as_night_falls.jpg" alt="A view of seattle" />
            </div>
        </div>
    );
}