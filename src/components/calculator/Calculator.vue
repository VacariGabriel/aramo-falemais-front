<template>
    <v-flex class="flex-column pa-6">
        <div class="d-flex justify-center" v-if="problems">
            <v-alert
                dense
                outlined
                type="error"
                width="350"
            >
                {{errorMessage}}
            </v-alert>
        </div>

        <v-form>
            <v-row class="d-flex justify-center">
                <v-col
                    cols="6"
                    md="3"
                >
                    <v-select
                        v-model="values.source"
                        :items="ddds"
                        label="Origem"
                    ></v-select>
                </v-col>
        
                <v-col
                    cols="6"
                    md="3"
                >
                    <v-select
                    v-model="values.destination"
                    :items="ddds"
                    label="Destino"
                    ></v-select>
                </v-col>
            </v-row>
            <v-row class="d-flex justify-center">
                <v-col
                    cols="6"
                    md="3"
                >
                    <v-text-field
                    v-model="values.callTime"
                    type="number"
                    label="Minutos"
                    ></v-text-field>
                </v-col>

                <v-col
                    cols="6"
                    md="3"
                >
                    <v-select
                        v-model="values.plan"
                        :items="plansTitles"
                        item-text="name"
                        item-value="freeMinutes"
                        label="Plano"
                    ></v-select>
                </v-col>
            </v-row>
            <div class="d-flex justify-center">
                <v-btn :width="200" dark color="green darken-4">Calcular</v-btn>
            </div>
        </v-form>
    </v-flex>
</template>

<script>
export default {
    data:() => {
        return {
            values : {
                source: '',
                destination: '',
                callTime: '',
                plan: ''
            },
            problems: true,
            errorMessage: 'Desculpe! Estamos com problemas'
        }
    },

    props:['ddds', 'plansTitles'],

    methods: {
        sourceErrors() {
            const errors = []
            errors.push('Origem é obrigatória');
            return errors
        },

        destinationErrors() {
            const errors = []
            errors.push('Destino é obrigatório');
            return errors
        },

        callTimeErrors() {
            const errors = []
            errors.push('Tempo de duração é obrigatório');
            return errors
        },

        planErrors() {
            const errors = []
            errors.push('Plano é obrigatório');
            return errors
        },
    }
}
</script>

<style scoped>

</style>