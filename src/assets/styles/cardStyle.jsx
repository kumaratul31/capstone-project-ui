import visaIcon from "../icons/visa.png";
import masterCardIcon from "../icons/mastercard.png";
import rupayIcon from "../icons/rupay.png";
import amexIcon from "../icons/american-express.png";
import defaultIcon from "../icons/default.png";

export const getCardVendorStyle = (type) => {
    switch (type.toLowerCase()) {
        case "american express":
            return {
                background: "linear-gradient(to right, #CDAD61, #986928)", // Golden gradient
                color: "#000", // Black text for contrast
            };
        case "visa":
            return {
                background: "linear-gradient(to right, #374151, #111827)", // Black background
                color: "#FFF", // White text
            };
        case "mastercard":
            return {
                background: "linear-gradient(to right, #0078D7, #003087)", // Blue gradient
                color: "#FFF", // White text for contrast
            };
        case "rupay":
            return {
                background: "linear-gradient(to right, #800020, #400010)", // Wine red gradient
                color: "#FFF", // White text
            };
        default:
            return {
                background: "linear-gradient(to right, #60a5fa, #1e40af)", // Default blue gradient
                color: "#FFF", // White text
            };
    }
};

export const getCardIcon = (type) => {
    switch (type.toLowerCase()) {
        case 'visa':
            return visaIcon;
        case 'mastercard':
            return masterCardIcon;
        case 'rupay':
            return rupayIcon;
        case 'american express':
            return amexIcon
        default:
            return defaultIcon;
    }
};