<template>
  <div class="env-display">
    <h1>Environment Variables</h1>
    <table>
      <thead>
        <tr>
          <th>Variable</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>VUE_APP_FOR_EVERYONES</td>
          <td>{{ forEveryones }}</td>
        </tr>
        <tr>
          <td>VUE_APP_API_URL</td>
          <td>{{ apiUrl }}</td>
        </tr>
        <tr>
          <td>VUE_APP_SUPER_SECRET_KEY</td>
          <td>{{ secretKey }}</td>
        </tr>
        <tr>
          <td>VUE_PROD_SECRET</td>
          <td>{{ prodSecret }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      forEveryones : process.env.VUE_APP_FOR_EVERYONES || "Not set",
      apiUrl: process.env.VUE_APP_API_URL || "Not set",
      secretKey: process.env.VUE_APP_SUPER_SECRET_KEY || "Not set",
      prodSecret: process.env.VUE_APP_PROD_SECRET || "Not set",
    };
  },
};
</script>

<style scoped>
.env-display {
  font-family: Arial, sans-serif;
  max-width: 600px;
  margin: 2rem auto;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  text-align: left;
  padding: 0.5rem;
  border: 1px solid #ddd;
}

th {
  background-color: #f2f2f2;
}

h1 {
  text-align: center;
  color: #333;
}
</style>
