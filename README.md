This project is a nestjs project, which contain a major security issue

##### It has 2 routes:

### POST /login: receives username and password in json form.

Example:
```javascript
{
    "username" : "tamar1", 
    "password" : "12345"
}
```

### GET /images: receives an image file name and returns the image

Example:
```
GET /images?filePath=logo.png
```

