<template>
    <v-container grid>
        <div v-for="itemrow in itemrows" :key="itemrow.row">
                <v-layout row>
                <div v-for="item in items" :key="item.col">
                    <v-flex xs4>
                        <v-btn flat icon ref="blockSectionCell" :id="item.col+itemrow.row" @click="play($event)">
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
        data() {
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
            play: function(event) {
                this.usermark = (this.usermark === "X") ? "O" : "X";
                event.target.textContent = this.usermark;
                this.checkBlock(event.target.parentElement.id);
            },
            checkBlock: function(newClickedId) {
                this.$refs.blockSectionCell.filter(function (value) {
                    /* eslint-disable no-console */
                    console.log(value.$el.id + ' - ' + value.$el.innerText + ' - Clicked on -> ' + newClickedId);
                    /* eslint-enable no-console */
                });
            }
        }
    }
</script>

<style scoped>
.container {
    max-width: 580px;
}

</style>