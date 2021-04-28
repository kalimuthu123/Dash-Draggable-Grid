# AUTO GENERATED FILE - DO NOT EDIT

''DashDraggableGrid <- function(id=NULL, label=NULL, value=NULL) {
    
    props <- list(id=id, label=label, value=value)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'DashDraggableGrid',
        namespace = 'dash_draggable_grid',
        propNames = c('id', 'label', 'value'),
        package = 'dashDraggableGrid'
        )

    structure(component, class = c('dash_component', 'list'))
}
