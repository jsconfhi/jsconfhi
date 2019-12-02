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

export default [
  {
    name: "Jenna Ziegen",
    handle: "zeigenvector",
    img: JennaImage,
    title: "Parsing Parsers",
    description:
      'Have you ever wondered how your code goes from being characters in a file to something that the computer can "understand" and do something with? A key part of this is the parser. In this talk, we’ll look at building a search query parser (all in JavaScript, of course). On this journey, we’ll first take a step back and learn about the building blocks of all languages, from letters to grammars, and how they represent meaning. Then, we’ll talk about what a parser is and does and why we might want one for our task. With this new knowledge, we’ll dive into building the parser, from tokenizing to building a data structure that represents the query and lets us build a UI around it.'
  },
  {
    name: "Dinesh Pandiyan",
    handle: "flexdinesh",
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
    img: LindseyImage,
    title: "Impactful Accessibility - The Changes That Mean The Most",
    description:
      "The sad truth is that even companies that wish to have accessible websites often only dedicate the time and effort to create SOME accessibility. What they choose to make accessible is often based on what a handful of people, often abled bodied ones, decide, and doesn’t always reflect what users want or need." +
      "\nUsing a series of surveys and discussions with other disabled people, I have synthesized suggestions and examples of what makes the most impact for many users or gigantic impacts on usage for smaller groups.We'll go over the look, feel, and functionality of websites and some basic design changes that can be used to great benefit."
  },
  {
    name: "Taylor Ho",
    handle: "tellaho_",
    img: TaylorImg,
    title: "The power to think like a Native Hawaiian in tech",
    description:
      "Diversity, in both small and large tech companies, is now understood as a critical component to innovation. In the same way individual generalists are able to make connections across disciplines, members of a diverse team contribute perspectives that would have otherwise been unknown. This is perhaps what Steve Jobs was referencing to when he eloquently recited “Think Different”. This talk uses my experiences as a Native Hawaiian programmer and designer working at Twitch as a launching point to discuss the benefits of introducing cultural and thought diversity into an organization." +
      "\nThis talk will also discuss core concepts I’ve learned from a Hawaiian upbringing that I believe can lead to positive contributions in the tech space, such as the benefits of being kolohe(having a rebellious nature), encouraging ‘imi ‘ike(the pursuit of knowledge), the complementary forces of a‘o aku and a‘o mai(to learn and to teach), committing to aloha(in part the generous spirit of giving without expecting), favoring laulima(group cooperation) over personal gain, the practice aloha ‘aina(the love of one’s environment) and more."
  },
  {
    name: "Sarah Drasner",
    handle: "sarah_edo",
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
    img: LetaImg,
    title: "React, Vue, & Svelte as Teen Movie Archetypes",
    description:
      "Who's the jock? The nerd? The misfit? Who's the type A overachiever, or the moody artist, or the partier? Get to know each of these JavaScript frameworks through the hallowed medium of the teen comedy." +
      "\nIn this talk, we'll dig into what makes these frameworks unique, as well as the things they have in common. And, as in every good millennial teen movie, you'll leave with a better understanding of each one."
  },
  {
    name: "Sam Bellen",
    handle: "sambego",
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
    img: EricaImg,
    title: "A Seat at the Table: Building Inclusive Ecosystems",
    description:
      "Inclusion doesn't just happen. It has to be intentionally and continuously cultivated. In this session, we'll discuss the ways we can all be responsible for building communities with an inclusion-first mindset. I'll describe my lessons learned and walk through a framework for optimizing for inclusion."
  },
  {
    name: "Max Goodhart",
    handle: "chromakode",
    img: MaxImg,
    title: "How to Wait",
    description:
      "Our story begins with a humble `await fetch`: your script fires off an HTTP request and settles down to nap, trusting that it'll be awoken when response data is available. While your program does nothing, a cascade of activity is now taking place: in your JS runtime, your operating system, and your hardware. What happens while your code is waiting for something to happen? In this talk, we'll peek behind the layers of the event loop, select/epoll nonblocking I/O, and hardware architecture to answer a simple question: what is waiting, and how does a program wait?"
  },
  {
    name: "Placeholder",
    handle: null,
    img: null,
    title: null,
    description: null
  },
  {
    name: "Placeholder",
    handle: null,
    img: null,
    title: null,
    description: null
  },
  {
    name: "Placeholder",
    handle: null,
    img: null,
    title: null,
    description: null
  },
  {
    name: "Placeholder",
    handle: null,
    img: null,
    title: null,
    description: null
  },
  {
    name: "Placeholder",
    handle: null,
    img: null,
    title: null,
    description: null
  },
  {
    name: "Placeholder",
    handle: null,
    img: null,
    title: null,
    description: null
  },
  {
    name: "Placeholder",
    handle: null,
    img: null,
    title: null,
    description: null
  }
];
