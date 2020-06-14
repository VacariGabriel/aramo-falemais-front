<template>
    <v-flex class="flex-column pa-6">
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
                        label="Plano"
                    ></v-select>
                </v-col>
            </v-row>
            <div class="d-flex justify-center pa-6">
                <v-btn :width="300" dark color="green darken-4" @click="submitForm">Calcular</v-btn>
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
        submitForm() {
            this.$emit('showResult', this.values)
        }
    },

    computed: {
        //sourceErrors() {
        //    const errors = []
        //
        //    if (!this.values.source.$dirty) return errors
        //
        //    errors.push('Origem é obrigatória');
        //    return errors
        //},
        //
        //destinationErrors() {
        //    const errors = []
        //    errors.push('Destino é obrigatório');
        //    return errors
        //},
        //
        //callTimeErrors() {
        //    const errors = []
        //    errors.push('Tempo de duração é obrigatório');
        //    return errors
        //},
        //  
        //planErrors() {
        //    const errors = []
        //    errors.push('Plano é obrigatório');
        //    return errors
        //},
    },
}
</script>

<style scoped>
    h1 {
        color: #66BB6A;
    }
</style>