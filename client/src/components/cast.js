import React from 'react';
import {connect} from 'react-redux';

import './cast.scss';
import {fetchKACLCast} from "../actions";

export class Cast extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchKACLCast());
    }

    render() {

        const castList = this.props.kaclCast.map((c, i) => (
            <li className="cast-list-item" key={i}>
                Actor: {c.actor} Character: {c.character} Role: {c.role}
            </li>
        ));

        return (
            <div className="cast">
                <h2>KACL Cast</h2>
                <ul>
                    {castList}
                </ul>
            </div>
        )
    }

}

Cast.defaultProps = {
    kaclCast: []
};

const mapStateToProps = state => ({
    kaclCast: state.kaclCast
});

export default connect(mapStateToProps)(Cast);