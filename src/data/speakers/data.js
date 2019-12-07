import JennaImage from "../../img/JennaZeigen.jpeg";
import DineshImage from "../../img/dinesh.jpeg";
import AngieImage from "../../img/angie.jpeg";
import AlexImage from "../../img/alex.jpeg";
import LindseyImage from "../../img/lindsey.jpeg";
import TaylorImg from "../../img/taylor.jpeg";
import SarahImg from "../../img/sarah.jpeg";
import LetaImg from "../../img/leta.jpeg";
import SamImg from "../../img/sam.jpeg";
import EricaImg from "../../img/erica.png";
import MaxImg from "../../img/max.jpeg";
import CharlieImg from "../../img/charlieg.jpeg";
import DaveImg from "../../img/dave.jpeg";

export default [
  {
    name: "Jenna Ziegen",
    handle: "zeigenvector",
    bio:
      "One morning, Jenna awoke to find that she had transformed into a programmer. She's been psyched about coding ever since. When she's not teaching pixels to party or using JavaScript to help you find the important things in Slack, Jenna enjoys climbing, coffee, cognitive science, and cat gifs. Her best party trick is that she wrote the most serious academic paper of her life on puns.",
    id: 1,
    img: JennaImage,
    title: "Parsing Parsers",
    description:
      'Have you ever wondered how your code goes from being characters in a file to something that the computer can "understand" and do something with? A key part of this is the parser. In this talk, we’ll look at building a search query parser (all in JavaScript, of course). On this journey, we’ll first take a step back and learn about the building blocks of all languages, from letters to grammars, and how they represent meaning. Then, we’ll talk about what a parser is and does and why we might want one for our task. With this new knowledge, we’ll dive into building the parser, from tokenizing to building a data structure that represents the query and lets us build a UI around it.'
  },
  {
    name: "Dinesh Pandiyan",
    handle: "flexdinesh",
    bio:
      "I am a developer at Thinkmill, based in Sydney. In the past 6 years I have worked across the entire spectrum of web development and been pushing the boundaries of web perf by building and breaking things. A few of the npm libraries I maintain have gained some popularity and continue to offer new challenges, you can find me online often sharing my thoughts and writing blog posts on web dev.",
    id: 2,
    img: DineshImage,
    title:
      "Progressive Rendering — Improve web application performance on slower networks",
    description:
      "Modern web applications have become increasingly costly in terms of size resulting in slower page load times in slower networks. Client Side Rendering (CSR) becomes a bottleneck in slower networks whereas Server Side Rendering (SSR) becomes a bottleneck when large volumes of content need to be generated in one-go." +
      "\nProgressive rendering is a technique that allows us to flush portions of a webpage to the browser in chunks as soon as they are rendered on the server without having to wait for the whole page to be rendered. This will massively improve the FCP (First Contentful Paint) and FMP (First Meaningful Paint) metrics and reduce page load time in slower networks." +
      "\nThis talk will demonstrate effective ways to progressively render a webpage from the server to the client and highlight important performance aspects of rendering modern websites."
  },
  {
    name: "Angie Jones",
    handle: "techgirl1908",
    bio: "Insert Angie's bio here",
    id: 3,
    img: AngieImage,
    title: "Your Tests Lack Vision: Adding Eyes to Your Automation Framework",
    description:
      "Automation has come a long way in assisting with regression testing efforts. Teams worldwide are successfully running hundreds of functional regression tests at every check-in. While this provides a great source of confidence, critical regression bugs are still missed using this approach. That’s because these tests can only assert on what their human programmer asks them to. Additional errors with functionality, UX, and usability often go uncaught using today’s most common test automation techniques." +
      "\nFor this reason, the top companies in all sectors of the industry are turning to visual validation. Visual validation is a relatively new concept that can be used to enhance existing automated tests and provide an easy way to perform those difficult checks for things like UX, localization, usability, responsive design, and cross-device testing." +
      "\nIn this talk, you’ll learn how visual validation works, see an integration into an existing test code base, and discuss the pros and cons of using various visual validation techniques."
  },
  {
    name: "Alex Sexton",
    handle: "SlexAxton",
    bio: "Insert Alex's bio here",
    id: 4,
    img: AlexImage,
    title: "Advanced Design System Considerations",
    description:
      `"Design Systems" and component libraries are a popular solution for abstracting common UI elements and flows to be reusable across many applications.They allow you to spend more time on the details, and reduce the complexity of implementing consistent experiences.There's a good chance that you're using one already!` +
      `\nScaling these systems to provide value to *lots* of teams across your organization, or in open - source - land, requires solving for each team's different use-cases simultaneously. How do you add in support for internationalization, accessibility, theming (dark mode!), server rendering, or multiple render targets? How do you support the teams that need it in React *and* the teams that need it in Svelte? How do you provide a system that is flexible enough, but doesn't become prohibitively complex? How can you export your components to popular design tools for your designers to build with?` +
      `\nLet's dive into approaches to solving these problems in scalable ways, and take a look at how Stripe has chosen to tackle some of these issues in the real world. Let's look at how to make sure a design system specifies design choices and allows users to build quickly, but doesn't lock you into specific frameworks or trendy tools out of the gate.`
  },
  {
    name: "Lindsey Dragun ",
    handle: "techevangelista",
    bio: "Insert Lindsey's bio here",
    id: 5,
    img: LindseyImage,
    title: "Impactful Accessibility - The Changes That Mean The Most",
    description:
      "The sad truth is that even companies that wish to have accessible websites often only dedicate the time and effort to create SOME accessibility. What they choose to make accessible is often based on what a handful of people, often abled bodied ones, decide, and doesn’t always reflect what users want or need." +
      "\nUsing a series of surveys and discussions with other disabled people, I have synthesized suggestions and examples of what makes the most impact for many users or gigantic impacts on usage for smaller groups.We'll go over the look, feel, and functionality of websites and some basic design changes that can be used to great benefit."
  },
  {
    name: "Taylor Ho",
    handle: "tellaho_",
    bio: "Insert Taylor's bio here",
    id: 6,
    img: TaylorImg,
    title: "The power to think like a Native Hawaiian in tech",
    description:
      "Diversity, in both small and large tech companies, is now understood as a critical component to innovation. In the same way individual generalists are able to make connections across disciplines, members of a diverse team contribute perspectives that would have otherwise been unknown. This is perhaps what Steve Jobs was referencing to when he eloquently recited “Think Different”. This talk uses my experiences as a Native Hawaiian programmer and designer working at Twitch as a launching point to discuss the benefits of introducing cultural and thought diversity into an organization." +
      "\nThis talk will also discuss core concepts I’ve learned from a Hawaiian upbringing that I believe can lead to positive contributions in the tech space, such as the benefits of being kolohe(having a rebellious nature), encouraging ‘imi ‘ike(the pursuit of knowledge), the complementary forces of a‘o aku and a‘o mai(to learn and to teach), committing to aloha(in part the generous spirit of giving without expecting), favoring laulima(group cooperation) over personal gain, the practice aloha ‘aina(the love of one’s environment) and more."
  },
  {
    name: "Sarah Drasner",
    handle: "sarah_edo",
    bio: "Insert Sarah's bio here",
    id: 7,
    img: SarahImg,
    title: "The Art of Code Comments",
    description:
      "Commenting code is a more nuanced thing than we give it credit for." +
      "\nThere are a couple of schools of thought on this. One states that if you feel a comment is necessary, you should rewrite it to be more legible. This is true. But it's also not true. In the process of writing a comment, you can often find things that could be written better, but it's not an either/or, for the following reason: Code can describe how, but it cannot explain why." +
      "\nThere is just not one right way or one reason to write a comment.In this session, we'll dig into some of the many beneficial types of comments that might all serve a different purpose, followed by patterns we might want to avoid. In the process we'll talk about being good teammates, collaborating, and writing the most legible code we can."
  },
  {
    name: "Leta Keane",
    handle: "LetaCodes",
    id: 8,
    img: LetaImg,
    title: "React, Vue, & Svelte as Teen Movie Archetypes",
    description:
      "Who's the jock? The nerd? The misfit? Who's the type A overachiever, or the moody artist, or the partier? Get to know each of these JavaScript frameworks through the hallowed medium of the teen comedy." +
      "\nIn this talk, we'll dig into what makes these frameworks unique, as well as the things they have in common. And, as in every good millennial teen movie, you'll leave with a better understanding of each one."
  },
  {
    name: "Sam Bellen",
    handle: "sambego",
    id: 9,
    img: SamImg,
    title: "No way, JOSE!",
    description:
      `Is your first thought when thinking about cryptography, “nope, that’s not for me!”? There’s no need to. When explained with simple examples, you can see the basics are not that complicated. The Javascript Object Signing and Encryption, or JOSE for short is a framework that helps us deal with encryption. It describes ways to securely transfer data either signed (JWS) or encrypted (JWE). Let’s take a leap of faith and explore the wonderful world of cryptography together, shall we?` +
      `\nIn this talk, I will try to explain the basics of encryption and hashing through simple examples. We’ll look into how the JOSE standard can help us with encrypted content on the web using JSON Web Encryption (JWE) and JSON Web Keys (JWK). The audience does not need any specific knowledge about cryptography as this talk will go through the basics. Some JavaScript knowledge can be useful but not necessary as code examples will be simple and explained.` +
      `\nWhy? The times when websites were just simple pieces of information is long gone. These days the web handles more sensitive data than ever before. To securely handle this data, we sometimes need to hash, encrypt or sign it. Sure there are a million tools, libraries and pieces of software that handle this for you, but knowing the basics can certainly come in handy!`
  },
  {
    name: "Erica Stanley",
    handle: "ericastanley",
    bio:
      "Erica Stanley is a software engineer, entrepreneur and tech diversity & inclusion advocate. She is a Sr. Research Engineering Manager at Mozilla working with the Firefox Reality team. In her 20-year career, she’s worked in Fortune 500 companies, early-stage startups, and academia." +
      "\nErica is active in the Atlanta technology community. She helps develop and teach youth coding programs, speaks at local conferences, and user groups and mentors entrepreneurs for various incubators and accelerators. She also founded the Atlanta network of Women Who Code, where she organizes conferences, hackathons, developer workshops, monthly tech talks and networking events for women technologists.",
    id: 10,
    img: EricaImg,
    title: "A Seat at the Table: Building Inclusive Ecosystems",
    description:
      "Inclusion doesn't just happen. It has to be intentionally and continuously cultivated. In this session, we'll discuss the ways we can all be responsible for building communities with an inclusion-first mindset. I'll describe my lessons learned and walk through a framework for optimizing for inclusion."
  },
  {
    name: "Max Goodhart",
    handle: "chromakode",
    id: 11,
    img: MaxImg,
    title: "How to Wait",
    description:
      "Our story begins with a humble `await fetch`: your script fires off an HTTP request and settles down to nap, trusting that it'll be awoken when response data is available. While your program does nothing, a cascade of activity is now taking place: in your JS runtime, your operating system, and your hardware. What happens while your code is waiting for something to happen? In this talk, we'll peek behind the layers of the event loop, select/epoll nonblocking I/O, and hardware architecture to answer a simple question: what is waiting, and how does a program wait?"
  },
  {
    name: "Charlie Gerard",
    handle: "devdevcharlie",
    id: 12,
    img: CharlieImg,
    title:
      "Strike a pose - Gesture recognition in JavaScript with Machine Learning & Arduino.",
    description:
      "Most of our interactions with technology aren’t really intuitive. We’ve had to adapt to it by learning to type, swipe, execute specific voice commands, etc… but what if we could train technology to adapt to us?" +
      "\nProgramming for hardware in JavaScript has already been made accessible with frameworks like Johnny- five, but, combining it with machine learning, we have the opportunity to create new and smarter interactions." +
      "\nIn this presentation, I will talk about how to build a simple gesture recognition system using JavaScript, Arduino and Machine learning."
  },
  {
    name: "Dave Aronson",
    handle: "davearonson",
    id: 13,
    img: DaveImg,
    title: "Kill All Mutants! (Intro to Mutation Testing)",
    description:
      "How good are your tests? Would they still pass if the tested code was changed? If so, there may be problems with your code, your tests, or both!" +
      `\nMutation Testing helps reveal these cases.It makes lots of slightly altered versions, called "mutants", of your functions, and runs your functions' unit tests, using each of its mutants instead. If a mutant makes any test fail, that mutant "dies". "Survivors" imply flaws: your code might not be meaningful enough that a slight mutation would change the behavior, your tests might not be strict enough to catch the difference that the mutation made, or both!` +
      "\nThis talk will tell you how to use mutation testing, its benefits, drawbacks, and pitfalls, and how it works under the hood.There will be several examples(in clear pseudocode), and a list of tools for some popular languages(including of course Javascript)." +
      "\nYou will come away equipped with a powerful new technique for making sure your tests are strict and your code is meaningful."
  },
  {
    name: "Placeholder",
    handle: null,
    id: 14,
    img: null,
    title: null,
    description: null
  },
  {
    name: "Placeholder",
    handle: null,
    id: 15,
    img: null,
    title: null,
    description: null
  },
  {
    name: "Placeholder",
    handle: null,
    id: 16,
    img: null,
    title: null,
    description: null
  },
  {
    name: "Placeholder",
    handle: null,
    id: 17,
    img: null,
    title: null,
    description: null
  },
  {
    name: "Placeholder",
    handle: null,
    id: 18,
    img: null,
    title: null,
    description: null
  },
  {
    name: "Placeholder",
    handle: null,
    id: 19,
    img: null,
    title: null,
    description: null
  },
  {
    name: "Placeholder",
    handle: null,
    id: 20,
    img: null,
    title: null,
    description: null
  },
  {
    name: "Placeholder",
    handle: null,
    id: 21,
    img: null,
    title: null,
    description: null
  }
];
