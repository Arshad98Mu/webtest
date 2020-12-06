import React from 'react'

// import ImageIcon from '@material-ui/icons/Image';
// import WorkIcon from '@material-ui/icons/Work';
// import BeachAccessIcon from '@material-ui/icons/BeachAccess';
export default class DisplayName extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            firstname: this.props.response.first_name,
            secondName: this.props.response.last_name,
            prefix: "",
            suffix: '',
        }
    }



    render() {
        return (<div>
            <div>
                {this.state.prefix + " " + this.state.firstname + " " + this.state.secondName + " " + this.state.suffix}
            </div>
        </div>)
    }
}