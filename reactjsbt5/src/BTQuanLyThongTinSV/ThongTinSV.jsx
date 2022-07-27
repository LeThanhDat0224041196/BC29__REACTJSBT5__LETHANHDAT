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

handleSubmit = (event)=>{
  event.preventDefault();

  for(const key in this.state.error){
    const message = this.state.error[key];

    if(message){
      return; 
    }
  }

  this.props.dispatch({
    type: 'ADD_USERS',
    payload: this.state.values,
  })
}

handleBlur = (event)=>{
  const {name, message} = event.target;

  
  this.setState({
    error:{
      ...this.state.error,
      [name]: message,
    }
  })
};


  
  render() {
    return (
        <div className="card p-0">
        <div className="card-header bg-dark text-white font-weight-bold">
          Thông tin sinh viên
        </div>
        <div className="card-body">
          <form onSubmit={this.handleSubmit}>
            <div className="row">
              <div className="col-6">
                <div className="form-group" >
                  <label>Mã SV</label>
                  <input 
                  title='id'
                  required 
                  type="text"
                  name='id' 
                  className="form-control" 
                  onChange={this.handleChange}
                  onBlur={this.handleBlur}/> 
                  {this.state.error.maSV}
                </div>
              </div>
              <div className="col-6">
                <div className="form-group">
                  <label>Họ Tên</label>
                  <input 
                  title='Họ và Tên'
                  required
                  name='hoTen'
                  type="text" 
                  className="form-control" 
                  onChange={this.handleChange}/>
                  {this.state.error.hoTen}
                </div>
              </div>
              <div className="col-6">
                <div className="form-group">
                  <label>Số điện thoại</label>
                  <input 
                  title='Số điện thoại'
                  name='phoneNumber'
                  required
                  type="text" 
                  className="form-control" 
                  onChange={this.handleChange}/>
                  {this.state.error.phoneNumber}
                </div>
              </div>
              <div className="col-6">
                <div className="form-group">
                  <label>Email</label>
                  <input 
                  type="text" 
                  name='email'
                  title='Email'
                  className="form-control" 
                  onChange={this.handleChange}/>
                  {this.state.error.email}
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="card-footer text-muted">
          <button className="btn btn-success mr-2">Thêm sinh viên</button>
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