import React from "react";

export default class Square extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: null,
        };
    }

    wrapClick() {
        this.setState({value: this.props.next})
        this.props.onClick();

    }

    render() {
        return (
            <button
                className="square"
                onClick={() => this.wrapClick()}>
                {this.state.value}
            </button>
        );
    }
}
  



  

  

  