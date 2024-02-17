/**
 * File: AccordionDiagram.jsx
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
  viteCodeSnippet,
  viteDevCodeSnippet,
  viteProdCodeSnippet,
  routerCodeSnippet,
  useStateCodeSnippet,
  useEffectCodeSnippet,
  useCustomHookCodeSnippet,
  useLocalStorageCodeSnippet,
  contextAPICodeSnippet,
  arrayMapCodeSnippet,
  arrayFilterSliceSortCodeSnippet,
  arraySomeCodeSnippet,
  arrayReduceCodeSnippet,
  muiCodeSnippet,
} from "../../data/constants";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";

export const AccordionDiagram = () => {
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
      {/* Vite */}
      <Accordion
        expanded={expanded === "panel1"}
        onChange={(event, isExpanded) => handleChange(isExpanded, "panel1")}
      >
        <AccordionSummary
          id="panel1-header"
          aria-controls="panel1-content"
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography>Vite</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography {...fontSizing} style={textAlignStart}>
            Vite is a javascript build tool to create frontend projects.
          </Typography>
          <ReactSyntaxHighligher code={viteCodeSnippet} language={"shell"} />
          <Typography {...fontSizing} style={textAlignStart}>
            The command line above creates a react + vite app.
          </Typography>
          <ReactSyntaxHighligher code={viteDevCodeSnippet} language={"shell"} />
          <Typography {...fontSizing} style={textAlignStart}>
            Development Mode: Vite relies on native ES module support in modern
            browsers for optimal development performance.
          </Typography>
          <ReactSyntaxHighligher
            code={viteProdCodeSnippet}
            language={"shell"}
          />
          <Typography {...fontSizing} style={textAlignStart}>
            Production Build: When building for production, Vite (using Rollup
            under the hood) can transpile and bundle the code to ensure
            compatibility with a wider range of browsers.
          </Typography>
          <br />
          <Typography {...fontSizing} style={textAlignStart}>
            Vite is used to create this project instead of traditional CRA. It
            is much faster and also has built in typescript support. However, it
            does not contain built in server side rendering hence using Vite for
            client side application is a good choice.
          </Typography>
        </AccordionDetails>
      </Accordion>

      {/* React router */}
      <Accordion
        expanded={expanded === "panel2"}
        onChange={(event, isExpanded) => handleChange(isExpanded, "panel2")}
      >
        <AccordionSummary
          id="panel2-header"
          aria-controls="panel2-content"
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography>React Router</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ReactSyntaxHighligher code={routerCodeSnippet} language={"jsx"} />
          <Typography {...fontSizing} style={textAlignStart}>
            Home, Shop and About page will be rendered when the corresponding
            routes are matched. Shop page is the default route when no path is
            specified.
          </Typography>
        </AccordionDetails>
      </Accordion>

      {/* React hooks */}
      <Accordion
        expanded={expanded === "panel3"}
        onChange={(event, isExpanded) => handleChange(isExpanded, "panel3")}
      >
        <AccordionSummary
          id="panel3-header"
          aria-controls="panel3-content"
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography>React Hooks</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography {...fontSizing} style={textAlignStart}>
            useState
          </Typography>
          <ReactSyntaxHighligher
            code={useStateCodeSnippet}
            language={"javascript"}
          />
          <Typography {...fontSizing} style={textAlignStart}>
            Using built in useState hook to manage the menu open/close.
          </Typography>

          <br />

          <Typography {...fontSizing} style={textAlignStart}>
            useEffect
          </Typography>
          <ReactSyntaxHighligher
            code={useEffectCodeSnippet}
            language={"javascript"}
          />
          <Typography {...fontSizing} style={textAlignStart}>
            This function has useEffect defined and when imported allow multiple
            callbacks to be executed when the window is resized.
          </Typography>

          <br />

          <Typography {...fontSizing} style={textAlignStart}>
            Custom Hook
          </Typography>
          <ReactSyntaxHighligher
            code={useCustomHookCodeSnippet}
            language={"javascript"}
          />
          <Typography {...fontSizing} style={textAlignStart}>
            Using a custom hook called useCartState to manage the cartlist state
            and functions.
          </Typography>
        </AccordionDetails>
      </Accordion>

      {/* Local Storage */}
      <Accordion
        expanded={expanded === "panel9"}
        onChange={(event, isExpanded) => handleChange(isExpanded, "panel9")}
      >
        <AccordionSummary
          id="panel9-header"
          aria-controls="panel9-content"
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography>Local Storage</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ReactSyntaxHighligher
            code={useLocalStorageCodeSnippet}
            language={"javascript"}
          />
          <Typography {...fontSizing} style={textAlignStart}>
            Using localStorage to get the stored cartList array and convert JSON
            string to array. Update the stored cartList by converting array to
            JSON string with updatedCartList. Delete the array from localStorage
            if user wishes to clear all task(s).
          </Typography>
        </AccordionDetails>
      </Accordion>

      {/* Context API */}
      <Accordion
        expanded={expanded === "panel8"}
        onChange={(event, isExpanded) => handleChange(isExpanded, "panel8")}
      >
        <AccordionSummary
          id="panel8-header"
          aria-controls="panel8-content"
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography>Context API</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ReactSyntaxHighligher
            code={contextAPICodeSnippet}
            language={"jsx"}
          />
          <Typography {...fontSizing} style={textAlignStart}>
            CartContext is used for data consumption when it is needed.
            CartContextProvider provides the context to child components within
            its subtree.
          </Typography>
        </AccordionDetails>
      </Accordion>

      {/* React axios */}
      {/* <Accordion
        expanded={expanded === "panel4"}
        onChange={(event, isExpanded) => handleChange(isExpanded, "panel4")}
      >
        <AccordionSummary
          id="panel4-header"
          aria-controls="panel4-content"
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography>React Axios</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ReactSyntaxHighligher
            code={axiosCodeSnippet}
            language={"javascript"}
          />
          <Typography {...fontSizing} style={textAlignStart}>
            Making asynchronous API calls using Axios to fetch weather data.
            Each function is designed to handle the API request and return the
            response data. These functions are housed in a JavaScript file
            (api.js) for reusability and maintainability.
          </Typography>
        </AccordionDetails>
      </Accordion> */}

      {/* Environment variable */}
      {/* <Accordion
        expanded={expanded === "panel5"}
        onChange={(event, isExpanded) => handleChange(isExpanded, "panel5")}
      >
        <AccordionSummary
          id="panel5-header"
          aria-controls="panel5-content"
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
      </Accordion> */}

      {/* Array functions */}
      <Accordion
        expanded={expanded === "panel6"}
        onChange={(event, isExpanded) => handleChange(isExpanded, "panel6")}
      >
        <AccordionSummary
          id="panel6-header"
          aria-controls="panel6-content"
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography>Array Functions</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography {...fontSizing} style={textAlignStart}>
            map()
          </Typography>
          <ReactSyntaxHighligher code={arrayMapCodeSnippet} language={"jsx"} />
          <Typography {...fontSizing} style={textAlignStart}>
            The map function will iterate over the array and for each element in
            that array, it renders a grid component passing down the product
            data as props.
          </Typography>

          <br />
          <Typography {...fontSizing} style={textAlignStart}>
            filter(), slice() and sort()
          </Typography>
          <ReactSyntaxHighligher
            code={arrayFilterSliceSortCodeSnippet}
            language={"javascript"}
          />
          <Typography {...fontSizing} style={textAlignStart}>
            The filter method filters and return a list based on category. The
            slice method creates a copy of the original array to prevent
            mutation, then the sort method will sort the list by price.
          </Typography>

          <br />
          <Typography {...fontSizing} style={textAlignStart}>
            some()
          </Typography>
          <ReactSyntaxHighligher
            code={arraySomeCodeSnippet}
            language={"javascript"}
          />
          <Typography {...fontSizing} style={textAlignStart}>
            The some method will iterate through the array and returns TRUE if
            the id matches.
          </Typography>

          <br />
          <Typography {...fontSizing} style={textAlignStart}>
            reduce()
          </Typography>
          <ReactSyntaxHighligher
            code={arrayReduceCodeSnippet}
            language={"javascript"}
          />
          <Typography {...fontSizing} style={textAlignStart}>
            The reduce method will reduce the elements in the array and
            acculumate to a single value. In this case, it will sum up all the
            product cost in the cart list.
          </Typography>
        </AccordionDetails>
      </Accordion>

      {/* Material UI */}
      <Accordion
        expanded={expanded === "panel7"}
        onChange={(event, isExpanded) => handleChange(isExpanded, "panel7")}
      >
        <AccordionSummary
          id="panel7-header"
          aria-controls="panel7-content"
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography>Material UI</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ReactSyntaxHighligher code={muiCodeSnippet} language={"shell"} />
          <Typography {...fontSizing} style={textAlignStart}>
            A react UI framework that provides a set of customizable and
            reusable components, styles, and themes following the google
            material design guidelines.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
};
