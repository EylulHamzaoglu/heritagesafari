document.addEventListener('DOMContentLoaded', () => {
    const museumsSection = document.getElementById('museums-section');
    const museums = [
        {
            img: 'louvre2.jpeg',
            title: 'Musée du Louvre',
            description: 'Discover one of the largest and most famous art collections in the world at this museum in Paris. The Louvre Museum is famous for the Mona Lisa and other masterpieces.',
            moreInfo:  `The Louvre Museum is located in the heart of Paris and has a vast collection of art ranging from antiquity to the modern era. The museum welcomes millions of visitors every year.
        `,
            link: 'https://www.muze.gov.tr/muze-detay?SectionId=TTP01&DistId=TT'
        },
        {
            img: 'orsay.jpeg',
            title: 'Musée du Orsay',
            description: 'Located in Paris, this museum focuses on 19th-century art and houses the works of many famous artists. The Orsay Museum is housed in a former train station.',
            moreInfo: 'The Orsay Museum is a museum in Paris that exhibits 19th century artworks. The museum houses works by artists such as Monet, Degas and Van Gogh.',
            link: 'https://www.anadolumedeniyetlerimuzesi.gov.tr/'
        },
        {
            img: 'bayeuxxx.jpeg',
            title: 'Musée de la Tapisserie de Bayeux',
            description: 'This museum in Bayeux displays the famous Bayeux Tapestry from the 11th century. The tapestry is a detailed work of art depicting the Norman Conquest.',
            moreInfo: 'The Bayeux Tapestry Museum is located in France and contains the famous Bayeux Tapestry depicting the Norman Conquest in 1066. This historical artifact is 70 meters long and tells a detailed story.',
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

