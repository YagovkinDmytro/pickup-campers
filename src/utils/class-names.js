/**
 * clsx helper to merge conditional class names.
 */
import { clsx } from 'clsx';

export default function cn(...inputs) {
  return clsx(inputs);
}
