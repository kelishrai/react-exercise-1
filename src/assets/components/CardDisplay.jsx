import Card from './Card'
import Data from '../data/dataset.js'

export default function CardDisplay() {
    const dataset = Data;
    const Cards = dataset.map((data) => {
        return (
        <Card
            data={data}
        />
        )
    })
    return (
        <div id="card-display">
            {Cards}
        </div>
    )
}