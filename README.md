## Installation

```bash
$ npm install
```


## Running
```bash
$ npm run start:dev
```

Then enter the url `http://localhost:3000/graphql` and try those queries:


```bash
mutation{
  createCat(input: {name:"Mike", age: 4, breed:"lie"}) {
    id
    name
    age
    breed
  }
}
```

```bash
{
  cats {
    name
    age
    breed
  }
}
```

```bash
mutation{
  createBook(input: {
    name:"winter",
    type: "horror",
    author:"Jake",
    publish_year: 2000
  }) {name type author publish_year}
}
```

```bash
{
  books {
    name
    type
    author
    publish_year
  }
}
```
