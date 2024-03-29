# AI Image Generator

[![License](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Introduction

AI Image Generator is a full-stack web application that uses OpenAI's DALL-E model API to generate images from textual prompts. The app provides users with the ability to generate an image from their own description or use the "surprise me" button to generate a random image. Users can also search for images generated by other users and share their own images with the community.

## Technology Used

AI Image Generator was built using the following technologies:

- HTML, CSS, and JavaScript
- React
- Node.js and Express
- MongoDB
- Tailwind CSS

The images generated by the app are stored in Cloudinary and rendered using a serverless infrastructure.

## Features


- Dynamic hover effect that displays the prompt used to generate the image, the user's name, and a download button.

    ![Cat GIF](https://drive.google.com/uc?id=1VQULQEhHFYLQTuH1l_chILgIOcROQ5U9)

- Share functionality for users to share their generated images with the community.

    ![Cat GIF](https://drive.google.com/uc?id=19t7BpDJTqvqmDlgcnF-nS32dRbf4SH6H)
    
- Search functionality to find images generated by other users.

  ![Cat GIF](https://drive.google.com/uc?id=1z-3Ub3ewieqNa4RL07oDU3nhY-j_LGnG)
  
- Generate an image using a "surprise me" button or by providing your own description.

 ![Cat GIF](https://drive.google.com/uc?id=1sCub9gwSv9NrsJlgJhOWlA1TgO-yyARP)
 

## Usage

To use the app, follow these steps:

1. Clone the repository to your local machine.
2. Install the required dependencies by running `npm install` in both the `client` and `server` directories.
3. Set up a MongoDB database and update the database connection string in `server/.env`.
4. Create a Cloudinary account and update the credentials in `server/.env
5. Start the server by running `npm start` in the `server` directory.
6. Start the client by running `npm run dev` in the `client` directory.

## Potential Applications

AI Image Generator has the potential to revolutionize various industries by allowing for the quick and accurate creation of images. Here are some potential applications:

- Creating portraits from textual descriptions, which could be helpful in criminal investigations.
- Lowering the cost of labor required to create animations.
- Helping designers create complicated designs quickly.

## Acknowledgments

We would like to thank the following individuals and organizations for their contributions to this project:

- OpenAI for providing the DALL-E model API.
- Cloudinary for their image management and optimization platform.
- The developers of the libraries and tools used in this project.

## License

This project is licensed under the MIT License.

Feel free to try deployed app at https://ai-frontend.onrender.com/
