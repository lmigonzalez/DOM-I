const siteContent = { // DO NOT CHANGE THIS OBJECT
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2021",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log('project wired!')



const a1 = document.querySelectorAll('nav a')[0].innerHTML = siteContent.nav["nav-item-1"];

const a2 = document.querySelectorAll('nav a')[1].innerHTML = siteContent.nav["nav-item-2"];

const a3 = document.querySelectorAll('nav a')[2].innerHTML = siteContent.nav["nav-item-3"];

const a4 = document.querySelectorAll('nav a')[3].innerHTML = siteContent.nav["nav-item-4"];

const a5 = document.querySelectorAll('nav a')[4].innerHTML = siteContent.nav["nav-item-5"];

const a6 = document.querySelectorAll('nav a')[5].innerHTML = siteContent.nav["nav-item-6"];

const allA = document.querySelectorAll('nav a');

allA.forEach(element => {
  element.classList.add('italic')
});

const logoImg = document.querySelector('.logo').src = siteContent['images']['logo-img'];

const h1 = document.querySelector('.cta-text h1').innerHTML = siteContent.cta['h1'];

const btn = document.querySelector('.cta-text button').innerHTML = siteContent.cta['button'];

const ctaImg = document.querySelector('#cta-img').src = siteContent['images']['cta-img'];

const topContentH4_0 = document.querySelectorAll('.top-content h4')[0].innerHTML = siteContent["main-content"]['features-h4'];

const topContentp_0 = document.querySelectorAll('.top-content p')[0].innerHTML = siteContent['main-content']['features-content']

const topContentH4_1 = document.querySelectorAll('.top-content h4')[1].innerHTML = siteContent["main-content"]['about-h4'];

const topContentp_1 = document.querySelectorAll('.top-content p')[1].innerHTML = siteContent['main-content']['about-content']

const middleImg = document.querySelector('.middle-img').src = siteContent['images']['accent-img'];


const bottomContentH4_0 = document.querySelectorAll('.bottom-content h4')[0].innerHTML = siteContent["main-content"]['services-h4'];

const bottomContentp_0 = document.querySelectorAll('.bottom-content p')[0].innerHTML = siteContent['main-content']['services-content'];

const bottomContentH4_1 = document.querySelectorAll('.bottom-content h4')[1].innerHTML = siteContent["main-content"]['product-h4'];

const bottomContentp_1 = document.querySelectorAll('.bottom-content p')[1].innerHTML = siteContent['main-content']['product-content'];

const bottomContentH4_2 = document.querySelectorAll('.bottom-content h4')[2].innerHTML = siteContent["main-content"]['vision-h4'];

const bottomContentp_2 = document.querySelectorAll('.bottom-content p')[2].innerHTML = siteContent['main-content']['vision-content'];


const contacth4 = document.querySelector('.contact h4').innerHTML = siteContent['contact']['contact-h4'];

const contactAddress = document.querySelectorAll('.contact p')[0].innerHTML = siteContent['contact']['address']
const contactPhone = document.querySelectorAll('.contact p')[1].innerHTML = siteContent['contact']['phone']
const contactEmail = document.querySelectorAll('.contact p')[2].innerHTML = siteContent['contact']['email']


const fotterLink = document.querySelector('footer a');
fotterLink.classList.add('bold')
fotterLink.innerHTML = siteContent['footer']['copyright']
