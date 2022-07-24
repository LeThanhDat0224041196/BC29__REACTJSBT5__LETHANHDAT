import React, { Component } from 'react'

import { connect } from 'react-redux';


class ThongTinSV extends Component {

state = {
  values: {
    id: '',
    hoTen: '',
    phoneNumber: '',
    email: '',
  },
  error:{
    id: '',
    hoTen: '',
    phoneNumber: '',
    email: '',
  }
};

handleChange = (event)=>{
  const {name, value} = event.target;
  this.setState({
    values: {
      ...this.state.values,
      [name]: value,
    }
  })
};

handleSubmit = ()=>{


  this.props.dispatch({
    type: 'ADD_USERS',
    payload: this.state.values,
  })
}

handleBlur = ()=>{};


  
  render() {
    return (
        <div className="card p-0">
        <div className="card-header bg-dark text-white font-weight-bold">
          Thông tin sinh viên
        </div>
        <div className="card-body">
          <form>
            <div className="row">
              <div className="col-6">
                <div className="form-group" onSubmit={this.handleSubmit}>
                  <label>Mã SV</label>
                  <input type="text" className="form-control" onChange={this.handleChange}/>
                </div>
              </div>
              <div className="col-6">
                <div className="form-group">
                  <label>Họ Tên</label>
                  <input type="text" className="form-control" onChange={this.handleChange}/>
                </div>
              </div>
              <div className="col-6">
                <div className="form-group">
                  <label>Số điện thoại</label>
                  <input type="text" className="form-control" onChange={this.handleChange}/>
                </div>
              </div>
              <div className="col-6">
                <div className="form-group">
                  <label>Email</label>
                  <input type="text" className="form-control" onChange={this.handleChange}/>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="card-footer text-muted">
          <button className="btn btn-success mr-2" onChange={this.handleChange} >Thêm sinh viên</button>
        </div>
      </div>
    )
  }
}

// const mapStateToProps = (state)=>{
//     return {
//       ...state.userReducers
//     }
      
// }

export default connect ()(ThongTinSV);