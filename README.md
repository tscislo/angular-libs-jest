<!-- page_number: true -->

# Angular Libs testing with Jest
#### Warsaw, 16.10.2018
#### Tomasz Scislo


---

### Agenda
1. Jest with Angular 6 Libs
 	* Jest does not use a browser to launch the test - it is fast!
	* it is possible to launch Jest tests separately for each app/lib in Angular Cli
2. Jest in watch mode
	* by default Jest launches only tests that has been changed
3. Skipping tests
4. Snapshot testing
5. Spies
	* Jasmine Spies work fine with Jest. Jest understands Jasmine by default.
6. Gotchas with Jest

---

# Debug for specific lib/pattern

```
npm run -- test:debug --testMatch="**/YOUR_LIB_OR_APP/**/?(*.)+(spec|test).ts"
```

