# Popup boxes

## Alert

**Description:** alert is popup displays message and blocks any user operation till the popup will be closed.

**Param:** {string} condition message to display in popup

**Returned value:**

```javascript
undefined;
```

**Example:**

```javascript
const callAlertMessage = message => alert(message); // display alert with passed message

console.log(callAlertMessage('message in alert popup')); // undefined
```

## Confirm

**Description:** confirm is popup displays message with accept/reject options and block any user operation till the popup will be closed. Once the confirm message will resolved/rejected the appropriate result will be returned.

**Param:** {string} condition - message to display in popup

**Returned value:** {boolean} confirm/reject from user on passed condition

**Example:**

```javascript
const isUserConfirmCondition = condition => confirm(condition);
console.log(isUserConfirmCondition('Do you agree?')); // true if user will press OK button else false

const sendNotificationIfUserAgreed = (notificationMessage, doOnApply, doOnReject) =>
    isUserConfirmCondition(notificationMessage) ? doOnApply() : doOnReject();
```

## Prompt

**Description:** prompt is popup displays message with input field and block any user operation. Once the user enter the input value the appropriate result will be returned. null will be returned if user will press cancel or close the popup.

**Param:** {string} message - message to display in popup

**Returned value:** {string | null} - entered by user value or null on cancel

**Example:**

```javascript
const getUserEnterredValue = message => prompt(message);
const getUserPrimaryLanguage = message => getUserEnterredValue(message);

console.log(getUserEnterredValue('which language is primary for you?')); // return sring with answer or null
```
