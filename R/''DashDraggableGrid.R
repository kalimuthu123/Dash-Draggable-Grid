# AUTO GENERATED FILE - DO NOT EDIT

''DashDraggableGrid <- function(children=NULL, id=NULL, label=NULL, editable=NULL, position=NULL, value=NULL) {
    
    props <- list(children=children, id=id, label=label, editable=editable, position=position, value=value)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'DashDraggableGrid',
        namespace = 'dash_draggable_grid',
        propNames = c('children', 'id', 'label', 'editable', 'position', 'value'),
        package = 'dashDraggableGrid'
        )

    structure(component, class = c('dash_component', 'list'))
}
