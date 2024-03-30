import React from 'react'
import Barchart from './Barchart'
import G1 from '/src/assets/G1.svg'
import G2 from '/src/assets/G2.svg'
import G3 from '/src/assets/G3.svg'
import G4 from '/src/assets/G+.svg'
import Dotts from '/src/assets/Dotts.svg'
import Grocery from '/src/assets/Grocery.svg'
import Transport from '/src/assets/Transport.svg'
import Housing from '/src/assets/Housing.svg'
import Food from '/src/assets/Food.svg'
import Entertainment from '/src/assets/Entertainment.svg'
import Illustration1 from '/src/assets/Illustration1.svg'
import Illustration2 from '/src/assets/Illustration2.svg'


export default function Expenses() {
  return (
    <div className='font-poppins text-black lg:flex px-2'>
      {/*Left Side Row */}
      <div className=' p-8 basis-3/4'>
        <div className='flex flex-row'>
          <div className='basis-3/4'>
            <div className='text-gray-900 font-bold text-3xl'>Expenses</div>
            <div className='pt-2 px-1 text-gray-400 font-light sm:text-xs lg:text-sm'>01-25-March,2020</div>
          </div>
          <div className='basis-2/6 flex justify-end'>
            <div>
              <img src={G1} />
            </div>
            <div>
              <img src={G2} />
            </div>
            <div>
              <img src={G3} />
            </div>
            <div className='p-1'>
              <img src={G4} />
            </div>
          </div>
        </div>

        {/*Importing Barchart*/}
        <div>
          <Barchart />
        </div>

        <div className='lg:flex pt-8'>
          <div className='basis-3/4 flex justify-start'>
            <strong>Today</strong>
          </div>
          <div className='lg:p-2 basis-2/6 flex justify-end'>
            <img src={Dotts} />
          </div>
        </div>

        <div>
          <hr className="my-2 h-0.5 border-t-0 bg-neutral-200" />
        </div>

        <div className='flex flex-row'>
          <div className='lg:py-2 basis-3/4 flex justify-start'>
            <div className='flex flex-row'>
              <div className='lg:pt-1 pt-1 basis-1/4'>
                <div className='w-12 h-12'>
                  <img src={Grocery} />
                </div>
                <br />
                <div>
                  <img src={Transport} />
                </div>
                <br />
                <div>
                  <img src={Housing} />
                </div>
              </div>
            </div>
            <div className='basis-3/4 px-3'>
              <div className='lg:pt-1 pt-1'>
                <strong>Grocery</strong>
              </div>
              <div className='text-gray-400 font-light text-sm'>
                5:12pm • Belanja di pasar
              </div>
              <div className='lg:pt-8 pt-2'>
                <strong>Transpotation</strong>
              </div>
              <div className='text-gray-400 font-light text-sm'>
                5:12pm • Naik bus umum
              </div>
              <div className='lg:pt-8 pt-2'>
                <strong>Housing</strong>
              </div>
              <div className='text-gray-400 font-light text-sm'>
                5:12pm • Bayar Listrik
              </div>
            </div>
          </div>

          <div className='lg:py-3 lg:px-3 basis-2/6 flex justify-end'>
            <div className='flex flex-row'>
              <div className='basis-2/4'>
                <div className='pt-2 flex justify-end'>
                  <strong>-326.800</strong>
                </div>
                <br />
                <div className='pt-8 flex justify-end'>
                  <strong>-15.000</strong>
                </div>
                <br />
                <div className='pt-8 flex justify-end'>
                  <strong>-185.750</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />


        <div className='lg:flex pt-3'>
          <div className='basis-3/4 flex justify-start'>
            <strong>Monday, 23 March 2020</strong>
          </div>
          <div className='lg:p-2 basis-2/6 flex justify-end'>
            <img src={Dotts} />
          </div>
        </div>
        <div>
          <hr className="my-2 h-0.5 border-t-0 bg-neutral-200" />
        </div>

        <div className='flex flex-row'>
          <div className='py-2 basis-3/4 flex justify-start'>
            <div className='flex flex-row'>
              <div className='basis-1/4'>
                <div className='w-12 h-12'>
                  <img src={Food} />
                </div>
                <br />
                <div>
                  <img src={Entertainment} />
                </div>
              </div>
            </div>
            <div className='basis-3/4 px-3'>
              <div className='lg:py-1 pt-1'>
                <strong>Food and Drink</strong>
              </div>
              <div className='text-gray-400 font-light text-sm'>
                5:12pm • Makan Steak
              </div>
              <div className='lg:pt-6 pt-3'>
                <strong>Entertainment</strong>
              </div>
              <div className='text-gray-400 font-light text-sm'>
                5:12pm • Nonton Bioskop
              </div>
            </div>
          </div>
          <div className='pt-4 lg:px-3 basis-2/6 flex justify-end'>
            <div className='flex flex-row'>
              <div className='basis-2/4'>
                <div className='flex justify-end'>
                  <strong>-156.000</strong>
                </div>
                <br />
                <div className='py-8 flex justify-end'>
                  <strong>-35.200</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*Leaving a space gap between two rows */}
      <div className='basis-1/12'></div>

      {/*Right side row */}
      <div className=' p-8 bg-neutral-50 rounded-3xl h-screen'>
        <div className='lg:flex flex-col'>
          <div className='basis-2/3 '>
            <div className='text-lg'><strong>Where your money go?</strong></div>

            <div className='flex flex-row'>
              <div className='pt-4 basis-1/2 text-sm'>Food and Drinks</div>
              <div className='pt-4 basis-1/2 flex justify-end text-gray-600 text-sm font-light'>872.400</div>
            </div>
            <div className='pt-2'>
              <div className=" mb-6 h-1 w-full bg-neutral-200">
                <div className="h-1 bg-green-500" style={{ width: "25%" }}></div>
              </div>
            </div>

            <div className='flex flex-row'>
              <div className='pt-1 basis-1/2 text-sm'>Shopping</div>
              <div className='pt-1 basis-1/2 flex justify-end text-gray-600 text-sm font-light'>1378.200</div>
            </div>
            <div className='pt-2'>
              <div className="mb-6 h-1 w-full bg-neutral-200 ">
                <div className="h-1 bg-green-500" style={{ width: "40%" }}></div>
              </div>
            </div>

            <div className='flex flex-row'>
              <div className='pt-1 basis-1/2 text-sm'>Housing</div>
              <div className='pt-1 basis-1/2 flex justify-end text-gray-600 text-sm font-light'>928.500</div>
            </div>
            <div className='pt-2'>
              <div className="mb-6 h-1 w-full bg-neutral-200 ">
                <div className="h-1 bg-green-500" style={{ width: "32%" }}></div>
              </div>
            </div>

            <div className='flex flex-row'>
              <div className='pt-1 basis-1/2 text-sm'>Transpotation</div>
              <div className='pt-1 basis-1/2 flex justify-end text-gray-600 text-sm font-light'>420.700</div>
            </div>
            <div className='pt-2'>
              <div className="mb-6 h-1 w-full bg-neutral-200">
                <div className="h-1 bg-green-500" style={{ width: "20%" }}></div>
              </div>
            </div>

            <div className='flex flex-row'>
              <div className='pt-1 basis-1/2 text-sm'>Vehicle</div>
              <div className='pt-1 basis-1/2 flex justify-end text-gray-600 text-sm font-light'>520.000</div>
            </div>
            <div className='pt-2'>
              <div className="mb-6 h-1 w-full bg-neutral-200">
                <div className="h-1 bg-green-500" style={{ width: "30%" }}></div>
              </div>
            </div>
          </div>
        </div>

        {/*Right Side Row - Bottom Part */}
        <div className='lg:flex mt-16 ps-6'>
          <div className='w-[250px] h-[240px] bg-gray-200 rounded-xl ps-6 pe-4'>
            <div className=' flex justify-between '>
              <div className=' transform -translate-y-1/4'>
                <img src={Illustration1} className="flex w-[84.15px] h-[72.43px]" alt="Image 1" />
              </div>
              <div className=' transform -translate-y-1/2'>
                <img src={Illustration2} className="w-[52.53px] h-[90.12px]" alt="Image 1" />
              </div>
            </div>
            <div className='font-f-poppins'>
              <div className=' font-p-600 text-[16px]'>Save more money</div>
              <div className=' text-[12px] font-p-400 mt-1'> eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</div>
            </div>
            <div className=' items-center'>
              <button className='bg-gray-900 font-p-600 p-2.5 text-white text-[13px] w-[200px] rounded-lg mt-6 hover:bg-sky-600'>VIEW TIPS</button>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
