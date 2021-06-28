all: lint test tsc

lint: 
	npm run lint

test: 
	npm run test -- -- -- --passWithNoTests
# test:
#	npm run test

tsc:
	npm run tsc

check:
	echo ${VAR}