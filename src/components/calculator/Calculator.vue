<template>
    <v-flex class="flex-column pa-6">
        <v-form
            ref="form"
            lazy-validation
        >
            <v-row class="d-flex justify-center">
                <v-col
                    cols="6"
                    md="3"
                >
                    <v-select
                        v-model="values.source"
                        :items="ddds"
                        label="Origem"
                        :rules="sourceRules"
                        required
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
                        :rules="destinationRules"
                        required
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
                        :rules="callTimeRules"
                        required
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
                        :rules="planRules"
                        required
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
            sourceRules: [v =>  !!v || 'Origem é obrigatório'],
            destinationRules: [v =>  !!v || 'Destino é obrigatório'],
            callTimeRules: [v =>  !!v || 'Tempo de ligação é obrigatório'],
            planRules: [v =>  !!v || 'Plano é obrigatório'],
            problems: true,
            errorMessage: 'Desculpe! Estamos com problemas'
        }
    },

    props:['ddds', 'plansTitles'],

    methods: {
        submitForm() {
            if (this.$refs.form.validate()) {
                this.$emit('showResult', this.values)
            }
        }
    },
}
</script>

<style scoped>
</style>