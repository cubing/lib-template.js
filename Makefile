NODE_BIN = ./node_modules/.bin

.PHONY: dist
dist:
	env PROD=true ${NODE_BIN}/webpack-cli

.PHONY: dev
dev:
	${NODE_BIN}/webpack-cli --watch

.PHONY: test
test:
	${NODE_BIN}/mocha -r ts-node/register test/*.ts

.PHONY: clean
clean:
	rm -rf ./dist
