export type TBreadcrumb = {
    route: string
    name: string
}

export type TBreadcrumbsProps = {
    breadcrumbs: TBreadcrumb[]
    className?: string
}
