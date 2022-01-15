<template>
    <div>
        <h1>Inertiajs is {{ about_us }}</h1>

        <Link href="/">Go to Home</Link>
    </div>
</template>

<script>
import {Link} from "@inertiajs/inertia-vue3";

export default {
    components: {
        Link,
    },
    props: ["about_us"],
    created() {
        console.log(this.about_us)
    }
};
</script>
