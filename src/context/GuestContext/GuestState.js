import React, { useReducer } from 'react'
import GuestContext from './guestContext'
import guestReducer from './guestReducer'
import {
    TOGGLE_FILTER,
    SEARCH_GUEST,
    CLEAR_SEARCH,
    ADD_GUEST,
    REMOVE_GUEST,
    UPDATE_GUEST,
    EDIT_GUEST,
    CLEAR_EDIT
} from '../types'
const GuestState = (props) => {
    const initialState = {
        filterGuest: false,
        search: null,
        editAble: null,
        guests: [
            {
            id: 1,
            name: "Raza Ali Khan",
            phone: "555 555 4555",
            dietary: 'Vegan',
            isconfirmed : false,
            },
            {
                id: 2,
                name: "Mohammed Afrose Ali",
                phone: "555 555 5555",
                dietary: 'Non-Veg',
                isconfirmed: true,
                },
                {
                    id: 3,
                    name: "Junaid Mohiuddin",
                    phone: "555 555 6555",
                    dietary: 'Pascatarian',
                    isconfirmed: true,
                }
        ]

    }
    const [state, dispacth] = useReducer(guestReducer, initialState)

    const addGuest = (guest) => {
        guest.id = Date.now()
        guest.isconfirmed = false
        dispacth({
            type: ADD_GUEST,
            payload:guest
        })
    }

    const removeGuest =(id) => {
        dispacth({
            type: REMOVE_GUEST,
            payload: id
        })
    }

    const updateGuest = (guest) => {
        dispacth({
            type: UPDATE_GUEST,
            payload: guest
        })
    }
    const editGuest = (guest) => {
        dispacth({
            type: EDIT_GUEST,
            payload: guest
        })
    }
    const clearEdit = () => {
        dispacth({
            type: CLEAR_EDIT
        })
    }
    const toggleFilter = () => {
        dispacth({
            type: TOGGLE_FILTER
        })
    }
   const searchGuest = (guest) => {
       dispacth ({
           type: SEARCH_GUEST,
           payload: guest
       })
   }
   const clearSearch = () => {
       dispacth ({
           type: CLEAR_SEARCH
       })
   }
    return (
        <GuestContext.Provider
        value={{
            guests: state.guests,
            filterGuest: state.filterGuest,
            search: state.search,
            editAble: state.editAble,
            addGuest,
            updateGuest,
            editGuest,
            clearEdit,
            removeGuest,
            toggleFilter,
            searchGuest,
            clearSearch
        }}
        >{props.children}</GuestContext.Provider>
    )
}

export default GuestState