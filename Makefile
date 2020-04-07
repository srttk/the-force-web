build:
	npm run build
dev: npm run dev

deploy:
	now --prod
	echo 'May the Force be with you'

clean: 
	rm -rf ./.next