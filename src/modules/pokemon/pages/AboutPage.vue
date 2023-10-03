<template>
  <h1>About Page</h1>
  <hr />
  <h2>{{ name }}</h2>
  <button @click="onChangeName">Cambiar nombre</button>
</template>

<script>
export default {
  data() {
    return {
      name: "Jhonna",
    };
  },
  methods: {
    onChangeName() {
      this.name = "Priscila";
    },
  },

  beforeCreate() {
    console.log("beforeCreate");
  },
  created() {
    // Peticiones HTTP
    this.name = "Daniela";
    console.log("created");
  },
  beforeMount() {
    console.log("beforeMount");
  },
  mounted() {
    console.log("mounted");
  },
  beforeUpdate() {
    console.log("beforeUpdate");
  },
  updated() {
    console.log("updated");
  },
  activated() {
    console.log("activated");
  },
  deactivated() {
    console.log("deactivated");
  },
  beforeUnmount() {
    console.log("beforeUnmount");
  },
  unmounted() {
    // Eliminar listeners o hacer una limpieza
    console.log("unmounted");
  },
  errorCaptured() {
    console.log("errorCaptured");
  },
  renderTracked() {
    console.log("renderTracked");
  },
  renderTriggered() {
    console.log("renderTriggered");
  },
};
</script>
