<template>
  <div class="loader-wrapper" v-show="loading">
    <p>Loading...</p>
  </div>
  <div class="error-wrapper" v-show="showErrorMessage">
    <p>Something went wrong. Please try again later.</p>
  </div>
  <div class="list-wrapper" v-show="listItem.length">
    <h1 class="list-wrapper__title">List Items</h1>
    <ul class="list-wrapper__list">
      <list-item
        v-for="item in listItems"
        v-if="item.active"
        :key="item.id"
        item-data="item"
      />
    </ul>
  </div>
</template>

<script>
export default {
  components: {
    ListItem
  },
  data() {
    listItems: [],
    showErrorMessage: false,
    loading: true
  },
  beforeCreate() {
    this.$store.dispatch("getListItems").then(function(response) {
      const { data } = response;
      this.listItems = data;
      this.loading = false;
    }).catch(function() {
      this.showErrorMessage = true;
    });
  }
}
</script>

<style>
.loader-wrapper {
  p {
    /* some css */
  }
}
.error-wrapper {
  p {
    /* some css */
  }
}
.list-wrapper {
  &__title {
    /* some css */
  }
  &__list {
    /* some css */
  }
}
</style>