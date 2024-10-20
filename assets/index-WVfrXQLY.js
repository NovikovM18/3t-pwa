import{B as o,l as u,n as i,o as p,c as r,m as c,r as d}from"./index-DMgxRNf1.js";var f=function(n){var t=n.dt;return`
.p-inputtext {
    font-family: inherit;
    font-feature-settings: inherit;
    font-size: 1rem;
    color: `.concat(t("inputtext.color"),`;
    background: `).concat(t("inputtext.background"),`;
    padding: `).concat(t("inputtext.padding.y")," ").concat(t("inputtext.padding.x"),`;
    border: 1px solid `).concat(t("inputtext.border.color"),`;
    transition: background `).concat(t("inputtext.transition.duration"),", color ").concat(t("inputtext.transition.duration"),", border-color ").concat(t("inputtext.transition.duration"),", outline-color ").concat(t("inputtext.transition.duration"),", box-shadow ").concat(t("inputtext.transition.duration"),`;
    appearance: none;
    border-radius: `).concat(t("inputtext.border.radius"),`;
    outline-color: transparent;
    box-shadow: `).concat(t("inputtext.shadow"),`;
}

.p-inputtext:enabled:hover {
    border-color: `).concat(t("inputtext.hover.border.color"),`;
}

.p-inputtext:enabled:focus {
    border-color: `).concat(t("inputtext.focus.border.color"),`;
    box-shadow: `).concat(t("inputtext.focus.ring.shadow"),`;
    outline: `).concat(t("inputtext.focus.ring.width")," ").concat(t("inputtext.focus.ring.style")," ").concat(t("inputtext.focus.ring.color"),`;
    outline-offset: `).concat(t("inputtext.focus.ring.offset"),`;
}

.p-inputtext.p-invalid {
    border-color: `).concat(t("inputtext.invalid.border.color"),`;
}

.p-inputtext.p-variant-filled {
    background: `).concat(t("inputtext.filled.background"),`;
}

.p-inputtext.p-variant-filled:enabled:hover {
    background: `).concat(t("inputtext.filled.hover.background"),`;
}

.p-inputtext.p-variant-filled:enabled:focus {
    background: `).concat(t("inputtext.filled.focus.background"),`;
}

.p-inputtext:disabled {
    opacity: 1;
    background: `).concat(t("inputtext.disabled.background"),`;
    color: `).concat(t("inputtext.disabled.color"),`;
}

.p-inputtext::placeholder {
    color: `).concat(t("inputtext.placeholder.color"),`;
}

.p-inputtext-sm {
    font-size: `).concat(t("inputtext.sm.font.size"),`;
    padding: `).concat(t("inputtext.sm.padding.y")," ").concat(t("inputtext.sm.padding.x"),`;
}

.p-inputtext-lg {
    font-size: `).concat(t("inputtext.lg.font.size"),`;
    padding: `).concat(t("inputtext.lg.padding.y")," ").concat(t("inputtext.lg.padding.x"),`;
}

.p-inputtext-fluid {
    width: 100%;
}
`)},b={root:function(n){var t=n.instance,l=n.props;return["p-inputtext p-component",{"p-filled":t.filled,"p-inputtext-sm":l.size==="small","p-inputtext-lg":l.size==="large","p-invalid":l.invalid,"p-variant-filled":l.variant?l.variant==="filled":t.$primevue.config.inputStyle==="filled"||t.$primevue.config.inputVariant==="filled","p-inputtext-fluid":t.hasFluid}]}},h=o.extend({name:"inputtext",theme:f,classes:b}),x={name:"BaseInputText",extends:i,props:{modelValue:null,size:{type:String,default:null},invalid:{type:Boolean,default:!1},variant:{type:String,default:null},fluid:{type:Boolean,default:null}},style:h,provide:function(){return{$pcInputText:this,$parentInstance:this}}},v={name:"InputText",extends:x,inheritAttrs:!1,emits:["update:modelValue"],inject:{$pcFluid:{default:null}},methods:{getPTOptions:function(n){var t=n==="root"?this.ptmi:this.ptm;return t(n,{context:{filled:this.filled,disabled:this.$attrs.disabled||this.$attrs.disabled===""}})},onInput:function(n){this.$emit("update:modelValue",n.target.value)}},computed:{filled:function(){return this.modelValue!=null&&this.modelValue.toString().length>0},hasFluid:function(){return u(this.fluid)?!!this.$pcFluid:this.fluid}}},g=["value","aria-invalid"];function m(a,n,t,l,s,e){return p(),r("input",c({type:"text",class:a.cx("root"),value:a.modelValue,"aria-invalid":a.invalid||void 0,onInput:n[0]||(n[0]=function(){return e.onInput&&e.onInput.apply(e,arguments)})},e.getPTOptions("root")),null,16,g)}v.render=m;var y=function(n){var t=n.dt;return`
.p-floatlabel {
    display: block;
    position: relative;
}

.p-floatlabel label {
    position: absolute;
    pointer-events: none;
    top: 50%;
    transform: translateY(-50%);
    transition-property: all;
    transition-timing-function: ease;
    line-height: 1;
    font-weight: `.concat(t("floatlabel.font.weight"),`;
    left: `).concat(t("floatlabel.position.x"),`;
    color: `).concat(t("floatlabel.color"),`;
    transition-duration: `).concat(t("floatlabel.transition.duration"),`;
}

.p-floatlabel:has(.p-textarea) label {
    top: `).concat(t("floatlabel.position.y"),`;
    transform: translateY(0);
}

.p-floatlabel:has(.p-inputicon:first-child) label {
     left: calc((`).concat(t("form.field.padding.x")," * 2) + ").concat(t("icon.size"),`);
}

.p-floatlabel:has(.p-invalid) label {
    color: `).concat(t("floatlabel.invalid.color"),`;
}

.p-floatlabel:has(input:focus) label,
.p-floatlabel:has(input.p-filled) label,
.p-floatlabel:has(input:-webkit-autofill) label,
.p-floatlabel:has(textarea:focus) label,
.p-floatlabel:has(textarea.p-filled) label,
.p-floatlabel:has(.p-inputwrapper-focus) label,
.p-floatlabel:has(.p-inputwrapper-filled) label {
    top: `).concat(t("floatlabel.over.active.top"),`;
    transform: translateY(0);
    font-size: `).concat(t("floatlabel.active.font.size"),`;
    font-weight: `).concat(t("floatlabel.label.active.font.weight"),`;
}

.p-floatlabel:has(input.p-filled) label,
.p-floatlabel:has(textarea.p-filled) label,
.p-floatlabel:has(.p-inputwrapper-filled) label {
    color: `).concat(t("floatlabel.active.color"),`;
}

.p-floatlabel:has(input:focus) label,
.p-floatlabel:has(input:-webkit-autofill) label,
.p-floatlabel:has(textarea:focus) label ,
.p-floatlabel:has(.p-inputwrapper-focus) label  {
    color: `).concat(t("floatlabel.focus.color"),`;
}

/*.p-floatlabel .p-placeholder,
.p-floatlabel input::placeholder,
.p-floatlabel .p-inputtext::placeholder {
    opacity: 0;
    transition-property: all;
    transition-timing-function: ease;
}

.p-floatlabel .p-focus .p-placeholder,
.p-floatlabel input:focus::placeholder,
.p-floatlabel .p-inputtext:focus::placeholder {
    opacity: 1;
    transition-property: all;
    transition-timing-function: ease;
}*/

.p-floatlabel-in .p-inputtext,
.p-floatlabel-in .p-textarea,
.p-floatlabel-in .p-select-label,
.p-floatlabel-in .p-multiselect-label,
.p-floatlabel-in .p-autocomplete-input-multiple,
.p-floatlabel-in .p-cascadeselect-label,
.p-floatlabel-in .p-treeselect-label {
    padding-top: `).concat(t("floatlabel.in.input.padding.top"),`;
    padding-bottom: `).concat(t("floatlabel.in.input.padding.bottom"),`;
}

.p-floatlabel-in:has(input:focus) label,
.p-floatlabel-in:has(input.p-filled) label,
.p-floatlabel-in:has(input:-webkit-autofill) label,
.p-floatlabel-in:has(textarea:focus) label,
.p-floatlabel-in:has(textarea.p-filled) label,
.p-floatlabel-in:has(.p-inputwrapper-focus) label,
.p-floatlabel-in:has(.p-inputwrapper-filled) label {
    top: `).concat(t("floatlabel.in.active.top"),`;
}

.p-floatlabel-on:has(input:focus) label,
.p-floatlabel-on:has(input.p-filled) label,
.p-floatlabel-on:has(input:-webkit-autofill) label,
.p-floatlabel-on:has(textarea:focus) label,
.p-floatlabel-on:has(textarea.p-filled) label,
.p-floatlabel-on:has(.p-inputwrapper-focus) label,
.p-floatlabel-on:has(.p-inputwrapper-filled) label {
    top: 0;
    transform: translateY(-50%);
    border-radius: `).concat(t("floatlabel.on.border.radius"),`;
    background: `).concat(t("floatlabel.on.active.background"),`;
    padding: `).concat(t("floatlabel.on.active.padding"),`;
}
`)},$={root:function(n){n.instance;var t=n.props;return["p-floatlabel",{"p-floatlabel-over":t.variant==="over","p-floatlabel-on":t.variant==="on","p-floatlabel-in":t.variant==="in"}]}},w=o.extend({name:"floatlabel",theme:y,classes:$}),k={name:"BaseFloatLabel",extends:i,props:{variant:{type:String,default:"over"}},style:w,provide:function(){return{$pcFloatLabel:this,$parentInstance:this}}},z={name:"FloatLabel",extends:k,inheritAttrs:!1};function I(a,n,t,l,s,e){return p(),r("span",c({class:a.cx("root")},a.ptmi("root")),[d(a.$slots,"default")],16)}z.render=I;export{z as a,v as s};
