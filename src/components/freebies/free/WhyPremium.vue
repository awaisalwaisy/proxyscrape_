<template>
  <div class="col-lg-12 col-md-12 col-12">
    <div class="itemcard full">
      <div id="buy">
        <div id="slide1">
          <h2>YOU need ProxyScrape premium</h2>
          <a href="https://proxyscrape.com/premium?ref=fpl">
            <button
              type="submit"
              id="showhow"
              class="btn"
              onclick="dataLayer.push(
                {'event' : 'GAEvent', 'eventAction' : 'showhow', 'eventCategory' : 'buykey'}
                );"
            >
              Find out why
            </button></a
          >
          <div>
            Or
            <a
              style="text-decoration: underline; cursor: pointer; padding: 15px 0 15px 0"
              class="loginbtn"
              onclick="dataLayer.push(
                {'event' : 'GAEvent', 'eventAction' : 'login', 'eventCategory' : 'haskey'}
                );"
              href="/login"
              >login</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
