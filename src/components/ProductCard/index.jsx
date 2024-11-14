import "./index.css";

export function ProductCard(props) {
    const { image, category, name, price } = props.data; 

    return(
        <div className="product-card">
            <img width={200} src={props.data.image} alt="" />
            <div>{props.data.category}</div>
            <h4>{props.data.name}</h4>
            <div>{props.data.price}</div>
        </div>
    );
}