import { APP } from './constants.js';

export const appConfig = {
  ...APP,
  apiBaseUrl: null, // Backend қосылғанда өзгереді
  dateFormat: 'DD.MM.YYYY',
  currency: 'KZT',
  currencySymbol: '₸',
  demoMode: true,
};