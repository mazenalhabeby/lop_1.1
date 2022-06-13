import Image from 'next/image'

const StoreIcons = () => {
  const stores = [
    {
      id: 1,
      name: 'app store',
      fileName: 'appstore',
    },
    {
      id: 2,
      name: 'play store',
      fileName: 'googlestore',
    },
    {
      id: 3,
      name: 'microsoft store',
      fileName: 'windowsstore',
    },
    {
      id: 4,
      name: 'playStation store',
      fileName: 'playstation',
    },
    {
      id: 5,
      name: 'xbox store',
      fileName: 'Xboxstore',
    },
  ]
  return (
    <>
      {stores.map((store) => {
        return (
          <div
            key={store.id}
            className="flex flex-col w-auto md:w-32 text-center px-2 py-1 md:p-[2px] rounded-md nm-convex-slate-100 dark:nm-convex-slate-800">
            <div className="w-full">
              <Image
                src={`/images/stores/${store.fileName}.png`}
                width={30}
                height={30}
                alt={store.fileName}
                priority
              />
            </div>
            <h2 className="hidden md:block text-sm">{store.name}</h2>
          </div>
        )
      })}
    </>
  )
}

export default StoreIcons
