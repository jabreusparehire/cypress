# Graphite Cypress simple setup
## Instalation
Clone the repo, install `npm` and run `npm install`.

## Running tests
### With npm
Run `npm run test`.

### Running with docker
```
docker run -it -v $PWD:/e2e -w --entrypoint=cypress cypress/included:3.2.0 run
```

There is a small - if - while running cypress in docker: we miss it's interactive mode. The interactive mode is a pretty cool feature from cypress allowing deep debugging, time travel and visual display (and interaction play/stop) of the tests. 

There seems to be a way to allow that (which involves installing a couple of libraries to exchange commands btw host and container): 
https://www.cypress.io/blog/2019/05/02/run-cypress-with-a-single-docker-command/

In docker it will run in `headless` mode, but will take screenshots of the tests and record videos (still need to dig a bit more into that)

## Writing tests
Cypress uses Mocha (test lib) and Chai (assertion lib) syntax for writing tests. You can find out more :
- https://mochajs.org/
- https://www.chaijs.com/

There not seems to be support for other js testing frameworks (such as jest)

##
Have fun!