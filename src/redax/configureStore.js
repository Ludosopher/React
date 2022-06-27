import { combineReducers, createStore } from "redux";
import {cashReduser} from "./redusers/cashReduser";
import {customersReduser} from "./redusers/customersReduser";

const reduser = combineReducers({
    cash: cashReduser,
    customers: customersReduser
})

export const store = createStore(reduser);
