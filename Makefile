# Установка npm пакета
install:
		npm ci

# Запуск программы
brain-games:
		node bin/brain-games.js

# Публикация npm пакета
publish:
		npm publish --dry-run