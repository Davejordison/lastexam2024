## Coding Challenge: Taylor Swift Albums and Hits

### Objectives

1. **Create a React Application**: Build a React app with two main pages using `react-router-dom`.
2. **Fetch Data**: Fetch data using `react-query` (or with simple fetch but react-query is preferred).
3. **Styling**: Style the application using TailwindCSS as preferred way.
4. **Interactive UI**: Implement a search functionality and expandable album cards.
5. **Data Presentation**: Display album details and their hits, ordered by the length of the track.

### Notes

- **React**: Ensure proper setup of a React application.
- **React Router**: Use `react-router-dom` for navigation.
- **TailwindCSS**: Apply TailwindCSS for styling the application.
- **React Query**: Manage data fetching and caching with `react-query`.

### Example API Responses

#### 1. Get All Albums

##### Request

```
GET /api/albums
```

##### Response

```json
{
  "albums": [
    {
      "id": "1",
      "name": "Fearless",
      "releaseYear": 2008,
      "popularity": 90
    },
    {
      "id": "2",
      "name": "Red",
      "releaseYear": 2012,
      "popularity": 85
    },
    {
      "id": "3",
      "name": "1989",
      "releaseYear": 2014,
      "popularity": 95
    },
    {
      "id": "4",
      "name": "Reputation",
      "releaseYear": 2017,
      "popularity": 88
    },
    {
      "id": "5",
      "name": "Lover",
      "releaseYear": 2019,
      "popularity": 92
    }
  ]
}
```

#### 2. Get Hits by Album ID

##### Request

```
GET /api/albums/:id/hits
```

##### Response

```json
{
  "hits": [
    {
      "id": "1",
      "title": "Love Story",
      "length": 3.55,
      "popularityIndex": 95
    },
    {
      "id": "2",
      "title": "You Belong with Me",
      "length": 3.52,
      "popularityIndex": 90
    }
  ]
}
```

### Steps

#### 1. Setup Project

1. **Install Dependencies**:

   - Install the necessary dependencies.

2. **Setup TailwindCSS**:
   - Install and configure TailwindCSS in your project.
   - Add TailwindCSS directives to your main CSS file.

#### 2. Setup React Router

1. **Create Routes**:
   - Set up routes for the Home page and the Hits page.

#### 3. Create Home Page

1. **Search Functionality**:

   - Add a search bar to filter albums by name.

2. **Album Grid**:

   - Display albums in a grid.
   - Each album card should have an open and closed state.

3. **Expand Album Details**:
   - Toggle details on album card click.
   - Show album details and a link to the Hits page when expanded.

#### 4. Create Hits Page

1. **Display Hits**:
   - Fetch and display the hits for the selected album.
   - Order hits by the length of the track.

![spec](/react/spec.png)
