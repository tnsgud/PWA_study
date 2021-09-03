<template>
    <v-app>
        <v-navigation-drawer clipped v-model="drawer" app>
            <v-list>
                <v-list-item value="true" v-for="(item, i) in items" :key="i" :to="item.to">
                    <v-list-item-action>
                        <v-icon v-html="item.icon"></v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title v-text="item.title"></v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>

        <v-app-bar app clipped-left fixed color="primary" dark>
            <v-app-bar-nav-icon @click.stop="drawer =!drawer"></v-app-bar-nav-icon>
            <v-toolbar-title>푸시알림 구독</v-toolbar-title>
        </v-app-bar>

        <v-main>
            <div class="mt5"></div>
            <router-view/>
        </v-main>
    </v-app>
</template>

<script>

export default {
    name: 'App',

    data: () => ({
        drawer: false,
        items: [
            {
                icon:'notifications',
                title:'푸시알림 등록 및 해지',
                to:'/'
            },
            {
                icon:'sms',
                title:'푸시알림 메시지 보내기',
                to:'/pushNotify'
            },
        ]
    }),
};
</script>
