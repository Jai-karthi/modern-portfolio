import { Social } from "../typings";

export const fetchSocials = async () => {
  const res = await fetch('http://localhost:3000/api/getSocials');

  const data = await res.json();
  const socials: Social[] = data.socials;

  console.log('fetching', socials);

  return socials;
};

// export const fetchSocials = async () => {
//   try {
//     const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSocials`);
  
//     if (!res.ok) {
//       throw new Error(`HTTP error! Status: ${res.status}`);
//     }

//     const data = await res.json();
//     const socials: Social[] = data.socials;

//     console.log('Fetched socials:', socials);

//     return socials;
//   } catch (error) {
//     console.error('Error fetching socials:', error);
//     throw error; // Rethrow the error for higher-level error handling.
//   }
// };