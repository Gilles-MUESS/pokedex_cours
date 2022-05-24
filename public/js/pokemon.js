export default Vue.component("pokemon-card", {
  //définition du nom du component
  props: ["pokemon", "darkmode"],
  // récupération de la prop passée au composant
  // le nom dépend de la prop initialisé dans l'appel dans le parent
  data: function () {
    return {
      img: "../images/" + this.pokemon.image,
      color: this.pokemon.types[0].couleur,
    };
  },
  template: ` 
  <v-card :dark="darkmode" max-width="550" class="mx-auto">
    <v-card-title :class="color">
      <v-container class="d-flex ma-0 pa-0">
        <v-chip color="black" text-color="white">{{pokemon.id}}</v-chip>
        <v-container :class="'ma-0 py-0 '+((!darkmode)?'':'text-black')">{{pokemon.nom}}</v-container>
      </v-container>
    </v-card-title>
    <v-card-text class="d-flex">
      <v-container class="col-6 flexcolumn">
        <v-img :src="img" max-width="150" max-height="150" class="mb-4 mx-auto"></v-img>
        <v-container class="d-flex justify-space-around">
          <v-sheet class="rounded-pill px-2 py-1" v-for="type in pokemon.types" :key="type.nom" :color="type.couleur" rounded>
            {{type.nom}}
          </v-sheet>
        </v-container>
      </v-container>
      <v-container class="col-6 flexcolumn">
        <v-container class="pt-0 px-0">{{pokemon.description}}</v-container>
        <v-simple-table>
          <template v-slot:default>
          <tbody>
            <tr>
              <td>HP</td>
              <td>{{pokemon.base.HP}}</td>
            </tr>
            <tr>
              <td>Attaque</td>
              <td>{{pokemon.base.Attack}}</td>
            </tr>
            <tr>
              <td>Défense</td>
              <td>{{pokemon.base.Defense}}</td>
            </tr>
            <tr>
              <td>Attaque spéciale</td>
              <td>{{pokemon.base.SpAttack}}</td>
            </tr>
            <tr>
              <td>Défense spéciale</td>
              <td>{{pokemon.base.SpDefense}}</td>
            </tr>
            <tr>
              <td>Vitesse</td>
              <td>{{pokemon.base.Speed}}</td>
            </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-container>
    </v-card-text>
  </v-card>
  `,
});
