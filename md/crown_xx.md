# 1

![](https://i.imgur.com/MmBAqvS.png)

**index.ejs**
```html
<body>
  <h1>
    <%= title %>
  </h1>
  <p>Welcome to
    <%= title %>
  </p>
  <h3>
    My name is
    <%= name %>
  </h3>
  <h3>
    My id is
    <%= id %>
  </h3>
</body>
```

**index.js**
```js
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express', name: 'Hsingtai Chung', id: `123456789` });
});
```

---

# 2

![](https://i.imgur.com/jQnoofq.jpg)

---
# 3

![](https://i.imgur.com/1yVef60.png)

---
