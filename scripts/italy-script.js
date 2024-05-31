document.addEventListener('DOMContentLoaded', () => {
    const museumsSection = document.getElementById('museums-section');
    const museums = [
        {
            img: 'napoli5.jpg',
            title: 'Museo Archeologico Nazionale di Napoli',
            description: 'Explore artifacts from ancient Pompeii and Herculaneum. This museum in Naples houses one of the world’s finest collections of Greco-Roman antiquities.',
            moreInfo:  ` Museo Archeologico Nazionale di Napoli features artifacts from the Roman cities of Pompeii and Herculaneum. Highlights include mosaics, sculptures, and frescoes from the ancient world. `,
            link: 'https://www.muze.gov.tr/muze-detay?SectionId=TTP01&DistId=TT'
        },
        {
            img: 'uffizi2.jpeg',
            title: 'Gallerie degli Uffizi',
            description: 'Discover Renaissance masterpieces. Located in Florence, this gallery houses works by Michelangelo, Leonardo da Vinci, and Botticelli.',
            moreInfo: ' Gallerie degli Uffizi is one of the most famous art museums in the world. It showcases an extensive collection of Renaissance art, including Botticellis The Birth of Venus. ',
            link: 'https://www.anadolumedeniyetlerimuzesi.gov.tr/'
        },
        {
            img: 'vatican5.jpg',
            title: 'Musei Vaticani',
            description: 'See the artistic and cultural richness of religious art. Located in Vatican City, these museums include the Sistine Chapel with Michelangelo’s ceiling.',
            moreInfo: 'Musei Vaticani in Vatican City contain vast collections of art and historical artifacts. Key highlights include the Raphael Rooms and Michelangelo’s Sistine Chapel ceiling.',
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

