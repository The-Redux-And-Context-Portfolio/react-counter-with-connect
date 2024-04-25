![image](https://github.com/The-Redux-Portfolio/react-counter-with-connect/assets/19187230/a086db39-8b0e-4a39-a093-e2374de81f2b)
## About This App
A replica of the classic React JS Counter App Concept with a bit more style. Also includes sounds as well as unit test coverage with React Testing Library for practice/learning. Built with Create React App. This repo can be downloaded, install npm packages with ```npm install --legacy-peer-deps``` command and execute ```npm run test``` and ```npm run start```.

### React Testing Library - Unit Test Results/Coverage
```console
---------------------------------------|---------|----------|---------|---------|-------------------
File                                   | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
---------------------------------------|---------|----------|---------|---------|-------------------
All files                              |   90.58 |    82.14 |   94.73 |   90.47 |                   
 src                                   |   33.33 |      100 |     100 |   33.33 |                   
  App.tsx                              |     100 |      100 |     100 |     100 |                   
  index.tsx                            |       0 |      100 |     100 |       0 | 11-12             
 src/components/buttons                |     100 |       50 |     100 |     100 |                   
  index.tsx                            |     100 |       50 |     100 |     100 | 26-31             
 src/components/buttons/redux-connect  |     100 |      100 |     100 |     100 |                   
  map-dispatch-to-props.ts             |     100 |      100 |     100 |     100 |                   
  map-state-to-props.ts                |     100 |      100 |     100 |     100 |                   
 src/components/controls               |     100 |       50 |     100 |     100 |                   
  index.tsx                            |     100 |       50 |     100 |     100 | 30                
 src/components/controls/redux-connect |     100 |      100 |     100 |     100 |                   
  map-dispatch-to-props.ts             |     100 |      100 |     100 |     100 |                   
  map-state-to-props.ts                |     100 |      100 |     100 |     100 |                   
 src/components/counter                |     100 |      100 |     100 |     100 |                   
  index.tsx                            |     100 |      100 |     100 |     100 |                   
 src/components/counter/redux-connect  |     100 |      100 |     100 |     100 |                   
  map-state-to-props.ts                |     100 |      100 |     100 |     100 |                   
 src/components/hooks                  |   77.77 |    91.66 |   81.81 |   76.92 |                   
  use-number-name.ts                   |     100 |      100 |     100 |     100 |                   
  use-play-click.ts                    |      40 |      100 |      50 |      40 | 8-10              
  use-reset-click.ts                   |      40 |      100 |      50 |      40 | 8-10              
  use-sound-hook.ts                    |     100 |    91.66 |     100 |     100 | 26                
 src/redux-store                       |     100 |        0 |     100 |     100 |                   
  reducer.ts                           |     100 |      100 |     100 |     100 |                   
  store.ts                             |     100 |        0 |     100 |     100 | 14                
 src/redux-store/actions               |     100 |      100 |     100 |     100 |                   
  counter.ts                           |     100 |      100 |     100 |     100 |                   
  sound.ts                             |     100 |      100 |     100 |     100 |                   
 src/redux-store/features              |     100 |      100 |     100 |     100 |                   
  counterSlice.ts                      |     100 |      100 |     100 |     100 |                   
  soundSlice.ts                        |     100 |      100 |     100 |     100 |                   
 src/redux-store/types                 |       0 |        0 |       0 |       0 |                   
  action.ts                            |       0 |        0 |       0 |       0 |                   
  counter.ts                           |       0 |        0 |       0 |       0 |                   
  index.ts                             |       0 |        0 |       0 |       0 |                   
  sound.ts                             |       0 |        0 |       0 |       0 |                   
 src/test                              |     100 |      100 |     100 |     100 |                   
  render-with-provider.tsx             |     100 |      100 |     100 |     100 |                   
---------------------------------------|---------|----------|---------|---------|-------------------
Test Suites: 7 passed, 7 total
Tests:       21 passed, 21 total
Snapshots:   0 total
Time:        5.123 s
Ran all test suites.
```
