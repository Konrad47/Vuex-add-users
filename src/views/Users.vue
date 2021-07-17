<template>
    <div class="users">
        <div 
        v-for="user in allUsers" :key="user.id" class="user">
        <h2>{{user.firstName}}</h2>
        <h2>{{user.lastName}}</h2>
        <h3>Age: {{user.age}}</h3>
        <i @click="deleteUser(user.id)" class="fas fa-trash-alt"></i>
        </div>
    </div>
</template>

<script>
    import { mapGetters,mapActions } from 'vuex';

    export default {
        name: "Users",
        methods: {
            ...mapActions(['fetchUsers', 'deleteUser']),
        },
        computed: mapGetters(['allUsers']),
        created() {
            this.fetchUsers();
        }
    };
</script>

<style scoped>
    .users {
        margin-top: 15px;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 1rem;
    }

    .user {
        border: 3px solid #333;
        background: steelblue;
        color: #333;
        padding: 1px;
        border-radius: 10px;
        text-align: center;
        position: relative;
    }

    i {
        position: absolute;
        bottom: 3px;
        right: 10px;
        cursor: pointer;
    }
</style>
