import TitleunderLine from '@/components/TitleunderLine'
import useTranslation from 'next-translate/useTranslation'
import {MdCheckCircle} from 'react-icons/md'
import {RiEyeCloseFill, RiRefreshLine} from 'react-icons/ri'
import styles from '@/styles/Home.module.css'

const RoadMap = () => {
  const {t} = useTranslation('home')

  const raodMapContent = [
    {
      id: 1,
      head: 'Q1 / 2022',
      stips: [
        {id: 1, sDetail: t('Brand'), stat: true},
        {id: 2, sDetail: t('gameLogic'), stat: true},
        {id: 3, sDetail: t('sMedia'), stat: true},
        {id: 4, sDetail: t('video'), stat: true},
        {id: 5, sDetail: t('website'), stat: true},
        {id: 6, sDetail: t('preMarketing'), stat: true},
      ],
      mainStat: 'done',
    },
    {
      id: 2,
      head: 'Q2 / 2022',
      stips: [
        {id: 1, sDetail: t('websiteV1'), stat: true},
        {id: 2, sDetail: t('character'), stat: true},
        {id: 3, sDetail: t('smartContract'), stat: true},
        {id: 4, sDetail: t('ico'), stat: false},
        {id: 5, sDetail: t('audit'), stat: false},
      ],
      mainStat: 'prog',
    },
    {
      id: 3,
      head: 'Q3 / 2022',
      stips: [
        {id: 1, sDetail: t('publicsale'), stat: false},
        {id: 2, sDetail: t('Prototype'), stat: false},
        {id: 3, sDetail: t('Characters'), stat: false},
        {id: 4, sDetail: t('Marketing2'), stat: false},
      ],
      mainStat: false,
    },
    {
      id: 4,
      head: 'Q4 / 2022',
      stips: [
        {id: 1, sDetail: t('privatesale'), stat: false},
        {id: 2, sDetail: t('websiteV2'), stat: false},
        {id: 3, sDetail: t('Ecosystem'), stat: false},
        {id: 4, sDetail: t('deploy'), stat: false},
        {id: 5, sDetail: t('listing'), stat: false},
        {id: 6, sDetail: t('markets'), stat: false},
      ],
      mainStat: false,
    },
    {
      id: 5,
      head: 'Q1 / 2023',
      stips: [
        {id: 1, sDetail: t('NFTMBeta'), stat: false},
        {id: 2, sDetail: t('NFTM'), stat: false},
        {id: 3, sDetail: t('NFTSale'), stat: false},
        {id: 4, sDetail: t('NFTStake'), stat: false},
        {id: 5, sDetail: t('NFTFusion'), stat: false},
        {id: 6, sDetail: t('listing2'), stat: false},
      ],
      mainStat: false,
    },
    {
      id: 6,
      head: 'Q2 / 2023',
      stips: [
        {id: 1, sDetail: t('betaGame'), stat: false},
        {id: 2, sDetail: t('PVP'), stat: false},
        {id: 3, sDetail: t('character'), stat: false},
      ],
      mainStat: false,
    },
    {
      id: 7,
      head: 'Q3 / 2023',
      stips: [
        {id: 1, sDetail: t('game'), stat: false},
        {id: 2, sDetail: t('additionalNFT'), stat: false},
        {id: 3, sDetail: t('Tournament'), stat: false},
      ],
      mainStat: false,
    },
  ]
  return (
    <section id="roadmap">
      <div className="container mx-auto space-y-8 py-14">
        <div className=" w-max mx-auto">
          <h3 className="font-aclonica text-3xl uppercase md:text-4xl">
            road map
          </h3>
          <TitleunderLine />
        </div>
        <div className="relative mx-auto w-4/5 before:bg-slate-800 lg:before:absolute lg:before:top-0 lg:before:left-2/4 lg:before:h-full lg:before:w-0.5 lg:before:-translate-x-2/4 lg:before:content-[''] dark:lg:before:bg-white pt-0 md:pt-6">
          <ul>
            {raodMapContent.map((obj) => {
              return (
                <li
                  key={obj.id}
                  className={`${styles.roadmap_parent} relative mb-4 rounded-lg bg-[url("/images/texture.jpg")] p-4 text-black shadow-lg shadow-gray-500 last:mb-0 lg:mb-10 lg:w-2/4 lg:odd:float-left lg:odd:clear-right lg:odd:-translate-x-8 lg:even:float-right lg:even:clear-left lg:even:translate-x-8`}>
                  <div
                    className={`${styles.roadmap_status} ${
                      obj.mainStat === 'prog'
                        ? 'bg-yellow-500'
                        : obj.mainStat === 'done'
                        ? 'bg-green-500'
                        : 'bg-gray-500'
                    } hidden justify-center lg:flex`}>
                    {obj.mainStat === 'done' ? (
                      <MdCheckCircle className={`w-full h-full`} />
                    ) : obj.mainStat === 'prog' ? (
                      <RiRefreshLine className={`w-full h-full animate-spin`} />
                    ) : (
                      <RiEyeCloseFill className={`w-full h-full`} />
                    )}
                  </div>
                  <h2 className="font-aclo text-xl">{obj.head}</h2>
                  <div>
                    {obj.stips.map((obj) => {
                      return (
                        <div
                          key={obj.id}
                          className={`${
                            obj.stat &&
                            "before:mx-1.5 before:rounded-full before:text-green-800 before:content-['???']"
                          } my-2 text-center text-lg font-bold`}>
                          {obj.sDetail}
                        </div>
                      )
                    })}
                  </div>
                </li>
              )
            })}
          </ul>
          <div className=" clear-both"></div>
        </div>
      </div>
    </section>
  )
}

export default RoadMap
