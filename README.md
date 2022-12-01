# quickcarbon backend

## General Information  

This codes created for Altensis  
Frontend of this project [link](https://github.com/uys2000-interviews/interview-005) 

## ENV Values

### Posible Values

- `PORT`
- `DEBUG`

### PORT

`PORT` : [ Number ] Shows runned funtions at console  

### DEBUG

`DEBUG` : [ true | false ] Shows runned funtions at console

## API

### **Get All Users**

Method :`GET`  
Url: `/users`

<details>
<summary>Result </summary>

```JSON
{
  "data": [
  {
      "id": 1,
      "role": "Manager",
      "capabilities": [
        "ManageBusinessUnits",
        "UploadData",
        "ReadData",
        "EditData"
      ]
    },
    {
      "id": 2,
      "role": "SystemAdmin",
      "capabilities": [
        "ManageBusinessUnits",
        "UploadData",
        "ReadData",
        "EditData"
      ]
    },
    {
      "id": 5,
      "role": "Enginer",
      "capabilities": [
        "UploadData"
      ]
    },
    {
      "id": 4,
      "role": "Marketing",
      "capabilities": [
        "EditData",
        "ManageProducts"
      ]
    },
    {
      "id": 6,
      "role": "Developer",
      "capabilities": [
        "ManageBusinessUnits",
        "UploadData",
        "ReadData",
        "EditData"
      ]
    }
  ]
}
```

</details>

### **Get User**

Method :`GET`  
Url: `/users/:id`  
`:id` represent id `index number` of user in DB

<details>
<summary>Result</summary>

```JSON
{
  "data": [
    {
      "id": 2,
      "role": "SystemAdmin",
      "capabilities": [
        "ManageBusinessUnits",
        "UploadData",
        "ReadData",
        "EditData"
      ]
    }
  ]
}
```

</details>

<details>
<summary>Not Found Error</summary>

```JSON
{
  "error": {
    "name": "QueryResultError",
    "code": 0,
    "result": {
      "command": "SELECT",
      "rowCount": 0,
      "oid": null,
      "rows": [],
      "fields": [
        {
          "name": "id",
          "tableID": 18199,
          "columnID": 1,
          "dataTypeID": 23,
          "dataTypeSize": 4,
          "dataTypeModifier": -1,
          "format": "text"
        },
        {
          "name": "role",
          "tableID": 18199,
          "columnID": 2,
          "dataTypeID": 1043,
          "dataTypeSize": -1,
          "dataTypeModifier": 104,
          "format": "text"
        },
        {
          "name": "capabilities",
          "tableID": 18199,
          "columnID": 3,
          "dataTypeID": 1009,
          "dataTypeSize": -1,
          "dataTypeModifier": -1,
          "format": "text"
        }
      ],
      "_parsers": [
        null,
        null,
        null
      ],
      "_types": {
        "_types": {
          "arrayParser": {},
          "builtins": {
            "BOOL": 16,
            "BYTEA": 17,
            "CHAR": 18,
            "INT8": 20,
            "INT2": 21,
            "INT4": 23,
            "REGPROC": 24,
            "TEXT": 25,
            "OID": 26,
            "TID": 27,
            "XID": 28,
            "CID": 29,
            "JSON": 114,
            "XML": 142,
            "PG_NODE_TREE": 194,
            "SMGR": 210,
            "PATH": 602,
            "POLYGON": 604,
            "CIDR": 650,
            "FLOAT4": 700,
            "FLOAT8": 701,
            "ABSTIME": 702,
            "RELTIME": 703,
            "TINTERVAL": 704,
            "CIRCLE": 718,
            "MACADDR8": 774,
            "MONEY": 790,
            "MACADDR": 829,
            "INET": 869,
            "ACLITEM": 1033,
            "BPCHAR": 1042,
            "VARCHAR": 1043,
            "DATE": 1082,
            "TIME": 1083,
            "TIMESTAMP": 1114,
            "TIMESTAMPTZ": 1184,
            "INTERVAL": 1186,
            "TIMETZ": 1266,
            "BIT": 1560,
            "VARBIT": 1562,
            "NUMERIC": 1700,
            "REFCURSOR": 1790,
            "REGPROCEDURE": 2202,
            "REGOPER": 2203,
            "REGOPERATOR": 2204,
            "REGCLASS": 2205,
            "REGTYPE": 2206,
            "UUID": 2950,
            "TXID_SNAPSHOT": 2970,
            "PG_LSN": 3220,
            "PG_NDISTINCT": 3361,
            "PG_DEPENDENCIES": 3402,
            "TSVECTOR": 3614,
            "TSQUERY": 3615,
            "GTSVECTOR": 3642,
            "REGCONFIG": 3734,
            "REGDICTIONARY": 3769,
            "JSONB": 3802,
            "REGNAMESPACE": 4089,
            "REGROLE": 4096
          }
        },
        "text": {},
        "binary": {}
      },
      "RowCtor": null,
      "rowAsArray": false,
      "duration": 2
    },
    "query": "SELECT * FROM users WHERE id=11;",
    "received": 0
  }
}
```

</details>

### **Add User**

Method :`POST`  
Url: `/users`  

<details>
<summary>Result </summary>

```JSON
{
  "data": true
}
```

</details>

### **Update User**

Method :`PUT`  
Url: `/users/:id`
`:id` represent id `index number` of user in DB

<details>
<summary>Body: </summary>

```typescript
class {
  user?: String,
  capabilities?: String[]

}
```  

</details>

<details>
<summary>Result</summary>

```JSON
{
  "data": [
    {
      "id": 2,
      "role": "SystemAdmin",
      "capabilities": [
        "ManageBusinessUnits",
        "UploadData",
        "ReadData",
        "EditData"
      ]
    }
  ]
}
```

</details>

### **Delete" User**

Method :`DELETE`  
Url: `/users/:id`
`:id` represent id `index number` of user in DB

<details>
<summary>Result</summary>

```JSON
{
  "data": true
}
```

