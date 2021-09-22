import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteSeatAction } from '../../redux/actions/BookingTicketActions';
import { acceptSeatAction } from '../../redux/actions/BookingTicketActions';

class SeatsDetail extends Component {
    renderTable = () => {
        return this.props?.selectingSeatList.map((seat, index) => {
            return <tr key={index}>
                        <td>{seat.soGhe}</td>
                        <td>{seat.gia.toLocaleString()}</td>
                        <td>
                            <button className='btn btn-danger' onClick={() => this.props.delete(seat.soGhe)}>x</button>
                        </td>
                    </tr>
        })
    }

    render() {
        return (
            <div className='mt-5 ml-5'>
                <div className='d-flex flex-column'>
                    <div className='d-flex mt-3'>
                        <button className='gheDuocChon pointer'></button><span className='text-light mt-2 ml-2'> Selected Seat</span>
                    </div>
                    <div className='d-flex mt-2'>
                        <button className='gheDangChon'></button><span className='text-light mt-2 ml-2'> Selecting Seat</span>
                    </div>
                    <div className='d-flex mt-2'>
                        <button style={{marginLeft: '0'}} className='ghe'></button><span className='text-light mt-2 ml-2'> Unselected Seat</span>
                    </div>
                </div>

                <div className='mt-5 overflow-auto' style={{height: '400px'}}>
                    <table border='2'>
                        <thead>
                            <tr className="table text-light" style={{fontSize: '20px'}}>
                                <th>Seat Number</th>
                                <th>Price</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody className='text-warning'>
                            {this.renderTable()}
                        </tbody>
                        <tfoot>
                            <tr className='text-light'>
                                <td>
                                    <h1>Total</h1>
                                </td>
                                <td>{this.props.selectingSeatList.reduce((acc, seat) => acc + seat.gia, 0).toLocaleString()}
                                </td>
                                <td>
                                    <button className='btn btn-success' onClick={() => {this.props.accept()}}>Accept</button>
                                </td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        delete: (seatNumber) => {
            dispatch(deleteSeatAction(seatNumber))
        },
        accept: () => {
            dispatch(acceptSeatAction())
        },
    }
}

const mapStateToProps = state => {
    return {
        selectingSeatList: state.BookingTicketReducer.selectingSeatList
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SeatsDetail);
