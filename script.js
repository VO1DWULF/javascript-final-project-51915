let mangaList = [
    {
        id: 1,
        name: "One Piece: East Blue 1-2-3",
        price: 10,
        age: 14,
        genre: "shonen",
        image: "https://m.media-amazon.com/images/I/71y+XnBXm4L._AC_UF1000,1000_QL80_.jpg"
    },
    {
        id: 2,
        name: "Naruto, Vol 1",
        price: 12,
        age: 14,
        genre: "shonen",
        image: "https://m.media-amazon.com/images/I/71QYLrc-IQL._AC_UF1000,1000_QL80_.jpg"
    },
    {
        id: 3,
        name: "Dragon Ball, Vol 1",
        price: 11,
        age: 14,
        genre: "shonen",
        image: "https://m.media-amazon.com/images/I/71l53JXXQ3L._AC_UF1000,1000_QL80_.jpg"
    },
    {
        id: 4,
        name: "Bleach, Vol 1",
        price: 14,
        age: 14,
        genre: "shonen",
        image: "https://m.media-amazon.com/images/I/51FEKMNJTbL.jpg"
    },
    {
        id: 5,
        name: "Attack on Titan, Volume 1",
        price: 18,
        age: 18,
        genre: "seinen",
        image: "https://m.media-amazon.com/images/I/91M9VaZWxOL._AC_UF1000,1000_QL80_.jpg"
    },
    {
        id: 6,
        name: "Death Note, Vol. 1",
        price: 15,
        age: 18,
        genre: "seinen",
        image: "https://m.media-amazon.com/images/I/51SkSDhUidL._AC_UF1000,1000_QL80_.jpg"
    },
    {
        id: 7,
        name: "Fullmetal Alchemist, Vol. 1",
        price: 13,
        age: 14,
        genre: "shonen",
        image: "https://m.media-amazon.com/images/I/61GWN9NPJvL._AC_UF1000,1000_QL80_.jpg"
    },
    {
        id: 8,
        name: "Acid Town, Volume 1",
        price: 16,
        age: 18,
        genre: "yaoi",
        image: "https://m.media-amazon.com/images/I/51VJzRdhNYL._SY346_.jpg"
    },
    {
        id: 9,
        name: "Kimetsu No Yaiba, Vol 1",
        price: 17,
        age: 14,
        genre: "shonen",
        image: "https://m.media-amazon.com/images/I/81ZNkhqRvVL._AC_UF1000,1000_QL80_.jpg"
    },
    {
        id: 10,
        name: "Neon Genesis Evangelion 3-in-1 Edition, Vol. 1",
        price: 14,
        age: 18,
        genre: "seinen",
        image: "https://m.media-amazon.com/images/I/51RZYiVyRFL._AC_UF1000,1000_QL80_.jpg"
    },
    {
        id: 11,
        name: "Berserk",
        price: 15,
        age: 18,
        genre: "seinen",
        image: "https://ia801407.us.archive.org/view_archive.php?archive=/11/items/olcovers86/olcovers86-L.zip&file=869205-L.jpg"
    },
    {
        id: 12,
        name: "Given, Vol. 1",
        price: 16,
        age: 18,
        genre: "yaoi",
        image: "https://m.media-amazon.com/images/I/71qdwc4c3pL.jpg"
    },
    {
        id: 13,
        name: "Blue Lock",
        price: 15,
        age: 14,
        genre: "sports",
        image: "https://m.media-amazon.com/images/I/51jMLFs0YBL.jpg"
    },
    {
        id: 14,
        name: "Orange: The Complete Collection, Vol. 1",
        price: 16,
        age: 14,
        genre: "drama",
        image: "https://m.media-amazon.com/images/I/A1IcRL4BbmL._SL1500_.jpg"
    },
    {
        id: 15,
        name: "Spy x Family, Vol 1",
        price: 17,
        age: 14,
        genre: "drama",
        image: "https://m.media-amazon.com/images/I/71vMGRog+iL._AC_UF1000,1000_QL80_.jpg"
    },
    {
        id: 16,
        name: "Hunter x Hunter, Vol. 1",
        price: 12,
        age: 14,
        genre: "shonen",
        image: "https://m.media-amazon.com/images/I/51muOXJRRgL.jpg"
    },
    {
        id: 17,
        name: "Tokyo Ghoul, Chapter 1",
        price: 16,
        age: 14,
        genre: "seinen",
        image: "https://m.media-amazon.com/images/I/51uWQfEYayL._AC_UF1000,1000_QL80_.jpg"
    },
    {
        id: 18,
        name: "Banana Fish, Vol. 1",
        price: 15,
        age: 18,
        genre: "drama",
        image: "https://m.media-amazon.com/images/I/81jSY-3rQRL.jpg"
    },
    {
        id: 19,
        name: "The Prince of Tennis, Volume 1",
        price: 13,
        age: 14,
        genre: "sports",
        image: "https://m.media-amazon.com/images/I/81uKzmgSZsL.jpg"
    },
    {
        id: 20,
        name: "One Punch Man, Vol 1",
        price: 14,
        age: 14,
        genre: "shonen",
        image: "https://m.media-amazon.com/images/I/81VAgJoB3BL._AC_UF1000,1000_QL80_.jpg"
    },
    {
        id: 21,
        name: "Slam Dunk 1",
        price: 15,
        age: 14,
        genre: "sports",
        image: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/81hF7CIHUTL._AC_UF1000,1000_QL80_.jpg"
    },
    {
        id: 22,
        name: "Killing Stalking, Vol 1",
        price: 17,
        genre: "yaoi",
        age: 18,
        image: "https://m.media-amazon.com/images/I/71GOjN7YY4L.jpg",
    },
    {
        id: 23,
        name: "Gantz, Vol 1",
        price: 16,
        age: 18,
        genre: "seinen",
        image: "https://m.media-amazon.com/images/I/41vP2ZtqYfL._AC_UF1000,1000_QL80_.jpg"
    },
    {
        id: 24,
        name: "Ping Pong, Vol 1",
        price: 12,
        genre: "sports",
        age: 14,
        image: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71BfVY5YEZL._AC_UF1000,1000_QL80_.jpg",
    },
    {
        id: 25,
        name: "Hellsing, Vol 1",
        price: 16,
        genre: "seinen",
        age: 18,
        image: "https://m.media-amazon.com/images/I/91lighLBbkL._AC_UF1000,1000_QL80_.jpg",
    },
    {
        id: 26,
        name: "Vinland Saga 1: Yukimura, Makoto",
        price: 15,
        genre: "shonen",
        age: 14,
        image: "https://m.media-amazon.com/images/I/91KS3nAZfRL._AC_UF1000,1000_QL80_.jpg",
    },
    {
        id: 27,
        name: "Goodnight Punpun, Vol. 1",
        price: 16,
        genre: "drama",
        age: 18,
        image: "https://m.media-amazon.com/images/I/61P35IvoVFL.jpg",
    },
];

const genreFilter = document.getElementById("genre-filter");
const priceSort = document.getElementById("price-sort");

genreFilter.addEventListener("change", updateMangaList);
priceSort.addEventListener("change", updateMangaList);

async function updateMangaList() {
    const genreValue = genreFilter.value;
    const priceValue = priceSort.value;

    let filteredList = mangaList;
    if (genreValue) {
        filteredList = filteredList.filter((manga) => manga.genre === genreValue);
    }

    if (priceValue === "asc") {
        filteredList.sort((a, b) => a.price - b.price);
    } else if (priceValue === "desc") {
        filteredList.sort((a, b) => b.price - a.price);
    }

    const mangaListContainer = document.getElementById("manga-list");
    mangaListContainer.innerHTML = "";

    for (const manga of filteredList) {
        const mangaItem = document.createElement("div");
        mangaItem.className = "manga-item";
        const summary = await getBookSummary(manga.name);
        mangaItem.innerHTML = `
        <img src="${manga.image}" alt="${manga.name}">
        <h4>${manga.name}</h4>
        <p>Price: $${manga.price}</p>
        <p>Genre: ${manga.genre}</p>
        <p>Age: ${manga.age}+</p>
        <p class="summary" hidden>Summary: ${summary}</p>
        <button class="btn btn-outline-info" onclick="addToCart(${manga.id})">Add to Cart <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
        </svg></button>
        <button class="btn btn-outline-secondary sumbtn" onclick="toggleSummary(this)">Summary <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-book" viewBox="0 0 16 16">
        <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z"/>
        </svg></button>`;
        mangaListContainer.appendChild(mangaItem);
    }

    localStorage.setItem("filteredMangaList", JSON.stringify(filteredList));
}

updateMangaList();

function toggleSummary(button) {
    const mangaItem = button.parentElement;
    const summary = mangaItem.querySelector(".summary");
    const summaryText = summary.textContent;
  
    Swal.fire({
      title: 'Summary',
      text: summaryText,
      icon: 'info',
      confirmButtonText: 'OK',
      customClass: 'custom-alert'
    });
  }
  

const cartItems = document.getElementById("cart-items");
const checkoutButton = document.getElementById("checkout-button");

let cart = [];

const savedCart = localStorage.getItem("cart");
if (savedCart) {
    cart = JSON.parse(savedCart);
} else {
    clearCart();
}

function updateCart() {
    cartItems.innerHTML = "";
    let cartTotal = 0;
    cart.forEach((item) => {
        const cartItem = document.createElement("div");
        cartItem.className = "cart-item";
        cartItem.innerHTML = `
            <span>${item.name} - $${item.price}</span>
            <button class="btn btn-outline-danger" onclick="removeFromCart(${item.id})">Remove</button>
        `;
        cartItems.appendChild(cartItem);
        cartTotal += item.price;
    });

    const cartTotalElement = document.createElement("div");
    cartTotalElement.innerHTML = `
        <strong>Cart Total: $${cartTotal}</strong>
    `;
    cartItems.appendChild(cartTotalElement);
}

checkoutButton.addEventListener("click", function () {
    let cartTotal = 0;
    cart.forEach((item) => {
        cartTotal += item.price;
    });

    Swal.fire({
        icon: 'success',
        title: 'Purchase Successful',
        text: `Your total amount is: $${cartTotal} USD. Thanks for your purchase!`,
    }).then(() => {
        clearCart();
        location.reload();
    });
});
function addToCart(id) {
    const item = mangaList.find((manga) => manga.id === id);
    cart.push(item);
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCart();
}

function removeFromCart(id) {
    const index = cart.findIndex((item) => item.id === id);
    if (index !== -1) {
        cart.splice(index, 1);
        localStorage.setItem("cart", JSON.stringify(cart));
        updateCart();
    }
}

const clearButton = document.getElementById("clear-button");
clearButton.addEventListener("click", function () {
    cart = [];
    localStorage.removeItem("cart");
    updateCart();
});

function clearCart() {
    cart = [];
    localStorage.removeItem("cart");
}


let users = localStorage.getItem("users") ? JSON.parse(localStorage.getItem("users")) : [];

const registerBtn = document.getElementById("register-btn");
registerBtn.addEventListener("click", function () {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const userExists = users.find(function (user) {
        return user.username === username;
    });

    if (userExists) {
        Swal.fire({
            icon: 'error',
            title: 'Username already taken',
            text: 'Please choose another username and try again.'
        });
    } else {
        const newUser = { username: username, password: password };
        users.push(newUser);
        localStorage.setItem("users", JSON.stringify(users));
        Swal.fire({
            icon: 'success',
            title: 'User registered successfully!',
            timer: 3000,
            timerProgressBar: true
        });
    }
});

const loginBtn = document.getElementById("login-btn");
loginBtn.addEventListener("click", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const user = users.find(function (user) {
        return user.username === username && user.password === password;
    });

    if (user) {
        Swal.fire({
            icon: 'success',
            title: `Login Successful`,
            text: `Welcome back, ${user.username}!`,
            timer: 3000,
            timerProgressBar: true
        });
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Invalid Credentials',
            text: 'Please check your username and password and try again'
        });
    }
});

const toggleCartButton = document.getElementById("toggle-cart-button");
const cartButtonContainer = document.querySelector(".cartbutton");

toggleCartButton.addEventListener("click", function () {
    if (cartButtonContainer.style.display === "none") {
        cartButtonContainer.style.display = "block";
        toggleCartButton.innerText = "Hide Cart";
    } else {
        cartButtonContainer.style.display = "none";
        toggleCartButton.innerText = "Show Cart";
    }
});

function getBookSummary(title) {
    return fetch(`https://www.googleapis.com/books/v1/volumes?q=${title}&maxResults=1`)
        .then(response => response.json())
        .then(data => {
            const book = data.items[0];
            return book ? book.volumeInfo.description : 'No summary available.';
        })
        .catch(error => {
            console.error(error);
            return 'Error fetching summary.';
        });
}
