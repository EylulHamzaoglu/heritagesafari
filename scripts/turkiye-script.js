document.addEventListener('DOMContentLoaded', () => {
    const museumsSection = document.getElementById('museums-section');
    const museums = [
        {
            img: 'topkapı.jpeg',
            title: 'Topkapı Sarayı',
            description: 'Discover the splendor of the Ottoman Empire. This palace in Istanbul was the main residence of the Ottoman sultans for 400 years.',
            moreInfo:  `Topkapi Sarayı has a spectacular view of the Bosphorus Strait and exhibits items used by the sultans, holy relics and many other valuable artifacts.
        `,
            link: 'https://www.muze.gov.tr/muze-detay?SectionId=TTP01&DistId=TT'
        },
        {
            img: 'anadol.jpeg',
            title: 'Anadolu Medeniyetleri Müzesi',
            description: 'A museum exhibiting a wide range of artifacts from the Hittites to the Roman Empire. It is located in Ankara and houses artifacts of Anatolia from prehistoric times to the Roman period.',
            moreInfo: 'Anadolu Medeniyetleri Müzesi is located in the historic Ulus district of Ankara. The museum has a large collection of artifacts dating from the Paleolithic Age to the Ottoman period.',
            link: 'https://www.anadolumedeniyetlerimuzesi.gov.tr/'
        },
        {
            img: 'zeugma.jpeg',
            title: 'Zeugma Mozaik Müzesi',
            description: 'Discover the artistic and cultural richness of ancient mosaics. This museum in Gaziantep is famous for its unique mosaics from antiquity.',
            moreInfo: 'Zeugma Mozaik Müzesi is located in Gaziantep and contains world-famous artifacts such as the Gypsy Girl mosaic. The mosaics excavated from the ancient city of Zeugma are among the most valuable pieces of the museum.',
            link: 'https://www.zeugma.org.tr/'
        }
    ];


    museums.forEach((museum, index) => {
        const museumDiv = document.createElement('div');
        museumDiv.className = 'museum';
        museumDiv.innerHTML = `
            <img src="${museum.img}" alt="${museum.title}">
            <h2>${museum.title}</h2>
            <p>${museum.description}</p>
            <button class="more-info-btn" onclick="toggleInfo('info${index}')">More Info</button>
            <a href="${museum.link}" class="visit-link-btn" target="_blank">Make Reservation</a>
            <div id="info${index}" class="more-info">
                <p>${museum.moreInfo}</p>
            </div>
        `;
        museumsSection.appendChild(museumDiv);
    });

    const toggleInfo = (id) => {
        const infoDiv = document.getElementById(id);
        if (infoDiv.style.display === 'block') {
            infoDiv.style.display = 'none';
            infoDiv.style.opacity = 0;
        } else {
            infoDiv.style.display = 'block';
            setTimeout(() => {
                infoDiv.style.opacity = 1;
            }, 10); 
        }
    }

    window.toggleInfo = toggleInfo;
});

function toggleVideo() {
    var videoContainer = document.getElementById('videoContainer');
    if (videoContainer.style.display === 'block') {
        videoContainer.style.display = 'none';
    } else {
        videoContainer.style.display = 'block';
    }
}

function toggleGallery() {
    var galleryContainer = document.getElementById('galleryContainer');
    var images = galleryContainer.getElementsByClassName('gallery-image');
    var currentIndex = 0;

    if (galleryContainer.style.display === 'block') {
        galleryContainer.style.display = 'none';
        clearInterval(galleryContainer.interval);
    } else {
        galleryContainer.style.display = 'block';
        images[currentIndex].classList.add('active');

        galleryContainer.interval = setInterval(function() {
            images[currentIndex].classList.remove('active');
            currentIndex = (currentIndex + 2) % images.length;
            images[currentIndex].classList.add('active');
        }, 1000);
    }
}
