# docker-cra-api
Proxy API Requests from Dockerized React App to Dockerized REST API

# Usage

- Start the Dockerized CRA
  - `cd docker-cra`
  - `docker container run -it -p 3000:3000 -p 35729:35729 -v $(pwd):/app react:app`

- Start the Dockerized REST API
  - `cd hello-world-rest`
  - `docker run -ti --rm -p 5050:5050 vad1mo/hello-world-rest`

- Load React App frontend at `http://localhost:3000`
  - Click the button to test a request proxied through `http://localhost:3000/api` to docker container exposed at `http://localhost:5050`

- Or, just hit `http://localhost:3000/api/path1/path2` (where path1/path2 are any paths - the REST API just echos them back).
- Hit the Dockerized API directly at `http://localhost:5050/path1/path2`
