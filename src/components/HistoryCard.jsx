import './HistoryCard.css'

export default function HistoryCard({title, content}) {
    return (
        <div className="card">
            <h2>{title}</h2>
            <p>{content}</p>
        </div>
    )
}