export interface SocialLink {
  label: string;
  url: string;
}

export interface Personal {
  name: string;
  title: string;
  bio: string;
  location: string;
  email: string;
  links: SocialLink[];
}

export const personal: Personal = {
  name: "Jason Daniel",
  title: "Aspiring AI Agent Developer",
  bio: "Building intelligent agents that automate workflows and solve real-world problems.",
  location: "Kanyakumari, India",
  email: "winjasdan2@gmail.com",
  links: [
    { label: "GitHub", url: "https://github.com/Jvxoq" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/jason-daniel-b-148b83216/" },
  ],
};
