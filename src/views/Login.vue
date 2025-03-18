<script >
export default{
	data(){
		return{

		}
	},
	methods:{
		loginUser(){
			this.$router.push({path: '/home', query: {user: document.getElementById("userid").value}})
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
					<div
						class="w-full h-auto bg-gray-400 hidden lg:block lg:w-1/2 bg-cover rounded-l-lg"
						style="background-image: url('https://i0.wp.com/sincerelytori.com/wp-content/uploads/2022/09/Alexandra-Onosa-@bakingmydays-1.jpg?resize=960%2C1200&ssl=1')"
					></div>
					<!-- Col -->
					<div class="w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none">
						<h3 class="pt-4 text-2xl font-semibold text-center">Welcome Back!!</h3>
						<form class="px-8 pt-6 pb-8 mb-4 bg-white rounded"  @submit.prevent="loginUser">
							<div class="mb-4">
								<label class="block mb-2 text-sm font-bold text-gray-700" for="username">
									UserID
								</label>
								<input
									class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
									id="userid"
									type="text"
									placeholder="User ID "
									required
								/>
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
									required
								/>
								<!-- <p class="text-xs italic text-red-500">Please choose a password.</p> -->
							</div>
							<div class="mb-6 text-center">
								<button class="w-full px-4 py-2 font-bold text-white bg-brownish-red rounded-full hover:bg-brownish-red-dark focus:outline-none focus:shadow-outline"
									type="submit">
									Login
								</button>
							</div>
							<hr class="mb-6 border-t" />
							<div class="text-center">
								<p class="inline-block text-sm  align-baseline ">
									<span class="cursor-none text-gray-600"> Don't have an account yet?</span>
                   <a class="cursor-pointer p-1  font-semibold text-brownish-red-dark hover:text-brownish-red" href="#">
                    <router-link to="/sign-up">Sign Up</router-link>
                  </a>
                </p>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<style scoped>
</style>
