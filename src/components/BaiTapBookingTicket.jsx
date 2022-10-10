import React, { Component } from 'react';
import './BaiTapBookingTicket.css'
import { connect } from 'react-redux'
import ThongTinDatGhe from './ThongTinDatGhe';
// import danhSachGheData from '../Data/danhSachGhe.json'
import HangGhe from './HangGhe';

class BaiTapBookingTicket extends Component {
    renderHangGhe = () => {
        return this.props.danhSachGheData.map((item, index) => {
            return <div key={index} >
                <HangGhe hangGhe={item} soHangGhe = {index} />
            </div>
        })
    }
    render() {
        return (
            <div className='bookingMovie' style={{ position: 'fixed', width: '100%', height: '100%', backgroundImage: `url('./img/bgmovie.jpg')`, backgroundSize: 'cover' }}>
                <div style={{position: 'fixed', backgroundColor: 'rgba(0,0,0,0.6)',  width: '100%', height: '100%' }}>
                    <div className='container-fluid'>
                        <div className="row pt-2">
                            <div className="col-12 col-lg-8  ">
                                <h2 className='m-0 text-warning text-center'>ĐẶT VÉ XEM PHIM</h2>
                                <div className='text-light text-center' style={{ fontSize: '25px' }}>Màn hình</div>
                                <div className='d-flex justify-content-center mt-2'>
                                    <div className="screen"></div>
                                </div>
                                {this.renderHangGhe()}
                            </div>
                            <div className="col-12 col-lg-4">
                                <h2 className='text-light'>DANH SÁCH GHẾ BẠN CHỌN</h2>
                                <ThongTinDatGhe />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        danhSachGheData: state.DatVeReducer.danhSachGheData
    }
}

export default connect(mapStateToProps)(BaiTapBookingTicket);