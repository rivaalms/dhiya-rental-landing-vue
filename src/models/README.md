# Models

Models are used to store data or functions that are frequently reused.  
In this app, there are two models: Company and Products.

## Company

The Company model are used to store company's information. In default, the defined values are name, address, phone number, and email.

```js
{
    name: 'foo',
    address: '400 Fake Avenue, Foo, Bar',
    phone: '(+xx) xxx xxxx xxx',
    email: 'foo@bar.com'
}
```

### Products

The Products model are used to store the company's product information (in this case, it's vehicles). In default, the defined values are product's name, slug (for developer usage), capacity, rent price on within city usage, rent price on outside city usage, product's image relative path, rent price by destination, and the relative path to the product's detail page.

```js
{
    name: 'Foo Bar',
    slug: 'foo-bar',
    capacity: 10,
    price_inside_city: 100,
    price_outside_city: 120,
    img: '/img/foo-bar.jpg',
    price_by_destination: [
        {
            destination: 'X City',
            days: 1,
            price: 110
         },
         {
            destination: 'Y City',
            days: 2,
            price: 140
        }
    ],
    href: '/foo-bar'
}
```

### Note

- You can alter the values of the model to match your requirements.
- Beware that the value types are guarded so you'll need to alter the type interface too.
- While adding new data entries, make sure to check duplicate data values, since it may break the app logic.