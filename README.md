# techTask-Javascript-NodeJs

## TASK-1 ##

- Location of Pseudocode for sorting 10GB of integer data with 1GB of RAM : ``` Task-1/sorting.txt ``` || ```https://github.com/kapadianancy/techTask-Javascript-NodeJs/blob/main/Task-1/sorting.txt```



## TASK-2 ##

***About***

- Backend application which serves its users with news and weather(for 5 days) information. 
- News API is restricted to authenticated users only.
- Weather API is open for all users.
- To store user's data MongoDB with mongoose is being used.
- To provide authentication JWT tokens are being used.


***Setup/config and how to run:***

(supported node version >= 12)

- To clone github repo:
``` git clone https://github.com/kapadianancy/techTask-Javascript-NodeJs.git ```

- To install required dependencies: 
 ``` npm install```

- make **.env** file including following configuration -

  PORT(8080), MONGO(mongodb url), SECRET(jwt secret string), ENV(dev), NEWSAPIKEY, WEATHERSAPIKEY

- To Run the project:
``` npm run start ```

- To run the unit test cases:
``` npm run test ```

- Last but not least, find the postman collection for all the APIs in **postman-api-documentation** folder.
Import the given **.json** file in postman and you are good to go.


