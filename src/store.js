import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    movies: [
      {
        name: "One Flew Over the Cuckoo's Nest",
        director: "Milos Forman",
        year: 1975,
        actors: ['Jack Nicholson', 'Louise Fletcher', 'Will Sampson', 'Michael Berryman'],
        category: 'Drama',
        description: "A criminal pleads insanity after getting into trouble again and once in the mental institution rebels against the oppressive nurse and rallies up the scared patients.",
        image: 'https://m.media-amazon.com/images/M/MV5BZjA0OWVhOTAtYWQxNi00YzNhLWI4ZjYtNjFjZTEyYjJlNDVlL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SY1000_CR0,0,672,1000_AL_.jpg'
      },
      {
        name: "Nightcrawler",
        director: "Dan Gilroy",
        year: 2014,
        actors: ['Jake Gyllenhaal', 'Rene Russo', 'Bill Paxton'],
        category: 'Thriller',
        description: "When Louis Bloom, a con man desperate for work, muscles into the world of L.A. crime journalism, he blurs the line between observer and participant to become the star of his own story.",
        image: 'https://m.media-amazon.com/images/M/MV5BN2U1YzdhYWMtZWUzMi00OWI1LWFkM2ItNWVjM2YxMGQ2MmNhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg'
      },
      {
        name: "Resevoir Dogs",
        director: "Quentin Tarantino",
        year: 1992,
        actors: ['Harvey Keitel', 'Tim Roth', 'Michael Madsen', 'Chris Penn', 'Steve Buscemi'],
        category: 'Crime',
        description: 'A crime boss assembles a team of six experienced criminals to pull off a large jewellery heist.',
        image: 'https://m.media-amazon.com/images/M/MV5BZmExNmEwYWItYmQzOS00YjA5LTk2MjktZjEyZDE1Y2QxNjA1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg'
      },
      {
        name: "The Departed",
        director: "Martin Scorsese",
        year: 2006,
        actors: ['Leonardo DiCaprio', 'Matt Damon', 'Jack Nicholson'],
        category: 'Crime',
        description: 'An undercover cop and a mole in the police attempt to identify each other while infiltrating an Irish gang in South Boston.',
        image: 'https://m.media-amazon.com/images/M/MV5BMTI1MTY2OTIxNV5BMl5BanBnXkFtZTYwNjQ4NjY3._V1_.jpg'
      },
      {
        name: "Captain Phillips",
        director: "Paul Greengrass",
        year: 2013,
        actors: ['Tom Hanks', 'Barkhad Abdi', 'Barkhad Abdirahman'],
        category: 'Drama',
        description: 'The true story of Captain Richard Phillips and the 2009 hijacking by Somali pirates of the U.S.-flagged MV Maersk Alabama, the first American cargo ship to be hijacked in two hundred years.',
        image: 'https://m.media-amazon.com/images/M/MV5BODhiZWRhMjctNDUyMS00NmUwLTgwYmItMjJhOWNkZWQ3ZTQxXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SY1000_SX675_AL_.jpg'
      }
  ]},
  mutations: {

  },
  actions: {

  }
})
