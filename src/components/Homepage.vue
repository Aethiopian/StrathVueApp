<template>
    <div id='homepage'>
        <v-container>
            <v-layout column>
                <v-carousel>
                    <v-carousel-item
                        src="https://images.unsplash.com/photo-1498079022511-d15614cb1c02?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGFmcmljYW4lMjB1bml2ZXJzaXR5JTIwc3R1ZGVudHN8ZW58MHx8MHx8fDA%3D"
                        cover></v-carousel-item>

                    <v-carousel-item
                        src="https://www.quizdict.com/wp-content/uploads/2023/05/D-10.png"
                        cover></v-carousel-item>

                    <v-carousel-item src="https://images.unsplash.com/photo-1519070994522-88c6b756330e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGFmcmljYW4lMjB1bml2ZXJzaXR5JTIwc3R1ZGVudHN8ZW58MHx8MHx8fDA%3D" cover></v-carousel-item>
                </v-carousel>
            </v-layout>
            <v-layout>
                <v-container>
                    <v-row align="center" justify="center">
                        <div class="d-flex align-center flex-column">
                            <div class="text-subtitle-2">With props</div>

                            <v-card width="400" title="This is a title" subtitle="This is a subtitle"
                                text="This is content"></v-card>

                            <div class="mt-4 text-subtitle-2">With slots</div>

                            <v-card width="400">
                                <template v-slot:title>
                                    {{ componentTitle }}
                                </template>

                                <template v-slot:subtitle>
                                    Life At Stress-more 
                                </template>

                                <template v-slot:text>
                                    Navigating university life can indeed be stressful, but it's important to remember that you're not alone in feeling this way. Here are some insights and tips that might help you manage the stress:

1. **Time Management**: One of the biggest stressors in university is often the workload. Learning effective time management skills can help you stay on top of assignments, exams, and other responsibilities. Make use of planners, calendars, or productivity apps to organize your schedule and prioritize tasks.

2. **Seek Support**: Don't hesitate to reach out for help when you need it. Whether it's academic support from professors or tutors, emotional support from friends and family, or counseling services provided by the university, there are resources available to assist you.

3. **Self-Care**: Taking care of your physical and mental well-being is crucial during stressful times. Make sure you're getting enough sleep, eating balanced meals, and engaging in regular exercise. Practice relaxation techniques such as deep breathing, meditation, or yoga to help manage stress.

4. **Set Realistic Goals**: Break down larger tasks into smaller, more manageable goals. Celebrate your achievements along the way, no matter how small they may seem. Setting realistic expectations for yourself can help alleviate feelings of overwhelm.

5. **Connect with Peers**: Building a support network of friends and classmates who understand what you're going through can provide a sense of camaraderie and belonging. Share your experiences and listen to others who may be facing similar challenges.

6. **Take Breaks**: It's important to give yourself permission to take breaks and recharge when needed. Stepping away from your studies for a short walk, coffee break, or engaging in a hobby can help you come back with a clearer mind and renewed focus.

7. **Mindfulness and Perspective**: Try to cultivate a mindset of mindfulness and gratitude. Focus on the present moment rather than worrying about the future. Reflect on the positive aspects of your university experience and the progress you've made so far.

8. **Seek Balance**: While academics are important, don't forget to make time for activities outside of your studies that bring you joy and fulfillment. Whether it's pursuing hobbies, spending time with loved ones, or participating in campus clubs and organizations, finding balance in your life can help reduce stress.

Remember that experiencing stress in university is normal, and it's okay to ask for help if you need it. Prioritize self-care, stay organized, and take things one step at a time. You've got this!
                                </template>
                            </v-card>

                            <div class="mt-4 text-subtitle-2">With markup</div>

                            <v-card width="400">
                                <v-card-item>
                                    <v-card-title>Accomodation</v-card-title>

                                    <v-card-subtitle>Warrens for Stress-more Rabbits</v-card-subtitle>
                                </v-card-item>

                                <v-card-text>
                                    Finding suitable accommodation for university is an essential aspect of the student experience. Here are some tips to help you navigate this process:

1. **Start Early**: Begin your search for accommodation as soon as possible, preferably several months before the start of the academic year. Popular accommodations near universities tend to fill up quickly, so early planning can give you more options.

2. **Consider Your Preferences**: Think about what type of accommodation would best suit your needs and preferences. Options may include on-campus housing, off-campus apartments, shared houses, or homestays. Consider factors such as location, cost, amenities, and distance from campus.

3. **Budget Wisely**: Set a budget for your accommodation expenses, taking into account not only rent but also utilities, transportation, food, and other living expenses. Be realistic about what you can afford and look for options that fit within your budget.

4. **Explore On-Campus Housing**: Many universities offer on-campus housing options, such as dormitories or residence halls. These can be convenient and provide opportunities to connect with other students, but they may also have limited availability and strict rules.

5. **Research Off-Campus Options**: If you prefer to live off-campus, research rental listings in the area surrounding the university. Websites, social media groups, and local classifieds can be useful resources for finding available apartments or rooms for rent.

6. **Consider Roommates**: Sharing accommodation with roommates can help reduce costs and provide companionship. If you're open to having roommates, consider joining roommate-matching services or connecting with other students who are also looking for accommodation.

7. **Visit Potential Locations**: Whenever possible, visit potential accommodation options in person to get a sense of the space, neighborhood, and amenities. Pay attention to factors such as safety, cleanliness, and proximity to public transportation and essential services.

8. **Review Lease Agreements**: Before signing a lease or rental agreement, carefully review all terms and conditions, including rent, security deposit, lease duration, and any rules or restrictions. Make sure you understand your rights and responsibilities as a tenant.

9. **Plan for the Long Term**: Consider your housing needs not only for the upcoming academic year but also for the duration of your studies. If you're planning to stay in the same location for several years, look for accommodation options that offer stability and flexibility.

10. **Seek Assistance**: If you're having difficulty finding suitable accommodation or navigating the rental process, don't hesitate to seek assistance from university housing offices, student services, or local housing organizations. They may be able to provide guidance, resources, or referrals to support you in your search.

Finding the right accommodation for university can take time and effort, but with careful planning and research, you can find a comfortable and suitable living arrangement that enhances your overall student experience.
                                </v-card-text>
                            </v-card>
                        </div>
                    </v-row>
                </v-container>
            </v-layout>
        </v-container>
    </div>
</template>
<script setup>
const variants = ['elevated', 'flat', 'tonal', 'outlined']
</script>