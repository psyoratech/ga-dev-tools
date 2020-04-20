declare module "*.svg" {
  import { HTMLAttributes, SVGAttributes } from "react"
  const value: React.ComponentType<
    HTMLAttributes<SVGElement> & { viewBox?: string }
  >
  export default value
}
