import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import { Center, Grid, GridItem, Link } from "@chakra-ui/react";

import SectionTitle from "components/SectionTitle";

import { ContactType } from "src/types";

const Contacts = () => {
  // TODO: better size definition
  const contacts: ContactType[] = [
    {
      icon: <FaTwitter size="3em" />,
      color: "#2498d8",
      link: "https://twitter.com/morio_prog",
    },
    {
      icon: <FaGithub size="3em" />,
      color: "#121111",
      link: "https://github.com/morioprog",
    },
    {
      icon: <FaLinkedin size="3em" />,
      color: "#0d63aa",
      link: "https://www.linkedin.com/in/shota-iwamoto/",
    },
    {
      icon: <MdMail size="3em" />,
      color: "#ff9a76",
      link: "mailto:shota.iwamoto.job@gmail.com",
    },
  ];

  return (
    <>
      <SectionTitle title="Contacts" />
      <Center>
        <Grid
          templateColumns={`repeat(${contacts.length} , 1fr)`}
          gap={{ base: 4, md: 8 }}
        >
          {contacts.map((contact, idx) => (
            <GridItem key={idx} color="mainColor.4" colSpan={1}>
              <Link
                href={contact.link}
                isExternal
                _hover={{ color: contact.color }}
              >
                {contact.icon}
              </Link>
            </GridItem>
          ))}
        </Grid>
      </Center>
    </>
  );
};

export default Contacts;
