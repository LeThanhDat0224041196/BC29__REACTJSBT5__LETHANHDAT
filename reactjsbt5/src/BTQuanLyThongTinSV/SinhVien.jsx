import React, { Component } from 'react'

export default class SinhVien extends Component {
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
            <table class="table">
              <thead>
                <tr>
                  <th>Mã SV</th>
                  <th>Họ Tên</th>
                  <th>Số điện thoại</th>
                  <th>Email</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr className='bg-light'>
                  <td>1</td>
                  <td>Thanh Dat Le</td>
                  <td>085512123123</td>
                  <td>Dat.Le@gmail.com</td>
                  <td>
                    <button className="btn btn-info mr-2">EDIT</button>
                    <button className="btn btn-danger">DELETE</button>
                  </td>
                </tr>
                <tr className='bg-light'>
                  <td>2</td>
                  <td>Yume Nishimiya</td>
                  <td>09004111996</td>
                  <td>yumeNishi04111996@gmailcom</td>
                  <td>
                    <button className="btn btn-info mr-2">EDIT</button>
                    <button className="btn btn-danger">DELETE</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
    )
  }
}
