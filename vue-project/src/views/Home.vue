<template>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    
    <div class="flex items-start content-start gap-14 flex-wrap  justify-center pt-[100px]">
        <div class="w-[286px] h-[239px] p-2.5 bg-neutral-900 rounded-[10px] border border-neutral-400 flex-col justify-start items-start gap-5 inline-flex">
            <div>
                <label for="fruit">Category:</label>
                <select v-model="selectedFruit" id="fruit">
                    <option value="" disabled selected>Category</option>
                    <option v-for="fruit in fruits" :key="fruit.value" :value="fruit.value">{{ fruit.label }}</option>
                </select>
            </div>
            <div class="range-slider">
                <div class="slider-values">
                    <span>{{ minValue }}€</span>
                    <span>{{ maxValue }}€</span>
                </div>
                <input
                type="range"
                v-model="startValue"
                :min="minValue"
                :max="maxValue"
                :step="stepValue"
                class="range-input"
                />
                <input
                type="range"
                v-model="endValue"
                :min="minValue"
                :max="maxValue"
                :step="stepValue"
                class="range-input"
                />
                <div class="slider-handles">
                    <span>{{ startValue }}</span>
                    <span>{{ endValue }}</span>
                </div>
            </div>
        </div>
        
        
        <div class="w-[286px] h-[239px] p-2.5 bg-neutral-900 rounded-[10px] border border-neutral-400 flex-col justify-start items-start gap-5 inline-flex">
            <div class="self-stretch h-[125px] bg-zinc-300 rounded-[10px]"></div>
            <div class="w-[266px] justify-start items-start gap-[66px] inline-flex">
                <div class="w-[155px] flex-col justify-start items-start gap-[5px] inline-flex">
                    <router-link class="self-stretch text-white text-xl font-semibold font-['Arial']" to="/products">Product name</router-link>
                    <div class="self-stretch text-zinc-400 text-base font-normal font-['Arial']">Category</div>
                    <article>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                    </article>
                </div>
                <div class="grow shrink basis-0 text-right text-emerald-500 text-xl font-normal font-['Arial']">99€</div>
            </div>
        </div>
        <div class="w-[286px] h-[239px] p-2.5 bg-neutral-900 rounded-[10px] border border-neutral-400 flex-col justify-start items-start gap-5 inline-flex">
            <div class="self-stretch h-[125px] bg-zinc-300 rounded-[10px]"></div>
            <div class="w-[266px] justify-start items-start gap-[66px] inline-flex">
                <div class="w-[155px] flex-col justify-start items-start gap-[5px] inline-flex">
                    <router-link class="self-stretch text-white text-xl font-semibold font-['Arial']" to="/products">Product name</router-link>
                    <div class="self-stretch text-zinc-400 text-base font-normal font-['Arial']">Category</div>
                    <article>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                    </article>
                </div>
                <div class="grow shrink basis-0 text-right text-emerald-500 text-xl font-normal font-['Arial']">99€</div>
            </div>
        </div>
        <div class="w-[286px] h-[239px] p-2.5 bg-neutral-900 rounded-[10px] border border-neutral-400 flex-col justify-start items-start gap-5 inline-flex">
            <div class="self-stretch h-[125px] bg-zinc-300 rounded-[10px]"></div>
            <div class="w-[266px] justify-start items-start gap-[66px] inline-flex">
                <div class="w-[155px] flex-col justify-start items-start gap-[5px] inline-flex">
                    <router-link class="self-stretch text-white text-xl font-semibold font-['Arial']" to="/products">Product name</router-link>
                    <div class="self-stretch text-zinc-400 text-base font-normal font-['Arial']">Category</div>
                    <article>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                    </article>
                </div>
                <div class="grow shrink basis-0 text-right text-emerald-500 text-xl font-normal font-['Arial']">99€</div>
            </div>
        </div>
        <div class="w-[286px] h-[239px] p-2.5 bg-neutral-900 rounded-[10px] border border-neutral-400 flex-col justify-start items-start gap-5 inline-flex">
            <div class="self-stretch h-[125px] bg-zinc-300 rounded-[10px]"></div>
            <div class="w-[266px] justify-start items-start gap-[66px] inline-flex">
                <div class="w-[155px] flex-col justify-start items-start gap-[5px] inline-flex">
                    <router-link class="self-stretch text-white text-xl font-semibold font-['Arial']" to="/products">Product name</router-link>
                    <div class="self-stretch text-zinc-400 text-base font-normal font-['Arial']">Category</div>
                    <article>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                    </article>
                </div>
                <div class="grow shrink basis-0 text-right text-emerald-500 text-xl font-normal font-['Arial']">99€</div>
            </div>
        </div>
        <div class="w-[286px] h-[239px] p-2.5 bg-neutral-900 rounded-[10px] border border-neutral-400 flex-col justify-start items-start gap-5 inline-flex">
            <div class="self-stretch h-[125px] bg-zinc-300 rounded-[10px]"></div>
            <div class="w-[266px] justify-start items-start gap-[66px] inline-flex">
                <div class="w-[155px] flex-col justify-start items-start gap-[5px] inline-flex">
                    <router-link class="self-stretch text-white text-xl font-semibold font-['Arial']" to="/products">Product name</router-link>
                    <div class="self-stretch text-zinc-400 text-base font-normal font-['Arial']">Category</div>
                    <article>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                    </article>
                </div>
                <div class="grow shrink basis-0 text-right text-emerald-500 text-xl font-normal font-['Arial']">99€</div>
            </div>
        </div>
        <div class="w-[286px] h-[239px] p-2.5 bg-neutral-900 rounded-[10px] border border-neutral-400 flex-col justify-start items-start gap-5 inline-flex">
            <div class="self-stretch h-[125px] bg-zinc-300 rounded-[10px]"></div>
            <div class="w-[266px] justify-start items-start gap-[66px] inline-flex">
                <div class="w-[155px] flex-col justify-start items-start gap-[5px] inline-flex">
                    <router-link class="self-stretch text-white text-xl font-semibold font-['Arial']" to="/products">Product name</router-link>
                    <div class="self-stretch text-zinc-400 text-base font-normal font-['Arial']">Category</div>
                    <article>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                    </article>
                </div>
                <div class="grow shrink basis-0 text-right text-emerald-500 text-xl font-normal font-['Arial']">99€</div>
            </div>
        </div>
        <div class="w-[286px] h-[239px] p-2.5 bg-neutral-900 rounded-[10px] border border-neutral-400 flex-col justify-start items-start gap-5 inline-flex">
            <div class="self-stretch h-[125px] bg-zinc-300 rounded-[10px]"></div>
            <div class="w-[266px] justify-start items-start gap-[66px] inline-flex">
                <div class="w-[155px] flex-col justify-start items-start gap-[5px] inline-flex">
                    <router-link class="self-stretch text-white text-xl font-semibold font-['Arial']" to="/products">Product name</router-link>
                    <div class="self-stretch text-zinc-400 text-base font-normal font-['Arial']">Category</div>
                    <article>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                    </article>
                </div>
                <div class="grow shrink basis-0 text-right text-emerald-500 text-xl font-normal font-['Arial']">99€</div>
            </div>
        </div>
    </div>
    
    
    
    
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<script>
export default {
    data() {
        return {
            selectedFruit: null, // Default selected value
            fruits: [
            { value: 'option 1', label: 'option 1' },
            { value: 'option 2', label: 'option 2' },
            { value: 'option 3', label: 'option 3' }
            // Add more fruits as needed
            ],
            startValue: 0,
            endValue: 1000,
            minValue: 0,
            maxValue: 1000,
            stepValue: 1,
        };
    },
}
</script>

<style>
body{
    display : flex; 
}

.checked {
    color: rgb(223, 76, 199);
}
</style>
<style scoped>
.range-slider {
    position: relative;
    width: 250px;
    margin: 20px auto;
}

.slider-values {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
}

.range-input {
    position: absolute;
    width: 100%;
    -webkit-appearance: none;
    background-color: transparent;
    margin: 0;
}

.range-input::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 20px;
    height: 20px;
    background-color: #0072F5;
    border-radius: 50%;
    border: 2px solid #2980b9;
    cursor: pointer;
}

.range-input::-webkit-slider-runnable-track {
    width: 100%;
    height: 3px;
    background-color: #ecf0f1;
}

.slider-handles {
    display: flex;
    justify-content: space-between;
    position: absolute;
    width: calc(100% - 20px); /* Subtract the width of the thumb */
    margin-top: -10px;
    pointer-events: none;
}

.slider-handles span {
    position: relative;
    width: 20px;
    text-align: center;
    color: #838383;
    font-size: 12px;
}
</style>