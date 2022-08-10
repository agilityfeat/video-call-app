export enum IconType {
  COG = '\u2699',
  TELEPHONE = '\u260F'
}

interface IconProps {
  icon: IconType
}

const Icon = ({ icon }: IconProps) => (
  <span className="text-white text-xl">{ icon }</span>
)

export default Icon
