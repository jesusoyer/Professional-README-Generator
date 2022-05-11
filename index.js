const inquirer = require('inquirer');
const fs = require('fs');


const generateReadMe = ({projectName, description,installation,usage,credits,thirdParty,license,code,features,contribute,test,github,email,message}) =>
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
[Features](#features)
[Contribute](#contribute)
[Test](#test)
[Question](#question)

## Installation
${installation}

## Usage
${usage}

## Credits
${credits}
${thirdParty}

## License
${message}

## Features
${features}

## Contribute
${contribute}

## Test
${test}

## Question
If you have any questions feel free to email me or message me on GitHub.
${email}
${github}




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
      choices: [{key:"1" ,value:"The MIT License"},{key:"2",value:"Apache 2.0"},{key:"3",value:"Boost Software License 1.0"},{key:"4",value:"BSD 3-Clause License"},{key:"5",value:"BSD 2-Clause License"},{key:"6",value:"Eclipse Public License 1.0"},{key:"7",value:"GNU GPL v3"},{key:"8",value:"GNU GPL v2"},{key:"9",value:"GNU AGPL v3"},{key:"10",value:"GNU LGPL v3"},{key:"11",value:"GNU FDL v1.3"},{key:"12",value:"The Hippocratic License 2.1"},{key:"13",value:"The Hippocratic License 3.0"},{key:"14",value:"IBM Public License Version 1.0"},{key:"15",value:"ISC License (ISC)"},{key:"16",value:"Mozilla Public License 2.0"},{key:17,value:"Attribution License (BY)"},{key:18,value:"The Perl License"},{key:19,value:"The Artistic License 2.0"},{key:20,value:"SIL Open Font License 1.1"},{key:21,value:"The Unlicense"},{key:22,value:"The Do What the Fuck You Want to Public License"},{key:22,value:"Zlib"},{key:23,value:"none"}
        
      ],
    },
    {
      type: 'input',
      name: 'features',
      message: 'What features does your project have?',
    },
    {
      type: 'input',
      name: 'contribute',
      message: 'How does someone contribute to your page?',
    },
    {
      type: 'input',
      name: 'test',
      message: 'Write tests for your application if you have any. Then provide examples on how to run them here.',
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
    if(answers.license==="The MIT License"){
      answers.code="[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
    } else if(answers.license === "Apache 2.0"){
      answers.code="[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
      answers.message="This application is covered by The MIT License."

    }else if(answers.license === "Boost Software License 1.0"){
      answers.code="[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)"
      answers.message="This application is covered by Boost Software License 1.0."

    }else if(answers.license === "BSD 3-Clause License"){
      answers.code="[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"
      answers.message="This application is covered by BSD 3-Clause License."

    }else if(answers.license === "BSD 2-Clause License"){
      answers.code="[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)"
      answers.message="This application is covered by BSD 2-Clause License."

    }else if(answers.license === "GNU GPL v3"){
      answers.code="[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
      answers.message="This application is covered by GNU GPL v3."

    }else if(answers.license === "GNU GPL v2"){
      answers.code ="[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)"
      answers.message="This application is covered by GNU GPL v2."

    }else if(answers.license === "GNU AGPL v3"){
      answers.code="[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)"
      answers.message="This application is covered by GNU AGPL v3."

    }else if(answers.license === "GNU LGPL v3"){
      answers.code="[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)"
      answers.message="This application is covered by GNU LGPL v3."

    }else if(answers.license === "GNU FDL v1.3"){
      answers.code="[![License: FDL 1.3](https://img.shields.io/badge/License-FDL_v1.3-blue.svg)](https://www.gnu.org/licenses/fdl-1.3)"
      answers.message="This application is covered by GNU FDL v1.3."

    }else if(answers.license === "Eclipse Public License 1.0"){
      answers.code="[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)"
      answers.message="This application is covered by Eclipse Public License 1.0."

    }else if(answers.license === "The Hippocratic License 2.1"){
      answers.code="[![License: Hippocratic 2.1](https://img.shields.io/badge/License-Hippocratic_2.1-lightgrey.svg)](https://firstdonoharm.dev)"
      answers.message="This application is covered by The Hippocratic License 2.1."

    }else if(answers.license === "The Hippocratic License 3.0"){
      answers.code="[![License: Hippocratic 3.0](https://img.shields.io/badge/License-Hippocratic_3.0-lightgrey.svg)](https://firstdonoharm.dev)"
      answers.message="This application is covered by The Hippocratic License 3.0."

    }else if(answers.license === "IBM Public License Version 1.0"){
      answers.code="[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)"
      answers.message="This application is covered by IBM Public License Version 1.0."

    }else if(answers.license === "ISC License (ISC)"){
      answers.code="[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)"
      answers.message="This application is covered by ISC License (ISC)."

    }else if(answers.license === "Mozilla Public License 2.0"){
      answers.code="[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
      answers.message="This application is covered by Mozilla Public License 2.0."

    }else if(answers.license==="Attribution License (BY)"){
      answers.code="[![License: Open Data Commons Attribution](https://img.shields.io/badge/License-ODC_BY-brightgreen.svg)](https://opendatacommons.org/licenses/by/)"
      answers.message="This application is covered by Attribution License (BY)."

    }else if(answers.license ==="The Perl License"){
      answers.code="[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)"
      answers.message="This application is covered by The Perl License."

    }else if(answers.license === "The Artistic License 2.0"){
      answers.code="[![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic_2.0-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)"
      answers.message="This application is covered by The Artistic License 2.0."

    }else if(answers.license === "SIL Open Font License 1.1"){
      answers.code="[![License: Open Font-1.1](https://img.shields.io/badge/License-OFL_1.1-lightgreen.svg)](https://opensource.org/licenses/OFL-1.1)"
      answers.message="This application is covered by SIL Open Font License 1.1."

    }else if(answers.license ==="The Unlicense"){
      answers.code="[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)"
      answers.message="This application is covered by The Unlicense."

    }else if(answers.license === "The Do What the Fuck You Want to Public License"){
      answers.code="[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)"
      answers.message="This application is covered by The Do What the Fuck You Want to Public License."

    }else if(answers.license === "The zlib/libpng License"){
      answers.code="[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)"
      answers.message="This application is covered by The zlib/libpng License."

    }else if(answers.license === "none"){
      answers.code=" "
      answers.message="This application is covered by no licenses."
    }










    const readMeFileContent = generateReadMe(answers);

    fs.writeFile('README.md', readMeFileContent, (err) =>
      err ? console.log(err) : console.log('Successfully created README file!')
    );
    
  });