import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSeatAction } from '../../redux/actions/BookingTicketActions';

class Seats extends Component {
    renderSeats = () => {
        const {row} = this.props;
        return row.danhSachGhe.map((seat, index) => {
            let cssSelectedSeat = '';
            let disabled = false;
            let cssSelectingSeat = '';
            let indexSelectingSeat = this.props.selectingSeatList.findIndex((s, index) => s.soGhe === seat.soGhe);
            if (indexSelectingSeat !== -1) {
                cssSelectingSeat = 'gheDangChon';
            }
            else {
                cssSelectingSeat = '';
            }
            if (seat.daDat) {
                cssSelectedSeat = 'gheDuocChon';
                cssSelectingSeat = '';
                disabled = true;
            }

            return <button onClick={() => this.props.selectSeat(seat)} key={index} disabled={disabled} className={`ghe ${cssSelectedSeat} ${cssSelectingSeat}`}>{seat.soGhe}</button>
        });
    }

    renderRowNumber = () => {
        return this.props.row.danhSachGhe.map((row, index) => {
            return <button className='rowNumber' key={index}>{row.soGhe}</button>
        })
    }

    renderRowSeat = () => {
        if (this.props.rowSeat === 0) {
            return <div className='ml-4'>
                {this.props.row.hang} {this.renderRowNumber()}
            </div>
        }
        else {
            return <div>
                {this.props.row.hang} {this.renderSeats()}
            </div>
        }
    }

    render() {
        return (
            <div className='text-light text-left ml-1 mt-1'>
                {this.renderRowSeat()}
            </div>      
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        selectSeat: (seat) => {
            dispatch(selectSeatAction(seat));
        },
    }
};

const mapStateToProps = state => {
    return {
        selectingSeatList: state.BookingTicketReducer.selectingSeatList
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Seats);
