## Pre-requisite to be installed:
	•	Node JS 16.13.2
	•	IDE: VS Studio/Idea Intellij


## Steps to setup Cypress:
	1. Create a project folder
	2. Launch IDE
	3. Launch Terminal
	4. In the terminal window, type <npm init> and submit required project details like name, 			version, description, author, etc. This will create package.json file
	5. Following are few important dependencies. Copy and paste it in package.json. Install below 		dependencies using <npm install> command
		"@testing-library/cypress": "^8.0.3", //helper cypress command	
		"concurrently": "^7.3.0",	//merge two or more npm script commands
		"cypress": "^10.7.0",	//cypress
		"cypress-grep": "^3.0.3", //to filter specs for execution based on tags
		"cy-verify-downloads": "^0.1.13", //to validate downloaded files
		"cypress-mochawesome-reporter": "3.2.0", //cypress html report
		"cypress-xpath": "2.0.1", //use xpath
		"fs":"^0.0.1-security", //to access files and folders
		"faker": "^5.5.3", //to generate random data like name, address
		"typescript": "^4.7.4" //typescript 

		Cypress, along with other mentioned dependencies will get installed at the ./node_modules directory in the project folder.

		Note: Due to firewall restriction in HSBC VDI, executable file of Cypress is not downloaded while installing cypress using npm command, so one has to get the updated one from client<Caroline/Janice can download for us> as we do not have admin rights to download it directly from cypress website. Executable file of that particular cypress version as mentioned in package json should be kept in the below path.
		C:\Users\<staff_id>\AppData\Local\Cypress\Cache\10.7.0

		Once dependencies are installed it will reflect in package.json file

	6. Next step is to open the cypress test runner by using any of the following commands:
		npm cypress open
		npx cypress open
		./node_modules/.bin/cypress open

		You can also add NPM scripts in package.json and run npm custom command
		{
		"scripts": {
			"cypress:open": "cypress open"
		}
		}
		run <npm cypress:open> which will open cypress test runner

	7. From the Cypress test runner Launchpad, select E2E testing		

	8. Click on Continue

	9. Choose a Browser

	10. Click on 'Create new empty spec' icon

		In the dialog box, you can change the name of the spec filename and give the extension as per javascript(.js)/typescript(.ts) that you would be using in cypress framework

		You can then select whether you want to execute the current spec or create new one

	11. Go to file explorer->project folder->
		cypress folder can be seen created. Following files/folders can be seen created
		It will display list of default files that would be added in the project in following path
		•project folder\cypress\e2e\spec.cy.js //Spec file
		•project folder\cypress.config.js //Configuration file for Cypress
		•project folder\cypress\support\e2e.js //This is required to specify references used in 	project
		•project folder\cypress\support\commands.js //To add custom cypress function that will be a part of cypress package
		•project folder\cypress\fixtures\example.json //Test data file
		
		Note: 
		•Except json file, one can change the extension of the above mentioned files to .ts if typescript is used.
		•You can configure it as per your requirement
		•Create tsconfig.json file, which contains pre-defined available compiler options required for compiling typescript to javascript during execution by Cypress test runner. Compiler options are commented by default. Uncomment desired compiler options. You can refer current project tsconfig file for reference.

## Best Practice for Test Data Dependency:

	•Please use different customer account data for different screen json files to avoid any test data issue while execution where ever required.
	•No other user or screen should use the same data for any changes or approve, reject or perform any operation on the same data while scripts is using it. Else, verification will generate false result due to change in data by some other user or screen.


## Executing cypress test.

	•Please update the respective screen greptags parameter value for test variable in package.json file.
	
	•Update greptags=csv or fxsi or custacc etc as per respective screen spec files.
		e.g:- "test": "cypress run --env grepTags=csv,grepFilterSpecs=true --headed --browser chrome"

	-Tagname of Cust Acct Maint/Approval/Enquiry: custacc
	-Tagname of FX SI Maint/Approval/Enquiry: fxsi
	-Tagname of FX Request Maint/Approval/Enquiry: fxrequest
	-Tagname of csv upload/download: csv
	-Tagname of FX Request Bulk Release: bulkrelease
	-Tagname of FX Request Bulk Removal/Approval: bulkremoval
	-Tagname of FX Request NetAgg: netagg
	-Tagname of FX Request HistoryFx: historyfx
	
	•Then run command: npm run test

## Additinaionl Info: if required for running single spec file for users who can develop test script using cypress.

node_modules\.bin\cypress run --spec "cypress\e2e\main.cy.ts"
	npx cypress run --spec "cypress\e2e\main.cy.ts"







