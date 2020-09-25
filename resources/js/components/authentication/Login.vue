<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-lg-5">
                <div class="card shadow-lg border-0 rounded-lg mt-5">
                    <div class="card-header"><h3 class="text-center font-weight-light my-4">Login</h3></div>
                    <div class="card-body">
                        <form v-on:submit.prevent="login">
                            <div class="form-group">
                                <label class="small mb-1" for="email">Email</label>
                                <input class="form-control py-4" v-model="user.email" id="email" type="email" placeholder="Enter email address" />
                                <div class="invalid-feedback" v-if="errors.email">{{errors.email[0]}}</div>
                            </div>
                            <div class="form-group">
                                <label class="small mb-1" for="password">Password</label>
                                <input class="form-control py-4" v-model="user.password" id="password" type="password" placeholder="Enter password" />
                                <div class="invalid-feedback" v-if="errors.password">{{errors.password[0]}}</div>
                            </div>
                            <div class="form-group">
                                <div class="custom-control custom-checkbox">
                                    <input class="custom-control-input" v-model="user.remember_me" id="remember_me" type="checkbox" />
                                    <label class="custom-control-label" for="remember_me">Remember password</label>
                                </div>
                            </div>
                            <div class="form-group d-flex align-items-center justify-content-between mt-4 mb-0">
                                <router-link to="/forgotPassword" class="small">Forgot Password?</router-link>
                                <button type="submit" class="btn btn-primay">Login</button>
                            </div>
                        </form>
                    </div>
                    <div class="card-footer text-center">
                        <router-link to="/register" class="small">Need an account? Sign up!</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import * as auth from '../../services/auth_service';
export default {
    name: 'Login',
    data (){
        return {
            user: {
                email: '',
                password: '',
                remember_me: false
            },
            errors: {}
        }
    },
    methods: {
        login: async function(){
            try {
                const response = await auth.login(this.user);
                this.errors = {};
                this.flashMessage.success({
                    message: 'Authentication Successfully',
                    time: 5000
                });
                this.$router.push('/dashboard')
            } catch (error) {
                console.log(error);
                switch (error.response.status) {
                    case 422:
                        this.errors = error.response.data.errors;
                        break;
                    case 401:
                        this.flashMessage.error({
                            message: error.response.data.message,
                            time: 5000
                        });                    
                        break;
                    case 500:
                        this.flashMessage.error({
                            message: error.response.data.message,
                            time: 5000
                        });                    
                        break;
                    default:
                        this.flashMessage.error({
                            message: 'Some error occured, Please try again',
                            time: 5000
                        });
                        break;
                }
            }
        }
    }
}
</script>