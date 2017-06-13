# Love Confidently
#### Built for the UN Women Hackathon
https://love-confidently.herokuapp.com

![Landing Page](http://i.imgur.com/YI1ajgW.png)

Finished in one night for the UN Women Hackathon, Love Confidently aims to help women in developing countries by educating them about contraception, making it easy to find and use contraceptives, tracking their condition and connecting them with medical professionals.

## The Project

The brief was to come up with an application that could provide social benefit, especially for women in developing countries. We felt that a lack of education and easy access to birth control was a problem that we could address in the short time that we had.

## Getting Started

### Prerequisites

This project is built on Node. Go to https://nodejs.org and follow the instructions to download and install Node.

### Installing

Fork, clone or download this repository to your desired directory. You have to install the required modules listed in the package.json file. This can be done automatically by entering the following code in your directory:

```
npm install
```

The project will also require a .env file that contains all the secret variables used in the project. Change the file type of the included .env.sample file to .env and replace the values with your own.

## Deployment

### Hosting

This project was deployed with Heroku, but you can choose your own server host. To use Heroku, go to https://www.heroku.com, create an account and follow the instructions to deploy your own project.

### Database

The project will also require a database. We used mLab, which hosts a MongoDB database (ORM) at https://mlab.com.

## Built With

- Node
- Express
- Embedded JavaScript (eJS)
- Socket.io
- Google Maps
- Twilio
- JavaScript
- HTML5
- CSS
- Bootstrap

## Development

### Contraception Education

![Filter](http://i.imgur.com/Elij0x5.png)

All women have different needs and respond differently to contraception. We set up a simple survey to help narrow down the most appropriate and relevant method for each woman, while also allowing them to browse and compare the different methods on their own.

### Searching

![Google Maps](http://i.imgur.com/CHJ5yRy.png)

We used a simple geolocation implementation to find all medical supply stores near you, which would ideally provide information about what stores carried which contraceptives and how much they cost.

### Medical Help

![Socket.io](http://i.imgur.com/opHQRxm.png)

We implemented socket.io to enable real time communication. The idea was that women in need could contact a medical professional to get immediate advice on their contraception or just to address any concerns they might have.

### Condition Tracking

![Twilio](http://i.imgur.com/Jt9IBn7.png)

We used Twilio SMS to implement a tracking feature where women opting in would receive a message every day at the same time.

![Message](http://i.imgur.com/B2nD434.png)

The response would be tracked and a follow-up message might be sent depending on the patient's history.

## Authors
- [Jonathan Louis Ng](https://github.com/noll-fyra)
- [Maria Wilson](https://github.com/hexhex23)
- Adam
- Luke
- Hana

## Acknowledgements
- [Kenneth Goh](https://github.com/darkartistry)
