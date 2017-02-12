# Peso Digital
El source de http://pesodigital.info

Es software libre y se presta atención a todos los pull requests.

Es un sitio estático escrito en ruby, haml y sass, usando https://middlemanapp.com/

Para clonarlo y compilar localmente hace falta tener ruby instalado

```sh
$ gem install bundler # Por si todavía no tenés bundler
$ git clone https://github.com/bitex-la/pesodigital_website.git
$ cd pesodigital_website
$ bundle install
$ middleman server
```

El servidor de desarrollo corre en http://localhost:4567/
