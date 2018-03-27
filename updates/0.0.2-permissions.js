
exports.create = {
  Permission: [
    {
        'name': 'Role List Permissions',
        'listName': 'Role',
        'create': ['role_super'],
        'read': ['role_super'],
        'update': ['role_super'],
        'delete': ['role_super'],
        __ref: 'permission_role'
    },
    {
        'name': 'User List Permissions',
        'listName': 'User',
        'create': ['role_super'],
        'read': ['role_super'],
        'update': ['role_super'],
        'delete': ['role_super'],
        __ref: 'permission_user'
    },
    {
        'name': 'Permission List Permissions',
        'listName': 'Permission',
        'create': ['role_super'],
        'read': ['role_super'],
        'update': ['role_super'],
        'delete': ['role_super'],
        __ref: 'permission_permission'
    }
]
}
