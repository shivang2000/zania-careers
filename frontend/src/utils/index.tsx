import clsx, { type ClassValue } from "clsx";
import { type KeyboardEvent, type SyntheticEvent } from "react";
import { twMerge } from "tailwind-merge";

export const LOCAL_STORAGE_STATE_SAVE_KEY = "ITEM_ORDERING";

export const clsxMerge = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

export const kebabCase = (value: string) =>
  value
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .replace(/\s+/g, "-")
    .toLowerCase();

export const handleKeyboardEvent =
  <Type = Element,>(
    key: KeyboardEvent["key"] | Array<KeyboardEvent["key"]>,
    callback: (event: SyntheticEvent<Type>) => void
  ) =>
  (event: KeyboardEvent<Type>) => {
    const keys = Array.isArray(key) ? key : [key];

    if (keys.includes(event.key)) {
      callback(event);
    }
  };

export const arraysEqual = (a: any[], b: any[]) => {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (a.length !== b.length) return false;

  // If you don't care about the order of the elements inside
  // the array, you should sort both arrays here.
  // Please note that calling sort on an array will modify that array.
  // you might want to clone your array first.

  for (var i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }
  return true;
};
