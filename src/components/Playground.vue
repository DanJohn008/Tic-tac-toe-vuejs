<template>
    <v-container grid>
        <div v-for="itemrow in itemrows" :key="itemrow">
                <v-layout row>
                <div v-for="item in items" :key="item">
                    <v-flex xs4>
                        <v-btn flat icon :id="item.col+itemrow.row" @click="play($event)">
                            <v-icon>{{ block }}</v-icon>
                        </v-btn>
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
                block: "android",
                usermark : "O",
            }
        },
        methods: {
            play : function (event) {
                /* eslint-disable no-console */
                console.log(event);
                /* eslint-enable no-console */
                this.usermark = (this.usermark === "X") ? "O" : "X";
                event.target.textContent = this.usermark;

            }
        }
    }
</script>

<style scoped>
.container {
    max-width: 580px;
}

</style>