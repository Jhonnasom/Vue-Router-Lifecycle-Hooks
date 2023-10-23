<template>
  <h1>
    Pokemon: <span>#{{ id }}</span>
  </h1>
  <div v-if="pokemon">
    <h2>{{ pokemon.name }}</h2>
    <img :src="pokemon.sprites.front_default" :alt="pokemon.name" />
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      // id:this.route.params.id
      pokemon: null,
    };
  },

  created() {
    // const { id } = this.$route.params;
    // console.log(id);
    // this.id = id;
    this.getPokemon();
  },
  methods: {
    async getPokemon() {
      try {
        const pokemon = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${this.id}`
        ).then((res) => res.json());
        this.pokemon = pokemon;
      } catch (error) {
        this.$router.push("/");
        console.log("No hay nada aqui");
      }
    },
  },
  watch: {
    id() {
      this.getPokemon();
    },
  },
};
</script>
