class HeroElement extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
            <div class="container">
                <input type="radio" name="slide" class="radio-nav" id="nav-1" checked/>
                <input type="radio" name="slide" class="radio-nav" id="nav-2"/>
                <input type="radio" name="slide" class="radio-nav" id="nav-3"/>
                <ul class="slide">
                    <li class="slide-1">
                        <picture>
                            <source media="(max-width: 600px)" srcset="./images/heros/hero-image_2-small.jpg">
                            <source media="(max-width: 701px)" srcset="./images/heros/hero-image_2-large.jpg">

                            <img class="img__main lazyload" data-src="./images/heros/hero-image_2.jpg" alt="Meja dengan Makanan">
                        </picture>
                        <div class="caption">Lorem Ipsum Dolor Sit Amet 1</div>
                    </li>
                    <li class="slide-2">
                        <picture>
                            <source  media="(max-width: 600px)" srcset="./images/heros/hero-image_3-small.jpg">
                            <source  media="(max-width: 701px)" srcset="./images/heros/hero-image_3-large.jpg">

                            <img class="img__main lazyload" data-src="./images/heros/hero-image_3.jpg" alt="buah buahan">
                        </picture>
                        <div class="caption">Lorem Ipsum Dolor Sit Amet 2</div>
                    </li>
                    <li class="slide-3">
                    <picture>
                        <source  media="(max-width: 600px)" srcset="./images/heros/hero-image_4-small.jpg">
                        <source  media="(max-width: 700px)" srcset="./images/heros/hero-image_4-large.jpg">

                        <img class="img__main lazyload" data-src="./images/heros/hero-image_4.jpg" alt="warna hitam bintik putih">
                    </picture>
                        <div class="caption">Lorem Ipsum Dolor Sit Amet 3</div>
                    </li>
                </ul>
                <div class="nav-arrow nav-next">
                    <label class="nav-1" for="nav-1">></label>
                    <label class="nav-2" for="nav-2">></label>
                    <label class="nav-3" for="nav-3">></label>
                </div>
                <div class="nav-arrow nav-prev">
                    <label class="nav-1" for="nav-1"><</label>
                    <label class="nav-2" for="nav-2"><</label>
                    <label class="nav-3" for="nav-3"><</label>
                </div>
            </div>
        `;
  }
}

customElements.define('hero-element', HeroElement);
