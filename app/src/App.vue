<template>
    <v-app>
        <nav class="toolbar toolbar--fixed theme--dark indigo" id="main-toolbar" style="margin-top: 0px; padding-left: 0px; padding-right: 0px;">
            <div class="toolbar__content" style="height: 64px;">
                <div class="toolbar__title d-flex" style="position: relative;">Employees</div>
            </div>
        </nav>
        <div class="content" style="padding: 64px 0px 0px;">
            <div class="container">
                <div>
                    <transition name="fade">
                        <router-view></router-view>
                    </transition>
                </div>
            </div>
        </div>
    </v-app>
</template>

<style>
    .fade-enter-active, .fade-leave-active {
      transition: opacity .5s
    }
    .fade-enter, .fade-leave-active {
      opacity: 0
    }
</style>

<script>

    export default{
    }
</script>
