# Building a reative angular apllication

the repo is from angular university.

now what we have removed the http that was making the get request to the backend it was in the component (home)

i have created a service, this service is responsible to make the http request. The services does not hold any data in memory. It is like a reference that will only be called when there is a requirement to make a get request.

using the async pipe the the home template can subscribe and get the data.

Now that the template are set we maust make the variable to consume the data as follows in the component.

Now we are going to sort the data the we have already received. We will sort it at the level where we call(make a reference call) the data.

## Avoiding angular duplicated HTTP request with the rxjs shareReplay operator

Problem arise since we have two subscribers consumming the observable, it will result into two http request to solve this we will use shareReplay operator.

## Creating reusable components

i have created a reusable component for advance course.Can make a comparison with the beginnersto see the changes.
