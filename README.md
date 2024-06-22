
### Weather App - README

---

## Weather App

This is a weather application built with React that provides current weather information for a specified location. The app fetches data from the OpenWeatherMap API and displays the weather condition, temperature, and city name.

### Live Demo

You can try out the live demo of the Weather App [here](https://weather-app-d1.vercel.app/).

### Features

- **Search Functionality:** Enter a city name to get current weather information.
- **Weather Information:** Displays weather condition, temperature, and city name.
- **Responsive Design:** The app is responsive and works well on different screen sizes.

### Technologies Used

- **React:** For building the user interface.
- **Axios:** For making API requests to the OpenWeatherMap API.
- **Tailwind CSS:** For styling the application.
- **OpenWeatherMap API:** To fetch weather data.

### Getting Started

To get a local copy up and running, follow these simple steps:

#### Prerequisites

- Node.js and npm installed on your machine.

#### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/your-username/weather-app.git
   ```
2. Navigate to the project directory
   ```sh
   cd weather-app
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Create a `.env` file in the root directory and add your OpenWeatherMap API key
   ```env
   REACT_APP_API_KEY=your_api_key_here
   ```
5. Start the development server
   ```sh
   npm run dev
   ```

### Usage

1. Enter a city name in the search input.
2. Press Enter or click the search button to fetch weather information.
3. The app will display the weather condition, temperature, and city name.

### Component Structure

- **App.jsx:** Main component that manages state and handles API requests.
- **Search.jsx:** Search input component for entering city names.
- **Button.jsx:** Button component for triggering the search.

