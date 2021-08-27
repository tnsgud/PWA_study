<template>
    <v-app>
        <v-app-bar color="blue-grey">
            <v-app-bar-nav-icon></v-app-bar-nav-icon>
            <v-toolbar-title>사진 갤러리</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn icon>
                <v-icon>more_vert</v-icon>
            </v-btn>
        </v-app-bar>

        <v-main>
            <v-container>
                <v-row>
                    <v-col
                        cols="12"
                        sm="6"
                        md="4"
                        lg="3"
                        xl="2"
                        v-for="item in this.aPictures"
                        :key="item.key"
                    >
                        <v-card height="330px">
                            <v-img :src="item.url" height="200px"></v-img>
                            <v-card-title>
                                <h1 class="title grey--text text--darken-3 mb-3">
                                    {{ item.title }}
                                </h1>
                                <p class="body-2 grey--test ">{{ item.info }}</p>
                            </v-card-title>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </v-main>
        <v-footer>
            <div class="mx-auto">&copy; CODE-DESIGN.web.app</div>
        </v-footer>
    </v-app>
</template>

<script>
import oPictureData from '@/datasources/picture-data';

export default {
    name: 'App',
    data: () => ({
        aPictures: oPictureData.aPictures,
    }),
};
</script>
