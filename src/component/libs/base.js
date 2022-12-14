import $ from 'jquery'
import Swal from 'sweetalert2';

export const URL_HTTP = window.location.origin + '/'
const TOKENHEADER_VALUE = getCookie('Authorization')
const URL_API_GET = 'http://localhost:800/WebClone/rd/xml/a/';
export const URL_GET_API = 'http://localhost:800/WebClone/api/rd/xml/a/'

export const URL_API_WEB = 'http://localhost:800/WebClone/';

const URL_API_EDIT = URL_API_GET

export const KEY_API_SEARCH = 'AIzaSyDM6h0xL0RS58CwvkNgEYzBtLzPgZ6lOeo'
export const LINK_SEARCH = 'https://www.googleapis.com/customsearch/v1?'

// export const KEY_API_SEARCH = 'AIzaSyAtvWiWUms7XR_NkzhFXFkLa4BM-5jUTdE'
// export const LINK_SEARCH = 'https://www.googleapis.com/customsearch/v1/siterestrict?'

export const CX_SEARCH = '622357283d8f7426e';


export const KEY_API_TRANS = 'AIzaSyAtvWiWUms7XR_NkzhFXFkLa4BM-5jUTdE'
// export const KEY_API_TRANS = 'c0eb40b476msh231059c886fccc4p171a55jsn86d44ff993aa'


// export async function ajaxCallGetUrl(start, count, key_search, black_list) {
//   let rs = null;
//   let data = [];
//   let arr = null;
//   await $.ajax({
//     type: 'GET',
//     dataType: 'json',
//     url: `${LINK_SEARCH}key=${KEY_API_SEARCH}&cx=${CX_SEARCH}&start=${start}&num=${count}&q=${key_search}`,
//     timeout: 10000,
//     success: function (result) {
//       rs = result;
//       arr = result.items;
//       for (let i in arr) {
//         data.push({ url: arr[i].link})
//       }
//       for (let i in data) {
//         let host_name = getHostname(data[i].url)
//         if (black_list.has(host_name)) {
//           data.splice(i, 1)
//         }
//       }
//     },
//     error: function (jqXHR, textStatus, errorThrown) {
//       console.log(errorThrown)
//     }
//   })
//   return data;
// }

export async function ajaxCallGetUrl(start, count, key_search, black_list) {
  let rs = null
  await $.ajax({
    type: 'GET',
    dataType: 'json',
    url: `${LINK_SEARCH}key=${KEY_API_SEARCH}&cx=${CX_SEARCH}&start=${start}&num=${count}&q=${key_search}`,
    timeout: 10000,
    success: function (result) {
      rs = result
    },
    error: function (jqXHR, textStatus, errorThrown) {
      console.log(errorThrown)
    }
  })
  return rs
}


export async function ajaxCallGetUrlDemo(start, count, key_search) {
  let rs = null
  await $.ajax({
    type: 'GET',
    dataType: 'json',
    url: `${LINK_SEARCH}key=${KEY_API_SEARCH}&cx=${CX_SEARCH}&start=${start}&num=${count}&q=${key_search}`,
    timeout: 10000,
    success: function (result) {
      rs = result
    },
    error: function (jqXHR, textStatus, errorThrown) {
      console.log(errorThrown)
    }
  })
  return rs
}
//&safe=active&filter=1&excludeTerms=printerest
export const getHostname = (url) => {
  let host_name = new URL(url).hostname;
  let arr = host_name.split('.')
  let result = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (result.length < arr[i].length) {
      result = arr[i];
    }
  }
  return result;
  // if (host_name.includes('www.')) {
  //   return host_name.replace('www.', '');
  // } else {
  //   return host_name;
  // }
}

export const getHostname2 = (url) => {
  let arr = url.split('.')
  let result = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (result.length < arr[i].length) {
      result = arr[i];
    }
  }
  return result;
}

export async function sweetAlert2(title) {
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: 'btn btn-success',
      cancelButton: 'btn btn-danger'
    },
    buttonsStyling: false
  })
  let rs = await swalWithBootstrapButtons.fire({
    title: title,
    text: "B???n c?? mu???n nh???p file v??o chi???n d???ch n??y!",
    icon: 'infor',
    showCancelButton: true,
    confirmButtonText: 'Ti???p t???c!',
    cancelButtonText: 'H???y b???!',
    reverseButtons: true
  }).then((result) => {
    if (result.isConfirmed) {
      return true;
    } else if (result.dismiss === Swal.DismissReason.cancel) {
      return false;
    }
  })
  return rs
}


$(function () { })
export function downloadFile(file) {
  const element = document.createElement('a')
  element.setAttribute('href', file)
  element.setAttribute('download', 'jdjdj')
  element.setAttribute('target', '_blank')
  // element.style.display = 'none'
  document.body.appendChild(element)
  element.click()
  document.body.removeChild(element)
}
export function isNumber(n) {
  /**
   * Ki???m tra string chuy???n v??o c?? ph???i l?? s??? hay kh??ng
   *
   * @param n : string
   * @author XHieu
   */
  return /^-?\d+$/.test(n)
}
export function getRGBColor(ev) {
  /**
   * L???y ra m?? m??u d???ng rgb
   * @param ev : gi?? tr??? m??u t??? input type color
   * @author XHieu
   */
  const color = ev
  const r = parseInt(color.substr(1, 2), 16)
  const g = parseInt(color.substr(3, 2), 16)
  const b = parseInt(color.substr(5, 2), 16)
  return [r, g, b, 255]
}
export function rgbToHex(arr) {
  return (
    '#' +
    ((1 << 24) + (arr[0] << 16) + (arr[1] << 8) + arr[2]).toString(16).slice(1)
  )
}

export const alertConfirm = title => {
  // alertConfirm
  return window.confirm(title)
}

export const getCountString = (str, A = '') => {
  /**
   * l???y ra s??? ??? cu???i c???a string
   * input: hieu1234 -> output: 1234
   * @param str : string
   * @author XHieu
   */
  if (isNumber(str.slice(str.length - 1, str.length))) {
    A += str.slice(str.length - 1, str.length)
    return getCountString(str.slice(0, str.length - 1), A)
  }
  return A
}
export function debounce(func, delay) {
  /**
   * debounce trong js, l??n gg xem t??i li???u nh??
   * M???c ????ch h???n ch??? x??? l?? s??? thay ?????i c???a input
   * @param func : function
   * @param delay : th???i gian ch??? tr?????c khi x??? l??
   * @author XHieu
   */
  let timeout
  return function executedFunc(...args) {
    if (timeout) {
      clearTimeout(timeout)
    }

    timeout = setTimeout(() => {
      func(...args)
      timeout = null
    }, delay)
  }
}
export function throttle(callback, limit) {
  /**
   * t????ng t??? debounce trong js, l??n gg xem t??i li???u nh??
   * M???c ????ch h???n ch??? s??? l?????ng s??? l?? thay ?????i c???a input trong 1 kho???ng time
   * @param callback : funcition
   * @param limit : s??? l???n s??? l??
   * @author XHieu
   */
  var waiting = false // Initially, we're not waiting
  return function () {
    // We return a throttled function
    if (!waiting) {
      // If we're not waiting
      callback.apply(this, arguments) // Execute users function
      waiting = true // Prevent future invocations
      setTimeout(function () {
        // After a period of time
        waiting = false // And allow future invocations
      }, limit)
    }
  }
}
export function create_UUID() {
  /**
   * Create UUID th??i
   *
   * @param no
   * @author XHieu
   */
  var temp_url = URL.createObjectURL(new Blob())
  var uuid = temp_url.toString()
  URL.revokeObjectURL(temp_url)
  return uuid.substr(uuid.lastIndexOf('/') + 1)
}
export function nonAccentVietnamese(str) {
  /**
   * Chuy???n k?? t??? ti???ng vi???t sang ti???ng Anh
   *
   * @param str: string
   * @author XHieu
   */
  str = str.toLowerCase()
  str = str.replace(/??|??|???|???|??|??|???|???|???|???|???|??|???|???|???|???|???/g, 'a')
  str = str.replace(/??|??|???|???|???|??|???|???|???|???|???/g, 'e')
  str = str.replace(/??|??|???|???|??/g, 'i')
  str = str.replace(/??|??|???|???|??|??|???|???|???|???|???|??|???|???|???|???|???/g, 'o')
  str = str.replace(/??|??|???|???|??|??|???|???|???|???|???/g, 'u')
  str = str.replace(/???|??|???|???|???/g, 'y')
  str = str.replace(/??/g, 'd')
  // Some system encode vietnamese combining accent as individual utf-8 characters
  str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, '') // Huy???n s???c h???i ng?? n???ng
  str = str.replace(/\u02C6|\u0306|\u031B/g, '') // ??, ??, ??, ??, ??
  return str
}

// get cookie
export function getCookie(name) {
  try {
    let match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'))
    if (match) {
      return match[2]
    } else {
      return ''
    }
  } catch (e) {
    return ''
  }
}

//copy to clipboard
export function copyToClipboard(id) {
  console.log(id)
  let copyText = document.getElementById(id)
  console.log(copyText)
  copyText.select()
  copyText.setSelectionRange(0, 99999)
  navigator.clipboard
    .writeText(copyText.value)
    .then(() => {
      alertSuccess('???? coppy v??o clipboard')
    })
    .catch(error => {
      alert(`Copy failed!`)
    })
}

/*????ng xu???t ra kh???i tk*/
export function logOut() {
  document.cookie = `Authorization=${TOKENHEADER_VALUE};max-age=` + 0
  localStorage.removeItem('user')
  sessionStorage.removeItem('token')
  localStorage.clear()
  sessionStorage.clear()
  window.location.href = 'login'
}

/*notify ????? custom alert */
//alert notify
//***************alter
export function alertSuccess(text, time = 1000) {
  $.notify(
    {
      icon: 'far fa-check-circle',
      message: text
    },
    {
      delay: time,
      offset: { x: 15, y: 15 },
      type: 'success',
      animate: {
        enter: 'animated fadeInDown',
        exit: 'animated fadeOutUp'
      },
      z_index: 1031000000000
    }
  )
}

export function alertInfo(text, time = 1000) {
  $.notify(
    {
      icon: 'fas fa-info-circle',
      message: text
    },
    {
      delay: time,
      offset: { x: 15, y: 15 },
      type: 'info',
      animate: {
        enter: 'animated fadeInDown',
        exit: 'animated fadeOutUp'
      },
      z_index: 1031000000000
    }
  )
}

export function alertWarning(text, time = 1000) {
  $.notify(
    {
      icon: 'fas fa-exclamation',
      message: text
    },
    {
      delay: time,
      offset: { x: 55, y: 15 },
      type: 'warning',
      animate: {
        enter: 'animated fadeInDown',
        exit: 'animated fadeOutUp'
      },
      z_index: 1031
    }
  )
}

export function alertDanger(text, time = 1000) {
  $.notify(
    {
      icon: 'fas fa-exclamation-triangle',
      message: text
    },
    {
      timer: 1000,
      delay: time,
      offset: { x: 15, y: 15 },
      type: 'danger',
      animate: {
        enter: 'animated fadeInDown',
        exit: 'animated fadeOutUp'
      },
      z_index: 1031000000000
    }
  )
}

/*get data*/
export async function ajaxCallGet(url) {
  let rs = null
  if (url.includes('?')) url = url.concat('&token=' + TOKENHEADER_VALUE)
  else url = url.concat('?token=' + TOKENHEADER_VALUE)
  await $.ajax({
    type: 'GET',
    dataType: 'json',
    url: URL_API_GET + url,
    timeout: 10000,
    success: function (result) {
      rs = result
    },
    error: function (jqXHR, textStatus, errorThrown) {
      console.log(errorThrown)
    }
  })
  return rs
}

/*upload file, image....*/
export async function ajaxCallUploadFile(url, file) {
  let data
  if (url.includes('?')) url = url.concat('&token=' + TOKENHEADER_VALUE)
  else url = url.concat('?token=' + TOKENHEADER_VALUE)
  await $.ajax({
    type: 'POST',
    url: 'https://spec.edu.vn/qlbh/api/v1/private-edit/' + url,
    data: file,
    cache: false,
    contentType: false,
    enctype: 'multipart/form-data',
    processData: false,
    success: function (result) {
      data = result.data
    },
    error: function (err) {
      console.log(err)
    }
  })
  return data
}

/*post data*/
export async function ajaxCallPost(url, dataUser) {
  let rs = null
  await $.ajax({
    type: 'POST',
    data: JSON.stringify(dataUser),
    url: URL_API_EDIT + url,
    timeout: 300000,
    contentType: 'application/json',
    success: function (result) {
      rs = result
    },
    error: function (jqXHR, textStatus, errorThrown) {
      console.log(errorThrown)
    }
  })
  return rs
}

/*put data*/
export async function ajaxCallPut(url, dataUser) {
  let rs = null
  if (url.includes('?')) url = url.concat('&token=' + TOKENHEADER_VALUE)
  else url = url.concat('?token=' + TOKENHEADER_VALUE)
  await $.ajax({
    type: 'PUT',
    data: JSON.stringify(dataUser),
    url: URL_API_EDIT + url,
    timeout: 30000,
    contentType: 'application/json',
    success: function (result) {
      rs = result
    },
    error: function (jqXHR, textStatus, errorThrown) {
      console.log(errorThrown)
    }
  })
  return rs
}

/*set key-val ????? l??u v??o local storage*/
export function setItemLocalStorage(key, val) {
  localStorage.setItem(key, JSON.stringify(val))
} /*get key-val ????? l??u v??o local storage*/
export function getItemLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key))
}

/*set key-val ????? l??u v??o local storage*/
export function setItemSessionStorage(key, val) {
  sessionStorage.setItem(key, JSON.stringify(val))
} /*get key-val ????? l??u v??o local storage*/
export function getItemSessionStorage(key) {
  return JSON.parse(sessionStorage.getItem(key))
}

//format input type number
export function formatNumber(nStr, decSeperate, groupSeperate) {
  try {
    nStr += ''
    let x = nStr.split(decSeperate)
    let x1 = x[0]
    let x2 = x.length > 1 ? '.' + x[1] : ''
    var rgx = /(\d+)(\d{3})/
    while (rgx.test(x1)) {
      x1 = x1.replace(rgx, '$1' + groupSeperate + '$2')
    }
    return x1 + x2
  } catch (e) {
    console.log(e)
    return nStr
  }
}

// tr??? ng??y c???a th??ng v?? n??m
export function daysInMonth(year, month) {
  return new Date(year, month, 0).getDate()
}

//format input type number
export function formatFees(nStr, decSeperate, groupSeperate) {
  try {
    nStr += ''
    let arr = nStr.split(decSeperate)
    if (arr.length > 0) {
      // n???u ph???n chu???i sau d??nh d???u "," n?? s??? c???t b??? ??i r???i m???i g??n
      arr = arr.toString().replaceAll(',', '')
      nStr = arr
    }
    nStr += ''
    let x = nStr.split(decSeperate)
    let x1 = x[0]
    let x2 = x.length > 1 ? ',' + x[1] : ''
    var rgx = /(\d+)(\d{3})/
    while (rgx.test(x1)) {
      x1 = x1.replace(rgx, '$1' + groupSeperate + '$2')
    }
    return x1 + x2
  } catch (e) {
    console.log(e)
    return nStr
  }
}
