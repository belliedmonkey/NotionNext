import { siteConfig } from '@/lib/config'
import CONFIG from '../config'

/**
 * 产品特性相关，将显示在首页中
 * @returns
 */
export const Features = () => {
  return <>
     {/* <!-- ====== 610 342 Features Section Start --> */}
     <section className="py-12 lg:py-24 xl:py-32">
				<div className="container px-4 md:px-6">
				  <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
					<div className="space-y-4">
					  <div className="space-y-2">
						<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">{siteConfig('STARTER_FEATURE_1_TITLE_1', null, CONFIG)}</h2>
						<p className="text-gray-500 dark:text-gray-400">
						{siteConfig('STARTER_FEATURE_1_TEXT_1', null, CONFIG)}
						</p>
					  </div>
					  <div className="mx-auto aspect-video overflow-hidden rounded-xl border border-gray-200 dark:border-gray-800">
						<div className="iframe-container" >
						<iframe width="610" height="342" src="https://www.youtube.com/embed/-JL67U6K7-I?si=jzvgVuxDYNOOOMTo" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
						</div>
					  </div>
					</div>
					<div className="space-y-4">
					  <div className="space-y-2">
						<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">{siteConfig('STARTER_FEATURE_2_TITLE_2', null, CONFIG)}</h2>
						<p className="text-gray-500 dark:text-gray-400">{siteConfig('STARTER_FEATURE_2_TEXT_2', null, CONFIG)}</p>
					  </div>
					  <div className="mx-auto aspect-video overflow-hidden rounded-xl border border-gray-200 dark:border-gray-800">
						<div className="iframe-container" >
						<iframe width="610" height="342" src="https://www.youtube.com/embed/8FFbYsAG4pQ?si=v0zNIODaP_qcimVW" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
						</div>
					  </div>
					</div>
				  </div>
				</div>
			  </section>
			  <section className="bg-gray-50 py-12 lg:py-24 xl:py-32">
				<div className="container px-4 md:px-6">
				  <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
					<div className="space-y-4">
					  <div className="space-y-2">
						<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">{siteConfig('STARTER_FEATURE_3_TITLE_3', null, CONFIG)}</h2>
						<p className="text-gray-500 dark:text-gray-400">{siteConfig('STARTER_FEATURE_3_TEXT_3', null, CONFIG)}</p>
					  </div>
					  <div className="mx-auto aspect-video overflow-hidden rounded-xl border border-gray-200 dark:border-gray-800">
						<div className="iframe-container" >
						<iframe width="610" height="342" src="https://www.youtube.com/embed/CtrQdQWVsMs?si=Wvy7y1CmYDu9Pk-K" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
						</div>
					  </div>
					</div>
					<div className="space-y-4">
					  <div className="space-y-2">
						<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">{siteConfig('STARTER_FEATURE_4_TITLE_4', null, CONFIG)}</h2>
						<p className="text-gray-500 dark:text-gray-400">{siteConfig('STARTER_FEATURE_4_TEXT_4', null, CONFIG)}</p>
					  </div>
					  <div className="mx-auto aspect-video overflow-hidden rounded-xl border border-gray-200 dark:border-gray-800">
						<div className="iframe-container" >
						<iframe width="610" height="342" src="https://www.youtube.com/embed/qxk-QDriIoU?si=wmQWaYgMauMTEJWN" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
						</div>
					  </div>
					</div>
					
				  </div>
				</div>
			  </section>
    {/* <!-- ====== Features Section End --> */}
    </>
}
