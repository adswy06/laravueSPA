<template>
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="utf-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            <meta name="description" content="" />
            <meta name="author" content="" />
            <title>Dashboard - SB Admin</title>
        </head>
        <body class="sb-nav-fixed">
            <router-view></router-view>
            <FlashMessage postion="right top"></FlashMessage>
            <vue-confirm-dialog></vue-confirm-dialog>
        </body>
    </html>

</template>

<script>
    import * as auth from './services/auth_service';
    export default {
        name: 'App',
        beforeCreate: async function(){
            try {
                if(auth.isLoggedIn()){
                    const response = await auth.getProfile();
                    this.$store.dispatch('authenticate', response.data);
                }
            } catch (error) {
                console.log(error);
                auth.logout();
            }
        }
    }
</script>