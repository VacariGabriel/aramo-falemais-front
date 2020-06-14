<template>
    <v-flex class="d-flex justify-space-around flex-wrap">
        <v-card
            outlined
            class="d-flex flex-column align-content-center mb-3"
            v-for="plan in plans"
            :key="plan.name"
            width="344"
            height="350"
        >
            <v-card-text>
                <p class="display-1 mb-3">{{plan.name}}</p>
                <p>Você tem {{plan.freeMinutes}} minutos grátis</p>
                <div class="text">{{plan.description}}</div>
            </v-card-text>
            <v-card-actions>
                <v-btn text>
                    Saiba mais
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-flex>
</template>

<script>
export default {
    props:['plans'],

    data: () => ({
    }),
}
</script>

<style scoped>

</style>