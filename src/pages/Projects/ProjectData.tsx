export const ProjectData: {
  title: string;
  repo: string;
  languages: string;
  status: string;
  l1: string;
  l2: string;
  l3: string;
  extraMedia?: string;
  extraMediaDesc?: string;
  video?: string;
  videoText?: string;
  img?: string;
}[] = [
  {
    title: "Colour Love",
    repo: "https://github.com/christinewang766/colour-love",
    languages: "Typescript, CSS, HTML",
    status: "incomplete",
    l1: "Designed a visually appealing and responsive CRUD application using Vite and React.",
    l2: "Implemented Redux to efficiently manage and centralize the application state, including user login state for enhanced authentication and personalization.",
    l3: "Successfully configured and administered MySQL database servers to facilitate a seamless login/registration system and to store palettes for future use, ensuring efficient data management and retrieval.",
    extraMedia:
      "https://www.dropbox.com/s/181wr4fbxukegff/responsiveColourLove.mp4?dl=0",
    extraMediaDesc: "[Video]",
    video: "https://www.dropbox.com/s/rslf9r4nkhfhmf2/colourLove.mp4?raw=1",
    videoText: "Please expand the video!",
  },
  {
    title: "Post-That",
    repo: "https://github.com/stevenning203/nw-postcard",
    languages: "TypeScript, CSS, HTML",
    status: "complete",
    l1: "Developed as a team of 4 in a 24 hour hackathon, nwHacks 2023, to plan, code, and create a web app.",
    l2: "Utilized Figma to design the initial specifications, composition, and logistics for Post-That for a secure and attractive UI.",
    l3: "Assisted in implementing Next.js as a front-end framework, Auth0 SSO to enable secure authentication, and the Google cloud suite to store and retrieve data.",
    img: "https://s12.gifyu.com/images/SWoTG.png",
  },
  {
    title: "Portfolio Website",
    repo: "https://github.com/christinewang766/christinewang766.github.io",
    languages: "TypeScript, CSS, HTML",
    status: "complete",
    l1: "Created responsive and fuctional UI and implemented React Router DOM for easy and accessible user navigation.",
    l2: "Conceptualized and designed front-end to be maximalist, memorable, and effective in portraying my experience.",
    l3: "Used Photoshop to enhance user experience and engagement through colourful visuals.",
    img: "https://s11.gifyu.com/images/SWoTy.png",
  },
  {
    title: "Cutesy Cards",
    repo: "https://github.com/christinewang766/CuteFlashCards/",
    languages: "Java",
    status: "incomplete",
    l1: 'The idea behind the project: students tend to study more effectively when their notes "look nice"; with customizable flashcards in 3 different themes to choose from, students can work hard and focus better.',
    l2: "Developed an interactive app where users can create, view, edit, star, save, and load flashcards into a deck and practice material for memorization.",
    l3: "Utilized the Java Swing library and coded the app with model-view-controller architecture.",
    video: "https://www.dropbox.com/s/iqy43pumo6y7n4i/cuteDemo.mp4?raw=1",
  }
];
