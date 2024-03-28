import NavBar from "../../templates/NavBar";
import CodeSection from "../../templates/CodeSection";

function Docker() {
  return (
    <>
      <NavBar></NavBar>
      <main>
        <section className="py-5 text-center container">
          <div className="row py-5">
            <div className="col-lg-6 col-md-8 mx-auto">
              <h1>Docker</h1>
            </div>
          </div>
        </section>
        <div className="container">
          <h1>Introduction to Docker</h1>
          <br></br>
          <br></br>
          <h3>What is Docker?</h3>
          <br></br>
          <p>
            Docker is an open-source platform that enables developers to build,
            ship, and run applications as lightweight, portable, and
            self-sufficient containers. These containers are isolated
            environments that contain everything an application needs to run,
            including libraries, dependencies, and runtime environment, ensuring
            consistency across different environments.
          </p>
          <br></br>
          <br></br>
          <h3>Key Features of Docker</h3>
          <ul>
            <li>
              <b>Containerization:</b> Docker uses containerization technology
              to create containers that encapsulate an application and its
              dependencies.
            </li>
            <li>
              <b>Portability:</b>Docker containers can run on any machine that
              has Docker installed, regardless of the underlying operating
              system or hardware.
            </li>
            <li>
              <b>Efficiency:</b> Containers share the host system's kernel,
              making them lightweight and efficient compared to virtual
              machines.
            </li>
            <li>
              <b>Scalability:</b> Docker allows you to easily scale your
              applications by running multiple containers across a cluster of
              machines.
            </li>
          </ul>
          <br></br>
          <br></br>
          <h1>Getting Started with Docker</h1>
          <br></br>
          <br></br>
          <h3>Installing Docker</h3>
          <br></br>
          <p>
            To get started with Docker, you'll need to install the Docker Engine
            on your machine. Docker provides installation packages for various
            operating systems, including Windows, macOS, and Linux.
          </p>
          <br></br>
          <br></br>
          <h2>Windows</h2>
          <ul>
            <li>
              <b>Download Docker Desktop for Windows:</b> Go to the Docker Hub
              website (hub.docker.com) and download the Docker Desktop installer
              for Windows.
            </li>
            <li>
              <b>Install Docker Desktop:</b> Run the installer and follow the
              on-screen instructions. Docker Desktop includes Docker Engine,
              Docker CLI client, Docker Compose, Docker Content Trust,
              Kubernetes, and Credential Helper.
            </li>
            <li>
              <b>Start Docker Desktop:</b> Once installed, start Docker Desktop
              from the Start menu. It may take a few moments to initialize.
            </li>
            <li>
              <b>Verify Installation:</b> Open a command prompt and run the
              following command to verify that Docker is installed and running
              correctly:
            </li>
          </ul>
          <br></br>
          <CodeSection language={"bash"}>docker --version</CodeSection>
          <br></br>
          <br></br>
          <h2>macOS</h2>
          <ul>
            <li>
              <b>Download Docker Desktop for Mac:</b> Go to the Docker Hub
              website (hub.docker.com) and download the Docker Desktop installer
              for macOS.
            </li>
            <li>
              <b>Install Docker Desktop:</b> Double-click the downloaded .dmg
              file to open the installer, then drag the Docker icon to your
              Applications folder.
            </li>
            <li>
              <b>Start Docker Desktop:</b> Open Docker from your Applications
              folder. It may prompt you for system permissions.
            </li>
            <li>
              <b>Verify Installation:</b> Open a terminal and run the following
              command to verify that Docker is installed and running correctly:
            </li>
          </ul>
          <br></br>
          <CodeSection language={"bash"}>docker --version</CodeSection>
          <br></br>
          <br></br>
          <h2>Linux</h2>
          <ul>
            <li>
              <b>Install Docker Engine:</b> Docker provides installation scripts
              for various Linux distributions. Visit the Docker documentation
              (docs.docker.com) for detailed instructions for your distribution.
            </li>
            <li>
              <b>Start Docker Service:</b> Once Docker is installed, start the
              Docker service using the following command:
            </li>
            <br></br>
            <CodeSection language={"bash"}>
              sudo systemctl start docker
            </CodeSection>
            <br></br>
            <li>
              <b>Enable Docker Service:</b> To ensure that Docker starts
              automatically at boot, run the following command:
            </li>
            <br></br>
            <CodeSection language={"bash"}>
              sudo systemctl enable docker
            </CodeSection>
            <br></br>
            <li>
              <b>Verify Installation:</b> Run the following command to verify
              that Docker is installed and running correctly:
            </li>
          </ul>
          <br></br>
          <CodeSection language={"bash"}>docker --version</CodeSection>
          <br></br>
          <br></br>
          <h1>Running Your First Docker Container</h1>
          <br></br>
          <p>
            Once Docker is installed, you can run your first Docker container
            using the <b>'docker run'</b> command. For example, to run a basic
            Ubuntu container, you can use the following command:
          </p>
          <br></br>
          <CodeSection language={"bash"}>
            docker run -it ubuntu /bin/bash
          </CodeSection>
          <br></br>
          <br></br>
          <p>
            This command will start a new Ubuntu container and open a bash shell
            inside the container.
          </p>
          <br></br>
          <br></br>
          <h1>Docker Images</h1>
          <br></br>

          <p>
            Docker images are the blueprints for containers. You can create your
            own images using a Dockerfile, which contains instructions for
            building the image. For example, here's a simple Dockerfile for
            building an image that runs a basic Python web server:
          </p>
          <br></br>
          <CodeSection language={"bash"}>
            FROM python:3 \n COPY . /app \n WORKDIR /app \n CMD ["python", "-m",
            "http.server", "8000"]
          </CodeSection>
          <br></br>
          <br></br>
          <p>
            You can build this image using the <b>'docker build'</b> command and
            then run a container using the built image.
          </p>
          <br></br>
          <p>Specifies the Docker image to use for creating the container.</p>
          <CodeSection language={"bash"}>docker run ubuntu</CodeSection>
          <br></br>
          <p>
            This will create a new container using the latest version of the
            ubuntu image.
          </p>
          <h1>Advanced Docker Concepts</h1>
          <br></br>
          <h3>Docker Compose</h3>
          <br></br>
          <p>
            Docker Compose is a tool for defining and running multi-container
            Docker applications. It allows you to define the services, networks,
            and volumes for your application in a single YAML file. For example,
            here's a Docker Compose file for a simple web application that
            consists of a web server and a database:
          </p>
          <br></br>
          <CodeSection language={"bash"}>
            version: '3' \nservices: \n\t web: \n\t\t image: nginx:latest \n\t\t
            ports: \n \t\t\t- "80:80" \n \tdb: \n\t\t image: mysql:latest \n\t\t
            environment: \n\t\t\t MYSQL_ROOT_PASSWORD: password \n
          </CodeSection>
          <br></br>
          <br></br>
          <p>
            You can use the <b>'docker-compose'</b> up command to start the
            application defined in the Docker Compose file.
          </p>
          <br></br>
          <h2>Docker Swarm and Kubernetes</h2>
          <br></br>
          <p>
            Docker Swarm and Kubernetes are orchestration tools for managing
            Docker containers in a clustered environment. They provide features
            such as automated deployment, scaling, and management of
            containerized applications.
          </p>
          <br></br>

          <h1>Conclusion</h1>
          <br></br>
          <p>
            Docker has revolutionized the way developers build, ship, and run
            applications. Its containerization technology has made it easier to
            develop and deploy applications, ensuring consistency and efficiency
            across different environments. By leveraging Docker's features and
            ecosystem, developers can streamline their development process and
            focus more on building great applications.
          </p>
        </div>
      </main>
    </>
  );
}

export default Docker;
