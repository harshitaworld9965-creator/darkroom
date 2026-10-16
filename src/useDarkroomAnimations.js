import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import {useGSAP} from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export function useDarkroomAnimations(scope){
    useGSAP(
        () => {
            gsap.from('.hero > *', {
                y:40,
                opacity:0,
                duration:1.2,
                ease:'power3.out',
                stagger:0.15,
            })

            gsap.utils.toArray('step').forEach((step) => {
                gsap.from(step, {
                    y:60,
                    opacity:0,
                    duration:1,
                    ease:'power3.out',
                    scrollTrigger: {
                        trigger:step,
                        start:'top 75%',
                        end:'bottom 25%',
                        toggleActions:'play none none reverse',
                        markers:true,
                    },
                })
            })

            gsap.utils.toArray('.section-head').forEach((head) => {
                gsap.from(head, {
                    y:40,
                    duration:1,
                    opacity:0,
                    ease:'power3.out',
                    scrollTrigger: {
                        trigger:head,
                        start:'top 85%',
                        toggleActions:'play none none reverse',
                    },
                })
            })

            gsap.from('.thumbs', {
                y:80,
                opacity:0,
                duration:1.2,
                ease:'power3.out',
                scrollTrigger:{
                    trigger:'.thumbs',
                    start:'top 90%',
                    toggleActions:'play none none reverse',
                },
            })

            gsap.set('.thumb', {opacity:0, y:30, scale:0.96})

            ScrollTrigger.batch('.thumb', {
                start:'top 85%',
                onEnter: (batch) =>
                    gsap.to(batch, {
                        opacity:1,
                        y:0,
                        scale:1,
                        duration:0.8,
                        ease:'power3.out',
                        stagger:0.08,
                        overwrite:true,
                    }),
                    onLeaveBack: (batch) =>
                        gsap.to(batch, {
                            opacity:0,
                            y:30,
                            scale:0.96,
                            duration:0.4,
                            stagger:0.04,
                            overwrite:true,
                        }),
            })

            gsap.from('.outro > *', {
                y:40,
                opacity:0,
                duration:1.2,
                ease:'power3.out',
                stagger:0.2,
                scrollTrigger: {
                    trigger:'.outro',
                    start:'top 60%',
                    toggleActions:'play none none reverse',
                },
            })
        },
        {scope}
    )
}