// function to generate markdown for README
function generateMarkdown(data) {
    return `
    # ${data.title}
    By ${data.name}
    
  
    ## Table of Contents
  
    * [Description](##Description)
    * [Installation](##Installation)
    * [Usage](##Usage)
    * [Licence](##Licence)
    * [Contributing](##Contributing)
    * [Tests](##Tests)
    * [Questions](##Questions)
  
  
    ## Description
    
    
    ${data.description}
    
  
  
    ## Installation
  
    
    In order to use the application you  need to run:
    
    
    ${data.installation}
    
    
    on the command line.
    
  
  
    ## Usage
  
    
    ${data.usage}
     
  
  
    ## License
  
    
    This repo includes the licence(s):
  
    
    ${data.license}
    
  
    
  
  
    ## Contributing
  
    
    How to add to the repo:
  
    ${data.contributing}
  
    
  
  
    ## Tests
  
    
    In order to use the application you  need to run:
    
    
    ${data.test}
    
    
    on the command line.
    
  
    ## Questions
  
    If you have any questions about the repo, please feel free to reach me directly at ${data.email}.
    You can find more of my work through my GitHub account _[${data.github}]_  (http://www.github.com/${data.github}/).
  
    `;
}

module.exports = generateMarkdown;