import React from 'react';

function ListItem(props) {
    /*
    Ключи нужно определять непосредственно внутри массивов.
    Например, если вы извлекаете компонент ListItem, то нужно указывать ключ для <ListItem /> в массиве, а не в элементе <li> внутри самого ListItem.
    */

    //// Правильно! Не нужно определять здесь ключ:
    return <li>{props.value}</li>
}

function NumberList(props) {
    
    const numbers = props.numbers;
    const listItems = numbers.map( (number) =>
        <ListItem key={number.toString()} value={number} />  // Правильно! Ключ нужно определять внутри массива:
    );

    return (
        <ul>
            {listItems}
        </ul>
    )
}

export default NumberList; 