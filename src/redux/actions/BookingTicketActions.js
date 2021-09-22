import { SELECT_SEAT } from "../types/BookingTicketTypes";
import { DELETE_SEAT } from "../types/BookingTicketTypes";
import { ACCEPT_SEATS } from "../types/BookingTicketTypes";

export const selectSeatAction = (seat) => {
    return {
        type: SELECT_SEAT,
        payload: seat,
    }
}

export const deleteSeatAction = (seatNumber) => {
    return {
        type: DELETE_SEAT,
        payload: seatNumber,
    }
}

export const acceptSeatAction = () => {
    return {
        type: ACCEPT_SEATS,
        // payload: selectingSeatList,
    }
}