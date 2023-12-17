import { isNil } from 'lodash';

export async function getPageContent(url: string): Promise<string | null | undefined> {
  // This is a really scrappy way to do this.
  // Don't do this in production!
  const response = await fetch(url);
  const text = await response.text();

  // Particularly as it uses regexp
  return /<body[^>]*>([\W\w]*)<\/body>/.exec(text)?.[1];
}

function isBackNavigation(navigateEvent: NavigateEvent): boolean {
  if (navigateEvent.navigationType === 'push' || navigateEvent.navigationType === 'replace') {
    return false;
  }

  if (
    navigateEvent.destination.index !== -1 &&
    navigateEvent.destination.index < (window.navigation.currentEntry?.index ?? 0)
  ) {
    return true;
  }

  return false;
}

// Intercept navigations
// https://developer.chrome.com/docs/web-platform/navigation-api/
// This is a naive usage of the navigation API, to keep things simple.
export function onLinkNavigate(
  callback: (options: { toPath: string; fromPath: string; isBack: boolean }) => void,
): void {
  window.navigation.addEventListener('navigate', (event) => {
    const toUrl = new URL(event.destination.url);

    if (location.origin !== toUrl.origin) return;

    const fromPath = location.pathname;
    const isBack = isBackNavigation(event);

    event.intercept({
      async handler() {
        if (event.info === 'ignore') {
          return;
        }

        await callback({
          toPath: toUrl.pathname,
          fromPath,
          isBack,
        });
      },
    });
  });
}

export function getLink(href: string): HTMLAnchorElement | undefined {
  const fullLinkURL = new URL(href, location.href).href;
  const linkElements = document.querySelectorAll('a');
  const linkElement = [...linkElements].find((link) => link.href === fullLinkURL);

  return linkElement;
}

// This helper function returns a View-Transition-like object, even for browsers that don't support view transitions.
// It won't do the transition in unsupported browsers, it'll act as if the transition is skipped.
// It also makes it easier to add class names to the document element.
export function transitionHelper(options: {
  shouldSkipTransition?: boolean;
  classNames?: string;
  updateDOM: () => void;
}): {
  ready: Promise<unknown>;
  domUpdated?: Promise<unknown>;
  updateCallbackDone: Promise<unknown>;
  finished: Promise<unknown>;
} {
  const { shouldSkipTransition = false, classNames = '', updateDOM } = options;

  if (shouldSkipTransition || !document.startViewTransition) {
    const updateCallbackDone = Promise.resolve(updateDOM()).then(() => undefined);

    return {
      ready: Promise.reject(Error('View transitions unsupported')),
      domUpdated: updateCallbackDone,
      updateCallbackDone,
      finished: updateCallbackDone,
    };
  }

  const classNamesArray = classNames.split(/\s+/g).filter(Boolean);

  document.documentElement.classList.add(...classNamesArray);

  const transition = document.startViewTransition(updateDOM);

  transition.finished
    .finally(() => document.documentElement.classList.remove(...classNamesArray))
    .catch((error) => {
      console.error(error);
    });

  return transition;
}

export function getThumbnailWithViewTransitionName(
  path: string,
  animatableViewTransitionName: string,
): HTMLImageElement | undefined | null {
  const targetThumbnail = getLink(path)?.querySelector('.animatable-img') as
    | HTMLImageElement
    | undefined
    | null;

  console.log(targetThumbnail);

  if (!isNil(targetThumbnail)) {
    targetThumbnail.style.viewTransitionName = animatableViewTransitionName;
  }

  return targetThumbnail;
}
