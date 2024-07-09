import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function camelCaseToTitleCase(text: string) {
  return text.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
}
