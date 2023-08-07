import dynamic from 'next/dynamic'

const PixiStage = dynamic(() => import('src/components/PixiStage'), { ssr: false })

export default function SingletonStage({ params }: { params: { experiment: string } }) {
  const { experiment } = params
  return <PixiStage experiment={experiment}></PixiStage>
}
