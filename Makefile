# Установка npm пакета
install:
		npm ci

# Запуск программы brain-games
brain-games:
		node bin/brain-games.js

# Запуск программы brain-games
brain-even:
		node bin/brain-even.js

# Публикация npm пакета
publish:
		npm publish --dry-run

# Запуск eslint
lint:
		npx eslint .