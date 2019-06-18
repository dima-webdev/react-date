import React from 'react';

class Toggle extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};

        //привязка this в контекст вызова, методы класса в js по умолчанию не привязаны к контексту
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState( state => ({isToggleOn: !state.isToggleOn}) );
    }

    render() {
        return(
            <button onClick={this.handleClick} className="button">
                {this.state.isToggleOn ? 'ToggleON' : 'ToggleOFF'}
            </button>
        );
    }

    
}

export default Toggle;