import React, { Component } from 'react';
import { connect } from 'react-redux'
import { huyGheAction } from '../redux/actions/DatVeActions';
import { thanhToanAction } from '../redux/actions/DatVeActions';

class ThongTinDatGhe extends Component {
    render() {
        return (
            <div>
                <div className='mt-5'>
                    <button className='gheDuocChon'></button>
                    <span className='text-light ms-2' style={{ fontSize: '20px' }}>Ghế đã đặt</span>
                    <br />
                    <button className='gheDangChon'></button>
                    <span className='text-light ms-2' style={{ fontSize: '20px' }}>Ghế đang đặt</span>
                    <br />
                    <button className='ghe ms-0'></button>
                    <span className='text-light ms-2' style={{ fontSize: '20px' }}>Ghế chưa đặt</span>
                </div>
                <div className="table-responsive mt-4 table-wrapper">
                    <table className="table table-bordered">
                        <thead >
                            <tr className='text-light text-center' style={{ fontSize: 18, letterSpacing: 2 }}>
                                <th>Số ghế</th>
                                <th>Giá</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody className='text-warning'>
                            {this.props.danhSachGheDangDat.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{item.soGhe}</td>
                                        <td>{item.gia.toLocaleString()}</td>
                                        <td>
                                            <button onClick={() => this.props.dispatch(huyGheAction(item.soGhe))} className='btn btn-danger'>x</button>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                        <tfoot>
                            <tr className='text-light' style={{ fontSize: 18, letterSpacing: 2 }}>
                                <td></td>
                                <td>Tổng tiền: </td>
                                <td>{
                                    this.props.danhSachGheDangDat.reduce((tongTien, item) => {
                                        return tongTien += item.gia
                                    }, 0).toLocaleString()
                                }</td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
                <button disabled={this.props.danhSachGheDangDat.length > 0 ? false : true} onClick={() => { this.props.dispatch(thanhToanAction()) }} data-bs-toggle="modal" data-bs-target="#exampleModal" className="btn btn-warning mt-4" style={{ letterSpacing: 2 }}>Thanh Toán</button>
                <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title text-warning"  id="exampleModalLabel">Thông tin thanh toán</h5>
                            </div>
                            <div className="modal-body">
                                Bạn đã thanh toán thành công !!
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
        danhSachGheDangDat: state.DatVeReducer.danhSachGheDangDat
    }
}

export default connect(mapStateToProps)(ThongTinDatGhe);