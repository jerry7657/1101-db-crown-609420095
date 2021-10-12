# W03-P1

![](https://i.imgur.com/5JcQwOI.jpg)

**views/index.ejs**

```html
<body>
  <h1><%= title %></h1>
  <p>Welcome to <%= title %></p>
  <h3>My name is <%= name %></h3>
  <h3>My id is <%= id %></h3>
</body>
```

**routes/index.js**

```js
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Express',
    name: 'Hsingtai Chung',
    id: `123456789`,
  });
});
```

---

# W03-P2

![](https://i.imgur.com/5IzIw8X.jpg)

---

# W03-P3

![](https://i.imgur.com/yml7r4I.jpg)

---

# W03-P4

![](https://i.imgur.com/n46G32Z.jpg)

---
