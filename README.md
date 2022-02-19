#PREPARATION:

- node 14.17.5 (recomended)
- pm2 (run `npm install pm2 -g`)
- serve (run `npm install serve -g`)
- Apache or HTTP server

#EDIT SERVICE description:
1. open src/dto/services.json
2. edit service in description
3. to make service visible in website change "serviceAction" from false to true

#CONFIGURE
1. go to parent directory
2. run `cp deploy/www.ptintegrity.co.id.conf /etc/apache2/sites-available`
3. run `cp deploy/www.ptintegrity.co.id.conf /etc/apache2/sites-enabled`
4. run `cd /etc/apache2/sites-available`
5. run `certbot --apache -d  www.ptintegrity.co.id` follow the instruction, select permanent redirect
6. run `cd /etc/apache2/sites-enabled`
7. run `certbot --apache -d  www.ptintegrity.co.id` follow the instruction, select permanent redirect

#HOW TO DEPLOY
1. go to parent directory
2. run `npm install`
3. run `npm run build`
4. run `pm2 serve build port 3001 --name integrity-web`