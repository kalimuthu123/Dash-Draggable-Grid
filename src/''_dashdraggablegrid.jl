# AUTO GENERATED FILE - DO NOT EDIT

export ''_dashdraggablegrid

"""
    ''_dashdraggablegrid(;kwargs...)
    ''_dashdraggablegrid(children::Any;kwargs...)
    ''_dashdraggablegrid(children_maker::Function;kwargs...)


A DashDraggableGrid component.
GridComponent is an dash component.
It takes a property, `id`, and children to
displays it.
Keyword arguments:
- `children` (Array of a list of or a singular dash component, string or numbers | a list of or a singular dash component, string or number; optional): The children components displayed inside the grid.
- `id` (String; optional): The ID used to identify this component in Dash callbacks.
- `label` (String; optional): A label that will be printed when this component is rendered.
- `editable` (Bool; optional): The editing property displayed inside the grid.
- `position` (Array; optional): The layout of the  components displayed inside the grid.
- `value` (String; optional): The value displayed in the input.
"""
function ''_dashdraggablegrid(; kwargs...)
        available_props = Symbol[:children, :id, :label, :editable, :position, :value]
        wild_props = Symbol[]
        return Component("''_dashdraggablegrid", "DashDraggableGrid", "dash_draggable_grid", available_props, wild_props; kwargs...)
end

''_dashdraggablegrid(children::Any; kwargs...) = ''_dashdraggablegrid(;kwargs..., children = children)
''_dashdraggablegrid(children_maker::Function; kwargs...) = ''_dashdraggablegrid(children_maker(); kwargs...)

