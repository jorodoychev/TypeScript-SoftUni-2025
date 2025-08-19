function unknownResponse(response: unknown):string {
   if ('value' in (response as any) && typeof (response as any).value === 'string') {
       return (response as any).value
   }
       return '-'
}

console.log(unknownResponse({ code: 301, text: 'Moved Permanently', value: 'New Url' }))
console.log(unknownResponse({ code: 200, text: 'Ok', value: [1, 2, 3] }))
