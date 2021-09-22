import React, { Component } from 'react';
import './BookingTicket.css';
import SeatsDetail from './SeatsDetail';
import Seats from './Seats';
import danhSachGhe from './../Data/danhSachGhe.json';

export default class BookingTicket extends Component {
    renderRowSeat = () => {
        return danhSachGhe.map((row, index) => {
            return <div key={index}>
                <Seats row={row} rowSeat={index}/>
            </div>
        })
    }

    render() {
        return (
            <div style={{position: 'fixed',
            width: '100%',
            height: '100%',
            backgroundImage: `url('./img/bgmovie.jpg')`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            }}>
                <div style={{position: 'absolute',
                top: '0',
                bottom: '0',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                width: '100%',
                heigth: '100%,'
                }}>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-8 text-center mt-5'>
                                <h1 className='text-info mt-2'>Booking Movie Ticket At CYBERLEARN.VN</h1>
                                <div className='mt-3 text-light' style={{fontSize: '25px'}}>Monitor</div>
                                <div className='d-flex flex-column justify-content-center mt-3'>
                                    <div className='screen'></div>
                                    {this.renderRowSeat()}
                                </div>
                            </div>
                            <div className='col-4 text-center mt-5'>
                                <div className="text-light mt-2">
                                    <h1>Information</h1>
                                    <SeatsDetail />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
