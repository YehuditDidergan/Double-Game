
function Card({ prop0, prop1, prop2, prop3, prop4, prop5, prop6, prop7 }) {
    
    
    const cardStyle = {
        width: '60mm', // הקטנת רוחב הקלף
        height: '85mm', // הקטנת גובה הקלף
        borderRadius: '8px',
        border: 'black 1px solid',
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '0px',
        padding: '5px',
    };
    
    

    const numberStyle = {
        height: '45px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    };
    const getRandomFontSize = () => {
        return Math.floor(Math.random() * 40) + 30; // גודל פונט קטן יותר כדי להתאים לקלף קטן יותר
    };

    return (
        <>
            <div style={cardStyle}>
                {[...Array(8)].map((_, index) => (
                    <div key={index} style={{ ...numberStyle, fontSize: getRandomFontSize() }}>{eval(`prop${index}`)}</div>
                ))}
            </div>
        </>
    )
}

export default Card;
