import React, { Component } from 'react';
import faker from 'faker';
import { array, number, func } from 'prop-types'
import connect from 'tools/connect/connect';
import { FetchUserList } from 'modules/User/duck';
import CustomizePagination from 'components/Pagination/CustomizePagination'
import './UserList.less';
import Loading from 'components/Loading/Loading'

const User = {
  name: faker.company.companyName()
}
const propTypes = {
  userList: array,
  total: number,
  pageNumber: number
}

const pageSize = 5
const around = 4
const total = 30

class UserList extends Component {
  constructor(props){
    super(props);
    this.state = {
      pageNumber: 1
    }
  }
  componentDidMount(){
    this.props.callUser(1);
  }
  handleClick = page => {
    this.props.callUser(page)
    this.setState({
      pageNumber: page
    })
  }
  render () {
    const { userList } = this.props;
    const { pageNumber } = this.state;
    const paginationProps = { total, pageSize, pageNumber, handleClick: this.handleClick, around }
    const listHtml = userList.map((item) => {
      return (
        <tr key={item.id}>
          <td>
            <img src={item.img} alt=""/>
          </td>
          <td>{item.name}</td>
          <td>{item.age}</td>
          <td>{item.phone}</td>
          <td>{item.country}</td>
        </tr>
      )
    })
    return (
      <div className="user-list"> 
        {
          this.props.isLoading ?
            <Loading width={70} height={70} /> :null
        }
        <h1 className="company-name">{User.name}</h1>
        <table>
          <tbody>
            <tr>
              <th>Avatar</th>
              <th>Name</th>
              <th>Age</th>
              <th>Phone</th>
              <th>Country</th>
            </tr>
            {listHtml}
          </tbody>
        </table>
        <CustomizePagination {...paginationProps} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  userList: state.getIn(['user', 'userList']),
  isLoading: state.getIn([ 'user', 'isLoading' ]),
})

const mapDispatchToProps = {
  callUser: FetchUserList
}

UserList.propTypes = propTypes

UserList.defaultProps = {
  number: 0,
  userList: [],
  total: 0,
  pageNumber: 0
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
