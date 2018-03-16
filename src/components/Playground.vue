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
                usermark: "O",
                gameMap: [],
                currentActiveCellId: "",
            }
        },
        methods: {
            play: function(event) {
                this.usermark = (this.usermark === "X") ? "O" : "X";
                event.target.textContent = this.usermark;
                this.currentActiveCellId = event.target.parentElement.id;
                this.getBlockGrid();
                this.matchWin();
            },
            getBlockGrid: function() {
                let gameMap = [];
                this.$refs.blockSectionCell.filter(function (value) {
                    gameMap[value.$el.id] = value.$el.innerText;
                });
                this.gameMap = gameMap;
            },
            matchWin: function() {
                /* eslint-disable no-console */
                let currentActiveCol = this.currentActiveCellId.charAt(0),
                    currentActiveRaw = this.currentActiveCellId.charAt(1);

                // vertical check
                this.itemrows.forEach( function(itemrow) {
                    console.log('Need to check - ' + currentActiveCol + itemrow.row);
                });
                // horizontal check
                this.items.forEach( function(item) {
                    console.log('Need to check - ' + item.col + currentActiveRaw);
                });
                
                console.log(this.gameMap);
                /* eslint-enable no-console */
            }
        }
    }
</script>

<style scoped>
.container {
    max-width: 580px;
}

</style>