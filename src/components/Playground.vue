<template>
    <div class="board">
        <div>{{ testmsg }}</div>
    </div>
</template>

<script>
export default {
    name: 'PlaygroundBoard',
    data () {
        return {
            testmsg: 'Test message'
        }
    }
}
</script>

<style scoped>
.board {
    margin: 10em;
}

</style>