import React from 'react';

class Clock extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {date: new Date()}; {/* начальное состояние this.state объектом с текущим временем */}
    }

    componentDidMount() {
        this.timerID = setInterval( () => this.tick(), 1000 ); {/* Как только Clock находится в DOM реакт вызывает метод жизн цикла, тут браузер устанавл таймер, который будет вызывать tick() каждую сек */}
    }
    

    componentWillUnmount() {
        clearInterval(this.timerID); {/* если Clock удалится из DOM, реакт сбросит здесь таймер */}
    }
    
    tick() {
        this.setState({
            date: new Date()
        }); {/* Таймер вызывает tick() ежесекундно. Внутри tick() мы просим React обновить состояние компонента, вызывая setState() с текущим временем. React реагирует на изменение состояния и снова запускает render(). На этот раз this.state.date в методе render() содержит новое значение, поэтому React заменит DOM. Таким образом компонент Clock каждую секунду обновляет UI.

        */}
    }
    
    render() { 
        return (
            <div>
                <h1>Сейчас: {this.state.date.toLocaleString()}.</h1>
            </div>  
        ); {/* Реакт вызывает метод рендер комп Clock, реакт узнает, что отобразить на экране, реакт обновляет дом так, чтобы он соответ выводу рендера */}
    }

}

export default Clock;