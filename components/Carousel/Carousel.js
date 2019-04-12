class Carousel {
    constructor(carousel){
    this.carousel = carousel;
    this.next = this.carousel.querySelector('.right-button');
    this.prev = this.carousel.querySelector('.left-button');
    this.img = this.carousel.querySelectorAll('img')
    this.img = Array.from(this.img)
    this.gallery = []
    this.gallery.push(this.img)
    console.log(this.carousel)
    console.log(this.next)
    console.log(this.prev)
    console.log(this.img)
    console.log(this.gallery)
    this.next.addEventListener('click', ()=> this.imageselect());
    this.prev.addEventListener('click', ()=> this.imageselect());
}
imageselect(){
    this.gallery.forEach(gal => new NewImg(gal))
    Array.from(this.gallery).map(img => img.selectimage());
}
}

class NewImg {
    constructor(img){
        this.img = img;
        console.log(this.img)
    }
    selectimage(){
        this.img.display = "block";
    }
}

let carousel = document.querySelectorAll('.carousel');
carousel.forEach( carousel => new Carousel(carousel));

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/