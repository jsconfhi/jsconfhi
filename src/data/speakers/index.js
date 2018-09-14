import cuervoAvatar from '../speakers/avatars/Andres_Cuervo.png';
import hallidayAvatar from '../speakers/avatars/James_Halliday.jpg';
import vlaevaAvatar from '../speakers/avatars/Stanimira_Vlaeva.jpg';
import wibowoAvatar from '../speakers/avatars/Amy_Wibowo.jpg';

// const example = {
//   avatar: charlieAvatar,
//   bio: `This is a bit about me`,
//   name: "Charlie Croom",
//   talk: "A really interesting topic",
//   twitter: "charlieCroom"
// };

export default [
  {
    avatar: hallidayAvatar,
    bio: `off-grid technologist. member of bits.coop

      I'm a member of bits.coop and I live off-grid in puna district. I work on computer graphics projects using webgl, I make maps, I plant fruit trees, I build custom databases, I grow vegetables, and I research how to design decentralized tools that work on the margins.

      https://substack.net`,
    name: 'James Halliday',
    talk: 'Offline p2p Mapping',
    twitter: 'substack'
  },
  {
    avatar: wibowoAvatar,
    bio: `Amy has had a ten-year-long career in tech that’s included HCI research, machine learning research, and web development. Most recently, she was a web developer on the growth team at Airbnb for three years before she left to found Bubblesort Zines. Her current focus is making computing more welcoming and inclusive, via writing zines about algorithms, encryption, and data structures with lots of illustrations and creative coding projects that showcase programming as a tool of artistic expression.`,
    name: 'Amy Wibowo',
    talk: 'Witchy Algorithms: Writing Code to Calculate the Phases of the Moon',
    twitter: 'sailorhg'
  },
  {
    avatar: cuervoAvatar,
    bio: `Andrés Cuervo is a web VR/AR/XR artist, developer, & human-computer-interaction researcher. Their work focuses on usability, accessibility, generative design, and pushing the boundaries of narratives through new technologies. You can find more about them at cwervo.com`,
    name: 'Andrés Cuervo',
    talk: 'The Immersive Web in 2019',
    twitter: 'acwervo'
  },
  {
    avatar: vlaevaAvatar,
    bio: `Stanimira is a software engineer on the NativeScript core team focused on the the integration with Angular and performance optimizations. Lately, she’s been working on providing an official way for sharing code between web and mobile Angular via NativeScript schematics and webpack.`,
    name: 'Stanimira Vlaeva',
    talk: 'Embedding V8 in the real world',
    twitter: 'StanimiraVlaeva'
  }
];
