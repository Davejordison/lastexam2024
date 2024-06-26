import { createServer, Model, hasMany, belongsTo } from "miragejs";

export function makeServer({ environment = "development" } = {}) {
  return createServer({
    environment,

    models: {
      album: Model.extend({
        hits: hasMany(),
      }),
      hit: Model.extend({
        album: belongsTo(),
      }),
    },

    seeds(server) {
      const fearless = server.create("album", {
        name: "Fearless",
        releaseYear: 2008,
        popularity: 90,
      });
      const red = server.create("album", {
        name: "Red",
        releaseYear: 2012,
        popularity: 85,
      });
      const nineteenEightyNine = server.create("album", {
        name: "1989",
        releaseYear: 2014,
        popularity: 95,
      });
      const reputation = server.create("album", {
        name: "Reputation",
        releaseYear: 2017,
        popularity: 88,
      });
      const lover = server.create("album", {
        name: "Lover",
        releaseYear: 2019,
        popularity: 92,
      });

      server.create("hit", {
        title: "Love Story",
        length: 3.55,
        popularityIndex: 95,
        album: fearless,
      });
      server.create("hit", {
        title: "You Belong with Me",
        length: 3.52,
        popularityIndex: 90,
        album: fearless,
      });
      server.create("hit", {
        title: "Shake It Off",
        length: 3.39,
        popularityIndex: 98,
        album: nineteenEightyNine,
      });
      server.create("hit", {
        title: "Blank Space",
        length: 3.51,
        popularityIndex: 97,
        album: nineteenEightyNine,
      });
      server.create("hit", {
        title: "Look What You Made Me Do",
        length: 3.31,
        popularityIndex: 92,
        album: reputation,
      });
      server.create("hit", {
        title: "Delicate",
        length: 3.52,
        popularityIndex: 89,
        album: reputation,
      });
      server.create("hit", {
        title: "Lover",
        length: 3.41,
        popularityIndex: 93,
        album: lover,
      });
      server.create("hit", {
        title: "The Man",
        length: 3.1,
        popularityIndex: 88,
        album: lover,
      });
      server.create("hit", {
        title: "All Too Well",
        length: 5.28,
        popularityIndex: 85,
        album: red,
      });
      server.create("hit", {
        title: "We Are Never Ever Getting Back Together",
        length: 3.13,
        popularityIndex: 87,
        album: red,
      });
    },

    routes() {
      this.namespace = "api";

      this.get("/albums", (schema) => {
        return schema.albums.all();
      });

      this.get("/albums/:id", (schema, request) => {
        let id = request.params.id;
        return schema.albums.find(id);
      });

      this.get("/hits", (schema) => {
        return schema.hits.all();
      });

      this.get("/hits/:id", (schema, request) => {
        let id = request.params.id;
        return schema.hits.find(id);
      });

      this.get("/albums/:id/hits", (schema, request) => {
        let albumId = request.params.id;
        let album = schema.albums.find(albumId);
        return album.hits;
      });
    },
  });
}
