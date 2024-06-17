const dateOptions = document.getElementById("date-options");
const currDatep = document.getElementById("current-date");

const date = new Date();
const day = date.getDate();
const month = date.getMonth() + 1; // +1 bcoz it shows month in a 0-11 indexing, like 0 is jan and 11 is dec
const year = date.getFullYear();
const hours = date.getHours();
const minutes = date.getMinutes();

const formattedDate = `${day}-${month}-${year}`;
currDatep.innerHTML = formattedDate;

dateOptions.addEventListener("change", (e) => {
  switch (dateOptions.value) {
    case "yyyy-mm-dd":
      currDatep.textContent = formattedDate.split("-").reverse().join("-"); // also we simply change date format 
      break;

    case "mm-dd-yyyy-h-mm":
        currDatep.textContent = `${month}-${day}-${year} ${hours} Hours ${minutes} Minutes`;
        break;
    default:
        currDatep.textContent = formattedDate;
  }
});
