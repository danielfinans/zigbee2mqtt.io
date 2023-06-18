"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[79311],{550218:(e,t,i)=>{i.r(t),i.d(t,{data:()=>l});const l=JSON.parse('{"key":"v-61a89a9a","path":"/devices/SLT6.html","title":"Hive SLT6 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Hive SLT6 control via MQTT","description":"Integrate your Hive SLT6 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2022-02-16T14:30:02.000Z"},"excerpt":"","headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Pairing","slug":"pairing","link":"#pairing","children":[]}]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Battery (numeric)","slug":"battery-numeric","link":"#battery-numeric","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1687077942000},"filePathRelative":"devices/SLT6.md"}')},614456:(e,t,i)=>{i.r(t),i.d(t,{default:()=>v});var l=i(166252);const n=(0,l._)("h1",{id:"hive-slt6",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#hive-slt6","aria-hidden":"true"},"#"),(0,l.Uk)(" Hive SLT6")],-1),a=(0,l._)("thead",null,[(0,l._)("tr",null,[(0,l._)("th"),(0,l._)("th")])],-1),o=(0,l._)("tr",null,[(0,l._)("td",null,"Model"),(0,l._)("td",null,"SLT6")],-1),r=(0,l._)("td",null,"Vendor",-1),d=(0,l._)("tr",null,[(0,l._)("td",null,"Description"),(0,l._)("td",null,"Heating thermostat remote control")],-1),h=(0,l._)("tr",null,[(0,l._)("td",null,"Exposes"),(0,l._)("td",null,"battery, linkquality")],-1),s=(0,l._)("tr",null,[(0,l._)("td",null,"Picture"),(0,l._)("td",null,[(0,l._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/SLT6.jpg",alt:"Hive SLT6"})])],-1),u=(0,l.uE)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing" aria-hidden="true">#</a> Pairing</h3><ol><li>Remove the thermostat (SLT) from the wall and remove a battery to turn it off.</li><li>Turn boiler off at the mains in order to turn off the hive receiver (SLR).</li><li>Turn the boiler on and receiver.</li><li>Hold down the central heating button for 10 seconds on the Hive receiver until light turns pink, then release.</li><li>Hold down the central heating button again until the light turns amber with double flashing.</li><li>Pair with Zigbee2mqtt using &quot;Permit Join (all)&quot;.</li><li>The amber double flash may change to a single flash.</li><li>The receiver will be added to zigbee2mqtt. Rename it to something like &quot;Hive Receiver&quot;.</li><li>Replace the battery in the thermostat and allow to boot.</li><li>Press and hold the menu and back buttons to factory reset the device. Allow the countdown to finish and release when you see the device information display followed by the &#39;Hive&#39; logo, it will now enter pairing mode.</li><li>In Zigbee2Mqtt use the dropdown arrow next to &quot;Permit Join&quot; to select the Hive receiver device you added earlier.</li><li>Start pairing with the newly labelled &quot;Permit join (Hive Receiver)&quot; button.</li><li>Wait around 30 seconds</li><li>The thermostat should now pair to the boiler receiver. The amber light should turn green, and the thermostat will go through the getting started wizard.</li></ol>',3),c=(0,l.uE)('<h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric" aria-hidden="true">#</a> Battery (numeric)</h3><p>Remaining battery in %, can take up to 24 hours before reported.. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',5),m={},v=(0,i(983744).Z)(m,[["render",function(e,t){const i=(0,l.up)("RouterLink");return(0,l.wg)(),(0,l.iD)("div",null,[(0,l.kq)(" !!!! "),(0,l.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,l.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,l.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,l.kq)(" !!!! "),n,(0,l._)("table",null,[a,(0,l._)("tbody",null,[o,(0,l._)("tr",null,[r,(0,l._)("td",null,[(0,l.Wm)(i,{to:"/supported-devices/#v=Hive"},{default:(0,l.w5)((()=>[(0,l.Uk)("Hive")])),_:1})])]),d,h,s])]),(0,l.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),u,(0,l.kq)(" Notes END: Do not edit below this line "),c])}]])}}]);