import { FC } from "react"
import { formatModifiedDate, formatFileSize } from "@/utils"
import { FileItemChild } from "./FileItem"

interface FolderListLayoutProps {
  name: string
  modified: string
  size: number
  isFile: boolean
  actions?: React.ReactNode
  onClick?: () => void
}

export const FolderListLayout: FC<FolderListLayoutProps> = ({
  name,
  modified,
  size,
  isFile,
  actions,
  onClick,
}) => {
  return (
    <div 
      className="grid grid-cols-12 gap-4 py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-800 w-full"
      onClick={onClick}
    >
      {/* Nombre - 70% de ancho */}
      <div className="col-span-8 min-w-0">
        <FileItemChild 
          name={name} 
          folder={!isFile} 
          className="truncate max-w-full"
        />
      </div>
      
      {/* Fecha - 10% de ancho */}
      <div className="col-span-1 text-sm text-gray-500 dark:text-gray-400 min-w-0 truncate">
        {formatModifiedDate(modified)}
      </div>
      
      {/* Tamaño - 15% de ancho */}
      <div className="col-span-2 text-sm text-gray-500 dark:text-gray-400">
        {isFile ? formatFileSize(size) : "--"}
      </div>
      
      {/* Acciones - 5% de ancho */}
      <div className="col-span-1 flex justify-end">
        {actions}
      </div>
    </div>
  )
}
