export default function Card(props) {
    const { image, location, link, name, startDate, endDate, desc } = props.data;
    return (
        <>
            <section id="card">
                <img src={image}/>
                <div>
                    <p><i src="/icons/location.svg"/><span className="small-font location">{location}</span> <a className="small-font link">{link}</a></p>
                    <h1 className="big-font">{name}</h1>
                    <br/>
                    <p className="small-font large-fw"><span>{startDate}</span> - <span>{endDate}</span></p>
                    <p className="small-font">{desc}</p>
                </div>
            </section>
            <hr/>
        </>
    )
}