export const Home = () => {
    return (
        <div>
            <div className="w-full h-[75vh] bg-home-image-1 bg-cover bg-no-repeat bg-center" />
            <section className="bg-green w-full">
                <h3 className="text-[50px] font-semibold text-white text-center p-10">
                    Juntos plantemos un jardín
                </h3>
            </section>
            <section className="bg-white px-[8%] py-10">
                <div className="flex gap-6">
                    <div className="w-[15vw] h-[15vw] bg-home-image-2 bg-cover bg-no-repeat bg-center rounded-3xl shadow-2xl" />
                    <div className="flex-1 text-xl">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipiscing
                            elit porta, vestibulum lobortis natoque orci cursus
                            posuere nec laoreet, suspendisse eu class integer
                            risus penatibus tempus. Diam accumsan sagittis est
                            curae ligula, suscipit eu.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipiscing
                            elit porta, vestibulum lobortis natoque orci cursus
                            posuere nec laoreet, suspendisse eu class integer
                            risus penatibus tempus. Diam accumsan sagittis est
                            curae ligula, suscipit eu commodo penatibus nam id,
                            congue aptent imperdiet non.
                        </p>
                    </div>
                </div>
                <h2 className="text-[40px] font-semibold text-center mb-6">
                    Lorem ipsum dolor sit a!
                </h2>
                <div className="flex justify-between gap-[120px] items-center">
                    <div className="flex flex-col items-center">
                        <div className="w-[10vw] h-[10vw] bg-home-car bg-contain bg-no-repeat bg-center" />
                        <div className="flex flex-col w-full gap-5 text-center max-w-[20vw]">
                            <h3 className="text-25-600">Lorem</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipiscing elit porta, vestibulum lobortis
                                natoque orci cursus posuere nec laoreet,
                                suspendisse eu class integer risus
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="w-[10vw] h-[10vw] bg-home-tree bg-contain bg-no-repeat bg-center" />
                        <div className="flex flex-col w-full gap-5 text-center max-w-[20vw]">
                            <h3 className="text-25-600">Lorem</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipiscing elit porta, vestibulum lobortis
                                natoque orci cursus posuere nec laoreet,
                                suspendisse eu class integer risus
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="w-[10vw] h-[10vw] bg-home-earth bg-contain bg-no-repeat bg-center" />
                        <div className="flex flex-col w-full gap-5 text-center max-w-[20vw]">
                            <h3 className="text-25-600">Lorem</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipiscing elit porta, vestibulum lobortis
                                natoque orci cursus posuere nec laoreet,
                                suspendisse eu class integer risus
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
