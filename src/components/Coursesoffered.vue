<template>
    <div id = 'Coursesoffered'>
        <v-container>
            <v-layout column>
           <v-carousel-item
                           src="https://www.quizdict.com/wp-content/uploads/2023/05/DA-4.png"
                            cover
                        ></v-carousel-item>
         
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


                                <div class="mt-4 text-subtitle-2">⾕</div>

                                <v-card width="400">
                                <template v-slot:title>
                                    Sports
                                </template>

                                <template v-slot:subtitle>
                                    Unleash Your Athletic Potential: Sports at Strathmore University
                                </template>

                                <template v-slot:text>
                                    Welcome to the exhilarating world of sports at Strathmore University, where passion meets athleticism and teamwork fosters a spirit of excellence. Our sports program is a dynamic and integral part of the student experience, offering a range of competitive and recreational opportunities for athletes of all levels. From spirited inter-school competitions to local tournaments, our dedicated coaching staff is committed to nurturing talent, building character, and instilling a sense of sportsmanship. Whether you're a seasoned athlete or new to the game, our state-of-the-art facilities provide the ideal setting for you to hone your skills and embrace the thrill of competition. At Strathmore University, we believe in the power of sports to not only enhance physical well-being but also to cultivate discipline, resilience, and camaraderie among our students. Join us in celebrating the joy of athletics and the pursuit of excellence in every stride, kick, and goal. Get ready to be a part of a winning team at Strathmore University.




                                </template>
                                </v-card>

                                <div class="mt-4 text-subtitle-2">⾕</div>

                                <v-card width="400">
                                <v-card-item>
                                    <v-card-title>Accomodation</v-card-title>

                                    <v-card-subtitle>Home Away From Home</v-card-subtitle>
                                </v-card-item>

                                <v-card-text>
                                    Welcome to our university accommodation, your home away from home! We are committed to providing a safe, comfortable, and inclusive living environment that supports your academic and personal growth. Our modern and well-equipped residences offer a range of housing options, from cozy shared rooms to private apartments, ensuring there's a perfect fit for everyone. You'll have access to various amenities such as common areas, study spaces, and recreational facilities, fostering a sense of community among residents. Our dedicated staff is here to assist you, creating a welcoming atmosphere where you can thrive academically and socially. Living on campus not only offers convenience but also provides ample opportunities to build lifelong friendships and engage in campus life. We're excited to have you as part of our residential community, and we look forward to making your time in university accommodation a memorable and enriching experience.





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
                
                    

                        

                     

