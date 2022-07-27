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
  const {name, title, minLength, maxLength, validity:{
    valueMissing, patternMismatch, tooLong, tooShort 
  } } = event.target;

  let message = '';

  if(patternMismatch){
      message = `${title} is invalid partern.`;
  }

  if(valueMissing){
      message = `${title} is required`;
  }

  if(tooLong || tooShort){
      message = `${title} from ${minLength} - ${maxLength} is required`;
  }
  
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
          <form noValidate onSubmit={this.handleSubmit}>
            <div className="row">
              <div className="col-6">
                <div className="form-group" >
                  <label>ID</label>
                  <input 
                  title='Id'
                  required 
                  type="text"
                  name='id' 
                  className="form-control" 
                  onChange={this.handleChange}
                  onBlur={this.handleBlur}/> 
                  {this.state.error.id
                  && (<span className='text-danger'>{this.state.error.id}</span>)}
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
                  minLength={4}
                  maxLength={12}
                  className="form-control" 
                  onChange={this.handleChange}
                  onBlur={this.handleBlur}/>
                  {this.state.error.hoTen
                  && (<span className='text-danger'>{this.state.error.hoTen}</span>)}
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
                  onChange={this.handleChange}
                  onBlur={this.handleBlur}/>
                  {this.state.error.phoneNumber
                   && (<span className='text-danger'>{this.state.error.phoneNumber}</span>)}
                </div>
              </div>
              <div className="col-6">
                <div className="form-group">
                  <label>Email</label>
                  <input 
                  required
                  type="text" 
                  name='email'
                  title='Email'
                  pattern='[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+[.]{1}[a-zA-Z]{2,}$'
                  className="form-control" 
                  onChange={this.handleChange}
                  onBlur={this.handleBlur}/>
                  {this.state.error.email
                  && (<span className='text-danger'>{this.state.error.email}</span>)}
                </div>
              </div>
            </div>
            <div className="card-footer text-muted">
              <button className="btn btn-success mr-2">Thêm sinh viên</button>
            </div>
          </form>
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