# FROM cypress/included:12.2.0
# #Create the folder where our project will be stored
# RUN mkdir /my-cypress-project
# #We make it our workdirectory
# WORKDIR /my-cypress-project
# #Let's copy the essential files that we MUST use to run our scripts.
# COPY ./package.json .
# COPY ./tsconfig.json .
# COPY ./cypress.config.ts .
# COPY ./cypress ./cypress
# #Install the cypress dependencies in the work directory
# RUN npm install
# #Executable commands the container will use[Exec Form]
# ENTRYPOINT ["npx","cypress","run"]
# #With CMD in this case, we can specify more parameters to the last entrypoint.
# CMD [""]   
FROM cypress/included:12.2.0
RUN mkdir /cypressdocker
WORKDIR /cypressdocker
COPY . .
# COPY ./package.json .
# COPY ./package-lock.json .
# COPY ./cypress.config.ts .
# COPY ./tsconfig.json .
# COPY ./cypress ./cypress
RUN npm install
ENTRYPOINT ["npm", "run"]