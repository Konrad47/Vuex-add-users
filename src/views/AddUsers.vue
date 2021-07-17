<template>
    <div>
        <h1>Create User</h1>
        <div class="create">
            <form @submit="onSubmit">
                <input 
                type="text"
                v-model="firstName"
                placeholder="Add First Name"
                >
                 <input
                type="text"
                v-model="lastName"
                placeholder="Add Last Name"
                >
                 <input 
                type="number"
                v-model.number="age"
                placeholder="Add Age"
                >
                <input
                type="submit"
                value="Submit"
                >
            </form>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    name: "AddUser",
    data() {
        return {
            firstName: '',
            lastName: '',
            age: null
        }
    },
    methods: {
        ...mapActions(['addUser']),
        onSubmit(e) {
            e.preventDefault();

            if(!this.firstName || !this.lastName || !this.age) {
                alert('Please fill all the fields')
                return
            }
            
            const object = {
                firstName: this.firstName,
                lastName: this.lastName,
                age: this.age
            };
            this.addUser(object);

            this.firstName = '',
            this.lastName = '',
            this.age = null
            
        }
    }
};
</script>

<style scoped>
    h1 {
        justify-content: center;
        text-align: center;
        margin-bottom: 20px;
    }
    form {
        display: grid;
        justify-content: center;
    }
    input {
        text-align: center;
        border: 3px steelblue solid;
        margin-bottom: 2px;
        border-radius: 5px;
    }
    input[type="submit"] {
        background: steelblue;
        color: white;
        cursor: pointer;
    }
</style>