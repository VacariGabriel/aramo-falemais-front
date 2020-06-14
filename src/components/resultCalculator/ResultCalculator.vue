<template>
    <v-container 
        class="d-flex justify-space-around flex-wrap mt-6"
    >
        <v-card
        class="mb-5"
        width="344"
        height="130"
        color="grey lighten-3"
        >
            <v-list-item three-line>
                <v-list-item-content>
                <v-list-item-title class="headline mb-2">Sem plano</v-list-item-title>
                <div class="mb-4">R$60,00</div>
                <v-list-item-subtitle>Você não tem minutos grátis</v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>
        </v-card>

        <v-card
        dark
        width="344"
        height="130"
        color="green darken-1"
        class="mb-6"
        >
            <v-list-item three-line>
                <v-list-item-content>
                <v-list-item-title class="headline mb-2">Com plano</v-list-item-title>
                <div class="mb-4">R$60,00</div>
                <v-list-item-subtitle>Você não tem minutos grátis</v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>
        </v-card>
    
    </v-container>
</template>

<script>
export default {
    
}
</script>

<style scoped>

</style>