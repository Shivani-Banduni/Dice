**Note:** This application is mobile responsive as well. We can get our results by pressing Enter on the keyboard.

This project is a ReactJS application that utilizes GitHub's public API to search for repositories and display their details.

### Features

- **Search Field:** Users can search for public repositories by typing in the search field. The app fetches data based on the entered query.
- **Repository Cards:** Each fetched repository data is displayed in a card format with the following details:
  - Avatar: Displays the avatar of the repository owner.
  - Repository Name: Shows the name of the repository.
  - Stars: Displays the number of stars the repository has received.
  - Description: Shows a brief description of the repository (if available).
  - Language: Displays the primary language used in the repository.
- **Sorting Options:** Users can sort the fetched repository data based on different criteria. Sorting options include:
  - Stars: Sorts repositories based on the number of stars.
  - Watchers Count Sorts repositories based on the count of watchers.
  - Score: Sorts repositories based on GitHub's scoring algorithm.
  - Name: Sorts repositories alphabetically by name.
  - Created At Sorts repositories based on their creation date.
  - Updated At Sorts repositories based on their last update date.

**Note:** These Sorts values are not visible in cards as only Avatar, Repository Name, Stars, Description, and Language were given in the instructions.

### Getting Started

To run the project locally:

1. Clone this repository.
2. Install dependencies using `npm install`.
3. Start the development server with `npm start`.
4. Open your browser and navigate to [http://localhost:3000](http://localhost:3000).

### Dependencies

This project uses various dependencies and libraries including:

- React
- Axios
- Material-UI

### Credits

This project was created by Shivani Banduni. Feel free to provide feedback!
