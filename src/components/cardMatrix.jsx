import Card from './card';

function CardMatrix() {
    const drawings = [
        '🎈', '🎀', '👓', '🥼', '🎨', '🛒', '🚲',
        '🚗', '🛴', '💛', '🍕', '🧴', '😀', '📷',
        '📝', '🎂', '💐', '☔', '👢', '👜', '⚽',
        '💎', '🎲', '🎵', '🔑', '👟', '🎹', '🎧',
        // '🎾',
        '🔎', '👀', '⭐', '📏', '⏳', '🏠', '🧷',
        '🚦', '💧', '🎤', '⚡', '🚀', '🌙', '🐕‍🦺',
        '✋', '🦴', '🦷', '🌈', '🦢', '🐟', '🐞',
        '👖', '🧸', '🧩', '📞', '🎻', '⌚', '🏹']

    const allArrays = Array.from({ length: 7 }, () => Array.from({ length: 7 }, () => <Card />));

    const gridStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)', // צמצום העמודות ל-4
        gap: '15px', // הפחתת הרווחים בין הקלפים
        padding: '1px', // הפחתת הפאדינג
    };
    const rowStyle = {
         // רווח למטה אחרי כל שורה
    };
    
    let index = 0;
    return (
        <>
            <h1 style={{ textAlign: 'center' }}>Double Cards</h1>
            {/* <h5>hhh</h5> */}
            <div style={gridStyle}>
                {allArrays.map((row, rowIndex) => (
                    row.map((card, colIndex) => (
                        <Card key={`${rowIndex}-${colIndex}`}
                            prop0={drawings[rowIndex]}
                            prop1={drawings[colIndex + 7]}
                            prop2={drawings[(colIndex - rowIndex + 6) % 7 + 14]}
                            prop3={drawings[(colIndex - (rowIndex * 2) + 14) % 7 + 21]}
                            prop4={drawings[(colIndex - (rowIndex * 3) + 21) % 7 + 29]}//
                            prop5={drawings[(colIndex - (rowIndex * 4) + 28) % 7 + 36]}
                            prop6={drawings[(colIndex - (rowIndex * 5) + 35) % 7 + 43]}
                            prop7={drawings[(colIndex + rowIndex) % 7 - 6 + drawings.length - 1]}
                        />
                    ))
                ))}
            </div>
        </>
    );
}

export default CardMatrix;
