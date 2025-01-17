import axios from "axios";
import userData from "./data/userData.json";
import userCreditCards from "./data/userCreditCards.json";
import lastXTransactions from "./data/lastXtransactions.json"
import lastXExpenses from "./data/lastXExpenses.json";
import lastMonthMaxExpense from "./data/lastMonthMaxExpense.json";
import highValueExpense from "./data/highValueExpense.json";

const getUserData = async (user) => {
    try {
        const response = userData
        // const response = await axios.post(`http://localhost:8091/api/customer/${user}`);
        // console.log("[API] Received User Data:", response.data);
        return response
    } catch (error) {
        console.error("[API] Error fetching user data:", error);
    }
}

const getCreditCardData = (user) => {
    try {
        const response = userCreditCards;
        // const response = await axios.get(`http://localhost:8091/api/customer/creditcard/listcreditcards/${user}`);
        return response
    } catch (error) {
        console.error("[API] Error getting tramnsactions:", error);
    }
}

const addCreditCard = async (user) => {
    try {
        const response = userCreditCards;
        // const response = await axios.get(`http://localhost:8091/api/customer/creditcard/addcreditcard/${user}`);
        // console.log(response.data);
        return response
    } catch (error) {
        console.error("[API] Error getting tramnsactions:", error);
    }
}

const getLastXTransactions = async (user) => {
    try {
        const response = lastXTransactions
        // const response = await axios.post(`http://localhost:8091/api/customer/transactions/lastXTransactions/${user}?limit=1&status=both`);
        // console.log("[API] Received User Data:", response.data);
        return response
    } catch (error) {
        console.error("[API] Error fetching user data:", error);
    }
}

const getLastXExpenses = async (user) => {
    try {
        const response = lastXExpenses
        // const response = await axios.post(`http://localhost:8091/api/customer/transactions/lastXExpenses/${user}?limit=1&status=both`);
        // console.log("[API] Received User Data:", response.data);
        return response
    } catch (error) {
        console.error("[API] Error fetching user data:", error);
    }
}
const getLastMonthMaxExpense = async (user) => {
    try {
        const response = lastMonthMaxExpense
        // const response = await axios.post(`http://localhost:8091/api/customer/transactions/lastXExpenses/${user}?limit=1&status=both`);
        // console.log("[API] Received User Data:", response.data);
        return response
    } catch (error) {
        console.error("[API] Error fetching user data:", error);
    }
}
const getHighValueExpenses = async (user) => {
    try {
        const response = highValueExpense
        // const response = await axios.post(`http://localhost:8091/api/customer/transactions/lastXExpenses/${user}?limit=1&status=both`);
        // console.log("[API] Received User Data:", response.data);
        return response
    } catch (error) {
        console.error("[API] Error fetching user data:", error);
    }
}

export { getUserData, getCreditCardData, addCreditCard, getLastXTransactions, getLastXExpenses, getLastMonthMaxExpense, getHighValueExpenses }