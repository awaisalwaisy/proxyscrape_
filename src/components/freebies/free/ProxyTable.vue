<template>
  <div class="col-lg-12 col-md-12 col-12">
    <div class="itemcard full">
      <table
        class="table table-striped"
        onmousedown="dataLayer.push(
          {'event' : 'GAEvent', 'eventAction' : 'selectfpl', 'eventCategory' : 'fpl'}
          ); this.onmouseover = null;"
      >
        <thead>
          <tr>
            <th scope="col">IP Address</th>
            <th scope="col">Anonymity</th>
            <th scope="col">Protocol</th>
          </tr>
        </thead>
        <tbody id="proxytable"></tbody>
      </table>
    </div>
  </div>
</template>
