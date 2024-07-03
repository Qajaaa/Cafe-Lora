export const OrderItem = ({ name, image }) => {
    const fullImageUrl = `http://localhost:4000${image}`;

    return (
        <div className="order-item">
            <img src={fullImageUrl} alt={name} className="order-item__image" />
            <div className="order-item__name">{name}</div>
        </div>
    );
};