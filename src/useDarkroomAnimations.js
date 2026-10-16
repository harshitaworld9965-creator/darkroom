import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger, useGSAP)

export function useDarkroomAnimations(scope) {
  useGSAP(
    () => {
      // 1. Hero intro: plays once on page load (no ScrollTrigger)
      gsap.from('.hero > *', {
        y: 40,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out',
        stagger: 0.15,
      })

      // 2. Each step fades up when it scrolls into view
      gsap.utils.toArray('.step').forEach((step) => {
        gsap.from(step, {
          y: 60,
          opacity: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: step,
            start: 'top 75%',
            end: 'bottom 25%',
            markers: true,
          },
        })
      })

      // 3. Section headings (contact sheet)
      gsap.utils.toArray('.section-head').forEach((head) => {
        gsap.from(head, {
          y: 40,
          opacity: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: head,
            start: 'top 85%',
            markers: true,
          },
        })
      })

      // 4. Outro: line and credit appear one after the other
      gsap.from('.outro > *', {
        y: 40,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out',
        stagger: 0.2,
        scrollTrigger: {
          trigger: '.outro',
          start: 'top 60%',
          markers: true,
        },
      })
    },
    { scope }
  )
}