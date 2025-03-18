<script>
export default{
	data(){
		return{

		}
	},
	methods:{
		registerUser(){
			this.$router.push('/home')
		}
	}
}


</script>

<template>
  
   <!-- component -->
<div class="font-mono bg-red-50 p-1 h-screen ">
		<!-- Container -->
		<div class="container mx-auto">
			<div class="flex justify-center px-6 my-12">
				<!-- Row -->
				<div class="w-full xl:w-3/4 lg:w-11/12 flex">
				
					<!-- Col -->
					<div class="w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none">
						<h3 class="pt-4 text-2xl font-semibold text-center">Welcome!!</h3>
						<form class="px-8 pt-6 pb-8 mb-4 bg-white rounded" @submit.prevent="registerUser">
							<div class="mb-4">
								<label class="block mb-2 text-sm font-bold text-gray-700" for="username">
									UserID
								</label>
								<input
									class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
									id="userid"
									type="text"
									placeholder="User ID "/>
							</div>
							<div class="mb-4">
								<label class="block mb-2 text-sm font-bold text-gray-700" for="password">
									Password
								</label>
								<input
									class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
									id="password"
									type="password"
									placeholder="******************"
								/>
								<!-- <p class="text-xs italic text-red-500">Please choose a password.</p> -->
							</div>
							<div class="mb-4">
								<input class="mr-2 leading-tight text-brownish-red" type="checkbox" id="checkbox_id" />
								<label class="text-sm text-brownish-red-dark font-medium" for="checkbox_id">
									Remember Me
								</label>
							</div>
							<div class="mb-6 text-center">
								<button
									class="w-full px-4 py-2 font-bold text-white bg-brownish-red rounded-full hover:bg-brownish-red-dark focus:outline-none focus:shadow-outline"
									type="submit">
									Sign Up
								</button>
							</div>
							<hr class="mb-6 border-t" />
							<div class="text-center">
								<p class="inline-block text-sm  align-baseline ">
									<span class="cursor-none text-gray-600">Already have an account?</span>
                   <a class="cursor-pointer p-1  font-semibold text-brownish-red-dark hover:text-brownish-red" href="#">
                    <router-link to="/sign-up">Login</router-link>
                  </a>
                </p>
							</div>
						</form>
					</div>
						<!-- Col -->
					<div class="w-full h-auto bg-gray-400 hidden lg:block lg:w-1/2 bg-cover rounded-l-lg" style="background-image: url('https://cdn.shopify.com/s/files/1/0555/0073/4619/files/Kera02-El-Cielo_2000x.jpg?v=1650695707')"></div>
				</div>
			</div>
		</div>
	</div>
</template>
<style scoped>

</style>