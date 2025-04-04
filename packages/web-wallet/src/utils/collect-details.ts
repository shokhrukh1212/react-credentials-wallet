export const collectSelectedDetails = (
    selectedNodes: any,
    details: any[],
    parentPath: string
) => {
    const selectedDetails: any[] = []

    details.forEach((detail) => {
        const detailPath = `${parentPath}.${detail.name.split(' ').join('_')}`

        if (selectedNodes[detailPath]) {
            // If the current detail is selected, add it to the result
            selectedDetails.push({
                name: detail.name,
                value: detail.value,
            })
        }

        // If the detail has nested items, recursively collect selected items
        if (detail.items) {
            const nestedSelectedDetails = collectSelectedDetails(
                selectedNodes,
                detail.items,
                detailPath
            )
            if (nestedSelectedDetails.length > 0) {
                selectedDetails.push({
                    name: detail.name,
                    items: nestedSelectedDetails,
                })
            }
        }
    })

    return selectedDetails
}
