

const YoutubeSect = () => {
    const YouLinkItem = [
        {
            id: 1,
            link: "https://youtu.be/0oTlm4GP6vk?si=ttQNTLZKVkLDIjLp"
        },
        {
            id: 2,
            link: "https://youtu.be/Xq7Ok04N6xE?si=vJ1zz_bz3APuTVxu"
        },
        {
            id: 3,
            link: "https://youtu.be/auryISg0Wlg?si=8_kO9efyHAvuHNKK"
        }
    ]
  return (
    <div className="container pt-6">
        <h2 className="text-center">YouTube</h2>
        <p className="text-center">Recent Videos</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-4 justify-center items-center">
      {YouLinkItem.map((item : any) => (
        <div key={item.id}>
          <iframe src={item.link} className="w-full h-40 rounded-xl"></iframe>
        </div>
        
      ))}
      </div>
    </div>
  )
}

export default YoutubeSect