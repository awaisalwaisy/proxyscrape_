<template>
  <form action="proxyrequest" method="post">
    <input
      placeholder="Put a URL or search query here to start browsing"
      type="text"
      class="form-control"
      style="
        margin-top: 15px;
        height: 51px;
        width: calc(100% - 122px);
        display: inline-block;
        border-radius: 0.25rem 0 0 0.25rem;
      "
      name="url"
    />
    <button
      type="submit"
      value="Send"
      class="btn btn-blue"
      style="border-radius: 0 0.25rem 0.25rem 0; margin-top: 5px"
      onclick="dataLayer.push(
                  {'event' : 'GAEvent', 'eventAction' : 'go', 'eventCategory' : 'webproxy'}
                );"
    >
      GO
      <img
        src="@/assets/img/svg/right-arrow-white.svg"
        alt=""
        style="
          height: 12px;
          min-height: unset;
          min-width: unset;
          margin-left: 7px;
          margin-top: -2px;
        "
      />
    </button>
  </form>
</template>
