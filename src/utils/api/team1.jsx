import axios from "axios";
import userTransactions from "./data/userTransactions.json";

const signUpCustomer = async (form) => {
    try {
        const response = await axios.post("http://localhost:9095/api/customer/register", form);
        console.log("[API] Customer registered successfully:", response.data);
    } catch (error) {
        console.error("[API] Error registering customer:", error);
    }
}

const getTransactionData = (user) => {
    try {
        const response = userTransactions;
        // const response = await axios.get(`http://localhost:8091/api/customer/transactions/${user}`);
        // console.log(response);
        return response
    } catch (error) {
        console.error("[API] Error getting tramnsactions:", error);
    }
}

export { getTransactionData, signUpCustomer }