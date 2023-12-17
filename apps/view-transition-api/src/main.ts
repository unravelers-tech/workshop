import './styles.scss';
import { isNil } from 'lodash';

import {
  getPageContent,
  getThumbnailWithViewTransitionName,
  onLinkNavigate,
  transitionHelper,
} from './utils';

const rootPath = '/';
const cardPath = `${rootPath}pages/`;

type NavigationType = 'card-page-to-root' | 'root-to-card-page' | 'other';
const animatableElementClassName = 'animatable';

function getNavigationType(fromPath: string, toPath: string): NavigationType {
  if (fromPath.startsWith(cardPath) && toPath === rootPath) {
    return 'card-page-to-root';
  }

  if (fromPath === rootPath && toPath.startsWith(cardPath)) {
    return 'root-to-card-page';
  }

  return 'other';
}

onLinkNavigate(async ({ fromPath, toPath }) => {
  const navigationType = getNavigationType(fromPath, toPath);
  const content = await getPageContent(toPath);
  let targetThumbnail: HTMLImageElement | undefined | null;

  if (isNil(content)) {
    return;
  }

  if (navigationType === 'root-to-card-page') {
    targetThumbnail = getThumbnailWithViewTransitionName(toPath, animatableElementClassName);
  }

  const updateDOM = (): void => {
    // This is a pretty heavy-handed way to update page content.
    // In production, you'd likely be modifying DOM elements directly,
    // or using a framework.
    // innerHTML is used here just to keep the DOM update super simple.
    document.body.innerHTML = content;

    if (navigationType === 'card-page-to-root') {
      targetThumbnail = getThumbnailWithViewTransitionName(fromPath, animatableElementClassName);
    }
  };

  const transition = transitionHelper({
    updateDOM,
  });

  transition.finished
    .finally(() => {
      // Clear the temporary tag
      if (targetThumbnail) {
        targetThumbnail.style.viewTransitionName = '';
      }
    })
    .catch((error) => {
      console.error(error);
    });
});
