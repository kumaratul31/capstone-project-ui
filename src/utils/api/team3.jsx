import axios from "axios";
import userTransactions from "./data/userTransactions.json";

const loginCustomer = async (form) => {
    try {
        const response = await axios.post("http://localhost:9095/api/customer/register", form);
        console.log("[API] Customer registered successfully:", response.data);
        return response
    } catch (error) {
        console.error("[API] Error registering customer:", error);
    }
}

const deleteCreditCard = async (user) => {
    try {
        const response = userTransactions;
        // const response = await axios.get(`http://localhost:8091/api/customer/transactions/${user}`);
        // console.log(response.data);
        return response
    } catch (error) {
        console.error("[API] Error getting tramnsactions:", error);
    }
}

export { loginCustomer, deleteCreditCard }