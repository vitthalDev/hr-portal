import { Fragment, useState, useContext } from 'react'
import { isObjEmpty } from '@utils'
import classnames from 'classnames'
import { useSkin } from '@hooks/useSkin'
import useJwt from '@src/auth/jwt/useJwt'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import { handleLogin } from '@store/actions/auth'
import { Link, useHistory } from 'react-router-dom'
import { AbilityContext } from '@src/utility/context/Can'
import Logo from '@src/assets/images/logo/eOxegen logo.png'
import InputPasswordToggle from '@components/input-password-toggle'
import { Facebook, Twitter, Mail, GitHub } from 'react-feather'
import { Row, Col, CardTitle, CardText, FormGroup, Label, Button, Form, Input, CustomInput } from 'reactstrap'

import '@styles/base/pages/page-auth.scss'

const Register = () => {
  const ability = useContext(AbilityContext)

  const [skin, setSkin] = useSkin()

  const history = useHistory()

  const dispatch = useDispatch()

  const { register, errors, handleSubmit, trigger } = useForm()

  const [email, setEmail] = useState('')
  const [valErrors, setValErrors] = useState({})
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [terms, setTerms] = useState(false)

  const illustration = skin === 'dark' ? 'register-v2-dark.svg' : 'register-v2.svg',
    source = require(`@src/assets/images/pages/${illustration}`).default

  const Terms = () => {
    return (
      <Fragment>
        I agree to
        <a className='ml-25' href='/' onClick={e => e.preventDefault()}>
          privacy policy & terms
        </a>
      </Fragment>
    )
  }

  const onSubmit = () => {
    if (isObjEmpty(errors)) {
      useJwt
        .register({ username, email, password })
        .then(res => {
          if (res.data.error) {
            const arr = {}
            for (const property in res.data.error) {
              if (res.data.error[property] !== null) arr[property] = res.data.error[property]
            }
            setValErrors(arr)
            if (res.data.error.email !== null) console.error(res.data.error.email)
            if (res.data.error.username !== null) console.error(res.data.error.username)
          } else {
            setValErrors({})
            const data = { ...res.data.user, accessToken: res.data.accessToken }
            ability.update(res.data.user.ability)
            dispatch(handleLogin(data))
            history.push('/')
          }
        })
        .catch(err => console.log(err))
    }
  }

  const handleUsernameChange = e => {
    const errs = valErrors
    if (errs.username) delete errs.username
    setUsername(e.target.value)
    setValErrors(errs)
  }

  const handleEmailChange = e => {
    const errs = valErrors
    if (errs.email) delete errs.email
    setEmail(e.target.value)
    setValErrors(errs)
  }

  return (
    <div className='auth-wrapper auth-v2'>
      <Row className='auth-inner m-0'>
        <Link className='brand-logo' to='/' onClick={e => e.preventDefault()}>
          {/* <img src={Logo} style={{ height: 40, width: 120, marginBottom: 20, marginLeft: 50, marginTop: 20 }} /> */}
          {/* <svg viewBox='0 0 139 95' version='1.1' height='28'>
            <defs>
              <linearGradient x1='100%' y1='10.5120544%' x2='50%' y2='89.4879456%' id='linearGradient-1'>
                <stop stopColor='#000000' offset='0%'></stop>
                <stop stopColor='#FFFFFF' offset='100%'></stop>
              </linearGradient>
              <linearGradient x1='64.0437835%' y1='46.3276743%' x2='37.373316%' y2='100%' id='linearGradient-2'>
                <stop stopColor='#EEEEEE' stopOpacity='0' offset='0%'></stop>
                <stop stopColor='#FFFFFF' offset='100%'></stop>
              </linearGradient>
            </defs>
            <g id='Page-1' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
              <g id='Artboard' transform='translate(-400.000000, -178.000000)'>
                <g id='Group' transform='translate(400.000000, 178.000000)'>
                  <path
                    d='M-5.68434189e-14,2.84217094e-14 L39.1816085,2.84217094e-14 L69.3453773,32.2519224 L101.428699,2.84217094e-14 L138.784583,2.84217094e-14 L138.784199,29.8015838 C137.958931,37.3510206 135.784352,42.5567762 132.260463,45.4188507 C128.736573,48.2809251 112.33867,64.5239941 83.0667527,94.1480575 L56.2750821,94.1480575 L6.71554594,44.4188507 C2.46876683,39.9813776 0.345377275,35.1089553 0.345377275,29.8015838 C0.345377275,24.4942122 0.230251516,14.560351 -5.68434189e-14,2.84217094e-14 Z'
                    id='Path'
                    className='text-primary'
                    style={{ fill: 'currentColor' }}
                  ></path>
                  <path
                    d='M69.3453773,32.2519224 L101.428699,1.42108547e-14 L138.784583,1.42108547e-14 L138.784199,29.8015838 C137.958931,37.3510206 135.784352,42.5567762 132.260463,45.4188507 C128.736573,48.2809251 112.33867,64.5239941 83.0667527,94.1480575 L56.2750821,94.1480575 L32.8435758,70.5039241 L69.3453773,32.2519224 Z'
                    id='Path'
                    fill='url(#linearGradient-1)'
                    opacity='0.2'
                  ></path>
                  <polygon
                    id='Path-2'
                    fill='#000000'
                    opacity='0.049999997'
                    points='69.3922914 32.4202615 32.8435758 70.5039241 54.0490008 16.1851325'
                  ></polygon>
                  <polygon
                    id='Path-2'
                    fill='#000000'
                    opacity='0.099999994'
                    points='69.3922914 32.4202615 32.8435758 70.5039241 58.3683556 20.7402338'
                  ></polygon>
                  <polygon
                    id='Path-3'
                    fill='url(#linearGradient-2)'
                    opacity='0.099999994'
                    points='101.428699 0 83.0667527 94.1480575 130.378721 47.0740288'
                  ></polygon>
                </g>
              </g>
            </g>
          </svg> */}
          {/* <h2 className='brand-text text-primary ml-1'>Vuexy</h2> */}
          <svg width="217px" height="100px" viewBox="0 0 417 150" version="1.1" xmlns="http://www.w3.org/2000/svg" >
            <defs>
              <polygon id="path-1" points="0.276243094 0.259281768 0.434861878 0.259281768 0.434861878 0.614530387 0.276243094 0.614530387"></polygon>
              <polygon id="path-3" points="0.276243094 0.0287292818 0.438839779 0.0287292818 0.438839779 0.470441989 0.276243094 0.470441989"></polygon>
              <polygon id="path-5" points="0.276243094 0.141712707 0.482099448 0.141712707 0.482099448 0.523480663 0.276243094 0.523480663"></polygon>
            </defs>
            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g id="Logo-total-2" transform="translate(-14.000000, -14.000000)">
                <g id="Logotype-2" transform="translate(118.660000, 26.500000)" fill="#39409A">
                  <g id="Group" transform="translate(12.735849, 13.750000)">
                    <path d="M46.5469432,5.73126936 C39.3397012,5.71476936 33.9322095,11.1452694 33.9019931,18.4297694 C33.8712772,25.7625194 39.2652839,31.2842694 46.49575,31.3215194 C53.6762717,31.3587694 59.1741629,25.7797694 59.1511884,18.4797694 C59.128214,11.1805194 53.7569321,5.74776936 46.5469432,5.73126936 M46.5359554,1.93612616e-05 C56.9503838,0.0142693613 65.0398954,8.14651936 65.0116768,18.5727694 C64.9837079,28.9132694 56.8237744,37.0745194 46.5197234,37.0675194 C36.1939465,37.0607694 27.9878144,28.8025194 28.0160331,18.4465194 C28.044002,8.11726936 36.2081807,-0.0144806387 46.5359554,1.93612616e-05" id="Fill-1"></path>
                    <path d="M132.108125,15.3555444 C127.468281,15.3637944 124.061066,18.7302944 124.04908,23.3180444 C124.036594,27.9580444 127.477021,31.3840444 132.137592,31.3732944 C136.782182,31.3625444 140.267309,27.8825444 140.233347,23.2890444 C140.199884,18.7467944 136.718253,15.3472944 132.108125,15.3555444 M120.271028,41.1747944 C122.065034,40.1322944 123.566366,39.2600444 125.163591,38.3317944 C126.306072,40.4842944 128.079601,41.7262944 130.41176,42.0812944 C132.604324,42.4150444 134.795389,42.3887944 136.823636,41.3345444 C139.649246,39.8660444 140.70757,37.0727944 140.116727,32.6855444 C138.809929,33.6105444 137.549329,34.8427944 136.039757,35.5132944 C129.364673,38.4780444 121.385789,34.6645444 119.170001,27.5832944 C117.149995,21.1275444 119.831266,14.5130444 125.742948,11.5055444 C130.155545,9.26029436 136.335178,9.69579436 139.78035,14.0500444 C139.844279,14.1310444 139.947415,14.1807944 140.215367,14.3842944 L140.215367,10.9147944 L145.519224,10.9147944 C145.554435,11.1747944 145.607626,11.3835444 145.607626,11.5922944 C145.608375,19.5145444 145.695278,27.4382944 145.572165,35.3585444 C145.475273,41.5745444 142.158958,45.5340444 136.047248,46.8287944 C131.333236,47.8275444 126.802021,47.3240444 122.919335,44.1417944 C121.955905,43.3520444 121.232959,42.2690444 120.271028,41.1747944" id="Fill-3"></path>
                    <path d="M95.6733333,21.3482194 L110.442673,21.3482194 C109.789648,17.3839694 106.811707,15.0527194 102.721502,15.2149694 C99.0226119,15.3614694 95.9307972,18.0292194 95.6733333,21.3482194 L95.6733333,21.3482194 Z M95.5731945,25.9564694 C96.3198649,28.8049694 97.8861246,30.6737194 100.555409,31.4772194 C104.290009,32.6012194 107.614565,31.9989694 110.372751,28.8574694 C111.811902,29.6994694 113.272029,30.5537194 114.835542,31.4684694 C113.46956,33.5084694 111.754965,34.9684694 109.585625,35.8544694 C105.101607,37.6854694 100.62583,37.5399694 96.3932833,35.2359694 C91.1036607,32.3564694 88.741785,26.4557194 90.2461135,20.1897194 C91.4048261,15.3622194 94.4137328,12.1394694 99.2104032,10.7822194 C103.960625,9.43796936 108.358988,10.1757194 112.003189,13.6774694 C115.345975,16.8899694 116.407296,20.9572194 115.925331,25.4894694 C115.910847,25.6272194 115.830686,25.7582194 115.757268,25.9564694 L95.5731945,25.9564694 Z" id="Fill-5"></path>
                    <path d="M168.233885,21.3948444 C167.630306,17.2693444 164.300256,14.8268444 159.999285,15.2473444 C156.516904,15.5878444 153.394624,18.5313444 153.539712,21.3948444 L168.233885,21.3948444 Z M173.531249,25.9573444 L153.414851,25.9573444 C153.972481,28.5545944 155.39565,30.3113444 157.734302,31.2673444 C160.731222,32.4925944 165.104862,32.5110944 168.16696,28.8585944 C169.610356,29.7020944 171.071982,30.5565944 172.629252,31.4670944 C171.006055,33.9083444 168.863186,35.5510944 166.166932,36.3160944 C160.855084,37.8230944 155.850145,37.2153444 151.639074,33.3860944 C147.400534,29.5318444 146.414379,22.8778444 149.046705,17.3110944 C151.342154,12.4560944 157.049313,9.54859436 162.731749,10.2865944 C170.227171,11.2598444 174.722176,18.2350944 173.696816,25.5955944 C173.682581,25.6975944 173.609163,25.7913444 173.531249,25.9573444 L173.531249,25.9573444 Z" id="Fill-7"></path>
                    <path d="M5.92400475,21.3706694 L20.5927062,21.3706694 C20.3552201,17.7764194 17.1620181,15.1436694 13.2081612,15.2071694 C9.32622451,15.2694194 6.00691263,18.0541694 5.92400475,21.3706694 M26.3068571,25.9676694 L5.83060852,25.9676694 C6.3889881,28.5759194 7.80616346,30.3941694 10.1855197,31.2694194 C14.0869348,32.7044194 17.63724,32.1761694 20.5957029,28.8654194 C22.0545819,29.7201694 23.5154587,30.5764194 25.0402645,31.4699194 C23.633078,33.5694194 21.8727839,35.0751694 19.6432611,35.9219194 C14.6563022,37.8161694 9.80044759,37.5001694 5.35338877,34.4579194 C0.433854916,31.0926694 -1.01528493,24.8146694 0.678083551,19.2949194 C2.43962628,13.5536694 7.50100253,10.0981694 13.6606585,10.1919194 C19.9064687,10.2871694 24.9838272,14.6681694 25.9977006,20.9519194 C26.2549148,22.5464194 26.2059692,24.1901694 26.3068571,25.9676694" id="Fill-9"></path>
                    <path d="M181.668558,36.3362444 L176.227104,36.3362444 L176.227104,10.9424944 L181.659568,10.9424944 L181.659568,14.0244944 C183.85388,11.1289944 186.592087,10.1449944 189.782293,10.1924944 C194.793725,10.2667444 198.463147,13.4454944 199.139646,18.4152444 C199.350162,19.9617444 199.362148,21.5422444 199.372637,23.1077444 C199.401854,27.4849944 199.382875,31.8624944 199.382875,36.3169944 L193.849773,36.3169944 C193.849773,35.8519944 193.850023,35.4284944 193.849773,35.0047444 C193.849773,30.5867444 193.866005,26.1684944 193.835789,21.7504944 C193.829546,20.8462444 193.774107,19.9074944 193.527382,19.0457444 C192.634124,15.9264944 189.025633,14.4447444 185.639396,15.7532444 C182.683181,16.8959944 181.744723,19.3359944 181.696527,22.2167444 C181.625356,26.4877444 181.672054,30.7607444 181.668558,35.0327444 C181.668308,35.4312444 181.668558,35.8302444 181.668558,36.3362444" id="Fill-11"></path>
                    <path d="M74.5538494,23.2697194 C71.5756585,19.1617194 68.6641435,15.1459694 65.7543766,11.1289694 C65.7373954,11.1052194 65.7476341,11.0617194 65.7326507,10.8629694 C67.6854809,10.8629694 69.6313188,10.8369694 71.5746596,10.8927194 C71.8443599,10.9004694 72.1562634,11.2732194 72.35729,11.5447194 C73.9847317,13.7447194 75.5896984,15.9617194 77.2039049,18.1717194 C77.3502423,18.3719694 77.5135608,18.5599694 77.7600369,18.8667194 C79.2883388,16.7727194 80.8720791,14.8229694 82.1983555,12.7112194 C83.1263244,11.2334694 84.1928893,10.6089694 85.9262134,10.8237194 C87.1758249,10.9782194 88.4598982,10.8537194 90.0154198,10.8537194 C86.912118,15.1212194 83.9481612,19.1972194 80.9587328,23.3082194 C84.0954975,27.6119694 87.2070403,31.8809694 90.4968849,36.3947194 C88.8347317,36.3947194 87.3965797,36.3077194 85.9744099,36.4199694 C84.6294043,36.5259694 83.7895874,36.0937194 83.0244376,34.9339694 C81.3999925,32.4722194 79.5865075,30.1349694 77.7857584,27.6577194 C75.8841213,30.2594694 74.0049592,32.7657194 72.2067073,35.3287194 C71.6420847,36.1337194 71.0345097,36.4682194 70.0483555,36.4169694 C68.462118,36.3342194 66.8686385,36.3947194 64.9812356,36.3947194 C68.2743266,31.8794694 71.3993544,27.5947194 74.5538494,23.2697194" id="Fill-13"></path>
                  </g>
                </g>
                <g id="Logo-2" transform="translate(0.000000, 0.000000)">
                  <g id="Group-28" transform="translate(14.000000, 14.500000)">
                    <path d="M88.3977901,20.441989 C88.3977901,14.7969613 83.8218232,10.2209945 78.1767956,10.2209945 C72.531768,10.2209945 67.9558011,14.7969613 67.9558011,20.441989 C67.9558011,26.0870166 72.531768,30.6629834 78.1767956,30.6629834 C83.8218232,30.6629834 88.3977901,26.0870166 88.3977901,20.441989" id="Fill-1" fill="#39409A"></path>
                    <path d="M16.1269061,27.2362431 C21.5385083,29.0931492 24.42,34.9854144 22.5628177,40.3967403 C22.2437569,41.3268508 21.9788398,42.2724309 21.7567403,43.2285083 C24.7672376,30.3439779 36.349558,20.7182873 50.138232,20.7182873 C55.8592265,20.7182873 60.4973481,16.0801657 60.4973481,10.3591713 C60.4973481,4.63790055 55.8592265,5.52486188e-05 50.138232,5.52486188e-05 C28.4973481,5.52486188e-05 10.0354696,13.8594475 3.15453039,33.1671823 C5.19513812,28.0834807 10.8860221,25.4381768 16.1269061,27.2362431" id="Fill-3" fill="#3A7CFF"></path>
                    <g id="Group-7" transform="translate(0.000000, 48.066298)">
                      <mask id="mask-2" fill="white">
                        <use ></use>
                      </mask>
                      <g id="Clip-6"></g>
                      <path d="M0.29121547,0.614530387 C0.293977901,0.496022099 0.298674033,0.377790055 0.302265193,0.259281768 C0.29839779,0.377790055 0.293977901,0.495745856 0.29121547,0.614530387" id="Fill-5" fill="#3A7CFF" mask="url(#mask-2)"></path>
                    </g>
                    <g id="Group-10" transform="translate(0.000000, 51.104972)">
                      <mask id="mask-4" fill="white">
                        <use ></use>
                      </mask>
                      <g id="Clip-9"></g>
                      <path d="M0.292430939,0.0287292818 C0.296022099,0.176519337 0.304033149,0.32320442 0.309005525,0.470441989 C0.304033149,0.32320442 0.296022099,0.176519337 0.292430939,0.0287292818" id="Fill-8" fill="#3A7CFF" mask="url(#mask-4)"></path>
                    </g>
                    <path d="M0.844723757,42.329116 C0.851077348,42.2879558 0.857430939,42.2470718 0.86378453,42.2059116 C0.857430939,42.2470718 0.851077348,42.2879558 0.844723757,42.329116" id="Fill-11" fill="#3A7CFF"></path>
                    <path d="M1.05116022,41.0790331 C1.0541989,41.0608011 1.05751381,41.0428453 1.06082873,41.0246133 C1.05751381,41.0428453 1.0541989,41.0608011 1.05116022,41.0790331" id="Fill-13" fill="#3A7CFF"></path>
                    <path d="M0.676850829,43.5266298 C0.677955801,43.5172376 0.679337017,43.5078453 0.680718232,43.4981768 C0.679337017,43.5078453 0.677955801,43.5172376 0.676850829,43.5266298" id="Fill-15" fill="#3A7CFF"></path>
                    <path d="M0.408701657,46.239558 C0.416160221,46.1365193 0.422790055,46.0334807 0.430801105,45.9307182 C0.422790055,46.0334807 0.416160221,46.1365193 0.408701657,46.239558" id="Fill-17" fill="#3A7CFF"></path>
                    <g id="Group-21" transform="translate(0.000000, 46.961326)">
                      <mask id="mask-6" fill="white">
                        <use ></use>
                      </mask>
                      <g id="Clip-20"></g>
                      <path d="M0.334171271,0.523480663 C0.340248619,0.396132597 0.346878453,0.269060773 0.35378453,0.141712707 C0.346878453,0.26878453 0.340248619,0.396132597 0.334171271,0.523480663" id="Fill-19" fill="#3A7CFF" mask="url(#mask-6)"></path>
                    </g>
                    <path d="M50.1381215,98.8950276 C22.6441989,98.8950276 0.276243094,76.5270718 0.276243094,49.0331492 C0.276243094,43.4922652 1.18121547,38.0455801 2.96629834,32.8436464 C4.82320442,27.4320442 10.7151934,24.5508287 16.1267956,26.4074586 C21.5383978,28.2643646 24.4198895,34.1566298 22.5629834,39.5679558 C21.5220994,42.601105 20.9944751,45.7856354 20.9944751,49.0331492 C20.9944751,65.1030387 34.068232,78.1767956 50.1381215,78.1767956 C66.208011,78.1767956 79.281768,65.1030387 79.281768,49.0331492 C79.281768,43.3121547 83.9196133,38.6740331 89.640884,38.6740331 C95.3621547,38.6740331 100,43.3121547 100,49.0331492 C100,76.5270718 77.6320442,98.8950276 50.1381215,98.8950276" id="Fill-22" fill="#0EDB8A"></path>
                    <path d="M50.1381215,98.8950276 C36.8196133,98.8950276 24.2980663,93.7085635 14.8803867,84.290884 C10.8350829,80.2453039 10.8350829,73.6861878 14.8803867,69.640884 C18.9259669,65.5953039 25.4848066,65.5953039 29.5303867,69.640884 C35.0350829,75.1453039 42.3535912,78.1767956 50.1381215,78.1767956 C66.208011,78.1767956 79.281768,65.1030387 79.281768,49.0331492 C79.281768,43.3121547 83.9196133,38.6740331 89.640884,38.6740331 C95.3621547,38.6740331 100,43.3121547 100,49.0331492 C100,76.5270718 77.6320442,98.8950276 50.1381215,98.8950276" id="Fill-24" fill="#F50A75"></path>
                    <path d="M72.2339227,92.1494751 C68.908232,92.1494751 65.6424862,90.5516851 63.6405525,87.5884254 C60.4377901,82.8478177 61.6847514,76.4083149 66.4253591,73.2055525 C74.4756354,67.7668785 79.2817127,58.7306906 79.2817127,49.0331768 C79.2817127,43.3119061 83.919558,38.6740608 89.6408287,38.6740608 C95.3620994,38.6740608 99.9999448,43.3119061 99.9999448,49.0331768 C99.9999448,65.6224033 91.7844751,81.0768232 78.0234254,90.373232 C76.2460773,91.5740608 74.2289503,92.1494751 72.2339227,92.1494751" id="Fill-26" fill="#002776"></path>
                  </g>
                </g>
              </g>
            </g>
          </svg>
        </Link>
        <Col className='d-none d-lg-flex align-items-center p-5' lg='8' sm='12'>
          <div className='w-100 d-lg-flex align-items-center justify-content-center px-5'>
            <img className='img-fluid' src={source} alt='Login V2' />
          </div>
        </Col>
        <Col className='d-flex align-items-center auth-bg px-2 p-lg-5' lg='4' sm='12'>
          <Col className='px-xl-2 mx-auto' sm='8' md='6' lg='12'>
            <CardTitle tag='h2' className='font-weight-bold mb-1'>
              Adventure starts here 🚀
            </CardTitle>
            <CardText className='mb-2'>Make your app management easy and fun!</CardText>

            <Form action='/' className='auth-register-form mt-2' onSubmit={handleSubmit(onSubmit)}>
              <FormGroup>
                <Label className='form-label' for='register-username'>
                  Username
                </Label>
                <Input
                  autoFocus
                  type='text'
                  value={username}
                  placeholder='johndoe'
                  id='register-username'
                  name='register-username'
                  onChange={handleUsernameChange}
                  className={classnames({ 'is-invalid': errors['register-username'] })}
                  innerRef={register({ required: true, validate: value => value !== '' })}
                />
                {Object.keys(valErrors).length && valErrors.username ? (
                  <small className='text-danger'>{valErrors.username}</small>
                ) : null}
              </FormGroup>
              <FormGroup>
                <Label className='form-label' for='register-email'>
                  Email
                </Label>
                <Input
                  type='email'
                  value={email}
                  id='register-email'
                  name='register-email'
                  onChange={handleEmailChange}
                  placeholder='john@example.com'
                  className={classnames({ 'is-invalid': errors['register-email'] })}
                  innerRef={register({ required: true, validate: value => value !== '' })}
                />
                {Object.keys(valErrors).length && valErrors.email ? (
                  <small className='text-danger'>{valErrors.email}</small>
                ) : null}
              </FormGroup>
              <FormGroup>
                <Label className='form-label' for='register-password'>
                  Password
                </Label>
                <InputPasswordToggle
                  value={password}
                  id='register-password'
                  name='register-password'
                  className='input-group-merge'
                  onChange={e => setPassword(e.target.value)}
                  className={classnames({ 'is-invalid': errors['register-password'] })}
                  innerRef={register({ required: true, validate: value => value !== '' })}
                />
              </FormGroup>
              <FormGroup>
                <CustomInput
                  type='checkbox'
                  id='terms'
                  name='terms'
                  value='terms'
                  label={<Terms />}
                  className='custom-control-Primary'
                  innerRef={register({ required: true })}
                  onChange={e => setTerms(e.target.checked)}
                  invalid={errors.terms && true}
                />
              </FormGroup>
              <Button.Ripple type='submit' block color='primary'>
                Sign up
              </Button.Ripple>
            </Form>
            <p className='text-center mt-2'>
              <span className='mr-25'>Already have an account?</span>
              <Link to='/login'>
                <span>Sign in instead</span>
              </Link>
            </p>
            <div className='divider my-2'>
              <div className='divider-text'>or</div>
            </div>
            <div className='auth-footer-btn d-flex justify-content-center'>
              <Button.Ripple color='facebook'>
                <Facebook size={14} />
              </Button.Ripple>
              <Button.Ripple color='twitter'>
                <Twitter size={14} />
              </Button.Ripple>
              <Button.Ripple color='google'>
                <Mail size={14} />
              </Button.Ripple>
              <Button.Ripple className='mr-0' color='github'>
                <GitHub size={14} />
              </Button.Ripple>
            </div>
          </Col>
        </Col>
      </Row>
    </div>
  )
}

export default Register
