/**
 * File: AccordionDiagramBE.jsx
 * Author: Joseph Koh
 * Description: Code snippets and explanations for CoffeeCartel app features
 */

import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import { ReactSyntaxHighligher } from "./ReactSyntaxHighlighter";
import {
  envVarCodeSnippet,
  expressAPICodeSnippet,
  hashingCodeSnippet,
  corsCodeSnippet,
  jwtCodeSnippet,
  sequelizeCodeSnippet,
  mysqlCodeSnippet,
} from "../../data/constants";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";

export const AccordionDiagramBE = () => {
  // Styling for accordion details text
  const textAlignStart = {
    textAlign: "start",
  };
  const fontSizing = {
    sx: { fontSize: { xs: "0.8rem", sm: "1rem", md: "1rem" } },
  };

  // State and function to manage accordion panels
  const [expanded, setExpanded] = useState(false);

  const handleChange = (isExpanded, panel) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <>
      {/* Express REST API */}
      <Accordion
        expanded={expanded === "panel1"}
        onChange={(event, isExpanded) => handleChange(isExpanded, "panel1")}
      >
        <AccordionSummary
          id="panel1-header"
          aria-controls="panel1-content"
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography>Express REST API</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ReactSyntaxHighligher
            code={expressAPICodeSnippet}
            language={"javascript"}
          />
          <Typography {...fontSizing} style={textAlignStart}>
            Using Express framework to build a RESTFUL API to handle request and
            response from the client.
          </Typography>
        </AccordionDetails>
      </Accordion>

      {/* Express REST API */}
      <Accordion
        expanded={expanded === "panel4"}
        onChange={(event, isExpanded) => handleChange(isExpanded, "panel4")}
      >
        <AccordionSummary
          id="panel4-header"
          aria-controls="panel4-content"
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography>CORS</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ReactSyntaxHighligher
            code={corsCodeSnippet}
            language={"javascript"}
          />
          <Typography {...fontSizing} style={textAlignStart}>
            Enabling cross origin resource sharing (CORS) to only allow
            whitelisted URLs to establish connection with this API app.
          </Typography>
        </AccordionDetails>
      </Accordion>

      {/* Environment variable */}
      <Accordion
        expanded={expanded === "panel3"}
        onChange={(event, isExpanded) => handleChange(isExpanded, "panel3")}
      >
        <AccordionSummary
          id="panel3-header"
          aria-controls="panel3-content"
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography>Environment Variables</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ReactSyntaxHighligher
            code={envVarCodeSnippet}
            language={"javascript"}
          />
          <Typography {...fontSizing} style={textAlignStart}>
            Storing sensitive information in a server-side environment variable
            to ensure security.
          </Typography>
        </AccordionDetails>
      </Accordion>

      {/* Hashing Algorithm*/}
      <Accordion
        expanded={expanded === "panel2"}
        onChange={(event, isExpanded) => handleChange(isExpanded, "panel2")}
      >
        <AccordionSummary
          id="panel2-header"
          aria-controls="panel2-content"
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography>Hashing Algorithm</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ReactSyntaxHighligher
            code={hashingCodeSnippet}
            language={"javascript"}
          />
          <Typography {...fontSizing} style={textAlignStart}>
            Using bcrypt module to hash plain text password before inserting to
            database. bcrypt also has inbuilt function to compare password for
            authentication.
          </Typography>
        </AccordionDetails>
      </Accordion>

      {/* JSON Web Token */}
      <Accordion
        expanded={expanded === "panel6"}
        onChange={(event, isExpanded) => handleChange(isExpanded, "panel6")}
      >
        <AccordionSummary
          id="panel6-header"
          aria-controls="panel6-content"
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography>JSON Web Token</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ReactSyntaxHighligher
            code={jwtCodeSnippet}
            language={"javascript"}
          />
          <Typography {...fontSizing} style={textAlignStart}>
            Signing and issuing JSON web token to client upon successful login.
            The token will be authenticated upon subsequent page visits.
          </Typography>
        </AccordionDetails>
      </Accordion>

      {/* Sequelize ORM */}
      <Accordion
        expanded={expanded === "panel7"}
        onChange={(event, isExpanded) => handleChange(isExpanded, "panel7")}
      >
        <AccordionSummary
          id="panel7-header"
          aria-controls="panel7-content"
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography>Sequelize ORM</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ReactSyntaxHighligher
            code={sequelizeCodeSnippet}
            language={"javascript"}
          />
          <Typography {...fontSizing} style={textAlignStart}>
            Using an ORM library, Sequelize to define connection between Express
            app and MySQL database which is used to store user, product, order
            and cart data.
          </Typography>
        </AccordionDetails>
      </Accordion>

      {/* mySql */}
      <Accordion
        expanded={expanded === "panel8"}
        onChange={(event, isExpanded) => handleChange(isExpanded, "panel8")}
      >
        <AccordionSummary
          id="panel8-header"
          aria-controls="panel8-content"
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography>MySQL</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ReactSyntaxHighligher
            code={mysqlCodeSnippet}
            language={"javascript"}
          />
          <Typography {...fontSizing} style={textAlignStart}>
            Using MySQL database to store data. It is a relational database that
            allows to store structured data.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
};
