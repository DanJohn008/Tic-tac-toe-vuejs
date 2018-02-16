<template>
    <v-container grid>
        <v-layout row>
            <v-flex xs4>
                <v-card dark tile flat>
                    <v-card-text @click="play" id="A1">{{ cross }}</v-card-text>
                </v-card>
            </v-flex>
            <v-flex xs4>
                <v-card dark tile flat>
                    <v-card-text @click="play" id="A2">{{ cross }}</v-card-text>
                </v-card>
            </v-flex>
            <v-flex xs4>
                <v-card dark tile flat>
                    <v-card-text id="A3">A3</v-card-text>
                </v-card>
            </v-flex>
        </v-layout>
        <v-layout row>
            <v-flex xs4>
                <v-card dark tile flat>
                    <v-card-text id="B1">B1</v-card-text>
                </v-card>
            </v-flex>
            <v-flex xs4>
                <v-card dark tile flat>
                    <v-card-text id="B2">B2</v-card-text>
                </v-card>
            </v-flex>
            <v-flex xs4>
                <v-card dark tile flat>
                    <v-card-text id="B3">B3</v-card-text>
                </v-card>
            </v-flex>
        </v-layout>
        <v-layout row>
            <v-flex xs4>
                <v-card dark tile flat>
                    <v-card-text id="C1">C1</v-card-text>
                </v-card>
            </v-flex>
            <v-flex xs4>
                <v-card dark tile flat>
                    <v-card-text id="C2">C2</v-card-text>
                </v-card>
            </v-flex>
            <v-flex xs4>
                <v-card dark tile flat>
                    <v-card-text id="C3">C3</v-card-text>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        data: function() {
            return {
                cross: '0'
            };
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