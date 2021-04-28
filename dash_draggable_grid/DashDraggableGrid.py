# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class DashDraggableGrid(Component):
    """A DashDraggableGrid component.
GridComponent is an dash component.
It takes a property, `id`, and children to
displays it.

Keyword arguments:
- children (list of a list of or a singular dash component, string or numbers | a list of or a singular dash component, string or number; optional): The children components displayed inside the grid.
- id (string; optional): The ID used to identify this component in Dash callbacks.
- label (string; optional): A label that will be printed when this component is rendered.
- editable (boolean; optional): The editing property displayed inside the grid.
- position (list; optional): The layout of the  components displayed inside the grid.
- value (string; optional): The value displayed in the input."""
    @_explicitize_args
    def __init__(self, children=None, id=Component.UNDEFINED, label=Component.UNDEFINED, editable=Component.UNDEFINED, position=Component.UNDEFINED, value=Component.UNDEFINED, className=Component.UNDEFINED, items=Component.UNDEFINED, cols=Component.UNDEFINED, rowHeight=Component.UNDEFINED, verticalCompact=Component.UNDEFINED, isDraggable=Component.UNDEFINED, isResizable=Component.UNDEFINED, preventCollision=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id', 'label', 'editable', 'position', 'value']
        self._type = 'DashDraggableGrid'
        self._namespace = 'dash_draggable_grid'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'id', 'label', 'editable', 'position', 'value']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(DashDraggableGrid, self).__init__(children=children, **args)
