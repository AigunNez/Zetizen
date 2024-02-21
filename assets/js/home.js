const config = {
    type: 'carousel',
    startAt: 0,
    perView: 3,
    gap: 32,
    breakpoints: {
      1280: {
        perView: 3,
      },
      1024: {
        perView: 2,
      },
      768: {
        perView: 1,
      }
    }
  }
  new Glide('.glide', config).mount()

const config2 = {
  type: 'carousel',
  startAt: 0,
  perView: 6,
  gap: 32,
  breakpoints: {
    1280: {
      perView: 6,
    },
    1024: {
      perView: 4,
    },
    768: {
      perView: 2,
    }
  }
}
new Glide('.glide-member', config2).mount()