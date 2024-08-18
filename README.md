<h1 align="center">Web System</h1>

First, install the modules or packages:

```bash
npm install
# or
npm i
```

Second, Create an Sample MySQL Data, In my case I use [Prisma](https://www.prisma.io/)

```
CREATE TABLE IF NOT EXISTS `users` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name-idx` (`name`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=3 ;

INSERT INTO `users` (`id`, `name`, `password`) VALUES
(1, 'name', 'cb825a05d743c50112becede14b2c132'),
(2, 'foo', '3858f62230ac3c915f300c664312c63f');
```

third, build the application using

```
npm run build
```

then, run the development server:

```bash
npm run dev
```

finally, Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
