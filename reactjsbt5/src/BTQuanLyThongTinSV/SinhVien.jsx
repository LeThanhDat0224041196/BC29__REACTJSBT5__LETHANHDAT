import React, { Component } from 'react'
import { connect } from 'react-redux';


class SinhVien extends Component {
  
  renderUserList = ()=>{
    // console.log(this.props);
    return this.props.userList.map((ele, idx)=>{
      const {id, hoTen, phoneNumber, email} = ele;
      return(
        <tr key={id} className={`${idx % 2 === 0 &&'bg-light'}`}>
            <td>{idx+1}</td>
            <td>{hoTen}</td>
            <td>{phoneNumber}</td>
            <td>{email}</td>
            <td>
              <button onClick={()=>this.props.dispatch({
                type: 'SET_USER_REDUCERS',
                payload: ele,
              })} className="btn btn-info mr-2">EDIT</button>
              <button className="btn btn-danger">DELETE</button>
            </td>
        </tr>
      );
    })
  }
  
  
  render() {
    return (
        <div className="card p-0 mt-3">
          <div className="row mt-4 px-3 ">
            <div className="col-4">
              <div className="form-group mb-0">
                <input
                  type="text"
                  placeholder="Search by full name..."
                  className="form-control"
                />
              </div>
            </div>
          </div>
          <div className="card-body">
            <table className='table'>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Họ Tên</th>
                  <th>Số điện thoại</th>
                  <th>Email</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {this.renderUserList()}
              </tbody>
            </table>
          </div>
        </div>
    )
  }
}

const mapStateToProps = (state)=>{
  return( {
    ...state.userReducers,
  })
};

export default connect (mapStateToProps)(SinhVien);
