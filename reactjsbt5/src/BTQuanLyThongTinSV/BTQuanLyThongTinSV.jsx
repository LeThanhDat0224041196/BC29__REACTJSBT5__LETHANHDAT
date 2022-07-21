import React, { Component } from 'react';
import SinhVien from './SinhVien';
import ThongTinSV from './ThongTinSV';


export default class BaiTapQuanLyNguoidung extends Component {
  render() {
    return (
      <div className="w-75 mx-auto mt-5">
            <ThongTinSV />
            <SinhVien />
      </div>
    );
  }
}
