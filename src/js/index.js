import $ from 'jquery'
import router from './modules/Router'
import '../scss/app.scss'

$(() => {
  new router()

  const hoge = 'hoge'
  console.log(hoge)

  //  ハンバーガーメニュー
  const menuBtn = $('.c-menuBtn')
  const nav = $('.p-nav')

  menuBtn.click(function () {
    $(this).toggleClass('is-active')
    nav.toggleClass('is-active')
  })

  // Shop Listタブ開閉
  const navBox = $('.p-nav__box')
  navBox.click(function () {
    const innerList = $(this).siblings('.p-nav__innerList')
    $(this).toggleClass('is-active')
    innerList.toggleClass('is-active')
  })
})
