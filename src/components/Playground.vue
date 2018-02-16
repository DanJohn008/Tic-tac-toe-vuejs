<template>
    <v-container grid>
        <v-layout row>
            <v-flex xs4>
                <v-card dark tile flat>
                    <v-card-text>A1</v-card-text>
                </v-card>
            </v-flex>
            <v-flex xs4>
                <v-card dark tile flat>
                    <v-card-text>A2</v-card-text>
                </v-card>
            </v-flex>
            <v-flex xs4>
                <v-card dark tile flat>
                    <v-card-text>A3</v-card-text>
                </v-card>
            </v-flex>
        </v-layout>
        <v-layout row>
            <v-flex xs4>
                <v-card dark tile flat>
                    <v-card-text>B1</v-card-text>
                </v-card>
            </v-flex>
            <v-flex xs4>
                <v-card dark tile flat>
                    <v-card-text>B2</v-card-text>
                </v-card>
            </v-flex>
            <v-flex xs4>
                <v-card dark tile flat>
                    <v-card-text>B3</v-card-text>
                </v-card>
            </v-flex>
        </v-layout>
        <v-layout row>
            <v-flex xs4>
                <v-card dark tile flat>
                    <v-card-text>C1</v-card-text>
                </v-card>
            </v-flex>
            <v-flex xs4>
                <v-card dark tile flat>
                    <v-card-text>C2</v-card-text>
                </v-card>
            </v-flex>
            <v-flex xs4>
                <v-card dark>
                    <v-card-text>C3 </v-card-text>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        data: () => ({
            msg: 'test'
        })
    }
</script>

<style scoped>
.container {
    max-width: 580px;
}

</style>