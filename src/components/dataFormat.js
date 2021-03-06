const dataFormat = {
    truncateTxid: (str, n) => {
        return str.length > n ? str.substr(0, n - 1) : str;
    },

    amount: (num) => (num / 100000000).toFixed(8),

    currency: (num) => {
        const options = {
            style: "currency",
            currency: "USD"
        };
        return new Intl.NumberFormat("en-US", options).format(num);
    },

    fee: (num) => {
        return Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + " sat/vB";
    },

    tx: (num) => {
        const options = { maximumFractionDigits: 0 };
        return new Intl.NumberFormat("en-US", options).format(num);
    },

    size(bytes, decimals = 2) {
        if (bytes === 0) return "0 Bytes";

        const k = 1000; // Change k = 1000 or sizes = ["..."] as you want (bits or bytes)
        const dm = decimals < 0 ? 0 : decimals;
        const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

        const i = Math.floor(Math.log(bytes) / Math.log(k));

        return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
    },

    timestamp: (date) => {
        var seconds = Math.floor(new Date().getTime() / 1000 - date),
            interval = Math.floor(seconds / 31536000);

        interval = Math.floor(seconds / 86400);
        if (interval >= 1) return interval + " days ago";

        interval = Math.floor(seconds / 3600);
        if (interval > 1) return interval + " hours ago";
        if (interval >= 1) return interval + " hour ago";

        interval = Math.floor(seconds / 60);
        // if (interval <= 1) return interval + " minute ago";
        if (interval > 1) return interval + " minutes ago";

        return Math.floor(seconds) + " seconds ago";
    }
};

export default dataFormat;
