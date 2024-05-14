import "../styles/CSSHowTo.css";

const CSSHowTo = () => {
  return (
    <div className="html-how-to-container">
      <h1>How to work with CSS (Cascading Style Sheets)</h1>
      <div className="first-image-container">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/726px-CSS3_logo_and_wordmark.svg.png"
          alt="CSS Logo"
          className="first-image"
        />
      </div>
      <p>
        Cascading Style Sheets (CSS) is a style sheet language used for
        specifying the presentation and styling of a document written in a
        markup language such as HTML or XML (including XML dialects such as SVG,
        MathML or XHTML).[1] CSS is a cornerstone technology of the World Wide
        Web, alongside HTML and JavaScript.[2]
      </p>
      <h2>
        CSS used by a lot of Languages and it just like the "clothes" for web
        development.
      </h2>

      <br />
      <p>
        CSS is designed to enable the separation of content and presentation,
        including layout, colors, and fonts.[3] This separation can improve
        content accessibility;[further explanation needed] provide more
        flexibility and control in the specification of presentation
        characteristics; enable multiple web pages to share formatting by
        specifying the relevant CSS in a separate .css file, which reduces
        complexity and repetition in the structural content; and enable the .css
        file to be cached to improve the page load speed between the pages that
        share the file and its formatting. Separation of formatting and content
        also makes it feasible to present the same markup page in different
        styles for different rendering methods, such as on-screen, in print, by
        voice (via speech-based browser or screen reader), and on Braille-based
        tactile devices. CSS also has rules for alternate formatting if the
        content is accessed on a mobile device.[4] The name cascading comes from
        the specified priority scheme to determine which declaration applies if
        more than one declaration of a property match a particular element. This
        cascading priority scheme is predictable. The CSS specifications are
        maintained by the World Wide Web Consortium (W3C). Internet media type
        (MIME type) text/css is registered for use with CSS by RFC 2318 (March
        1998). The W3C operates a free CSS validation service for CSS
        documents.[5] In addition to HTML, other markup languages support the
        use of CSS including XHTML, plain XML, SVG, and XUL. CSS is also used in
        the GTK widget toolkit.
      </p>
      <br />
      <br />
      <br />
      <br />
      <br />
      <h2 style={{ textAlign: "left" }}>The use of CSS:</h2>
      <p>
        Before CSS, nearly all presentational attributes of HTML documents were
        contained within the HTML markup. All font colors, background styles,
        element alignments, borders, and sizes had to be explicitly described,
        often repeatedly, within the HTML. CSS lets authors move much of that
        information to another file, the style sheet, resulting in considerably
        simpler HTML. And additionally, as more and more devices are able to
        access responsive web pages, different screen sizes and layouts begin to
        appear. Customizing a website for each device size is costly and
        increasingly difficult. The modular nature of CSS means that styles can
        be reused in different parts of a site or even across sites, promoting
        consistency and efficiency. For example, headings (h1 elements),
        sub-headings (h2), sub-sub-headings (h3), etc., are defined structurally
        using HTML. In print and on the screen, choice of font, size, color and
        emphasis for these elements is presentational. Before CSS, document
        authors who wanted to assign such typographic characteristics to, say,
        all h2 headings had to repeat HTML presentational markup for each
        occurrence of that heading type. This made documents more complex,
        larger, and more error-prone and difficult to maintain. CSS allows the
        separation of presentation from structure. CSS can define color, font,
        text alignment, size, borders, spacing, layout and many other
        typographic characteristics, and can do so independently for on-screen
        and printed views. CSS also defines non-visual styles, such as reading
        speed and emphasis for aural text readers. The W3C has now deprecated
        the use of all presentational HTML markup.[16]

        
      </p>

      <div className="left-aligned">
        <h2>CSS example</h2>

      </div>
      <div className="left-aligned">
        <h2>Links and Images</h2>
        <p>click <a href="https://en.wikipedia.org/wiki/CSS">here</a> to visit CSS detail.</p>
        
        <br />
        <p style={{ textAlign: "center", fontSize: "30px" }}>
        
        </p>
      </div>
      <div className="left-aligned">{/* Content */}</div>
      <hr className="section-divider" />
    </div>
  );
};

export default CSSHowTo;
