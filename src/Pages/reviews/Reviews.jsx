import React, {useEffect, useState} from 'react';
import style from './reviews.module.scss';
import photo from '../../assets/pictures/Photos/rewievs/Роман.png'

const sliderData = [
    {
        id: 1,
        photo: photo,
        name: 'Анастасия Литвин',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto consequatur cum deleniti dignissimos et ex expedita itaque, molestiae nobis perspiciatis possimus quo soluta tempore, ullam!'
    },
    {
        id: 2,
        photo: photo,
        name: 'Сергей Барауля',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto consequatur cum deleniti dignissimos et ex expedita itaque, molestiae nobis perspiciatis possimus quo soluta tempore, ullam!'
    },
    {
        id: 3,
        photo: photo,
        name: 'Сергей Барауля 2',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto consequatur cum deleniti dignissimos et ex expedita itaque, molestiae nobis perspiciatis possimus quo soluta tempore, ullam!'
    },
    {
        id: 4,
        photo: photo,
        name: 'Сергей Барауля 3',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto consequatur cum deleniti dignissimos et ex expedita itaque, molestiae nobis perspiciatis possimus quo soluta tempore, ullam!'
    },
    {
        id: 5,
        photo: photo,
        name: 'Сергей Барауля 4',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto consequatur cum deleniti dignissimos et ex expedita itaque, molestiae nobis perspiciatis possimus quo soluta tempore, ullam!'
    },
    {
        id: 6,
        photo: photo,
        name: 'Сергей Барауля 5',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto consequatur cum deleniti dignissimos et ex expedita itaque, molestiae nobis perspiciatis possimus quo soluta tempore, ullam!'
    },
    {
        id: 7,
        photo: photo,
        name: 'Сергей Барауля 6',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto consequatur cum deleniti dignissimos et ex expedita itaque, molestiae nobis perspiciatis possimus quo soluta tempore, ullam!'
    },{
        id: 8,
        photo: photo,
        name: 'Сергей Барауля 8',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto consequatur cum deleniti dignissimos et ex expedita itaque, molestiae nobis perspiciatis possimus quo soluta tempore, ullam!'
    },{
        id: 9,
        photo: photo,
        name: 'Сергей Барауля 9',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto consequatur cum deleniti dignissimos et ex expedita itaque, molestiae nobis perspiciatis possimus quo soluta tempore, ullam!'
    },{
        id: 10,
        photo: photo,
        name: 'Сергей Барауля 10',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto consequatur cum deleniti dignissimos et ex expedita itaque, molestiae nobis perspiciatis possimus quo soluta tempore, ullam!'
    },
]
export const Reviews = () => {
    const [currentSlider, setCurrentSlider] = useState([])
    const limit = 5
    const [offset, setOffset] = useState(0)

    useEffect(()=>{
        setCurrentSlider(sliderData.slice(offset, offset + limit))
    },[offset])
    const prevPage =()=> setOffset(prevState => prevState - limit)
    const nextPage =()=> setOffset(prevState => prevState + limit)
    return (
        <section className={style.reviewsWrap}>
            <div>title</div>
            <div>text 1</div>
            <div>text 2</div>
            <div className={style.sliderWrap}>

                <div className={style.rowOnde}>
                    {currentSlider.slice(0, 2).map((person, index)=> <CardReview person={person} index={index} key={person.id} row={1}/>)}
                </div>
                <div className={style.rowTwo}>
                    <div className={`${style.arrow} ${!offset ? style.disable : '' }`} onClick={prevPage}> {'<'}</div>
                    <div className={`${style.arrow} ${offset * limit > sliderData.length ? style.disable : '' }`} onClick={nextPage} > {'>'}</div>
                    {currentSlider.slice(2, 5).map((person, index)=> <CardReview person={person} index={index} key={person.id} row={2}/>)}
                </div>
            </div>
        </section>
    );
}

const CardReview = ({person, index, row}) => {
    return <div className={`${style.cardWrap} ${style[`index${index}${row}`]}`}>
        <div className={style.photoWrap}>
            <img src={person.photo}/>
            <span className={style.name}>{person.name}</span>
        </div>
        <div className={style.description}>{person.description}</div>
        <div>Читать далее</div>
    </div>
}