// Format data in a currency value for the price, with fraction digits ---------work in progress----------

export const priceFormat = (num) => {
    const options = {
        style: "currency",
        currency: "USD"
        /* maximumFractionDigits: 6, */
    };
    return new Intl.NumberFormat("en-US", options).format(num);
};

// Format data in a currency value

export const currencyFormat = (num) => {
    const options = {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    };
    return new Intl.NumberFormat("en-US", options).format(num);
};

// Format data in a number value with a minimum number of significant digits

export const numberFormat = (num) => {
    const options = { maximumFractionDigits: 0 };
    return new Intl.NumberFormat("en-US", options).format(num);
};

export const timeSince = (date) => {
    var seconds = Math.floor(new Date().getTime() / 1000 - date),
        interval = Math.floor(seconds / 31536000);

    interval = Math.floor(seconds / 86400);
    if (interval >= 1) return interval + " days ago";

    interval = Math.floor(seconds / 3600);
    if (interval > 1) return interval + " hours ago";
    if (interval >= 1) return interval + " hour ago";

    interval = Math.floor(seconds / 60);
    if (interval <= 1) return interval + " minute ago";
    if (interval > 1) return interval + " minutes ago";

    return Math.floor(seconds) + " seconds ago";
};

export function formatBytes(bytes, decimals = 2) {
    if (bytes === 0) return "0 Bytes";

    const k = 1000; // Change k = 1000 or sizes = ["..."] as you want (bits or bytes)
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
}
