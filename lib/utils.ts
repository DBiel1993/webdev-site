import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Merges class names using clsx and tailwind-merge
 * @param inputs - Class names or class value arrays to be merged
 * @returns A string of merged class names
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Formats a date to a string
 * @param date - The date to format
 * @param options - Intl.DateTimeFormatOptions to customize the format
 * @returns A formatted date string
 */
export function formatDate(date: Date, options: Intl.DateTimeFormatOptions = {}): string {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    ...options
  }).format(date)
}

/**
 * Capitalizes the first letter of a string
 * @param str - The string to capitalize
 * @returns The capitalized string
 */
export function capitalizeFirstLetter(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

/**
 * Truncates a string to a specified length
 * @param str - The string to truncate
 * @param length - The maximum length of the truncated string
 * @returns The truncated string
 */
export function truncateString(str: string, length: number): string {
  return str.length > length ? str.slice(0, length) + '...' : str
}

/**
 * Debounces a function
 * @param func - The function to debounce
 * @param wait - The number of milliseconds to delay
 * @returns A debounced version of the function
 */
export function debounce<T extends (...args: any[]) => any>(func: T, wait: number): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null
  return (...args: Parameters<T>) => {
    if (timeout) clearTimeout(timeout)
    timeout = setTimeout(() => func(...args), wait)
  }
}

/**
 * Generates a random color
 * @returns A random hex color string
 */
export function getRandomColor(): string {
  return '#' + Math.floor(Math.random()*16777215).toString(16)
}

/**
 * Converts meters to feet
 * @param meters - The number of meters
 * @returns The equivalent number of feet
 */
export function metersToFeet(meters: number): number {
  return meters * 3.28084
}

/**
 * Calculates the average of an array of numbers
 * @param numbers - An array of numbers
 * @returns The average of the numbers
 */
export function calculateAverage(numbers: number[]): number {
  return numbers.reduce((a, b) => a + b, 0) / numbers.length
}

/**
 * Checks if a value is a valid number
 * @param value - The value to check
 * @returns True if the value is a valid number, false otherwise
 */
export function isValidNumber(value: any): boolean {
  return typeof value === 'number' && !isNaN(value) && isFinite(value)
}