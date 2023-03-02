# Установка npm пакета
install:
		npm ci

# Запуск программы brain-games
brain-games:
		node bin/brain-games.js

# Запуск программы brain-games
brain-even:
		node bin/brain-even.js

# Запуск программы brain-calc
brain-calc:
		node bin/brain-calc.js

# Запуск программы brain-gcd
brain-gcd:
		node bin/brain-gcd.js

# Запуск программы brain-progression
brain-progression:
		node bin/brain-progression.js

# Запуск программы brain-prime
brain-prime:
		node bin/brain-prime.js

# Публикация npm пакета
publish:
		npm publish --dry-run

# Запуск eslint
lint:
		npx eslint .