import * as $ from 'jquery';

function createAnalytics(): object {
  let counter = 0;
  let isDestroed: boolean = false;
  const listener = (): number => counter++;

  $(document).on('click', listener);

  return {
    destroy() {
      $(document).off('click', listener);
      isDestroed = true;
    },

    getClicks() {
      if (isDestroed) return 'Analitycs is destroed';
      return counter;
    },
  }
}

window['analitics'] = createAnalytics();