import { motion } from "framer-motion"
export const Svg = () => {
  const initialPath = `M100 0 L100 ${window.innerHeight} Q-100 ${window.innerHeight/2} 100 0`
  const targetPath = `M100 0 L100 ${window.innerHeight} Q100 ${window.innerHeight/2} 100 0`
  const pathAnim = {
    initial:{
      d:initialPath
    },
    enter:{
      d:targetPath,
      transition:{
        duration:0.6,
        ease:[ 0.76,0,0.24,1 ]
      }
    },
    exit:{
      d:initialPath,
      transition:{
        duration:0.6,
        ease:[ 0.76,0,0.24,1 ]
      }
    }
  }
  return (
    <svg className="absolute top-0 left-[-100px] w-[100px] h-screen fill-grayMain">
      <motion.path 
        variants={pathAnim}
        initial='initial'
        animate='enter'
        exit='exit'
        d={initialPath}>
      </motion.path>
    </svg>
  )
}
