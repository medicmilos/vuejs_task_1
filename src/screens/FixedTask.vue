<template>
  <div>
    <div class="loader-wrapper" v-show="loading">
      <p>Loading...</p>
    </div>
    <div class="error-wrapper" v-show="showErrorMessage">
      <p>Something went wrong. Please try again later.</p>
    </div>
    <div class="list-wrapper" v-show="listItems.length">
      <h1 class="list-wrapper__title">List Items</h1>
      <ul class="list-wrapper__list">
        <list-item v-for="item in listItems" :key="item.id" :item-data="item" />
      </ul>
    </div>
  </div>
</template>

<script>
import ListItem from "../components/ListItem"

export default {
  components: {
    ListItem
  },
  data() {
    return {
      items: [],
      showErrorMessage: false,
      loading: true
    }
  },
  computed: {
    listItems() {
      return this.items.filter(item => item.active)
    }
  },
  beforeCreate() {
    this.$store
      .dispatch("getListItems")
      .then(response => {
        const { data } = response
        this.items = data
        this.loading = false
      })
      .catch(error => {
        console.log("error: ", error)
        this.showErrorMessage = true
      })
  },
  created() {},
  mounted() {}
}
</script>

<style lang="scss" scoped>
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
