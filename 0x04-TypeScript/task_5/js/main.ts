// Interfaces with branding
export interface MajorCredits {
  credits: number;
  brand: 'Major';
}

export interface MinorCredits {
  credits: number;
  brand: 'Minor';
}

// Function to sum MajorCredits
export function sumMajorCredits(
  subject1: MajorCredits,
  subject2: MajorCredits
): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: 'Major',
  };
}

// Function to sum MinorCredits
export function sumMinorCredits(
  subject1: MinorCredits,
  subject2: MinorCredits
): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: 'Minor',
  };
}

// Example usage
const math: MajorCredits = { credits: 3, brand: 'Major' };
const physics: MajorCredits = { credits: 4, brand: 'Major' };
console.log(sumMajorCredits(math, physics)); // { credits: 7, brand: 'Major' }

const music: MinorCredits = { credits: 2, brand: 'Minor' };
const art: MinorCredits = { credits: 3, brand: 'Minor' };
console.log(sumMinorCredits(music, art)); // { credits: 5, brand: 'Minor' }
