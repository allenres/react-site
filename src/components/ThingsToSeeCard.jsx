import './ThingsToSeeCard.css';

export default function ThingsToSeeCard({title, content, image, alt}) {
    return (
        <div className='card'>
            <h1>{title}</h1>
            <div>
                <img src={image} alt={alt} />
            </div>
            <p>{content}</p>
        </div>
    );
}