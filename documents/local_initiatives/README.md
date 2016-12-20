# Local Initiatives Directory

This is a basic list of local initiatives across the world. If you find a new
active initiative, we'd like to add it to the list. You may either file an
issue to add or remove initiatives or you can do your own pull request with the
group information.

## Guidelines

You need three things to list a group in the directory.

1.  Group location (city or region, if variable)
2.  Event/group name
3.  Contact point - Please do not list organizers' personal info here. Either link to a group's web/meetup site or list a public profile only. Twitter or Github are usually best for this. PRs with private info will be asked to be edited

## Submitting your initiative

If you want to submit an initiative you're a part of, or know someone who is a part of, you can add it to the list by submitting a PR to the [documents/local_iniatives/current-initiatives.md](./current-initiatives.md) file in this repository.

### What should I submit in a PR?

The initiative directory should follow the format below:

```
# Country OR Major Region
## More Specific Region

Location | Event | Website | Contact Point
-------- | ----- | ------- | -------------
Event Location  | Event Name | <Event Link> | Contact Method Name: Contact Method Address
```

Where...
* `Country OR Major Region` is the name of the country or region events below would take place in. Some examples are `North America`, `Europe`, `Australia`, `Asia`, and so on.
* `More Specific Region` is a more specific geographic area, like `Missouri`, `Ontario`, `Queensland`, and so on.
* `Event Location` is the city, town, or village that the event is taking place in.
* `Event Name` is the name of the event.
* `<Event Link>` is an address where details about the event can be found.
* `Contact Method Name` is the name of the medium the contact point can be found at - i.e. Twitter, Facebook, and others.
* `Contact Method Address` The address of the public profile for person representing the contact point 

### Adding a `Country OR Major Region`, `More Specific Region`, and an event:
You should add in a full section, including the `Country OR Major Region`, `More Specific Region`, events table, and an event belowevents table, and an event below to the [documents/initiatives/current-initiatives.md](./current-initiatives.md) file, filling in the appropriate information:

```
# Country OR Major Region
## More Specific Region

Location | Event | Website | Contact Point
-------- | ----- | ------- | -------------
Event Location  | Event Name | <Event Link> | Contact Method Name: Contact Method Address
```

### Adding a `More Specific Region` and an event to an `Country OR Major Region` that *already exists*:
You should add in a `More Specific Region` section, events table, and an event below the appropriate `Country OR Major Region` in the [documents/local_iniatives/current-initiatives.md](./current-initiatives.md) file, filling out the correct details in this template:

```
## More Specific Region

Location | Event | Website | Contact Point
-------- | ----- | ------- | -------------
Event Location  | Event Name | <Event Link> | Contact Method Name: Contact Method Address
```

### Adding an event to a `More Specific Region` that *already exists*:
To add a new event to a the appropriate `More Specific Region` section, in the [documents/local_iniatives/current-initiatives.md](./current-initiatives.md) file, simply fill out the appropriate information in the template below and add it on a new line *after* the last event listed in the events table for the appropriate `More Specific Region`:

```
Event Location  | Event Name | <Event Link> | Contact Method Name: Contact Method Address
```

## Example Submission:

```
# North America
## Massachusetts, United States

Location | Event | Website | Contact Point
-------- | ----- | ------- | -------------
Boston  | Node BOS | <https://nodebos.com> | Twitter: @bitandbang
```

Which would result in:

# North America
## Massachusetts, United States

Location | Event | Website | Contact Point
-------- | ----- | ------- | -------------
Boston  | Node BOS | <https://nodebos.com> | Twitter: @bitandbang