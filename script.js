function generatePassword() {
    const length = document.getElementById('length').value;
    const includeNumbers = document.getElementById('include-numbers').checked;

    let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (includeNumbers) characters += "0123456789";
    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }

    document.getElementById('password-display').value = password;
}
