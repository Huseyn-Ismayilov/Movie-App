// Menu Toggle
const toggle = document.querySelector('.toggle')

toggle.addEventListener("click", function () {
    toggle.classList.toggle("active")
})


// Fetch 
fetch('https://api.npoint.io/ef37623e0d4c658666ef')
    .then(function (value) {
        return value.json()
    })

    .then(function (response) {

        // Movies List
        response.slice(0, 100).forEach(function (item) {
            let movieList = document.querySelector('.movie_list')
            let movieItem = document.createElement('li')
            movieItem.classList.add('movie_item')
            movieList.appendChild(movieItem)
            movieItem.innerHTML = `
            <div class="image">
            <img src="${item.image}" alt="">
                <div class="favorite_btn">
                    <svg width="16" height="14" viewBox="0 0 16 14"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M1.17157 1.33966C2.73367 -0.181334 5.26633 -0.181334 6.82842 1.33966L7.99999 2.4804L9.17157 1.33966C10.7337 -0.181334 13.2663 -0.181334 14.8284 1.33966C16.3905 2.86064 16.3905 5.32666 14.8284 6.84764L7.99999 13.4964L1.17157 6.84764C-0.390524 5.32666 -0.390524 2.86064 1.17157 1.33966Z"
                            fill="currentColor" />
                    </svg>
                </div>
            </div>
            <div class="details">
                <span>${item.year}</span>
                <a href="${item.imdb_link}" class="title">
                    <h3>${item.title}</h3>
                </a>
                <div class="info">
                    <div class="imdb">
                        <img src="./images/imdb.png" width="35" alt="">
                        <span>${item.rating} / 10</span>
                    </div>
                    <div class="liked">
                        <img src="./images/tomato.png" width="16" alt="">
                        <span>${(item.rating) * 10}%</span>
                    </div>
                </div>
                <span class="category">${item.genre}</span>
            </div>
            `

        })

        // Slider
        response.slice(68, 76).forEach(function (item) {
            var swiperWrapper = document.querySelector('.swiper-wrapper');
            var slide = document.createElement('div');
            slide.classList.add('swiper-slide')
            slide.innerHTML = `
                <div class="movie_slide">
                <div class="content">
                    <h1>${item.title}</h1>
                    <div class="info">
                        <div class="imdb">
                            <img src="./images/imdb.png" width="35" alt="">
                            <span>${item.rating} / 10</span>
                        </div>
                        <div class="liked">
                            <img src="./images/tomato.png" width="16" alt="">
                            <span>${(item.rating) * 10}%</span>
                        </div>
                    </div>
                    <p class="desc">${item.description}</p>
                    <a href="${item.imdb_link}" target="_blank" class="btn watch_btn">
                        <img src="./images/Play.svg" alt="">
                        Watch trailer
                    </a>
                </div>
                <div class="bg_img">
                    <img src="${item.image}" alt="">
                </div>
            </div>
            `;
            swiperWrapper.appendChild(slide);

            // let favoriteBtn = movieItem.querySelector('.favorite_btn');
            // favoriteBtn.addEventListener('click', function () {
            //     // 'active' sınıfını ekleyip kaldırmak için toggle kullanılır
            //     favoriteBtn.classList.toggle('active');
            // });

        });

        // Favorite Button
        var buttons = document.querySelectorAll('.favorite_btn');
        buttons.forEach(function (button) {
            button.addEventListener('click', function () {
                addClassToButton(button);
            });
        });
        function addClassToButton(button) {
            button.classList.toggle('active');
        }

        // Swiper
        var swiper = new Swiper('.slider', {
            slidesPerView: 5,
            centeredSlides: true,
            loop: true,
            lazy: true,
            autoplay: {
                delay: 2000,
                disableOnInteraction: false, 
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
                renderBullet: function (index, className) {
                    return '<span class="' + className + '">' + (index + 1) + '</span>';
                },
            },

        });

    })
    .catch(function (error) {
        console.error('Xətə baş verdi:', error);
    });



