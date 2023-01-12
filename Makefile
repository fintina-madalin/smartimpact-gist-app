build:
	docker-compose build

up:build
	docker-compose up -d

shell:
	docker-compose exec app bash