# Building a reative angular apllication

the repo is from angular university.

now what we have removed the http that was making the get request to the backend it was in the component (home)

i have created a service, this service is responsible to make the http request. The services does not hold any data in memory. It is like a reference that will only be called when there is a requirement to make a get request.

using the async pipe the the home template can subscribe and get the data.

Now that the template are set we maust make the variable to consume the data as follows in the component.
