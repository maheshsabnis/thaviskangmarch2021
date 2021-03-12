// the jest configuration file
// load the jest-preset-angular for testing Angular app
// by reading all .spec.ts fies
// use the test.ts for creating in-memory DOM
// use the 'compiletOptions' from tsconfig.json
// to transpile the TYpeScript Spurce files of test into JavaScript files
// create a code-coverage to generate a repoprt showing the
// percentage of code covered during testing this can be sued for code
// quality test

// read all module for the Angular app and use them during executing tests
const {pathsToModuleNameMapper} = require('ts-jest/utils');

const {compilerOptions} = require('./tsconfig');

// define the configuration

module.exports = {
   preset: 'jest-preset-angular',
   roots: ['<rootDir>/src/'],
   testMatch: ['**/+(*.)+(spec).+(ts)'],
   setupFilesAfterEnv: ['<rootDir>/src/test.ts'],
   collectCoverage:true,
   coverageReporters:['html'], // create html file to generate code coverage report
   coverageDictionary: 'coverage/my-ang-app',
   moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths || {},{
     prefix: '<rootDir>'
   })
};
