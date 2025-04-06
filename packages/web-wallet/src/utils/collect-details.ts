export const collectSelectedDetails = (
    selectedNodes: any,
    details: any[],
    parentPath: string
) => {
    const selectedDetails: any[] = []

    details.forEach((detail) => {
        // TODO: it looks like split, join appears in multiple places, it would be good to put this logic
        // in a function with a readable, descriptive name and re-use this function
        const detailPath = `${parentPath}.${detail.name.split(' ').join('_')}`

        if (selectedNodes[detailPath]) {
            // TODO: generally speaking, if you have a lot of explanatory comments,
            // it means that you are probably doing something wrong. You should try to make your code understandable
            // by breaking it down using descriptive function and variable names, instead of comments.
            // Comments should describe any edge cases and strange stuff and should be rare.

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
