import { selectSeatAction } from "../actions/BookingTicketActions";
import { SELECT_SEAT } from "../types/BookingTicketTypes";
import { DELETE_SEAT } from "../types/BookingTicketTypes";
import { ACCEPT_SEATS } from "../types/BookingTicketTypes";

const stateDefault = {
    selectingSeatList: [
    ],
};

const BookingTicketReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case SELECT_SEAT: {
            let selectingSeatList = [ ...state.selectingSeatList ];
            let index = selectingSeatList.findIndex((seat, index) => seat.soGhe === action.payload.soGhe);
            if (index !== -1) {
                selectingSeatList.splice(index, 1);
            }
            else {
                selectingSeatList.push(action.payload);
            }
            state.selectingSeatList = selectingSeatList;

            return { ...state };
        }

        case DELETE_SEAT: {
            let selectingSeatList = [ ...state.selectingSeatList ];
            let index = selectingSeatList.findIndex((seat, index) => seat.soGhe === action.payload);
            if (index !== -1) {
                selectingSeatList.splice(index, 1);
            }

            state.selectingSeatList = selectingSeatList;

            return { ...state };
        }

        case ACCEPT_SEATS: {
            console.log(action);
            let selectingSeatList = [ ...state.selectingSeatList ];
            if (selectingSeatList.length !== 0) {
                selectingSeatList.map((seat, index) => {
                    seat.daDat = true;
                });
            }

            selectingSeatList = [];
            state.selectingSeatList = selectingSeatList;
            console.log(state.selectingSeatList);

            return { ...state };
        }

        default: return { ...state };
    }
};

export default BookingTicketReducer;