import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class UserList extends Component {

    componentWillMount() {
        this.props.fetchUsers();
    }

    renderUser(user) {
        return (
            <div className="card card-block">
                <h4>
                    {user.name}
                </h4>
                <h6>{user.company.name}</h6>
                <p>{user.email}</p>
                <a className="btn btn-primary" href={user.website}>Website</a>
            </div>
        );
    }

    render () {
        return (
            <div className='user-list'>
                {this.props.users.map(user => this.renderUser(user))}
            </div>
        )
    }
}

const mapStateToProps = ({users}) => ({
    users
});

export default connect(mapStateToProps, actions)(UserList);