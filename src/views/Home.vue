<script>
import Nav from "../components/nav.vue";
import Jumbotron from "../components/jumbotron.vue";
import Modal from "../components/modal.vue";
import StarRating from 'vue-star-rating';
import {mockedVisitedRestaurants1, mockedVisitedRestaurants2, mockedVisitedRestaurants3, mockedVisitedRestaurants4, defaultMockedRestaurants, randomRestaurants, randomRestaurants2, randomRestaurants3, randomRestaurants4} from './../mockedData/mocked';
export default{
    components: {
		Nav,
        Jumbotron,
        Modal,
        StarRating
	},
    data() {
        return {
           x:10,
           modal:false,
           rating:0,
           successModal:false,
           mockedData: mockedVisitedRestaurants1,
           mockedRestaurants: randomRestaurants
        }
    },
    computed: {
    computedMockedData() {
      switch (this.$route.query.user) {
        case 'Karan':
          return mockedVisitedRestaurants1;
        case 'Daksh':
          return mockedVisitedRestaurants2;
        case 'Suraj':
          return mockedVisitedRestaurants3;
        case 'Vivek':
          return mockedVisitedRestaurants4;
        default:
          return defaultMockedRestaurants;
      }
    },
    computedRandomData() {
      switch (this.$route.query.user) {
        case 'Karan':
          return randomRestaurants;
        case 'Daksh':
          return randomRestaurants2;
        case 'Suraj':
          return randomRestaurants3;
        case 'Vivek':
          return randomRestaurants4;
        default:
          return randomRestaurants;
      }
    }
  },
  watch: {
    someCondition() {
      this.mockedData = this.computedMockedData;
      this.mockedRestaurants = this.computedRandomData;
    }
  },
  created() {
    this.mockedData = this.computedMockedData;
    this.mockedRestaurants = this.computedRandomData;
  },
    methods: {
        scroll(e) {
            if (e.deltaY > 0) this.$refs.container.scrollLeft += 80;
            else this.$refs.container.scrollLeft -= 80;
        },
        scrollLeft() {
            this.$refs.container.scrollLeft -= 100;
        },
        scrollRight() {
            this.$refs.container.scrollLeft += 100;
        },
        openModal(){
            this.modal=true;
        },
        closeModal(){
            this.modal=false;
            this.openSuccessModal();
        },
        openSuccessModal(){
            this.successModal=true;
        },
        closeSuccessModal(){
            this.successModal=false;
        }
    }

}

</script>
<template>
    <div class="bg-rose-50">
        <div class="py-3">
            <Nav :user="this.$route.query.user" />
        </div>
        <div class="hidden lg:block lg:px-8 lg:py-8 ">
            <Jumbotron/>
        </div>
        <div>
            <!-- component -->
            <section class="antialiased bg-gray-100 text-gray-600  px-4 py-4 font-mono h-screen" x-data="app">

                <!-- Revisited List -->
                <div>
                    <div class="flex justify-between">
                        <p class="text-left text-xl text-gray-800 py-2 px-2">Take a glance of the <span class="font-semibold text-brownish-red">restaurants already visited</span> by you !!!</p>
                        <p class="text-left text-sm text-gray-800 py-2 px-2 flex justify-end">Total results showing - <span class="font-semibold text-brownish-red ml-0.5"> {{mockedData.length}}</span></p>
                    </div>
                    <div class="flex border border-brownish-red-light border-opacity-40  bg-brownish-light bg-opacity-20 shadow-md ">
                        <div  class="h-full w-1/12 flex justify-center items-center py-14">
                            <button v-show="x>=4" class="cursor-pointer" @click="scrollLeft($event)">
                                <img class="h-8 w-8 fill-current bg-brownish-red-light rounded-full" src="https://img.icons8.com/external-inkubators-detailed-outline-inkubators/50/000000/external-left-chevron-arrows-inkubators-detailed-outline-inkubators.png"/>            
                            </button>
                        </div>

                        <div class="py-3 font-mono flex w-10/12 overflow-x-scroll no-scrollbar hide-scroll-bar scroll-smooth" ref="container">
                            <div v-for ="data in mockedData" :key="data" class="max-w-md py-3 px-4 mx-2 bg-white shadow-lg rounded-lg my-5 w-60 shrink-0" @wheel="scroll($event)">
                                <div class="flex justify-center md:justify-start -mt-7">
                                    <div class="w-10 h-10 object-cover rounded-full border-2 border-brownish-red-dark bg-brownish-red text-white text-center"><span class="">{{data.id }}</span></div>
                                </div>
                                <div class="py-2 flex justify-between">
                                    <h2 class="text-gray-800 text-base font-semibold">{{ data.name }}</h2>
                                    <p class="text-gray-600 text-xs py-0.5">Overall Rating</p>
                                </div>
                                <div class="flex justify-between">
                                    <p class="text-sm font-semibold text-brownish-red-darker mt-1">{{data.tag}}</p>
                                    <div class="flex mt-1">
                                        <div class="py-0.5">
                                            <img class="h-4 w-4 " src="https://img.icons8.com/color/48/null/filled-star--v1.png"/>
                                        </div>
                                    
                                        <p class="text-sm font-bold text-green-400 px-0.5 font ">{{ data.rating }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div  class="h-full w-1/12 flex justify-center items-center py-14">
                            <button v-show="x>=4" class="cursor-pointer"  @click="scrollRight($event)">
                                <img class="h-8 w-8 fill-current bg-brownish-red-light rounded-full" src="https://img.icons8.com/ios/50/null/circled-chevron-right--v1.png"/>
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Recommendation List -->
                <div class="py-10">
                    <article class="mb-4">

                        <p class="text-left text-xl text-brownish-red font-semibold py-2 px-2">Are you craving an unforgettable dining experience?</p>
                        <div class="flex justify-between">
                            <div>
                                <p class="text-base text-gray-500 px-2 font-normal pb-3">These options are definitely worth a try!</p>
                            </div>
                        </div>
                    </article>

                    <div class="flex border border-brownish-red-light border-opacity-40 bg-brownish-light bg-opacity-20 shadow-md ">
                        <div  class="h-full w-1/12 flex justify-center items-center py-14">   
                        </div>

                        <div class="py-3 font-mono flex w-10/12">
                            <div v-for ="restaurant in mockedRestaurants" :key="restaurant" class="max-w-md py-3 px-4 mx-2 bg-white shadow-lg rounded-lg my-5 w-60 shrink-0">
                                <div class="flex justify-center md:justify-start -mt-7">
                                    <div class="w-10 h-10 object-cover rounded-full border-2 border-brownish-red-dark bg-brownish-red text-white text-center"><span class="">{{restaurant.id}}</span></div>
                                </div>
                                <div class="py-2 flex justify-between">
                                    <h2 class="text-gray-800 text-base font-semibold pr-8">{{restaurant.name}}</h2>
                                    <p class="text-sm font-semibold text-brownish-red-darker mt-1 ">{{restaurant.tag}}</p>
                                </div>
                                <div class="flex justify-end py-2">
                                    <button class="border hover:shadow-sm hover:border-2 shadow border-green-400 px-3 py-0.5 rounded-full text-xs font-semibold text-green-400 "  @click="openModal">Rate</button>
                                </div>
                            </div>
                        </div>
                        <div  class="h-full w-1/6 flex justify-center items-center py-14">
                        </div>
                    </div>
                </div>
                <!-- Modal -->
                <Modal :width="'w-1/3'" v-if="this.modal" @close="closeModal">
                    <template v-slot:header>
                        <h3 class="">Review Restaurant</h3>
                    </template>
                    <template v-slot:body>
                        <div class="py-2 pb-4">
                            <!-- flex justify-center -->

                            <tr class="flex items-center justify-center">
                                <td class="text-xl font-mono px-2 mt-1 text-left">Food Rating - </td>
                                <td>
                                    <star-rating v-model:rating="this.rating" v-bind:increment="1"
                                        v-bind:max-rating="5"
                                        inactive-color="#A9A9A9"
                                        active-color="#f9ac1b"
                                        v-bind:star-size="20"
                                        v-bind:show-rating=false>
                                    </star-rating>
                                </td>
                            </tr>

                            <tr class="flex items-center justify-center">
                                <td class="text-xl font-mono text-left px-2 mt-1"> Service Rating - </td>
                                <td>
                                    <star-rating  v-bind:increment="1"
                                        v-bind:max-rating="5"
                                        inactive-color="#A9A9A9"
                                        active-color="#f9ac1b"
                                        v-bind:star-size="20"
                                        v-bind:show-rating=false
                                        clearable=true>
                                    </star-rating>

                                </td>
                            </tr>

                        </div>
                    </template>
                    <template  v-slot:footer>
                        <div class="flex justify-center py-6">
                            <button class=" border-2 rounded px-2 py-1 border-brownish-red-dark bg-white">
                                <span class="text-base font-semibold text-gray-600 hover:text-brownish-red-dark" @click="closeModal">Submit</span> 
                            </button>
                        </div>
                    </template>
                </Modal>
                <Modal :width="'w-1/3'" v-if="this.successModal" @close="closeSuccessModal">
                    <template v-slot:header>
                        <h3 class="">Success</h3>
                    </template>
                    <template v-slot:body>
                        <h4>Review submitted successfully</h4>
                    </template>
                    <template  v-slot:footer>
                        <div class="flex justify-center py-6">
                            <button class=" border-2 rounded px-2 py-1 border-brownish-red-dark bg-white">
                                <span class="text-base font-semibold text-gray-600 hover:text-brownish-red-dark" @click="closeSuccessModal">Close</span> 
                            </button>
                        </div>
                    </template>
                </Modal>
            </section>
        </div>
    </div>
</template>

<style scoped>
/* Hide scrollbar for Chrome, Safari and Opera */
.no-scrollbar::-webkit-scrollbar {
    display: none;
}
/* Hide scrollbar for IE, Edge and Firefox */
.no-scrollbar {
    -ms-overflow-style: none;
    /* IE and Edge */
    scrollbar-width: none;
    /* Firefox */
}

</style>
