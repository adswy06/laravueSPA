<template>
    <div>
        <Header/>
        <div id="layoutSidenav">
            <Sidebar/>
            <div id="layoutSidenav_content">
                <router-view></router-view>
                <Footer/>
            </div>
        </div>
    </div>
</template>

<script>
import Header from '../layout/Header.vue';
import Sidebar from '../layout/Sidebar.vue';
import Footer from '../layout/Footer';

export default {
    components: {
        Header,
        Sidebar,
        Footer,
    }
}
</script>