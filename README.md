# Express Boilerplate
### API

#### Installation / Run
Set up to use Mongo but easily can be changed for other DBs/drivers.

`git clone` repo

`npm install`

`npm run dev` or `npm run start`

Be sure to set `NODE_ENV=development` when running in dev mode.

#### About
Just another Node boilerplate.

It currently supports Facebook authentication to allow for a user to post
reviews.  Additional work for local registration and using JWT is required, 
but is somewhat stubbed out for now.  These can be found in `/config/strategies`.

Configurations are per environment under `/config/env`.  Production keys 
should be set as environment variables, of course.

Currently there are no useful tests set up, but unit tests are intended to be 
written in the `/test` directory and integration tests to be written in 
`/tests-integration`.
