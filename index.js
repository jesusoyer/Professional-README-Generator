const inquirer = require('inquirer');
const fs = require('fs');
const CheckboxPrompt = require('inquirer/lib/prompts/checkbox');

const generateReadMe = ({projectName, description,installation,usage,credits,thirdParty,license,code,github,email}) =>
`
${code}
# ${projectName}
## Description
${description}

## Table of Contents
[Installation](#installation)
[Usage](#usage)
[Credits](#credits)
[License](#license)

## Installation
${installation}

## Usage
${usage}

## Credits
${credits}
${thirdParty}
## License
This appilication is covered by the ${license} license.

## Questions
${github}
${email}

`;

 



inquirer
  .prompt([
    {
      type: 'input',
      name: 'projectName',
      message: 'What is your projects name?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Provide a short description explaining the what, why, and how of your project.',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Provide instructions and examples for use.',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Provide instructions and examples for use.',
    },
    {
      type: 'input',
      name: 'credits',
      message: 'List your collaborators, if any, with links to their GitHub profiles.',
    },
    {
      type: 'input',
      name: 'thirdParty',
      message: 'If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.',
    },
    {
      type: 'list',
      name: 'license',
      message: 'What license did you use?',
      default: 'none',
      choices: [{key:"1" ,value:"MIT"},{key:"2",value:"Apache 2.0"},{key:"3",value:"Boost Software License 1.0"},{key:"4",value:"BSD 3-Clause License"},{key:"5",value:"BSD 2-Clause License"},{key:"6",value:"Eclipse Public License 1.0"},{key:"7",value:"GNU GPL v3"},{key:"8",value:"GNU GPL v2"},{key:"9",value:"GNU AGPL v3"},{key:"10",value:"GNU LGPL v3"},{key:"11",value:"GNU FDL v1.3"},{key:"12",value:"The Hippocratic License 2.1"},{key:"13",value:"The Hippocratic License 3.0"},{key:"14",value:"IBM Public License Version 1.0"}
        
      ],
    },
    {
      type: 'input',
      name: 'github',
      message: 'What is your github URL?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email address?',
    },
  ])
  
  .then((answers) => {
    console.log(answers)
    console.log(answers.license)
    if(answers.license==="MIT"){
      answers.code="[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
    } else if(answers.license === "Apache 2.0"){
      answers.code="[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
    }else if(answers.license === "Boost Software License 1.0"){
      answers.code="[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)"
    }else if(answers.license === "BSD 3-Clause License"){
      answers.code="[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"
    }else if(answers.license === "BSD 2-Clause License"){
      answers.code="[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)"
    }else if(answers.license === "GNU GPL v3"){
      answers.code="[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
    }else if(answers.license === "GNU GPL v2"){
      answers.code ="[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)"
    }else if(answers.license === "GNU AGPL v3"){
      answers.code="[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)"
    }else if(answers.license === "GNU LGPL v3"){
      answers.code="[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)"
    }else if(answers.license === "GNU FDL v1.3"){
      answers.code="[![License: FDL 1.3](https://img.shields.io/badge/License-FDL_v1.3-blue.svg)](https://www.gnu.org/licenses/fdl-1.3)"
    }else if(answers.license === "Eclipse Public License 1.0"){
      answers.code="[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)"
    }else if(answers.license === "The Hippocratic License 2.1"){
      answers.code="[![License: Hippocratic 2.1](https://img.shields.io/badge/License-Hippocratic_2.1-lightgrey.svg)](https://firstdonoharm.dev)"
    }else if(answers.license === "The Hippocratic License 3.0"){
      answers.code="[![License: Hippocratic 3.0](https://img.shields.io/badge/License-Hippocratic_3.0-lightgrey.svg)](https://firstdonoharm.dev)"
    }else if(answers.license === "IBM Public License Version 1.0"){
      answers.code="[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)"
    }










    const readMeFileContent = generateReadMe(answers);

    fs.writeFile('README.md', readMeFileContent, (err) =>
      err ? console.log(err) : console.log('Successfully created README file!')
    );
    
  });