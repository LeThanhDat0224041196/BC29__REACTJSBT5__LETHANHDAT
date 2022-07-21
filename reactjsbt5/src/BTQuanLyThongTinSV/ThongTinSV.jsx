import React, { Component } from 'react'

import { connect } from 'react-redux';


export default class ThongTinSV extends Component {
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
                <div className="form-group">
                  <label>Mã SV</label>
                  <input type="text" className="form-control" />
                </div>
              </div>
              <div className="col-6">
                <div className="form-group">
                  <label>Họ Tên</label>
                  <input type="text" className="form-control" />
                </div>
              </div>
              <div className="col-6">
                <div className="form-group">
                  <label>Số điện thoại</label>
                  <input type="text" className="form-control" />
                </div>
              </div>
              <div className="col-6">
                <div className="form-group">
                  <label>Email</label>
                  <input type="text" className="form-control" />
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
