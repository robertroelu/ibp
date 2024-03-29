import { cloneNode } from '@finsweet/ts-utils';

export const navbar = () => {
  const navbar = document.querySelector('.navbar');

  if (!navbar) return;

  const serviceAttr = document.querySelector('[service]')?.getAttribute('service');

  const huvudmeny = document.querySelector('[menu-desktop="huvudmeny"]') as HTMLElement;
  const huvudmenyCMS = huvudmeny.querySelector(
    '[service-cms="' + serviceAttr + '"]'
  ) as HTMLElement;
  const huvudmenyButtons = huvudmenyCMS.querySelectorAll('.button-primary') as NodeListOf<Element>;
  const mobileHuvudEl = document.querySelector('[menu-mobile="huvudmeny"]') as HTMLElement;

  huvudmenyButtons.forEach((button) => {
    mobileHuvudEl.append(cloneNode(button));
  });

  const services = document.querySelector('[menu-desktop="tjanster"]') as HTMLElement;
  const serviceCMS = services.querySelector('[service-cms="' + serviceAttr + '"]') as HTMLElement;
  const servicesButtons = serviceCMS.querySelectorAll('.button-primary') as NodeListOf<Element>;
  const mobileServiceEl = document.querySelector('[menu-mobile="tjanster"]') as HTMLElement;

  servicesButtons.forEach((button) => {
    mobileServiceEl.append(cloneNode(button));
  });
};
