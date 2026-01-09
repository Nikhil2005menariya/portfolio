const config = {
  title: "Nikhil Menariya | Full-Stack Developer",
  description: {
    long: "Explore the portfolio of Nikhil, a full-stack developer and creative technologist specializing in interactive web experiences, 3D animations, and innovative projects. Discover my latest work, including Coding Ducks, The Booking Desk, Ghostchat, and more. Let's build something amazing together!",
    short:
      "Discover the portfolio of Nikhil, a full-stack developer creating interactive web experiences and innovative projects.",
  },
  keywords: [
    "Nikhil",
    "portfolio",
    "full-stack developer",
    "creative technologist",
    "web development",
    "3D animations",
    "interactive websites",
    "Coding Ducks",
    "The Booking Desk",
    "Ghostchat",
    "web design",
    "GSAP",
    "React",
    "Next.js",
    "Spline",
    "Framer Motion",
  ],
  author: "Nikhil Menariya",
  email: "nikhilmenariya78@gmail.com",
  site: "",

  // for github stars button
  githubUsername: "Nikhil2005menariya",
  githubRepo: "portfolio",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    linkedin: "https://www.linkedin.com/in/nikhil-menariya/",
    github: "https://github.com/Nikhil2005menariya",
  },
};
export { config };
