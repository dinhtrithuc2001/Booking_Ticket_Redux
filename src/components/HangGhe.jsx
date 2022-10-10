import React, { Component } from 'react';
import {connect} from 'react-redux'
import { datGheAction } from '../redux/actions/DatVeActions';

class HangGhe extends Component {
    renderGhe = () => {
        return this.props.hangGhe.danhSachGhe.map((ghe, index) => {
            // trạng thái ghế đã bị ng khác đặt
            let cssGheDaDat = '';
            let disabled = false;
            if (ghe.daDat) {
                cssGheDaDat = 'gheDuocChon';
                disabled = true
            }
            // trạng thái ghế đang đặt
            let cssGheDangDat = ''
            let indexGheDangDat = this.props.danhSachGheDangDat.findIndex(gheDangDat => 
            gheDangDat.soGhe == ghe.soGhe);
            if(indexGheDangDat !== -1){
                cssGheDangDat='gheDangChon'
            }

            return <button onClick={() => this.props.datGhe(ghe)} disabled={disabled} className={`ghe ${cssGheDaDat} ${cssGheDangDat}`} key={index}>
                {ghe.soGhe}
            </button>
        })
    }

    renderSoGheDauTien = () => {
        return this.props.hangGhe.danhSachGhe.map((ghe, index)=> {
            return <button className='rowNumber' key={index}>
                {ghe.soGhe}
            </button>
        })
    }

    renderHangGhe = () => {
        if (this.props.soHangGhe == 0) {
            return <div className='ms-3' style={{marginBottom: '-1rem'}}>
               {this.renderSoGheDauTien()}
            </div>
        }
        
        else {
            return <div>
                <span style={{fontSize: 20}}>{this.props.hangGhe.hang}</span>{this.renderGhe()}
            </div>
        }

    }
    render() {
        return (
            <div className='text-light mt-1' style={{ fontSize: 25, marginLeft: '5rem' }}>
                {this.renderHangGhe()}
            </div>
        );
    }
}

const mapStateToProp = (state) => {
    return {
        danhSachGheDangDat: state.DatVeReducer.danhSachGheDangDat
    }
}

const mapDispatchToProp = (dispatch) => {
    return {
        datGhe: (ghe) => {
            dispatch(datGheAction(ghe))
        }
    }
}

export default connect(mapStateToProp,mapDispatchToProp)(HangGhe);