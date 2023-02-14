DOCKER_COMPOSE = docker-compose exec test-app

bash:
	${DOCKER_COMPOSE} /bin/bash

install:
	${DOCKER_COMPOSE} npm install

# run-local:
# 	${DOCKER_COMPOSE} npm run serve

run-local:
	${DOCKER_COMPOSE} sls offline start --host 0.0.0.0 --stage development

run-build-nomap:
	${DOCKER_COMPOSE} npm run build:noMaps

run-build-map:
	${DOCKER_COMPOSE} npm run build:maps

run-rebuild:
	docker-compose down && docker-compose up -d && make run-local

prettier:
	${DOCKER_COMPOSE} npx prettier --write .