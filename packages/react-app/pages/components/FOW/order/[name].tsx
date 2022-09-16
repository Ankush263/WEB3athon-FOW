import React, { useState } from 'react'
import { useRouter } from 'next/router'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SearchIcon from '@mui/icons-material/Search';
import Link from 'next/link';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Button from '@mui/material/Button';



function name() {

  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)
  const [count3, setCount3] = useState(0)

  let totalCount = count1+count2+count3

  const data = {
    totalCount,
    count1,
    count2,
    count3,
  }

  const router = useRouter()

  const styles = {
    page: `w-screen h-screen flex flex-col justify-between items-center`,
    nav: `w-full h-1/6 flex justify-between items-center bg-slate-300/[.9] shadow-xl border-white-900/75 max-w-screen-sm`,
    functionality: `w-11/12 h-4/6 rounded-xl flex flex-col justify-around items-center bg-slate-300/[.9] border-white-900/75 max-w-xl`,
    items: `w-10/12 flex justify-between items-center`,
    item: `font-semibold text-gray-500 text-sm pt-1.5`,
    products: `w-full h-3/6 flex justify-center items-center`,
    btn: `p-2 w-10/12 text-xs`,
    small: ``,
    left: `w-9/12 h-full flex justify-around items-center ml-2`,
    box: `w-24 h-5/6 rounded-xl bg-transparent flex justify-center items-center`,
    right: `w-28 h-10 bg-white rounded-xl mr-2 flex justify-between items-center p-2`,
    bellow: `flex flex-col justify-between items-center mb-2 w-10/12 max-w-screen-sm`,
  }

  return (
    <div className={styles.page}>
      <div className={styles.nav}>
        <Link href="/components/FOW/Farm/Farmtopia">
          <div className="ml-2">
            <ArrowBackIcon color='primary' fontSize='large' />
          </div>
        </Link>
        <div className="w-20 h-20 rounded-full">
          <img src='/images/cow.png' className='w-full h-full rounded-full' />
        </div>
        <div className="">
          <span className='font-semibold'>{router.query.name}</span>
        </div>
        <div className="mr-2">
          <SearchIcon color='primary' fontSize='large' />
        </div>
      </div>
      <div className={styles.functionality}>
        <div className={styles.items}>
          <span className="font-semibold text-gray-500 border-b-4 border-sky-500 text-sm pt-1.5">Beef</span>
          <span className={styles.item}>Chicken</span>
          <span className={styles.item}>Goat</span>
          <span className={styles.item}>Lamb</span>
        </div>
        <div className={styles.products}>
          <div className={styles.left}>
            <div className={styles.box}>
              <img src="/images/withbones.png" className='w-full h-full' />
            </div>
            <div className="flex flex-col h-full justify-around items-start ml-1 w-20 max-w-36">
              <span className='text-sm font-semibold'>Beef with bones</span>
              <span className='font-semibold text-gray-500 text-xs'>0.12 $$</span>
              <span className='font-semibold text-gray-500 text-xs'>Lbs</span>
            </div>
          </div>
          <div className={styles.right}>
            <RemoveIcon color='primary' onClick={() => setCount1(prev => prev-1)} />
            <span>{count1}</span>
            <AddIcon color='primary' onClick={() => setCount1(prev => prev+1)} />
          </div>
        </div>
        <div className={styles.products}>
        <div className={styles.left}>
          <div className={styles.box}>
            <img src="/images/nystrip.png" className='w-full h-full' />
          </div>
            <div className="flex flex-col h-full justify-around items-start ml-1 w-20 max-w-36">
              <span className='text-sm font-semibold'>Beef NY Strip</span>
              <span className='font-semibold text-gray-500 text-xs'>0.34 $$</span>
              <span className='font-semibold text-gray-500 text-xs'>Lbs</span>
            </div>
          </div>
          <div className={styles.right}>
            <RemoveIcon color='primary' onClick={() => setCount2(prev => prev-1)} />
            <span>{count2}</span>
            <AddIcon color='primary' onClick={() => setCount2(prev => prev+1)} />
          </div>
        </div>
        <div className={styles.products}>
        <div className={styles.left}>
          <div className={styles.box}>
            <img src="/images/minced.png" className='w-full h-full' />
          </div>
            <div className="flex flex-col h-full justify-around items-start ml-1 w-20 max-w-36">
              <span className='text-sm font-semibold'>Beef Minced</span>
              <span className='font-semibold text-gray-500 text-xs'>0.56 $$</span>
              <span className='font-semibold text-gray-500 text-xs'>Lbs</span>
            </div>
          </div>
          <div className={styles.right}>
            <RemoveIcon color='primary' onClick={() => setCount3(prev => prev-1)} />
            <span>{count3}</span>
            <AddIcon color='primary' onClick={() => setCount3(prev => prev+1)} />
          </div>
        </div>
      </div>
      <div className={styles.bellow}>
        <Link 
        href={{
          pathname: "/components/FOW/CheckOut",
          query: data,
          }}>
          <Button variant="contained" className={styles.btn}>
            <p className='text-xs'>Checkout ({totalCount})</p>
          </Button>
        </Link>
        <div className="bg-slate-300/[.9] shadow-xl border-white-900/75 p-0.5 rounded-md mt-1">
          <span className='text-xs'>Minimum Order $$</span>
        </div>
      </div>
    </div>
  )
}

export default name