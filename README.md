**Follow below steps **
1. Create project:
   
	Open command promt(bash cmd)

	mkdir codeceptjs-master

 	cd codeceptjs-master

1. For initialize a new project:
   
   npm init -y
3. For install CodeceptJS:

   npm install codeceptjs --save-dev
   
5. 	Initialize CodeceptJS:
   
	npx codeceptjs init

7. Install Puppeteer:
   
   npm install puppeteer --save-dev
   
9. Install Allure helper: For allure reports

	1. Install Allure helper:

 	   npm install @codeceptjs/allure-helper --save-dev
	3. Run tests with Allure output
    
	   npx codeceptjs run --steps --plugins allure
	5. Generate and view the Allure report:

           npx allure open allure-report
10.  After installing above all commands
	1. For running all scenarios, run below command 

           npx codeceptjs run
	2. For run particular scenario or test 
	   
            npx codeceptjs run --grep "Scenarioname"
	   ex: npx codeceptjs run --grep "Check if Start Private Session button is presen and visible and enabled"
	3.  See allure report: 
 
		npx allure open
		
Folder Structure: With details.

	codecept.conf.js: File is the configuration file for CodeceptJS, a testing framework for end-to-end testing. It contains settings such as helpers, plugins, and configurations for your tests.
 
	jsconfig.json: jsconfig.json: File is used for configuring the JavaScript language support in Visual Studio Code (VSCode)
 
	test_oranum_codecept.js:  Test file written in JavaScript for CodeceptJS. It contains all test scenarios and steps that CodeceptJS will execute.
 
	npx: Node Package Manager
 
	output.txt : Text file that holds the output of a command or a script.
 
	package.json: File is a metadata file for npm. It includes project-related information such as project name, version, description, dependencies, and scripts
 
	README.md: Contains steps complete working example of codeceptjs tool with helpers such as puppeteer, playwright
 
	steps_file.js: contains custom step definitions.
 
	Screenshots: Failed screenshots
		
Other reference:
There 22 Scenarios covered in 3 requirement.

1. Refer the screenshots  .\codeceptjs-master\Failed Screenshots
   
2. Refer a file commndos use to execute .\codeceptjs-master\Executed_Script_Commands.txt

 
3. Screenshot reference for executed : .\codeceptjs-master\Complete Execution Status.png		
		







