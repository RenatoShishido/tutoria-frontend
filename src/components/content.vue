<template>
  <v-content>
    <div class="d-flex flex-column">
      <v-flex xs12 sm12 md12 lg12 xl12 class="px-5 py-5">
        <v-card :elevation="15" class="py-12 px-12" height="100%">
          <h2 class="text-wrap blue--text display-2 font-weight-black my-12">Objetivos Gerais</h2>
          <v-divider class="black"></v-divider>
          <p class="text-wrap text-justify black--text headline my-12">
            Desenvolver uma plataforma de oferta e
             agendamento de tutoria presencial na
              universidade que proporcione sucesso
               acadêmico por meio da aproximação e do 
               desenvolvimento dos acadêmicos entre si, por meio de uma relação de 
               estudo conjunto.
          </p>
          <img
            src="../assets/content.png"
            alt="content"
            style="width: 100%; heigth:100%;"
            class="d-flex flex-wrap"
          />
        </v-card>
      </v-flex>
      <v-flex xs12 sm12 md12 lg12 xl12 class="px-5 py-5">
        <v-card :elevation="15" class="py-12 px-12" height="100%">
          <h2 class="text-wrap display-2 blue--text font-weight-black my-12">Objetivos Específicos</h2>
          <v-divider class="black"></v-divider>
          <p class="text-wrap text-justify black--text headline my-12">
            Fazer uso da plataforma para também publicizar as informações 
            concernentes as ofertas de monitorias, assim como, 
            se devidamente autorizado pelos(as) professores(as) coordenadores(as),
             os encontros dos Grupos do 
             Programa de Educação Tutorial - PET's e Ligas Acadêmicas
          </p>
          <img
            src="../assets/lapis.png"
            alt="content"
            style="width: 100%; heigth:100%;"
            class="d-flex flex-wrap"
          />
        </v-card>
      </v-flex>
    </div>
  </v-content>
</template>

<script>
export default {
  name: "Content",
  components: {
  },
  data() {
    return {};
  },
  methods: {
  },
};
</script>

<style>

</style>
