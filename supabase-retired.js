/* The site's Supabase database (RPRN) was retired in Nov 2026; its data is archived offline.
   Email signups now go through the EmailOctopus form on index.html#signup and altadena_action_app.html.
   This shim catches the remaining old database calls so pages keep working:
   - activity logging (calls / letters built / builder "join" checkbox) -> skipped
   - counters -> final archived totals
   - closed forms (feedback, sign-on, priorities, petition) -> 410, so the page shows its error message */
(function () {
  var SB_HOST = 'vmjauvdrxzjxzfjrlevv.supabase.co';
  var FINAL = { sb1090_call_count: 4425, petition_count: 0, signups_count: 2267 };

  function ok(body) {
    return Promise.resolve(new Response(body === undefined ? '' : JSON.stringify(body),
      { status: body === undefined ? 201 : 200, headers: { 'Content-Type': 'application/json' } }));
  }
  function closed() { return Promise.resolve(new Response('closed', { status: 410 })); }

  var realFetch = window.fetch.bind(window);
  window.fetch = function (input, init) {
    var url = typeof input === 'string' ? input : (input && input.url) || '';
    if (url.indexOf(SB_HOST) === -1) return realFetch(input, init);

    var path = url.split(SB_HOST)[1] || '';
    var rpc = (path.match(/\/rest\/v1\/rpc\/([a-z0-9_]+)/) || [])[1] || '';
    var table = (path.match(/\/rest\/v1\/([a-z0-9_]+)/) || [])[1] || '';

    if (rpc) return rpc in FINAL ? ok(FINAL[rpc]) : closed();
    if (table === 'outreach_log' || table === 'builder_events' || table === 'signups') return ok();
    if (table === 'sb1090_signon_public') return ok([]);
    return closed();
  };
})();
