<template>
    <v-container grid>
        <div v-for="itemrow in itemrows" :key="itemrow">
            <v-layout row>
                <div v-for="item in items" :key="item">
                    <v-flex xs4>
                        <v-card dark tile flat>
                            <v-card-text @click="play">{{ item.col + itemrow.row }}</v-card-text>
                        </v-card>
                    </v-flex>
                </div>
            </v-layout>
        </div>
    </v-container>
</template>

<script>
    export default {
        data () {
            return {
                items: [
                    {col: "1"},
                    {col: "2"},
                    {col: "3"},
                ],
                itemrows: [
                    {row: "A"},
                    {row: "B"},
                    {row: "C"},
                ],
            }
        },
        methods: {
            play : function () {
                return this.cross =  'X'
            }
        }
    }
</script>

<style scoped>
.container {
    max-width: 580px;
}

</style>