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

  // メニューリンク
  const navLink = $('.p-nav__link')
  navLink.click(function () {
    $(this).toggleClass('is-active')
    nav.toggleClass('is-active')
  })

  // スライドアップ
  const checkScrollSlideUp = (scrollBottom) => {
    const scrollSlideUp = $('._scrollSlideUp')

    scrollSlideUp.each((index, element) => {
      const isActive = $(element).offset().top < scrollBottom

      if (isActive) {
        $(element).addClass('_isActiveSlideUp')
      } else {
        $(element).removeClass('_isActiveSlideUp')
      }
    })
  }

  // フェードイン
  const checkScrollFadeIn = (scrollBottom) => {
    const scrollFadeIn = $('._scrollFadeIn')

    scrollFadeIn.each((index, element) => {
      const isActive = $(element).offset().top < scrollBottom

      if (isActive) {
        $(element).addClass('_isActiveFadeIn')
      } else {
        $(element).removeClass('_isActiveFadeIn')
      }
    })
  }

  // スクロール時の処理
  $(window).scroll(() => {
    const scrollTop = $(window).scrollTop()
    const windowHeight = $(window).height()
    const scrollBottom = scrollTop + windowHeight

    checkScrollSlideUp(scrollBottom)
    checkScrollFadeIn(scrollBottom)
  })
})
