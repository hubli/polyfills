/**
 * @license
 * Copyright (c) 2020 The Polymer Project Authors. All rights reserved. This
 * code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt The complete set of authors may be
 * found at http://polymer.github.io/AUTHORS.txt The complete set of
 * contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt Code
 * distributed by Google as part of the polymer project is also subject to an
 * additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

// Without this explicit type, TS seems to think that `window.Event` is the
// wrapper from `wrappers/event.ts` at this point, which is typed in terms of
// this binding, causing a cycle in its type.
export const constructor: typeof Event = window.Event;

export const prototype = constructor.prototype;

export const methods = {
  initEvent: prototype.initEvent,
  stopImmediatePropagation: prototype?.stopImmediatePropagation,
  stopPropagation: prototype?.stopPropagation,
};

export const descriptors = {
  defaultPrevented: Object.getOwnPropertyDescriptor(
    prototype,
    'defaultPrevented'
  )!,
  target: Object.getOwnPropertyDescriptor(prototype, 'target')!,
  type: Object.getOwnPropertyDescriptor(prototype, 'type')!,
};
