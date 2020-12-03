
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]



<p align="center">


  <h3 align="center">TStream</h3>

<p align="center">
<img align="center" width="300px" height="auto" src="./assets/tstream_logo1.png">
</p>
  <p align="center">
    Self-hosted Telegram Bot that tracks tweets with specific keywords then sends them to Telegram Chat
    <br />
    <a href="https://github.com/feux07/tstream/issues">Report Bug</a>
    ·
    <a href="https://github.com/feux07/tstream/issues">Request Feature</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
## Table of Contents

- [Table of Contents](#table-of-contents)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Contact](#contact)


<!-- GETTING STARTED -->
## Getting Started

### Prerequisites


* NodeJS version >= 12.18.2
* [Twitter API Keys and Tokens](https://developer.twitter.com/en/apps)
* [Telegram Bot with API Token](https://core.telegram.org/bots#3-how-do-i-create-a-bot) 


### Installation
 
1. Clone the repo
```sh
git clone https://github.com/feux07/tstream.git
```
2. Go to project directory
```sh
cd tstream
```

3. Install NPM packages
```sh
npm install
```

<!-- USAGE EXAMPLES -->
## Usage


1. Create .env file with following environment variables 
```sh
TWITTER_API_KEY = YOUR_TWITTER_API_KEY
TWITTER_API_KEY_SECRET = YOUR_TWITTER_API_KEY_SECRET
TWITTER_ACCESS_TOKEN = YOUR_TWITTER_ACCESS_TOKEN
TWITTER_ACCESS_TOKEN_SECRET = YOUR_TWITTER_ACCESS_TOKEN_SECRET
TELEGRAM_BOT_TOKEN = YOUR_TELEGRAM_BOT_TOKEN
TELEGRAM_TARGET_CHAT_ID = YOUR_TELEGRAM_TARGET_CHAT_ID
TWITTER_SEARCH_TEXTS = YOUR_TWITTER_SEARCH_TEXTS
```
2. Start application with following command

```sh
node start.js
```


## Credits

* Illustrator => [Hafsa Uygun](https://www.instagram.com/hafsapinar)

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.



<!-- CONTACT -->
## Contact

[Website](https://fethierdincuzun.com)




<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/feux07/tstream.svg?style=flat-square
[contributors-url]: https://github.com/feux07/tstream/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/feux07/tstream.svg?style=flat-square
[forks-url]: https://github.com/feux07/tstream/network/members
[stars-shield]: https://img.shields.io/github/stars/feux07/tstream.svg?style=flat-square
[stars-url]: https://github.com/feux07/tstream/stargazers
[issues-shield]: https://img.shields.io/github/issues/feux07/tstream.svg?style=flat-square
[issues-url]: https://github.com/feux07/tstream/issues
[license-shield]: https://img.shields.io/github/license/feux07/tstream.svg?style=flat-square
[license-url]: https://github.com/feux07/tstream/blob/master/LICENSE
