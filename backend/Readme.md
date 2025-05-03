# Code Usage

1. Install all required dependencies 
```bash
    npm install
```

2. Navigate to [ConnectDb.js](./database/ConnectDb.js)

replace `<your-mongodb-connection-string>` with your connection String

```js
...
await mongoose.connect("<your-mongodb-connection-string>");
...

```

3. Run your backend server using `node index.js`