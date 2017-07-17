{
  currentUser: {
    id: 1,
    username: "app-academy"
  },
  forms: {
    signUp: {errors: []},
    logIn: {errors: []}
  },
  product: {
    1: {
      title: "Sample State",
      body: "is useful to plan",
      image_url: "grroa://blah.com",
      price: 1
      tags: {
        1: {
          id: 1
          name: "Biking"
        }
      }
    }
  },
  messages: {
    1: {
      title: "Great Deal!",
      author_id: 1,
      product_id: 1,
      rating: 6,
      body: "is cool"
    }
  }
  tagFilters: [1, 7, 14] // Used to track selected Tags for filtering of products
}
