const tabs = document.querySelectorAll('[data-tab-target]');
const tabContents = document.querySelectorAll('[data-tab-content]');
const tabActive = document.querySelectorAll('[data-tab-active]');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.tabTarget);

    tabActive.forEach(activeTab => {
      activeTab.classList.remove('tab-active');
    });

    tabContents.forEach(tabContent => {
      tabContent.classList.remove('category-active');
    });

    tabs.forEach(tab => {
      tab.classList.remove('active');
    });

    tab.classList.add('active');
    target.classList.add('category-active');
    tab.querySelector('[data-tab-active]').classList.add('tab-active');
  });
});


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