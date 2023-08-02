# challenges!

challenges proposed by the MDC Partners group.

## Functionalities

- Simple Calculator
- Prime Numbers
- Factorial
- Palindrome
- Table
- Vowel Counter
- Grade Average
- Interest Calculation

## Technologies Used

- docker
- TypeScript with NextJS

## Prerequisites

Before starting the project installation, make sure you have the following requirements installed on your machine:

- Docker: [How to install Docker](https://www.docker.com/get-started/)
- Docker Compose

Make sure all required dependencies are installed before proceeding with the following steps.

## Step 1: Clone the repository

```bash
  git clone https://github.com/rodrigoSilva23/mono-challenge-intention.git
```

## Step 2: Installation

```bash
    cd challenge_mdc_partners
    docker-compose up
```

## possible errors

There is a chance that a permission error will occur when running the docker-compose up command. To fix this, you can give the product and intent scripts execute permissions.

To grant execute permissions to the entrypoint.sh file, you can run the following command in the terminal:

```bash
   chmod +x .docker/entrypoint.sh

```

this will give permission to execute the script

## Author

- [@rodrigosilvaDev23](https://github.com/rodrigoSilva23)

## License

This project is licensed under the MIT License. See the file [LICENSE](https://opensource.org/licenses/MIT) for more information.
