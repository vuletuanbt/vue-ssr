<template>
    <div>
        <h1>Inertiajs is {{ test }}</h1>
        <ul>
            <li v-for="{name} in allUsers">
                {{ name }}
            </li>
        </ul>
        <Link href="/about-us">Go to about us</Link>
    </div>

</template>

<script>
import {Link} from "@inertiajs/inertia-vue3";
import {mapState, mapActions} from "vuex"

export default {
    components: {
        Link,
    },
    computed: {
        ...mapState("users", ['allUsers']),
    },
    methods: {
        ...mapActions("users", ['setUser', 'setUsers'])
    },
    props: ["test", "users"],
    created() {
        this.setUsers(this.users)
    }
};
</script>
