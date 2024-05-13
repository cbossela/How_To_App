import React from "react";
import "../styles/GitHubHowTo.css";

const HTMLHowTo = () => {
  return (
    <div className="html-how-to-container">
      <h1>How to Use GitHub</h1>
      <div className="first-image-container">
        <img
          src="https://www.computerhope.com/jargon/h/html-head.jpg"
          alt="HTML Logo"
          className="first-image"
        />
      </div>
      <p>
        HTML (HyperText Markup Language) is the standard markup language is a
        language used to create the foundation of a web page. HTML is written by
        inserting text and web page information that you want to display on a
        web page using unique tags.
      </p>
      <h2>HTML is the foundation of a web page!</h2>
      <img
        src="https://saruwakakun.com/wp-content/uploads/2017/01/bdrOJLZ2S0-min.jpg"
        alt=""
        className="second-image"
      />
      <br />
      <p>
        There is not much of a website on the Internet that does not use HTML.
        HTML is the indispensable foundation of a web page. For example, the
        text that appears on a web page is written in an HTML file.
      </p>
      <br />
      <br />
      <br />
      <br />
      <br />
      <h2 style={{ textAlign: "left" }}>
        Basic Structure of an HTML Document:
      </h2>
      <p>
        An HTML document starts with a <code>&lt;!DOCTYPE html&gt;</code>
        declaration, followed by the <code>&lt;html&gt;</code> element, which
        contains the entire document. Inside the <code>&lt;html&gt;</code>{" "}
        element, there are two main sections: the <code>&lt;head&gt;</code> and
        the <code>&lt;body&gt;</code>.
      </p>
      <p>
        The <code>&lt;head&gt;</code> element contains meta-information about
        the document, such as the title of the page, links to stylesheets, and
        scripts. The <code>&lt;body&gt;</code> element contains the content of
        the page, including text, images, links, and other elements.
      </p>
      <p>
        &lt;!DOCTYPE html&gt;
        <br />
        &lt;html&gt;
        <br />
        &lt;head&gt;
        <br />
        &lt;title&gt;
        <br />
        How to Use HTML
        <br />
        &lt;/title&gt;
        <br />
        &lt;/head&gt;
        <br />
        &lt;body&gt;
        <br />
        &lt;h1&gt;HTML is the foundation of a web page!&lt;/h1&gt;
        <br />
        &lt;p&gt;Let's learn about HTML&lt;/p&gt;
        <br />
        &lt;/body&gt;
        <br />
        &lt;/html&gt;
        <br />
      </p>
      <div className="left-aligned">
        <h2>HTML Tags</h2>
        <p>
          HTML tags are used to define different types of content and elements
          on a web page. Some common HTML tags include:
          <ul>
            <li>
              <code>&lt;h1&gt;</code> to <code>&lt;h6&gt;</code>: Headings
            </li>
            <li>
              <code>&lt;p&gt;</code>: Paragraphs
            </li>
            <li>
              <code>&lt;a&gt;</code>: Links
            </li>
            <li>
              <code>&lt;img&gt;</code>: Images
            </li>
            <li>
              <code>&lt;ul&gt;</code> / <code>&lt;ol&gt;</code> /{" "}
              <code>&lt;li&gt;</code>: Lists
            </li>
          </ul>
        </p>
      </div>
      <div className="left-aligned">
        <h2>Attributes</h2>
        <p>
          HTML tags can have attributes that provide additional information
          about the elements. For example, the <code>src</code> attribute for{" "}
          <code>&lt;img&gt;</code> tags specifies the image source, and the{" "}
          <code>href</code> attribute for <code>&lt;a&gt;</code> tags specifies
          the hyperlink destination.
        </p>
        <h2>Text Formatting</h2>
        <p>
          HTML can be used to format text using tags such as{" "}
          <code>&lt;b&gt;</code> (bold), <code>&lt;i&gt;</code> (italic),{" "}
          <code>&lt;u&gt;</code> (underline), and headings (
          <code>&lt;h1&gt;</code> to <code>&lt;h6&gt;</code>).
        </p>
      </div>
      <div className="left-aligned">
        <h2>Lists</h2>
        <p>
          Lists in HTML can be created using the <code>&lt;ul&gt;</code>{" "}
          (unordered list) and <code>&lt;ol&gt;</code> (ordered list) tags, with
          each list item marked with the <code>&lt;li&gt;</code> tag.
        </p>
        <h2>Links and Images</h2>
        <p>
          Hyperlinks can be created using the <code>&lt;a&gt;</code> tag, and
          images can be embedded using the <code>&lt;img&gt;</code> tag.
        </p>
        <br />
        <p style={{ textAlign: "center", fontSize: "30px" }}>
          These are just a few examples of HTML tags and concepts. By mastering
          HTML, you can create rich and interactive web pages!
        </p>
      </div>
      <div className="left-aligned">{/* Content */}</div>
      <hr className="section-divider" />
    </div>
  );
};

export default HTMLHowTo;
