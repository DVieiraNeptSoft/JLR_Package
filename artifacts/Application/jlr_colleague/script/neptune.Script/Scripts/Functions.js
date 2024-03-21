function formatDateTime(dateTime) {
    dateTime = new Date(dateTime);

    // var formattedDate = dateTime.toLocaleDateString().split("/").reverse().join("/");
    // var formattedTime = dateTime.toLocaleTimeString().slice(0, 8);

    // var formattedDateTime = formattedDate + " " + formattedTime;

    const day = dateTime.getUTCDate().toString().padStart(2, "0");
    const month = (dateTime.getUTCMonth() + 1).toString().padStart(2, "0");
    const year = dateTime.getUTCFullYear().toString();
    const hours = dateTime.getUTCHours().toString().padStart(2, "0");
    const minutes = dateTime.getUTCMinutes().toString().padStart(2, "0");
    const seconds = dateTime.getUTCSeconds().toString().padStart(2, "0");

    // const formattedDate = `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;

    var formatDateTime = `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;

    return formatDateTime;
}
