<script>
    export default {
        props:{
            width: {
                type: String,
                default: 'w-auto'
            },
            height: {
                type: String,
                default: 'h-auto'
            },
        },
        methods: {
            close() {
                this.$emit('close');
            }
        }
    }
</script>


<template>
<div @keydown.esc="close">

    <div id="modal-backdrop" class="bg-opacity-80 bg-black fixed inset-0 z-40">
    </div>
    <div id="modal" class="fixed inset-0 z-50 flex justify-center items-center">
        <div :class="[width, height]" class="flex flex-col rounded shadow-lg bg-white">

            <!-- Modal Header START -->
            <header id="modal-header" class="px-4 py-2 flex justify-between items-start border-gray-200 border-b-2">
                <slot name="header"> <h3 class="text-2xl font-semibold px-2">Modal header</h3></slot>
                <button type="button" class="text-gray-600 font-extrabold text-2xl mb-1 mr-4" @click="close"> &#215; </button>
            </header>
            <!-- Modal Header END -->
        
            <!-- Modal Body START -->
            <section id="modal-body" class="px-4 pt-6">
                <slot name="body"></slot>
            </section>
            <!-- Modal Body END -->
            
            <!-- Modal Footer START -->
            <footer id="modal-footer" class="px-4 py-2 border-t-2 border-white">
                <slot name="footer"></slot>
            </footer>
            <!-- Modal Footer END -->
        </div>
    </div>


</div>

</template>


<style scoped>

</style>