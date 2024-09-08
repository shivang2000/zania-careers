Part 1 
-> frontend of the application is available in frontend folder 
    - this frontend can be run using the 3 method 
        1. the trivial npm i -> npm run start. Note use node 18
        2. using just docker -> docker build -t frontend . 
                             -> docker run frontend
        3. in the parent folder run docker compose up
Part 2
-> I have create the mock service as required in the problem statement its my
   first time using this package so its all over the place and not sure the way 
   i have done is correct as well this package working took me the most time 
   for some reason the api return an html which took time to debug

Part 3
-> auto save has been done. with an timer of 5 seconds.
-> saving loader is there but u might not be able to see visually cause the service worker returns the response so quickly

Part 4
-> there is a docker file in the frontend project and then there is a docker compose file in root folder. 
   so just running docker compose up in the root project will fire up the frontend application. 
   I am not familer with starlette. and given the time I just finished the frontend section of the test and submitting

-> The API desgin for this project. I didnt think too much as i wasnt making an backend. What i did was create two api for getting the position in form of a string from api. And not acutally passing the data from backend. 
   Then other save API was POST request call with a body which had an update list of string storing the position. and this api stored the information in the  local storage.

Part 5
-> Right now the app is designed is such a why that only takes 5 items no more or no less. 
   If I had create an system where the user can add and remove items from the list and then move them. 
   then i would have a table that store all the data and then i would have an api that retrive that data.
   and then as well api for creating, and deleting in that tables.
   then i would have an another api and table that could store the information for the user to save the state of the ordering.
   then i can fetch the data load it in the app and then fetch the ordering state from the backend and use it to render the data in an ordered from and which later can be manuplitaed by the user on frontend and update the date on backend.