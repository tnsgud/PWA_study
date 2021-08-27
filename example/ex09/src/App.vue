<template>
    <v-app>
        <v-card height="100%">
            <v-app-bar dark color="#434343">
                <v-app-bar-nav-icon @click="showDialog()"></v-app-bar-nav-icon>
                <v-toolbar-title>
                    My To Do List
                </v-toolbar-title>
            </v-app-bar>

            <v-main>
                <v-container>
                    <v-col>
                        <v-container>
                            <v-row>
                                <v-text-field
                                    label="input To Do"
                                    v-model="inputTodo"
                                ></v-text-field>
                                <v-btn fab color="primary" @click="addTodo()">
                                    <v-icon>add</v-icon>
                                </v-btn>
                            </v-row>
                        </v-container>

                        <v-list>
                            <v-card
                                v-for="item in items"
                                :key="item.key"
                                color="primary"
                                class="my-3"
                            >
                                <v-card-actions v-if="!item.isEdit">
                                    <v-checkbox
                                        v-model="item.isDone"
                                        @click="changeCheckbox(item)"
                                    ></v-checkbox>
                                    <v-card-title :class="{ done: item.isDone }">
                                        {{ item.title }}
                                    </v-card-title>
                                    <v-spacer></v-spacer>
                                    <v-btn icon @click="deleteTodo(item['.key'])">
                                        <v-icon>delete</v-icon>
                                    </v-btn>
                                    <v-btn icon @click="editTodo(item['.key'])">
                                        <v-icon>create</v-icon>
                                    </v-btn>
                                </v-card-actions>
                                <v-card-actions v-else>
                                    <v-text-field v-model="item.title"></v-text-field>
                                    <v-spacer></v-spacer>
                                    <v-btn icon @click="deleteTodo(item['.key'])">
                                        <v-icon>delete</v-icon>
                                    </v-btn>
                                    <v-btn icon @click="saveTodo(item)">
                                        <v-icon>save</v-icon>
                                    </v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-list>
                    </v-col>
                </v-container>
            </v-main>
        </v-card>
    </v-app>
</template>

<script>
import { oTodosinDB } from './datasources/firebase';

export default {
    name: 'App',
    data: () => ({
        inputTodo: '',
        items: [],
    }),
    firebase: {
        items: oTodosinDB,
    },
    methods: {
        showDialog() {
            console.log('open dialog');
        },
        changeCheckbox(item) {
            item.isDoen = !item.isDoen;
        },
        addTodo() {
            oTodosinDB.push({ title: this.inputTodo, isDone: false, isEdit: false });
            this.inputTodo = '';
        },
        deleteTodo(key) {
            oTodosinDB.child(key).remove();
        },
        editTodo(key) {
            oTodosinDB.child(key).update({ isEdit: true });
        },
        saveTodo(item) {
            const key = item['.key'];
            oTodosinDB.child(key).update({ title: item.title, isEdit: false });
        },
    },
};
</script>

<style>
.done {
    text-decoration: line-through;
}
</style>
