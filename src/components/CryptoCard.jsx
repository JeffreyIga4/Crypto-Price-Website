
export const CryptoCard = ({crypto}) => {

    return (
        <div className="crypto-card">
            <div className="crypto-header">
                <div className="crypto-info">
                    <img src={crypto.image} alt={crypto.name} className="crypto-image" />
                </div>
            </div>
        </div>
    )
}