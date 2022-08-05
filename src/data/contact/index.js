import { personalContact } from "./personalContact";
import { professionalContact } from "./professionalContact";
import { socialContact } from "./socialContact";

export const contacts = [
  {
    type: "Personal",
    contacts: personalContact
  },
  {
    type: "Professional",
    contacts: professionalContact
  },
  {
    type: "Social",
    contacts: socialContact
  }
];