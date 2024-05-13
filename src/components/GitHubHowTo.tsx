import React from "react";
import "../styles/GitHubHowTo.css";

const GitHubHowTo = () => {
  return (
    <div className="GitHub-how-to-container">
      <h1>How to Use GitHub</h1>
      <div className="first-image-container">
        <img
          src="https://www.webfx.com/wp-content/uploads/2022/08/github-logo.png"
          alt="GitHub Logo"
          className="first-image"
        />
      </div>
      <p>
        GitHub is a web-based platform for hosting and managing repositories,
        which allows users to collaborate on code projects like Google Drive. It
        provides version control, issue tracking, and project management
        features, facilitating efficient software development workflows. GitHub
        is widely used by individuals, teams, and organizations to build, share,
        and contribute to open-source and proprietary software projects.
      </p>
      <h2>How to use GitHub</h2>
      <img
        src="https://media.licdn.com/dms/image/D4D12AQFr7TrIiWCAfQ/article-cover_image-shrink_600_2000/0/1687974612505?e=2147483647&v=beta&t=9tiIKlXNUvP7hGPTS2tk-pvbwBW9_qeMd3lWnWIO3TU"
        alt=""
        className="second-image"
      />
      <p>
        There are many features in GitHub that we can use. People mainly use
        Repository to store their codes and mainly shared with others to work
        collaboratively. Here are some of the main features...
        <br />
        <br />
      </p>

      <h2 style={{ textAlign: "left" }}>How to Create a Project</h2>
      <p>
        <ol>
          <li>Make a Project</li>
          First, you have to make a project in VS Code or whatever the platform
          you use to code.
          <li>Make a Repository on GitHub</li>
          Then, make a repository on GitHub. Make sure share the repository if
          you are working with others
        </ol>
      </p>
      <div className="left-aligned">
        <h2>How to make a path and push all the files into the repository:</h2>
        <p>
          <code className="code">
            % cd "the folder you want to make a path"
          </code>
          <code className="code">% git init</code>
          <code className="code">
            % git remote add origin "ssh link that you can find on the GitHub
            website"
          </code>
          <code className="code">% git remote -v</code>
          <code className="code">
            % git add . (. means everything in the folder)
          </code>
          <code className="code">
            % git commit -m "the comment you want to make regard on the commit"
          </code>
          <code className="code">% git push -u origin main</code>
        </p>
      </div>
      <div className="left-aligned">
        <h2>
          After editing the code and commit and push the change to the
          repository
        </h2>
        <p>
          <code className="code">
            % cd "the folder you want to make a path"
          </code>
          <code className="code">
            % git add . (. means everything in the folder)
          </code>
          <code className="code">
            % git commit -m "the comment you want to make regard on the commit"
          </code>
          <code className="code">% git push</code>
        </p>
        <h2>How to pull when working with others</h2>
        <p>
          <code className="code">
            % cd "the folder you want to make a path"
          </code>
          <code className="code">% git pull</code>
        </p>
      </div>
      <div className="left-aligned">
        <h2>How to push when working with others:</h2>
        <p>
          <code className="code">
            % cd "the folder you want to make a path"
          </code>
          <code className="code">
            % git add . (. means everything in the folder)
          </code>
          <code className="code">
            % git commit -m "the comment you want to make regard on the commit"
          </code>
          <code className="code">% git pull</code>
          <code className="code">% git push</code>
        </p>
      </div>
      <div className="left-aligned">{/* Content */}</div>
      <hr className="section-divider" />
    </div>
  );
};

export default GitHubHowTo;
