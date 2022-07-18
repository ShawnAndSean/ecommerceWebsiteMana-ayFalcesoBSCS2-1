const createNav = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML = `
        <div class="nav">
            <a href = "/"><img src="../images/logo.png" class="brand-logo" alt=""><a/>
            <div class="nav-items">
                <div class="search">
                    <input type="text" class="search-box" placeholder="search brand, product">
                    <button class="search-btn">search</button>
                </div>
                <a>
                    <img src="../img/user.png" id="user-img" alt="">
                    <div class="login-logout-popup hide">
                        <p class="account-info">Logged in as:</p>
                        <button class="btn" id="user-btn">Log out</button>
                    </div>
                </a>
                <a href="/cart"><img src="../img/cart.png" alt=""></a>
            </div>
        </div>
        <ul class="links-container">
            <li class="link-item"><a href="/" class="link">Home</a></li>
            <li class="link-item"><a href="/search/Football" class="link">Football</a></li>
            <li class="link-item"><a href="/search/Basketball" class="link">Basketball</a></li>
            <li class="link-item"><a href="/search/Training" class="link">Training</a></li>
            <li class="link-item"><a href="/search/Hiking" class="link">Hiking</a></li>
            <li class="link-item"><a href="/search/Running" class="link">Running</a></li>
            <li class="link-item"><a href="/search/Men" class="link">Men</a></li>
            <li class="link-item"><a href="/search/Women" class="link">Women</a></li>
            <li class="link-item"><a href="/seller" class="link">Be a Retailer</a></li>
        </ul>
    `;
}

createNav();

// nav popup
const userImageButton = document.querySelector('#user-img');
const userPopup = document.querySelector('.login-logout-popup');
const popuptext = document.querySelector('.account-info');
const actionBtn = document.querySelector('#user-btn');

userImageButton.addEventListener('click', () => {
    userPopup.classList.toggle('hide');
})

window.onload = () => {
    let user = JSON.parse(sessionStorage.user || null);
    if (user != null) {
        // means user is logged in
        popuptext.innerHTML = `log in as, ${user.name}`;
        actionBtn.innerHTML = 'log out';
        actionBtn.addEventListener('click', () => {
            sessionStorage.clear();
            location.reload();
        })
    } else {
        // user is logged out
        popuptext.innerHTML = 'log in to place order';
        actionBtn.innerHTML = 'log in';
        actionBtn.addEventListener('click', () => {
            location.href = '/login';
        })
    }
}

// search box

const searchBtn = document.querySelector('.search-btn');
const searchBox = document.querySelector('.search-box');
searchBtn.addEventListener('click', () => {
    if (searchBox.value.length) {
        location.href = `/search/${searchBox.value}`
    }
})