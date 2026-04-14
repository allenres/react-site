function ThingsToSeeCard({title, content, image, alt}) {
    return (
        <>
            <h1>{title}</h1>
            <img src={image} alt={alt} />
            <p>{content}</p>
        </>
    );
}

export default ThingsToSeeCard;