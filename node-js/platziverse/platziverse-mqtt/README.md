# platziverse-mqtt

## 'agent/connected'

``` js
{
	agent: {
		uuid, 		// autogenerate 
		username, 	// define by configuration
		name,		// define by configuration
		hostname,	// get from OS
		pid		// get from process
	}
}

```

## 'agent/disconnected'


``` js
{
	agent: {
		uuid		// autogenerate
	}
}

```

## 'agent/message'

``` js
{
	agent,
	metrics: [],
	timestamp 	// generate when we create the message
}

```



