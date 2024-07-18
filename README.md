# ButtonShift-assesment
# Test Automation Assignment using Cypress

## Setup Cypress

1. **Initialize the project:**
   ```powershell
   npm init -y
   npm install cypress --save-dev
   npx cypress open

2. **Running Tests:**
To run all tests and generate a report:

    ```powershell
   npx cypress run
  This command will execute all Cypress tests headlessly and generate reports.

3. **Test Report:**

   Test reports are generated using mochawesome and can be found in the cypress/reports directory.
    Open the HTML report (mochawesome.html) in a web browser for detailed test results.

4. **Assumptions:**
       The OTP for signup is always 123456.
       Successful signup/login is confirmed by theredirection to /community page.

5.**Important:**
        Make sure to change the user email in the fixture/user.json file before signing up as a new user.
  
