import axios from "axios";

const getUserData = async (user) => {
    try {
        const uri = `/api/customer/${user}`;
        const response = await axios({
            url: uri, method: 'get'
        });
        return response.data.data;
    } catch (error) {
        console.error("[API] Error fetching user data:", error);
    }
}

const getCreditCardData = async (user, showFullCard) => {
    try {
        const uri = `/api/customer/creditcard/listcreditcards/${user}?showFullNumber=${showFullCard}`;
        const response = await axios({
            url: uri, method: 'get'
        });
        return response.data;
    } catch (error) {
        console.error("[API] Error getting transactions:", error);
    }
}

const addCreditCard = async (user, creditCardData) => {
    try {
        const uri = `/api/customer/creditcard/addcreditcard/${user}`
        const response = await axios({
            url: uri, method: 'post', data: creditCardData,
        });
        return response.data;
    } catch (error) {
        console.error("[API] Failed to AddCreditCard:", error);
    }
}

const creditCardToggleActivation = async (username, creditCardId) => {
    try {
        const uri = `/api/customer/creditcard/togglecreditcard/${username}/${creditCardId}/toggle`;
        const response = await axios({
            url: uri, method: 'put'
        });
        return response.data;
    } catch (error) {
        console.error("[API] creditCardToggleActivation : Error toggling the card:", error);
    }
}

const getTransactions = async (username, size) => {
    try {
        const uri = `/api/customer/transactions/${username}?size=${size}`;
        const response = await axios({
            url: uri, method: 'get'
        });
        const creditCardsMap = new Map();

        response.data.content.forEach(item => {
            const creditCardId = item.creditCardId;
            const transaction = item.transactionDetail;

            if (!creditCardsMap.has(creditCardId)) {
                creditCardsMap.set(creditCardId, { creditCardId, transactions: [] });
            }

            creditCardsMap.get(creditCardId).transactions.push(transaction);
        });

        return { creditcards: Array.from(creditCardsMap.values()) };
    } catch (error) {
        console.error("[API] getLastXTransactions : Error fetching transactions:", error);
    }
}
const getLastXTransactions = async (user, limit, status) => {
    try {
        const uri = `/api/customer/transactions/lastXTransactions/${user}?limit=${limit}&status=${status}`
        const response = await axios({
            url: uri, method: 'get'
        });
        return response.data;
    } catch (error) {
        console.error("[API] getLastXTransactions : Error fetching transactions:", error);
    }
}

const getLastXExpenses = async (user, limit, status) => {
    try {
        const uri = `/api/customer/transactions/lastXExpenses/${user}?limit=${limit}&status=${status}`;
        const response = await axios({
            url: uri, method: 'get'
        });
        return response.data;
    } catch (error) {
        console.error("[API] Error fetching last expenses:", error);
    }
}
const getLastMonthMaxExpense = async (user, status) => {
    try {
        const uri = `/api/customer/transactions/maxExpenses/lastMonth/${user}?status=${status}`;
        const response = await axios({
            url: uri, method: 'get'
        });
        return response.data;
    } catch (error) {
        console.error("[API] getLastMonthMaxExpense : Error fetching expenses:", error);
    }
}
const getHighValueExpenses = async (user, status, threshHold) => {
    try {
        const uri = `/api/customer/transactions/highvalue/expenses/${user}?limit=1&status=${status}&amountThreshold=${threshHold}`
        const response = await axios({
            url: uri, method: 'get'
        });
        return response.data;
    } catch (error) {
        console.error("[API] getHighValueExpenses : Error fetching expenses:", error);
    }
}

export {
    getUserData,
    getTransactions,
    getCreditCardData,
    addCreditCard,
    getLastXTransactions,
    getLastXExpenses,
    getLastMonthMaxExpense,
    getHighValueExpenses,
    creditCardToggleActivation
}