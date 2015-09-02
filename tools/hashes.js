'use strict'

/**
 * @returns {undefined}
 */
function initHashes() {
  setupHashForm('md5', CryptoJS.MD5)
  setupHashForm('sha1', CryptoJS.SHA1)
  setupHashForm('sha3', CryptoJS.SHA3)
  setupHashForm('ripemd-160', CryptoJS.RIPEMD160)

  // register all copy buttons
  let copyButtons = document.getElementsByClassName('copy-form-value')
  for (let i = 0; i<copyButtons.length; i++) {
    let button = copyButtons[i]
    button.addEventListener("click", () => {
      let valueElement = button.parentElement.parentElement.getElementsByTagName('input')[0]
      valueElement.select()
      document.execCommand('copy')
    }, true)
  }
}

/**
 * @param {string} hashName
 * @param {Function} hashFunction
 * @returns {undefined}
 */
function setupHashForm(hashName, hashFunction) {
  document
    .getElementById(hashName)
    .getElementsByTagName('form')[0]
    .addEventListener("submit", evt => {
      let input = document.getElementById(hashName + 'Input')
        , result = document.getElementById(hashName + 'Output')
      result.value = hashFunction(input.value).toString()
      evt.preventDefault()
    })
}

initHashes()