/* eslint-disable no-tabs */
class HeadLine extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
			<article class="headline">
				<figure class="headline__figure">
					<img src="./images/heros/hero-image_2.jpg " alt="Dicoding Fact Sheet">
					<figcaption>Dicoding February 2020 Infographic, 235k Members</figcaption>
				</figure>
				<div class="headline__content">
					<h1 class="headline__title">#ceritadicoding : Story of Dicoding</h1>
					<p class="headline__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus eum facere nostrum officiis qui quidem ratione similique, soluta veniam voluptatum. Accusantium ad amet asperiores, aut commodi corporis dicta distinctio ducimus expedita</p>
					<button class="headline__button">Read More</button>
				</div>
			</article>
		`;
  }
}

customElements.define('head-line', HeadLine);
