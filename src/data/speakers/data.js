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
import DanaeImg from "../../img/danae.jpeg";
import RichImg from "../../img/rich.jpeg";
import TannerImg from "../../img/tanner.jpeg";
import MileciaImg from "../../img/milecia.jpeg";
import BrendanImg from "../../img/brendan.jpeg";
import MandyImg from "../../img/mandy.jpeg";
import MalteImg from "../../img/malte.jpeg";

export default [
  {
    name: "Jenna Ziegen",
    handle: "zeigenvector",
    bio:
      "One morning, Jenna awoke to find that she had transformed into a programmer. She's been psyched about coding ever since. When she's not teaching pixels to party or using JavaScript to help you find the important things in Slack, Jenna enjoys climbing, coffee, cognitive science, and cat gifs. Her best party trick is that she wrote the most serious academic paper of her life on puns.",
    id: 1,
    img: JennaImage,
    title: "Parsing Parsers",
    description: `Have you ever wondered how your code goes from being characters in a file to something that the computer can "understand" and do something with? A key part of this is the parser. In this talk, we’ll look at building a search query parser (all in JavaScript, of course). On this journey, we’ll first take a step back and learn about the building blocks of all languages, from letters to grammars, and how they represent meaning. Then, we’ll talk about what a parser is and does and why we might want one for our task. With this new knowledge, we’ll dive into building the parser, from tokenizing to building a data structure that represents the query and lets us build a UI around it.`
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
    description: `Modern web applications have become increasingly costly in terms of size resulting in slower page load times in slower networks. Client Side Rendering (CSR) becomes a bottleneck in slower networks whereas Server Side Rendering (SSR) becomes a bottleneck when large volumes of content need to be generated in one-go.
      
      Progressive rendering is a technique that allows us to flush portions of a webpage to the browser in chunks as soon as they are rendered on the server without having to wait for the whole page to be rendered. This will massively improve the FCP (First Contentful Paint) and FMP (First Meaningful Paint) metrics and reduce page load time in slower networks.
      
      This talk will demonstrate effective ways to progressively render a webpage from the server to the client and highlight important performance aspects of rendering modern websites.`
  },
  {
    name: "Angie Jones",
    handle: "techgirl1908",
    bio: `Angie Jones is a Senior Developer Advocate who specializes in test automation strategies and techniques. She shares her wealth of knowledge by speaking and teaching at software conferences all over the world, writing tutorials and technical articles on angiejones.tech, and leading the online learning platform, Test Automation University.
      
      As a Master Inventor, Angie is known for her innovative and out-of-the-box thinking style which has resulted in more than 25 patented inventions in the US and China. In her spare time, Angie volunteers with Black Girls Code to teach coding workshops to young girls in an effort to attract more women and minorities to tech.`,
    id: 3,
    img: AngieImage,
    title: "Your Tests Lack Vision: Adding Eyes to Your Automation Framework",
    description: `Automation has come a long way in assisting with regression testing efforts. Teams worldwide are successfully running hundreds of functional regression tests at every check-in. While this provides a great source of confidence, critical regression bugs are still missed using this approach. That’s because these tests can only assert on what their human programmer asks them to. Additional errors with functionality, UX, and usability often go uncaught using today’s most common test automation techniques.
      
      For this reason, the top companies in all sectors of the industry are turning to visual validation. Visual validation is a relatively new concept that can be used to enhance existing automated tests and provide an easy way to perform those difficult checks for things like UX, localization, usability, responsive design, and cross-device testing.
      
      In this talk, you’ll learn how visual validation works, see an integration into an existing test code base, and discuss the pros and cons of using various visual validation techniques.`
  },
  {
    name: "Alex Sexton",
    handle: "SlexAxton",
    bio:
      "Alex is a software engineer for Stripe, working remotely out of Austin, TX. He enjoys open-source frontend infrastructure, internationalization, and design systems. He helped create Modernizr, and MessageFormat.js, and served as a member of the jQuery team and the JS Foundation board of advisors.",
    id: 4,
    img: AlexImage,
    title: "Advanced Design System Considerations",
    description: `"Design Systems" and component libraries are a popular solution for abstracting common UI elements and flows to be reusable across many applications.They allow you to spend more time on the details, and reduce the complexity of implementing consistent experiences.There's a good chance that you're using one already!
      
      Scaling these systems to provide value to *lots* of teams across your organization, or in open - source - land, requires solving for each team's different use-cases simultaneously. How do you add in support for internationalization, accessibility, theming (dark mode!), server rendering, or multiple render targets? How do you support the teams that need it in React *and* the teams that need it in Svelte? How do you provide a system that is flexible enough, but doesn't become prohibitively complex? How can you export your components to popular design tools for your designers to build with?
      
      Let's dive into approaches to solving these problems in scalable ways, and take a look at how Stripe has chosen to tackle some of these issues in the real world. Let's look at how to make sure a design system specifies design choices and allows users to build quickly, but doesn't lock you into specific frameworks or trendy tools out of the gate.`
  },
  {
    name: "Lindsey Dragun ",
    handle: "techevangelista",
    bio:
      "Lindsey is an accessibility advocate, web developer, and outspoken disabled person who focuses on making accessibility part of everyone's considerations on a project, even if people have to start small. They love horror movies, fantasy RPGs, and dogs.",
    id: 5,
    img: LindseyImage,
    title: "Impactful Accessibility - The Changes That Mean The Most",
    description: `The sad truth is that even companies that wish to have accessible websites often only dedicate the time and effort to create SOME accessibility. What they choose to make accessible is often based on what a handful of people, often abled bodied ones, decide, and doesn’t always reflect what users want or need.
      
      Using a series of surveys and discussions with other disabled people, I have synthesized suggestions and examples of what makes the most impact for many users or gigantic impacts on usage for smaller groups.We'll go over the look, feel, and functionality of websites and some basic design changes that can be used to great benefit.`
  },
  {
    name: "Taylor Ho",
    handle: "tellaho_",
    bio: `Taylor designs to make the gaming world a more friendly and approachable place. He's currently a Senior UI/UX designer at Twitch HQ in San Francisco, as one of the leads on the Viewer Experience team. He's spent his years as a hybrid creative and technologist with a passion for crafting fun, thoughtful online experiences.
    
      Born and raised in the islands of Hawaiʻi, he’s highly adaptable and driven by his curiosity. You can always find him trying new things in or around the ocean on any array of water-bound crafts. Even on the colder side of the Pacific!`,
    id: 6,
    img: TaylorImg,
    title: "The power to think like a Native Hawaiian in tech",
    description: `Diversity, in both small and large tech companies, is now understood as a critical component to innovation. In the same way individual generalists are able to make connections across disciplines, members of a diverse team contribute perspectives that would have otherwise been unknown. This is perhaps what Steve Jobs was referencing to when he eloquently recited “Think Different”. This talk uses my experiences as a Native Hawaiian programmer and designer working at Twitch as a launching point to discuss the benefits of introducing cultural and thought diversity into an organization.
      
      This talk will also discuss core concepts I’ve learned from a Hawaiian upbringing that I believe can lead to positive contributions in the tech space, such as the benefits of being kolohe(having a rebellious nature), encouraging ‘imi ‘ike(the pursuit of knowledge), the complementary forces of a‘o aku and a‘o mai(to learn and to teach), committing to aloha(in part the generous spirit of giving without expecting), favoring laulima(group cooperation) over personal gain, the practice aloha ‘aina(the love of one’s environment) and more.`
  },
  {
    name: "Sarah Drasner",
    handle: "sarah_edo",
    bio:
      "Sarah Drasner is a Vue core team member, Senior Developer Advocate at Microsoft, and Staff Writer at CSS-Tricks. Sarah is also the co-founder of Web Animation Workshops, with Val Head. She’s the author of SVG Animations from O’Reilly and has given Frontend Masters workshops on Vue.js and Advanced SVG Animations. Sarah is formerly Manager of UX Design & Engineering at Trulia (Zillow).",
    id: 7,
    img: SarahImg,
    title: "The Art of Code Comments",
    description: `Commenting code is a more nuanced thing than we give it credit for.
      
      There are a couple of schools of thought on this. One states that if you feel a comment is necessary, you should rewrite it to be more legible. This is true. But it's also not true. In the process of writing a comment, you can often find things that could be written better, but it's not an either/or, for the following reason: Code can describe how, but it cannot explain why.
      
      There is just not one right way or one reason to write a comment.In this session, we'll dig into some of the many beneficial types of comments that might all serve a different purpose, followed by patterns we might want to avoid. In the process we'll talk about being good teammates, collaborating, and writing the most legible code we can.`
  },
  {
    name: "Leta Keane",
    handle: "LetaCodes",
    bio:
      "Leta is an associate instructor at Turing School in Denver, Colorado, where she teaches front-end developers about the nuts and bolts of JavaScript and React. She loves science, empathy, code that’s readable instead of just clever, and high fives. She tweets about coding, science, writing, social justice, and embarrassingly personal things at @LetaCodes.",
    id: 8,
    img: LetaImg,
    title: "React, Vue, & Svelte as Teen Movie Archetypes",
    description: `Who's the jock? The nerd? The misfit? Who's the type A overachiever, or the moody artist, or the partier? Get to know each of these JavaScript frameworks through the hallowed medium of the teen comedy.
      
      In this talk, we'll dig into what makes these frameworks unique, as well as the things they have in common. And, as in every good millennial teen movie, you'll leave with a better understanding of each one.`
  },
  {
    name: "Sam Bellen",
    handle: "sambego",
    bio: `I'm Google Developer expert who works as a developer evangelist at Auth0. At Auth0 we're trying to make authentication and identification as easy as possible, while still keeping it secure.
      
      After office hours I like to play around with the web-audio API, and other "exotic" browser API's. One of my side projects is a library to add audio effects to an audio input using JavaScript.
      
      When I'm not behind a computer, you can find me playing the guitar, having a beer at a concert, or trying to snap the next perfect picture.`,
    id: 9,
    img: SamImg,
    title: "No way, JOSE!",
    description: `Is your first thought when thinking about cryptography, “nope, that’s not for me!”? There’s no need to. When explained with simple examples, you can see the basics are not that complicated. The Javascript Object Signing and Encryption, or JOSE for short is a framework that helps us deal with encryption. It describes ways to securely transfer data either signed (JWS) or encrypted (JWE). Let’s take a leap of faith and explore the wonderful world of cryptography together, shall we?
      
      In this talk, I will try to explain the basics of encryption and hashing through simple examples. We’ll look into how the JOSE standard can help us with encrypted content on the web using JSON Web Encryption (JWE) and JSON Web Keys (JWK). The audience does not need any specific knowledge about cryptography as this talk will go through the basics. Some JavaScript knowledge can be useful but not necessary as code examples will be simple and explained.
      
      Why? The times when websites were just simple pieces of information is long gone. These days the web handles more sensitive data than ever before. To securely handle this data, we sometimes need to hash, encrypt or sign it. Sure there are a million tools, libraries and pieces of software that handle this for you, but knowing the basics can certainly come in handy!`
  },
  {
    name: "Erica Stanley",
    handle: "ericastanley",
    bio: `Erica Stanley is a software engineer, entrepreneur and tech diversity & inclusion advocate. She is a Sr. Research Engineering Manager at Mozilla working with the Firefox Reality team. In her 20-year career, she’s worked in Fortune 500 companies, early-stage startups, and academia.
      
      Erica is active in the Atlanta technology community. She helps develop and teach youth coding programs, speaks at local conferences, and user groups and mentors entrepreneurs for various incubators and accelerators. She also founded the Atlanta network of Women Who Code, where she organizes conferences, hackathons, developer workshops, monthly tech talks and networking events for women technologists.`,
    id: 10,
    img: EricaImg,
    title: "A Seat at the Table: Building Inclusive Ecosystems",
    description: `Inclusion doesn't just happen. It has to be intentionally and continuously cultivated. In this session, we'll discuss the ways we can all be responsible for building communities with an inclusion-first mindset. I'll describe my lessons learned and walk through a framework for optimizing for inclusion.`
  },
  {
    name: "Max Goodhart",
    handle: "chromakode",
    bio:
      "Max co-organizes the WaffleJS meetup in San Francisco. He has been writing JavaScript professionally for 10 years.",
    id: 11,
    img: MaxImg,
    title: "How to Wait",
    description: `Our story begins with a humble 'await fetch': your script fires off an HTTP request and settles down to nap, trusting that it'll be awoken when response data is available. While your program does nothing, a cascade of activity is now taking place: in your JS runtime, your operating system, and your hardware. What happens while your code is waiting for something to happen? In this talk, we'll peek behind the layers of the event loop, select/epoll nonblocking I/O, and hardware architecture to answer a simple question: what is waiting, and how does a program wait?`
  },
  {
    name: "Charlie Gerard",
    handle: "devdevcharlie",
    bio:
      "Charlie is a front-end developer at Atlassian in Sydney. She is passionate about creative coding & human-computer interaction and spends her personal time building interactive prototypes to explore innovative technologies. She also cares about sharing knowledge by contributing to open-source, mentoring junior developers and writing blog posts.",
    id: 12,
    img: CharlieImg,
    title:
      "Strike a pose - Gesture recognition in JavaScript with Machine Learning & Arduino.",
    description: `Most of our interactions with technology aren’t really intuitive. We’ve had to adapt to it by learning to type, swipe, execute specific voice commands, etc… but what if we could train technology to adapt to us?
      
      Programming for hardware in JavaScript has already been made accessible with frameworks like Johnny- five, but, combining it with machine learning, we have the opportunity to create new and smarter interactions.
      
      In this presentation, I will talk about how to build a simple gesture recognition system using JavaScript, Arduino and Machine learning.`
  },
  {
    name: "Dave Aronson",
    handle: "davearonson",
    bio:
      "Dave has about three and a half decades of experience in a wide variety of languages, techniques, etc. He is the T. Rex of Codosaurus, LLC (his one-man consulting firm, which explains how he can get such a cool title, at http://www.Codosaur.us/) in Fairfax, Virginia, USA. His latest passion project is to perfect and spread ACRUMEN, a new simple-but-useful definition he created for Software Quality; see https://www.codosaur.us/ACRUMEN for details.",
    id: 13,
    img: DaveImg,
    title: "Kill All Mutants! (Intro to Mutation Testing)",
    description: `How good are your tests? Would they still pass if the tested code was changed? If so, there may be problems with your code, your tests, or both!
      
      Mutation Testing helps reveal these cases.It makes lots of slightly altered versions, called "mutants", of your functions, and runs your functions' unit tests, using each of its mutants instead. If a mutant makes any test fail, that mutant "dies". "Survivors" imply flaws: your code might not be meaningful enough that a slight mutation would change the behavior, your tests might not be strict enough to catch the difference that the mutation made, or both!
      
      This talk will tell you how to use mutation testing, its benefits, drawbacks, and pitfalls, and how it works under the hood.There will be several examples(in clear pseudocode), and a list of tools for some popular languages(including of course Javascript).
      
      You will come away equipped with a powerful new technique for making sure your tests are strict and your code is meaningful.`
  },
  {
    name: "Danae Valentina",
    handle: "tapia",
    bio: `I’m a working-class feminist writer. I’m from Chile and I’m based in Rotterdam, Netherlands.
      
      I’m a postgraduate research student of Comparative Literary Studies at Utrecht University where I'm doing a thesis on fiction and artificial intelligence. I’m also a 2018-2019 Open Web fellow at the Mozilla Foundation.
      
      Previously I worked as a project manger in Latin American NGOs dedicated to digital rights such as Derechos Digitales in Chile and Coding Rights in Brazil. I'm also part of the Riseup Collective, an organisation in which we provide secure communication tools. I too have vast experience as a web developer.
      
      My interests are posthumanism, sorcery and technology. You can see some of my work at https://digitalwitchcraft.works/dv and you can follow my updates on https://gato.earth/ , an epistolary project in which I explore the intersection between technology and climate change.`,
    id: 14,
    img: DanaeImg,
    title:
      "Digital Witchcraft: using magical thinking for advanced digital design",
    description: `In this session I will present several examples of magical thinking as a design methodology for technological innovations.
      
      Did you know that hackers and shamans have a lot in common? What does the practice of Santeria can teach us about digital security? Did you know that there's an android in a temple in Kyoto teaching Buddhism? Which elements of ancestral knowledge can we borrow in order to design solutions for migrants and refugees?
      
      We will review the answers to these questions and will elaborate on the potential of magical thinking as a fundamental resource for innovation. "Magic is the mother of technology" said Peter Sloterdijk, thus we definitely shouldn't be afraid of combining this two realms in order to promote scientific innovation to its maximum potential.
      
      I've been doing this research thanks to several sources of funding, mostly through my Mozilla fellowship and other sponsors I had in the last two years. Therefore, specific parts of this session have been presented in conferences such as HOPE in New York City and the Internet Freedom Festival in Valencia, Spain. JSConf Hawaii will be the first time in which my research on digital witchcraft will be publicly presented as a finalized product.`
  },
  {
    name: "Rich Trott",
    handle: "Trott",
    bio:
      "Rich creates software, rock operas, and pizzas. He is a member of the Node.js Technical Steering Committee and works for the University of California. he/him",
    id: 15,
    img: RichImg,
    title: "A Crash Course On Worker Threads",
    description: `Node.js 10.5.0 introduced 'worker_threads', enabling the creation of simple multi-threaded applications in JavaScript. This may sound daunting if you've never dealt with threads before in another language. But JavaScript threads are pretty simple and, very importantly, fun. This talk will be a quick introduction to the fun of worker_threads.
      
      I promise not to make any "you got your multi-threaded chocolate in my single-threaded JavaScript peanut butter" jokes.`
  },
  {
    name: "Tanner Linsley",
    handle: "tannerlinsley",
    bio: `Tanner Linsley is an open source creator who loves React and JavaScript. He has built and still maintains several well-known open source libraries like React Table, React Form, React Charts, React Static, and even Chart.js
      
      He co-founded Nozzle.io 6 years ago and currently holds down the front-end fort there as VP of UI and UX.
      
      When not programming, Tanner spends his free time traveling, film-making, and vacationing with his wife and children.`,
    id: 16,
    img: TannerImg,
    title:
      "Custom Hooks in React: The ultimate UI abstraction layer you're missing out on",
    description: `Custom Hooks in React are useful for much more than just managing the local state and one-dimensional side-effects you see in almost every React Hooks example.
      
      They can be used to build sophisticated memoization pipelines and chained-effects that automatically manage local and network resources.
      
      But most importantly, they provide a new new layer of abstraction to accomplish new and amazing patterns that we couldn't have just over a year ago.
      
      On the surface, this abstraction layer is simply collection of custom hooks, but when unlocked, it can be the most powerful piece of your application architecture.
      
      Join me as I demonstrate a few ways we can all take full advantage of custom hooks that will ultimately enable us to:
      
      - Rapidly iterate on features
      - More easily pinpoint bugs and issues
      - Refactor with ease
      - Tune performance
      - Ship less code`
  },
  {
    name: "Milecia McGregor",
    handle: "FlippedCoding",
    bio:
      "Milecia is a senior software engineer, but she also has a master's degree in mechanical and aerospace engineering and has published research in machine learning and robotics. She started Flipped Coding in 2017 to help people learn web development with real-world projects and it's being growing ever since. In her free time, she spends time with her husband and dogs while learning to play the ukulele and learning Japanese.",
    id: 17,
    img: MileciaImg,
    title: "Using Machine Learning To Improve UI/UX",
    description: `The world of UI/UX is changing every month. It can be hard for developers to keep up with the newest trends and frameworks because of all the responsibilities they have. What if you could use machine learning to help you keep up with all of the changes? While it’s far from taking all of the programming jobs, machine learning can help developers make more user-friendly web applications. With the use of Brain.js, you can do text prediction, make small layout changes, check for malicious users, and more.
      
      In this talk, attendees will learn some background on machine learning and algorithms and see examples of where Brain.js can be used in real applications. We’ll cover business cases in web development where machine learning can help, how neural networks work, and how JavaScript can be used to train a model and make real-time updates for users. By the end of the talk, attendees should have a good understanding of basic machine learning concepts and an idea of how they could get started with Brain.js.`
  },
  {
    name: "Brendan O'Leary",
    handle: "olearycrew",
    bio:
      "Brendan has a passion for software development and iterating on processes just as quickly as we iterate on code. He is a zealous advocate for the user experience. Brendan can still remember what his first computer - a Tandy 2000 - felt like to use (and break...sorry Dad). Working with customers to deliver value is what drives Brendan's passion for DevOps and smooth CI/CD implementation. Brendan has worked with a wide range of customers - from the nation's top healthcare institutions to environmental services companies to the Department of Defense. The only thing more eclectic is probably his taste in music. Outside of work, you'll find Brendan with 1 to 4 kids hanging off of him at any given time or occasionally finding a moment alone to build something in his workshop.",
    id: 18,
    img: BrendanImg,
    title: "The Asynchronous Enterprise",
    description: `The one question I'm asked more than any other when talking about working at GitLab is: wait, you don't have any offices? That is often followed by a confused look or the direct question: How?
      
      Writing down decisions, asynchronous communication, measuring results, not hours. Companies often aspire to these goals...however in an all-remote company, they aren't aspirational - they are requirements. GitLab has grown from 9 people in 2014 to over 900 people in 55 different countries with a valuation of almost $3 billion.
      
      In this talk, we'll discover some of the not-so-secret sauce that GitLab has leveraged to achieve this growth. On this journey, our values have remained the same. We value collaboration, results, efficiency, diversity & inclusion, iteration, and transparency. And we've done all that without having any office, headquarters, or anything that looks like one.`
  },
  {
    name: "Mandy Michael",
    handle: "mandy_kerr",
    bio:
      "Mandy is a community organiser, speaker, writer and developer currently working as a Development Manager at Seven West Media in Western Australia. Her passion is front end technology and loves to experiment with new and old technologies to see how we can push the boundaries of what is possible on the web. She is an avid supporter of local communities and a strong advocate for women in technology, volunteering at events across Perth and Australia including She Codes, Muses JS and various conferences and school events. Mandy is the Founder and Organiser of Fenders a local Meetup for Front End Developers, co-organiser and Director of MixinConf and in its inaugural year she was named one of the Top 20 Women in Tech in Western Australia.",
    id: 19,
    img: MandyImg,
    title: "Variable Fonts and Responsive Typography",
    description: `Variable Fonts allow typography on the web to adapt to the flexible nature of screens, environments and devices.
      
      We can use variable fonts with pre-existing technologies to improve the performance, design, accessibility and usability of our websites. We can start to design our typography to adjust to various inputs, situations or events using Media Queries, JS events and the Sensor or Audio Apis. This will allow us to modify our fonts to aid in storytelling, achieve improved readability and legibility in different situations, environments or on larger or smaller screens.
      
      Let’s explore new and exciting creative opportunities for storytelling, design and expression in ways standard fonts could never provide us. This is just the beginning of our journey to discover what we can do with variable fonts.`
  },
  {
    name: "Malte Ubl",
    handle: "cramforce",
    bio:
      "Malte is a Principal Engineer at Google and a member of the AMP Project's Technical Steering Committee. Previously Malte has created JavaScript infrastructure for lots of Google web apps and he is a founder and curator of JSConf EU.",
    id: 20,
    img: MalteImg,
    title: "Designing even larger (JavaScript) applications",
    description: `Building frameworks is fun. And even if your project is using one of the awesome open-source frameworks, it might at some point reach the point where you need just a little bit more software infrastructure then you find on npm: Things may start with a custom build script and end with your own full blown framework.
      
      But building frameworks is also difficult. And many folks might have read the first paragraph thinking “That is us, but I wish we had something clean, stable and most importantly standard instead”.
      
      In this sequel to the popular “Designing very large (JavaScript) applications” talk, we’ll take a deep look at the principles of framework design and how we can apply them to build better software. We’ll look at how to go about designing a framework, how to ensure that developers like it, and how to make sure that systems get into a clean and stable state as quickly as possible.`
  },
  {
    name: "TBA",
    handle: null,
    bio: "",
    id: 21,
    img: null,
    title: null,
    description: null
  }
];
