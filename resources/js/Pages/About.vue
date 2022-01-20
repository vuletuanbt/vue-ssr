<template>
    <div>
        <h1>Inertiajs is {{ about_us }}</h1>
        <ul>
            <li v-for="item in users" :key="item.id">
                {{ item.name }}
            </li>
        </ul>
        <Link href="/">Go to Home</Link>
    </div>
</template>

<script>
import {Link} from "@inertiajs/inertia-vue3";

export default {
    components: {
        Link,
    },
    props: ["about_us", "users"],
    created() {
        console.log(this.about_us)
    }
};
</script>
