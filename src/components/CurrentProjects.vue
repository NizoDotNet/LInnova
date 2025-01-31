<script setup>

</script>

<template>
  <div class="linnova-color-1 project-container d-flex justify-content-center p-3 m-3">


    <div class="">
      <h1 class="m-1">YouBase:</h1>
      <p>
        This is our the one of the biggest projects.
        'YouBase' is a platform where you can find groups, chats, events for your interest.
        Content creator can have exclusive content which will could be accessed only from 'VIP'
        users who paid for this. Also these users can joint private groups and get other benefits
        which content creator gives. There are similar projects like 'Boosty', 'Udemy' and etc.
        The main difference is the recommendation algorithms which allow creator get first subscribers
        which Boosty did not have
      </p>
      <h5>What we want implement</h5>
      <ol>
        <li>Users and creators can host there videos or another type contents to there profile</li>
        <li>Users can have private groups and exclusive contents which will only accessible for 'VIP' users who paid for this</li>
        <li>Of course user profile, settings, chats, user-2-user chatting will be also implemented</li>
        <li>...</li>
      </ol>
      <h5>Architecture and Technologies:</h5>
      <p>Like other modern projects this project will be written in microservices.
        This will help us to use different programing languages for different part of project.</p>
      <ul>
        <li>
          ASP.NET Core - used for serverside: (API)
        </li>
        <li>SignalR - for chats and notification</li>
        <li>
          VueJs - used for client side (we still did not choose client side framework)
        </li>
        <li>
          PostgreSql - application database which stores users and there data
        </li>
        <li>
          Entity Framework Core - ORM(Object Relational Mapping) used for interaction with database
        </li>
        <li>
          Kafka - for messaging and streaming
        </li>
        <li>
          Blob storage(AWS or Azure) - for storing images and videos of users
        </li>
        <li>CassandraDB - for storing chat data</li>
        <li>MongoDB - for storing users settings and other data(Profile, region, interest)</li>
        <li>...</li>
      </ul>
    </div>
  </div>
</template>


<style scoped>
.project-container {
  overflow: hidden;
  border-radius: 10px;
  font-size: 18px;
  color: white;
}
.cover {
  object-fit: contain;
  width: 90%;
  height: 90%;
}

</style>