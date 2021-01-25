const input = document.getElementById("pass-key");
const charFlag = document.getElementById("char-flag");
const output = document.getElementById("pass-holder");
const charLen = document.getElementById("char-len");
const key = "ot67OwrtoFQGIGBPZyCPGpWjqTmGBH7Yad7GqTnB5rmYZ9fi8DV9q6xneHmqwkpX22lMhFkAAYEt4MrDJjHxeltZcDPNjShOrOyOEZq51BPhKtgo6YSTaGk9WmWpIjqS2Ew364m7xhr2Ef8fNSKIR"

function generatePassword() {
    let arr = input.value.split("");
    let som = "";
    if (input.value.length < 4) {
        alert("You must have more than 3 characters!")
    } else {
        arr.forEach(element => {
            let pos = element.charCodeAt(0);
            som += key.charAt(pos);
        });
        if (charFlag.checked) {
            som += "=*"
        }
        if (charLen.value) {
            if (charLen.value < 4) {
                alert("You must have more than 3 characters!")
            } else {
                if (charLen.value > som.length) {
                    console.log("More Characters")
                    let numChars = charLen.value - som.length;
                    if (charFlag.checked) {
                        numChars - 2;
                    }
                    som += key.substring(0, numChars);
                } else if (charLen.value < som.length) {
                    console.log("Less Characters")
                    if (charFlag.checked) {
                        console.log(som);
                        som = som.substring(0, som.length - 2);
                        console.log(som);
                        som = som.substring(0, charLen.value - 2);
                        som += "=*"
                    } else {
                        som = som.substring(0, charLen.value);
                    }
                }
            }
        } 
        output.value = som;
        output.select();
        document.execCommand('copy');
        alert("Copied the password!")
    }
}