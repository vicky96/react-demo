import React, { Component } from 'react';
import faker from 'faker';
import connect from 'tools/connect/connect';
import { FetchUserList } from 'modules/User/duck';
import './UserList.less';

const User = {
  name: faker.company.companyName()
}

class UserList extends Component {
  componentDidMount(){
    this.props.mount();
  }
  render () {
    const userList = this.props.userList.map((item) => {
      return (
        <tr key={item.id}>
          <td>
            <img src={item.img} alt=""/>
          </td>
          <td>{item.name}</td>
          <td>{item.age}</td>
          <td>{item.phone}</td>
        </tr>
      )
    })
    return (
      <div className="user-list"> 
        <h1>{User.name}</h1>
        <table>
          <tbody>
            <tr>
              <th>Photo</th>
              <th>Name</th>
              <th>Age</th>
              <th>Phone</th>
            </tr>
            {userList}
          </tbody>
        </table>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  userList: state.getIn(['user', 'userList'])
})

const mapDispatchToProps = {
  mount: FetchUserList
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
