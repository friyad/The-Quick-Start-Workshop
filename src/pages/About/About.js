import React, { useEffect } from 'react';
import Map from './Map/Map';
import MapBoxJl from './MapBoxJl/MapBoxJl';


const About = () => {


    return (
        <div className="pt-5">
            <div className="py-5 my-5">
                <div className="row container mx-auto">
                    <div className="text-start col-6">
                        <h1>About Us</h1>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat, officiis excepturi! Tempore hic mollitia voluptate ipsum aut quibusdam beatae natus harum excepturi ipsa omnis, fugiat quis dolores quo ex quam quod dignissimos vero illo obcaecati. Voluptate voluptatibus alias eum veritatis quia possimus quam aliquid modi eligendi, hic consectetur autem asperiores inventore dolorum? Explicabo similique perferendis impedit asperiores ullam cupiditate quod alias, aut possimus nihil earum numquam voluptates porro sunt eos aspernatur reprehenderit iusto reiciendis repellat laborum provident voluptas labore consequuntur.</p>
                    </div>
                    <div className="col-6">
                        <img className="w-100 h-100" src="https://i.ibb.co/zH1VHHm/About-Us.png" alt="" />
                    </div>
                </div>
                <div className="mt-5 pt-5">
                    {/* <Map /> */}
                    {/* <MapBoxJl /> */}
                </div>

            </div>
        </div>
    );
};

export default About;