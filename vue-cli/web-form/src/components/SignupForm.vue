<template>
  <form @submit.prevent="handleSubmit">
    <label>Email: </label>
    <input type="email" v-model="email" required>

    <label>Password: </label>
    <input type="password" v-model="password" required>
    <div v-if="passwordError" class="error">{{ passwordError }}</div>

    <label>Role: </label>
    <select v-model="role">
        <option value="developer">Web Developer</option>
        <option value="designer">Web Designer</option>
    </select>

    <label>Skills: </label>
    <input type="text" v-model="tempSkill" @keyup="addSkill">
    <div v-for="skill in skills" class="pill">
        <span @click="deleteSkill(skill)">{{ skill }}</span>
    </div>

    <div class="terms">
        <input type="checkbox" v-model="terms">
        <label>Accept terms and conditions</label>
    </div>

    <div class="submit">
        <button>Create an account!</button>
    </div>
    
  </form>
  <p>Email: {{ email }}</p>
  <p>Password: {{ password }}</p>
  <p>Role: {{ role }}</p>
  <p>Terms accepted: {{ terms }}</p>
</template>

<script>
export default {
    data() {
        return {
            email: "",
            password: "",
            role: "designer",
            terms: false,
            tempSkill: "",
            skills: [],
            passwordError: "",
        }
    },
    methods: {
        addSkill(e) {
            if (e.key === "," && this.tempSkill) {
                this.tempSkill = this.tempSkill.replace(",", "");
                if (!this.skills.includes(this.tempSkill)) {
                    this.skills.push(this.tempSkill);
                }
                this.tempSkill = "";
            }
        },
        deleteSkill(skillToDelete) {
            this.skills = this.skills.filter((skill) => skillToDelete === skill ? false : true)
        },
        handleSubmit() {
            this.passwordError = this.password.length > 5 ? "" : "Password must be at least 6 letters long"

            if (!this.passwordError) {
                console.table(this.email, this.password, this.role, this.skills, this.terms)
            }
        }
    }
}
</script>

<style>
    form {
        max-width: 420px;
        margin: 30px auto;
        padding: 30px;
        background-color: #fff;
        text-align: start;
        border-radius: 8px;
    }

    label {
        display: inline-block;
        color: #aaa;
    }

    input, select {
        display: block;
        width: 100%;
        margin-top: 0.4em;
        margin-bottom: 0.75em;
        border: none;
        border-bottom: 1px solid #aaa;
        padding: 0.5em;
        color: #aaa;
        box-sizing: border-box;
        border-radius: 2px;
    }

    input[type="checkbox"] {
        display: inline-block;
        width: 16px;
        margin-right: 10px;
        position: relative;
        top: 2px;
    }

    .pill {
        display: inline-block;
        margin: 10px 10px 10px 0;
        background: #eee;
        padding: 0.6em 1.1em;
        border-radius: 20px;
        font-size: 0.85rem;
        letter-spacing: 1px;
        font-weight: bold;
        color: #777;
        cursor: pointer;
    }

    button {
        background: #386cdc;
        color: #eee;
        padding: 0.5em 0.75em;
        border: none;
        border-radius: 20px;
        cursor: pointer;
        font-weight: bold;
    }

    .submit {
        margin-top: 20px;
        text-align: center;
    }

    .error {
        color: #d52424;
        font-size: 0.9rem;
        font-weight: bold;
        margin-bottom: 1em;
    }
</style>