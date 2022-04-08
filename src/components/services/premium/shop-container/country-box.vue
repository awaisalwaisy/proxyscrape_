<template>
  <div id="countrybox">
    <h2 id="pricing">Select your preferred country:</h2>
    <div class="switch-field">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12 p-0" id="dropdownbox">
            <div class="nice-select selectortypes" tabindex="0">
                <span><span class="current"><img
                  src="https://cdn.proxyscrape.com/img/country/mixed.png">Mixed</span></span>
              <ul class="list countryselect">
                <li data-value="mixed" class="option selected"><img
                  src="https://cdn.proxyscrape.com/img/country/mixed.png">Mixed</li>
                <li data-value="us" class="option"><img src="https://cdn.proxyscrape.com/img/country/us.png">United
                  States</li>
                <li data-value="de" class="option"><img src="https://cdn.proxyscrape.com/img/country/de.png">Germany
                </li>
                <li data-value="gb" class="option"><img src="https://cdn.proxyscrape.com/img/country/gb.png">United
                  Kingdom</li>
                <li data-value="br" class="option"><img src="https://cdn.proxyscrape.com/img/country/br.png">Brazil
                </li>
                <li data-value="fr" class="option"><img src="https://cdn.proxyscrape.com/img/country/fr.png">France
                </li>
                <li data-value="in" class="option"><img src="https://cdn.proxyscrape.com/img/country/in.png">India
                </li>
                <li data-value="th" class="option"><img src="https://cdn.proxyscrape.com/img/country/th.png">Thailand
                </li>
                <li data-value="ca" class="option"><img src="https://cdn.proxyscrape.com/img/country/ca.png">Canada
                </li><a
                href="https://docs.google.com/forms/d/e/1FAIpQLSfv8Vio7r8qoW1UcRByEyYwInchoXZ9MG0W0rO034YC_Y6K_g/viewform?usp=sf_link"
                target="_blank">
                <li class="option">Other</li>
              </a>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>

</script>

<style scoped>
.switch-field {
  display: flex;
  padding: 25px 0;
}

.switch-field input {
  position: absolute !important;
  clip: rect(0, 0, 0, 0);
  height: 1px;
  width: 1px;
  border: 0;
  overflow: hidden;
}

.switch-field label {
  background-color: #fff;
  color: rgba(0, 0, 0, 0.6);
  font-size: 14px;
  line-height: 1;
  text-align: center;
  padding: 8px 16px;
  margin-right: -1px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.3), 0 1px rgba(255, 255, 255, 0.1);
  transition: all 0.1s ease-in-out;
  color: #3e445b;
  display: flex;
  align-items: center;
  margin-right: 15px;
  padding: 15px 25px;
  justify-content: center;
}

.switch-field label img {
  margin-right: 8px;
}

.switch-field label:hover {
  cursor: pointer;
}

.switch-field input:checked + label {
  background-color: #3464e0;
  box-shadow: none;
  color: #fff;
}

.switch-field label:first-of-type {
  border-radius: 50px;
}

.switch-field label:last-of-type {
  border-radius: 50px;
}

.nice-select span .current {
  display: flex;
  align-items: center;
}

.nice-select span .current img {
  margin: 0 8px;
}

.nice-select ul li {
  display: flex;
  align-items: center;
}

.nice-select ul li img {
  margin: 0 8px;
}

</style>
