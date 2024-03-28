import NavBar from "../../templates/NavBar";
import CodeSection from "../../templates/CodeSection";

function Docker() {
  return (
    <>
      <NavBar></NavBar>
      <main>
        <section className=" text-center container pt-5">
          <img
            className="card-img-top img-fluid mt-5 "
            src="/images/blog/dockericon.svg"
            alt=""
            style={{ height: "30%", width: "30%" }}
          />
        </section>
        <div className="container">
          <h1 className="p5">Introduction to Docker</h1>
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
          <h1 className="p5">Getting Started with Docker</h1>
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
          <h1 className="p5">Running Your First Docker Container</h1>
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
          <h1 className="p5">Docker Images</h1>
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
          <br></br>
          <h1 className="p5">Docker Run</h1>
          <br></br>
          <p>
            Certainly! The docker run command is quite versatile, offering a
            variety of options and arguments to customize the behavior of the
            container being created. Here's a comprehensive list of arguments
            and options you can use with docker run, along with explanations:
          </p>
          <br></br>
          <h3>IMAGE</h3>
          <p>
            The below Command Specifies the Docker <b>'image'</b> to use for
            creating the container.
          </p>
          <CodeSection language={"bash"}>docker run ubuntu</CodeSection>
          <br></br>
          <p>
            This will create a new container using the latest version of the{" "}
            <b>'ubuntu'</b> image.
          </p>
          <br></br>
          <h3>TAG</h3>
          <p>
            The below Command Specifies a particular version or <b>'tag'</b> of
            the Docker image.
          </p>
          <CodeSection language={"bash"}>docker run ubuntu:18.04</CodeSection>
          <br></br>
          <p>
            This will create a new container using the ubuntu image with the{" "}
            <b>'18.04'</b> tag.
          </p>
          <br></br>
          <h3>COMMAND</h3>
          <p>
            The below Command Overrides the default <b>'command'</b> specified
            in the Docker image.
          </p>
          <CodeSection language={"bash"}>
            docker run ubuntu echo "Hello, World!"
          </CodeSection>
          <br></br>
          <p>
            This will create a new container using the ubuntu image and execute
            the echo <b> ' "Hello, World!" command '</b> inside it.
          </p>
          <br></br>
          <h3>ARGUMENTS</h3>
          <p>
            Additional <b>'arguments'</b> that can be passed to the command
            specified in the Docker image.
          </p>
          <CodeSection language={"bash"}>
            docker run ubuntu ls -la /
          </CodeSection>
          <br></br>
          <p>
            This will create a new container using the ubuntu image and execute
            the <b>'ls -la /'</b> command inside it.
          </p>
          <br></br>
          <h2>OPTIONS</h2>
          <br></br>
          <h3>General Options</h3>
          <p>
            <b>' - -d, --detach '</b> Run the container in detached mode (in the
            background).
          </p>
          <CodeSection language={"bash"}>docker run -d ubuntu</CodeSection>
          <br></br>
          <p>
            This will create a new container using the ubuntu image and run it
            in <b>'detached'</b> mode.
          </p>
          <br></br>
          <p>
            <b>' - -it, --interactive --tty '</b> Run the container in
            interactive mode with a pseudo-TTY.
          </p>
          <CodeSection language={"bash"}>
            docker run -it ubuntu /bin/bash
          </CodeSection>
          <br></br>
          <p>
            This will create a new container using the ubuntu image and start an{" "}
            <b>'interactive'</b> Bash shell inside it.
          </p>
          <br></br>
          <h3>Resource Constraints</h3>
          <p>
            <b> ' - --cpus '</b> Limit the CPU shares for the container.
          </p>
          <CodeSection language={"bash"}>
            docker run --cpus 0.5 ubuntu
          </CodeSection>
          <br></br>
          <p>
            This will create a new container using the ubuntu image with limited{" "}
            <b>'CPU shares (0.5).'</b>
          </p>
          <br></br>
          <p>
            <b>' - --memory '</b> Set a memory limit for the container.
          </p>
          <CodeSection language={"bash"}>
            docker run --memory 512m ubuntu
          </CodeSection>
          <br></br>
          <p>
            This will create a new container using the ubuntu image with a{" "}
            <b>' memory limit of 512 megabytes.'</b>
          </p>
          <br></br>
          <h3>Networking</h3>
          <p>
            <b>' - -p, --publish '</b> Publish a container's port(s) to the
            host.
          </p>
          <CodeSection language={"bash"}>
            docker run -p 8080:80 nginx
          </CodeSection>
          <br></br>
          <p>
            This will create a new container using the nginx image and map{" "}
            <b>'port 80'</b> inside the container to <b>'port 8080'</b> on the
            host.
          </p>
          <br></br>
          <p>
            <b>' - --network '</b> Connect the container to a Docker network.
          </p>
          <CodeSection language={"bash"}>
            docker run --network=my_network nginx
          </CodeSection>
          <br></br>
          <p>
            This will create a new container using the nginx image and connect
            it to the <b>'my_network '</b>Docker network.
          </p>
          <br></br>
          <h3>Volume Mounting</h3>
          <p>
            <b>' - -v, --volume '</b> Bind mount a volume.
          </p>
          <CodeSection language={"bash"}>
            docker run -v /host/path:/container/path ubuntu
          </CodeSection>
          <br></br>
          <p>
            This will create a new container using the ubuntu image and{" "}
            <b>' mount the /host/path '</b> directory on the host to{" "}
            <b> ' /container/path '</b> inside the container.
          </p>
          <br></br>
          <h3>Environment Variables</h3>
          <p>
            <b> ' - -e, --env '</b> Set environment variables.
          </p>
          <CodeSection language={"bash"}>
            docker run -e MYSQL_ROOT_PASSWORD=my-secret-password mysql
          </CodeSection>
          <br></br>
          <p>
            This will create a new container using the mysql image and set the{" "}
            <b>'MYSQL_ROOT_PASSWORD environment variable.'</b>
          </p>
          <br></br>
          <h3>Conclusion</h3>
          <p>
            These are some of the most commonly used arguments and options for
            the docker run command. Docker provides a wide range of other
            options and configurations to customize container behavior further.
            You can always refer to the official{" "}
            <a
              href="https://docs.docker.com/engine/reference/run/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Docker
            </a>{" "}
            documentation for a complete list of options and their detailed
            explanations.
          </p>

          <br></br>

          <h1 className="p5">Advanced Docker Concepts</h1>
          <br></br>
          <h3 className="p5">Docker Compose</h3>
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
          <h2 className="p5">Docker Swarm and Kubernetes</h2>
          <br></br>
          <p>
            Docker Swarm and Kubernetes are orchestration tools for managing
            Docker containers in a clustered environment. They provide features
            such as automated deployment, scaling, and management of
            containerized applications.
          </p>
          <br></br>

          <h1 className="p5">Conclusion</h1>
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
