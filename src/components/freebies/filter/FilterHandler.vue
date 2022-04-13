<template>
  <div
    class="container"
    style="padding-top: 22px; padding-left: 0; padding-right: 0; padding-bottom: 0"
  >
    <div class="row">
      <div class="col-lg-4 col-12">
        <button type="submit" onclick="filter()" class="btn btn-blue" style="width: 100%">
          Filter proxies
        </button>
      </div>
      <div class="col-lg-4 col-12">
        <button type="submit" onclick="savetofile()" class="btn btn-blue" style="width: 100%">
          Save to file
        </button>
      </div>

      <div class="col-lg-4 col-12">
        <div class="form-group">
          <input
            value="output.txt"
            type="text"
            class="form-control"
            id="outputname"
            name="outputname"
            style="width: 100%; margin: 8px 0 8px 0; height: 50.8px"
          />
        </div>
      </div>

      <div class="row"></div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
