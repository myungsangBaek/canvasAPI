import "react-notion/src/styles.css";
import "prismjs/themes/prism-tomorrow.css"; // only needed for code highlighting
import { NotionRenderer } from "react-notion-x";

import { Code } from "react-notion-x/build/third-party/code";
import { Collection } from "react-notion-x/build/third-party/collection";
import { Equation } from "react-notion-x/build/third-party/equation";
import { Pdf } from "react-notion-x/build/third-party/pdf";
import { Modal } from "react-notion-x/build/third-party/modal";

import { useEffect, useState } from "react";

import axios from "axios";

export default function ReactNotion() {
  const [response, setResponse] = useState({});
  useEffect(() => {
    const NOTION_PAGE_ID = "dd5df6f0e80e4cf8a491c789e5dddee3";
    axios
      .get(`https://notion-api.splitbee.io/v1/page/${NOTION_PAGE_ID}`)
      .then(({ data }) => {
        setResponse(data);
      });
  }, []);

  useEffect(() => {}, []);
  return (
    <NotionRenderer
      recordMap={response}
      fullPage={true}
      darkMode={false}
      components={{
        Code,
        Collection,
        Equation,
        Pdf,
        Modal,
      }}
    />
  );
}
