import React, { useEffect, useState } from 'react'
import $ from 'jquery'
import PageBlacklistDomain from '../page/PageBlacklistDomain'
import PageCaoBai, { SelectLanguage, SelectChienDich } from '../page/PageCaoBai'
import PageFastContent from '../page/PageFastContent'
import PageQLKey from '../page/PageQLKey'
import PageSpinWord from '../page/PageSpinWord'
import Footer from './Footer'
import Select from 'react-select'
import '../../css/style.css'
import { useDispatch, useSelector } from 'react-redux'
import PageChienDich from '../page/PageChienDich'
import { ajaxCallGet, getItemLocalStorage } from '../libs/base'
import { changeTrangThaiCam } from '../reducer_action/BaseReducerAction'




export default function Main() {

  // const data_current_id_cam = useSelector(state => state.base.current_id_cam)
  // let id_cam = getItemLocalStorage('id_cam')[0];

  // 
  const dispatch = useDispatch();
  const dataCam = useSelector(state => state.base.data_cam);
  const data_current_id_cam = useSelector(state => state.base.current_id_cam);
  const [currentCam, setCurrentCam] = useState([]);

  // useEffect(() => {
    window.onbeforeunload = function async (event) {
      event = event || window.event;

      var confirmClose = 'Are you sure?';
      console.log(event.returnValue)

      // For IE and Firefox prior to version 4
      if (event) {
        ajaxCallGet(`reset-cam/${data_current_id_cam}`).then(async rs => {
          console.log('thanh cong')
          await dispatch(changeTrangThaiCam(false))
        })
        event.returnValue = confirmClose;
      }

      // For Safari
      return confirmClose;
    }

  // }, [])


  const handleGetCampaign = () => {
    let current_cam = dataCam.filter(item => {
      return item.id === data_current_id_cam;
    })

    if (current_cam.length !== 0) {
      document.title = current_cam[0].label;
    }
  }
  useEffect(() => {
    handleGetCampaign();
  }, [data_current_id_cam])

  return (
    <React.Fragment>
      <div className='d-flex justify-content-between align-items-center' style={{ borderBottom: '1px solid #ccc', marginBottom: '20px' }}>
        <ul
          className='col-6 nav-pills mt-2 mb-2 nav nav-content'
          id='tabs'
          role='tablist'
        >
          {/* <li className='nav-item'>
          <a href='#' className='logo-header'>
            <img src='' alt='logo' />
          </a>
        </li> */}
          <li className='nav-item ms-4' role='presentation'>
            <button
              className='nav-link active'
              id='pills-home-tab'
              data-bs-toggle='pill'
              data-bs-target='#pills-home'
              type='button'
              role='tab'
              aria-controls='pills-home'
              aria-selected='true'
            >
              Cào bài
            </button>
          </li>
          <li className='nav-item' role='presentation'>
            <button
              className='nav-link'
              id='pills-campaign-tab'
              data-bs-toggle='pill'
              data-bs-target='#pills-campaign'
              type='button'
              role='tab'
              aria-controls='pills-campaign'
              aria-selected='false'
            >
              Chiến dịch
            </button>
          </li>
          <li className='nav-item' role='presentation'>
            <button
              className='nav-link'
              id='pills-profile-tab'
              data-bs-toggle='pill'
              data-bs-target='#pills-profile'
              type='button'
              role='tab'
              aria-controls='pills-profile'
              aria-selected='false'
            >
              Quản lý key
            </button>
          </li>
          <li className='nav-item' role='presentation'>
            <button
              className='nav-link'
              id='pills-contact-tab'
              data-bs-toggle='pill'
              data-bs-target='#pills-contact'
              type='button'
              role='tab'
              aria-controls='pills-contact'
              aria-selected='false'
            >
              Blacklist domain
            </button>
          </li>
          <li className='nav-item' role='presentation'>
            <button
              className='nav-link'
              id='pills-spin-tab'
              data-bs-toggle='pill'
              data-bs-target='#pills-spin'
              type='button'
              role='tab'
              aria-controls='pills-spin'
              aria-selected='false'
            >
              Spin Word
            </button>
          </li>
          <li className='nav-item' role='presentation'>
            <button
              className='nav-link'
              id='pills-fast-tab'
              data-bs-toggle='pill'
              data-bs-target='#pills-fast'
              type='button'
              role='tab'
              aria-controls='pills-fast'
              aria-selected='false'
            >
              Fast Content
            </button>
          </li>
        </ul>
        <div className='col-6 d-flex flex-row'>
          <div className='col-6 px-1 d-flex align-items-center justify-content-between name-campaign'>
            <label className='col-4 text-start fs-7 fw-bolder' htmlFor>
              Tên chiến dịch:{' '}
            </label>
            {/* <input
              type='text'
              className='col-8'
              placeholder='Cào bài cho RDONE'
            /> */}
            <SelectChienDich />

          </div>
          <div
            className='col-6 name-domain d-flex align-items-center'
            style={{ marginLeft: '16px' }}
          >
            <label htmlFor className='col-4 text-start fs-7 fw-bolder'>
              Ngôn ngữ:{' '}
            </label>
            <SelectLanguage />
          </div>
        </div>

      </div>

      <div className='tab-content' id='pills-tabContent'>
        <div
          className='tab-pane fade show active'
          id='pills-home'
          role='tabpanel'
          aria-labelledby='pills-home-tab'
        >
          <PageCaoBai />
        </div>
        <div
          className='tab-pane fade'
          id='pills-campaign'
          role='tabpanel'
          aria-labelledby='pills-campaign-tab'
        >
          <PageChienDich />
        </div>
        <div
          className='tab-pane fade'
          id='pills-profile'
          role='tabpanel'
          aria-labelledby='pills-profile-tab'
        >
          <PageQLKey />
        </div>
        <div
          className='tab-pane fade'
          id='pills-contact'
          role='tabpanel'
          aria-labelledby='pills-contact-tab'
        >
          <PageBlacklistDomain />
        </div>
        <div
          className='tab-pane fade'
          id='pills-spin'
          role='tabpanel'
          aria-labelledby='pills-spin-tab'
        >
          <PageSpinWord />
        </div>
        <div
          className='tab-pane fade'
          id='pills-fast'
          role='tabpanel'
          aria-labelledby='pills-fast-tab'
        >
          <PageFastContent />
        </div>
      </div>
      <Footer />
    </React.Fragment>
  )
}