export default Vue.component("pokemon-card", { //définition du nom du component
  props: ["pokemon"],    //définition due la variable de travail et en-desous le template
  // peut maitre n'importe quelles nom dans les balises ?
  // c quoi les attributs de la v-sheet ?
  // tr c bien pour mêtre une séparation en ligne ?
  template: ` 
  <v-card>
    <v-card-title class="d-flex">   
      <v-chip>{{pokemon.id}}</v-chip>
      <v-container>{{pokemon.nom}}</v-container>
    </v-card-title>
    <v-card-text class="d-flex">
      <v-container class="col-6 flexcolumn">
        <v-img></v-img>
        <v-container class="d-flex">
          <v-sheet class="rounded-pill pl-2 pr-2 pt-1 pb-1" v-for="type in pokemon.types" :key="type.nom" :color="type.couleur" rounded>
            {{type.nom}}
          </v-sheet>
        </v-container>
      </v-container>
      <v-container class="col-6 flexcolumn">
        <v-container>{{pokemon.description}}</v-container>
        <v-simple-table>
          <tr>
            <td>HP</td><td>{{pokemon.base.HP}}</td>
          <tr>
          </tr>
            <td>Attaque</td><td>{{pokemon.base.Attack}}</td>
          </tr>
          <tr>
            <td>Défense</td><td>{{pokemon.base.Defense}}</td>
          </tr>
            <td>Attaque spéciale</td><td>{{pokemon.base.SpAttack}}</td>
            </tr>
            <tr>
            <td>Défense spéciale</td><td>{{pokemon.base.SpDefense}}</td>
            </tr>
            <tr>
            <td>Vitesse</td><td>{{pokemon.base.Speed}}</td>
            </tr>
          </tr>
        </v-simple-table>
      </v-container>
    </v-card-text>
  </v-card>
  `,
});
