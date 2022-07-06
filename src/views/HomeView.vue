<script>
import Layout from "../components/Layout.vue"
import NewsFilter from "../components/NewsFilter.vue"
import NewsList from "../components/NewsList.vue"
import axios from "axios"
const api = import.meta.env.VITE_NYT_API_KEY

export default {
  components: {
    Layout,
    NewsFilter,
    NewsList,
  },
  data() {
    return {
      section: "home",
      posts: [],
      loading: false,
      error: null,
    }
  },
  methods: {
    extractImage(post) {
      const defaultImg = {
        url: "https://images.pexels.com/photos/242492/pexels-photo-242492.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        caption: post.title,
      }
      if (!post.multimedia) {
        return defaultImg
      }
      let imgObj = post.multimedia.find( (media) => media.format === "threeByTwoSmallAt2X"
      )
      return imgObj ? imgObj : defaultImg
    },
    async fetchNews() {
      try {
        this.error = null
        this.loading = true
        const url = `https://api.nytimes.com/svc/topstories/v2/${this.section}.json?api-key=${api}`
        const response = await axios.get(url)
        const results = response.data.results
        this.posts = results.map(post => ({
          title: post.title,
          abstract: post.abstract,
          url: post.url,
          thumbnail: this.extractImage(post).url,
          caption: this.extractImage(post).caption,
          byline: post.byline,
          published_date: post.published_date,
        }))
      } catch (err) {
        if (err.response) {
          // client received an error response (5xx, 4xx)
          this.error = {
            title: "Server Response",
            message: err.message,
          }
        } else if (err.request) {
          // client never received a response, or request never left
          this.error = {
            title: "Unable to Reach Server",
            message: err.message,
          }
        } else {
          // There's probably an error in your code
          this.error = {
            title: "Application Error",
            message: err.message,
          }
        }
      }
      this.loading = false
    },
  },
  mounted() {
    this.fetchNews()
  },
}
</script>


 <template>
  <Layout>
    <h2 class="mb-10 text-4xl font-bold text-center capitalize font-poppins">
      Current Section : <span class="text-slate-700">{{ section }}</span>
    </h2>
  <NewsFilter v-model="section" :fetch="fetchNews" />
    <NewsList v-if="!loading && !error" :posts="posts" />
    <!-- Start of loading animation -->
    <div class="mt-40" v-if="loading">
      <p class="text-6xl font-bold text-center text-slate-500 animate-pulse">
        Loading...
      </p>
    </div>
  </Layout>
</template>



