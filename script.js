const messages = {
    "M": "Happy New Year, my love! You are my everything. ❤️",
    "Didigurl": "Happy New Year, didigurl! You mean the world to me., may this year makes you even more strong, you are an inspiration to me ever and ever, Love you so much di! 🌟",
    "Friend": "Happy New Year, dear! Let’s make this year unforgettable! 🎉",
    'Janu': "Happy New Year, motii!",
    'Khusbu': 'Happy New Year Didii, may all your wishes fullfill this year',
    'Gnanavi': "Happy New Year to the sweetest elder sister",
    'Goutami': 'Happy New Year to the bestesettttt friend! lets hope for the best, i wish we will meet this year'
};

function showMessage() {
    const name = document.getElementById("nameInput").value;
    const message = messages[name] || "Happy New Year! Wishing you all the best!";
    document.getElementById("message").innerText = message;
}
