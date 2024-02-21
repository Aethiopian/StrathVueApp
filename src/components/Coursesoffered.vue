<template>
    <div id = 'Coursesoffered'>
        <v-container>
            <v-layout column>
                <v-carousel>
                <v-carousel-item
                src="https://www.quizdict.com/wp-content/uploads/2023/05/DA-4.png"  cover
                ></v-carousel-item>
            </v-carousel>
            </v-layout>
            <v-layout>
                <v-container>
                    <v-row align="center" justify="center">
                        <div class="d-flex align-center flex-column">
                            <div class="text-subtitle-2">⾕</div>

                            <v-card width="400">
                            <v-card-item>
                                <v-card-title>Accomodation</v-card-title>

                                <v-card-subtitle>Warrens for Stress-more Rabbits</v-card-subtitle>
                            </v-card-item>

                            <v-card-text>
                                <v-list
                                        :items="courses"
                                        item-title="coursename"
                                        item-value="id"
                                ></v-list>
                            </v-card-text>
                            </v-card>
                        </div>
                    </v-row>
                </v-container>
             </v-layout>
            </v-container>
    </div>
</template>
<script>
export default {
  // Properties returned from data() become reactive state
  // and will be exposed on `this`.
  data() {
    return {
      courses:[{
        id: 1,
        coursename: 'Cosmology'
      },
      {id: 2,
    coursename: 'Psychology'},
    {id: 3,
    coursename: 'BCom'},
    {id: 4,
    coursename: 'Compsci'},
    {id: 5,
    coursename: 'Socioeng'},
    {id: 6,
    coursename: 'Literature'},
    {id: 7,
    coursename: 'History'},
    {id: 8,
    coursename: 'Internationalrelations'},
    {id: 9,
    coursename: 'Astrophysics'},
    {id: 10,
    coursename: 'Megatronics'

    }
],
componentTitle: 'Courses at Strath Uni'
    }
  },

  // Methods are functions that mutate state and trigger updates.
  // They can be bound as event handlers in templates.
  methods: {
    increment() {
      this.count++
    }
  },

  // Lifecycle hooks are called at different stages
  // of a component's lifecycle.
  // This function will be called when the component is mounted.
  mounted() {
    console.log(`The initial count is ${this.count}.`)
  }
}
</script>
                
                    

                        

                     

