<template>
  <div id="jumbotrons">
    <div align="center" class="jumbotron">
      <div id="title"></div>
      <textarea
        id="proxy_list"
        class="form-control"
        rows="10"
        placeholder="0.0.0.0:1234
127.0.0.1:3434
localhost:8080
"
        style="margin-top: 0px; margin-bottom: 0px; height: 286px; min-height: 100px"
      ></textarea
      ><br />
      <div id="continue_div"></div>
      <button id="proxy_button" class="btn" onclick="StartCheck();">Check proxies</button
      ><br /><br />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped src="../../../assets/css/online-proxy-checker.css"></style>
