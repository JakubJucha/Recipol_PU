import {
  zindexutils
} from "./chunk-TPQC65W5.js";
import {
  Button,
  ButtonModule
} from "./chunk-UZVDC6VM.js";
import "./chunk-IZSVUOEE.js";
import "./chunk-NJBNAETI.js";
import {
  ConnectedOverlayScrollHandler
} from "./chunk-5G7WYC4N.js";
import "./chunk-EGARYVJ6.js";
import "./chunk-7BG4DHV3.js";
import {
  animate,
  state,
  style,
  transition,
  trigger
} from "./chunk-PMRUSLJV.js";
import {
  BaseComponent
} from "./chunk-4GGIPR2M.js";
import {
  BaseStyle
} from "./chunk-IMNIVTG2.js";
import {
  ConfirmationService,
  OverlayService,
  PrimeTemplate,
  SharedModule,
  TranslationKeys,
  absolutePosition,
  addClass,
  findSingle,
  getOffset,
  isIOS,
  isTouchDevice
} from "./chunk-WHQK5YSC.js";
import {
  CommonModule,
  DOCUMENT,
  NgClass,
  NgIf,
  NgStyle,
  NgTemplateOutlet
} from "./chunk-H2YQJIJ7.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  ContentChildren,
  ElementRef,
  EventEmitter,
  HostListener,
  Inject,
  Injectable,
  Input,
  NgModule,
  Renderer2,
  ViewEncapsulation,
  booleanAttribute,
  inject,
  numberAttribute,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵInputTransformsFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵrestoreView,
  ɵɵsetNgModuleScope,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-G3QM5VQQ.js";
import "./chunk-WDMUDEB6.js";

// node_modules/primeng/fesm2022/primeng-confirmpopup.mjs
var theme = ({
  dt
}) => `
.p-confirmpopup {
    position: absolute;
    margin-top: ${dt("confirmpopup.gutter")};
    top: 0;
    left: 0;
    background: ${dt("confirmpopup.background")};
    color: ${dt("confirmpopup.color")};
    border: 1px solid ${dt("confirmpopup.border.color")};
    border-radius: ${dt("confirmpopup.border.radius")};
    box-shadow: ${dt("confirmpopup.shadow")};
}

.p-confirmpopup-content {
    display: flex;
    align-items: center;
    padding: ${dt("confirmpopup.content.padding")};
    gap: ${dt("confirmpopup.content.gap")};
}

.p-confirmpopup-icon {
    font-size: ${dt("confirmpopup.icon.size")};
    width: ${dt("confirmpopup.icon.size")};
    height: ${dt("confirmpopup.icon.size")};
    color: ${dt("confirmpopup.icon.color")};
}

.p-confirmpopup-footer {
    display: flex;
    justify-content: flex-end;
    gap: ${dt("confirmpopup.footer.gap")};
    padding: ${dt("confirmpopup.footer.padding")};
}

.p-confirmpopup-footer button {
    width: auto;
}

.p-confirmpopup-footer button:last-child {
    margin: 0;
}

.p-confirmpopup-flipped {
    margin-top: calc(${dt("confirmpopup.gutter")} * -1);
    margin-bottom: ${dt("confirmpopup.gutter")};
}

.p-confirmpopup-enter-from {
    opacity: 0;
    transform: scaleY(0.8);
}

.p-confirmpopup-leave-to {
    opacity: 0;
}

.p-confirmpopup-enter-active {
    transition: transform 0.12s cubic-bezier(0, 0, 0.2, 1), opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
}

.p-confirmpopup-leave-active {
    transition: opacity 0.1s linear;
}

.p-confirmpopup:after,
.p-confirmpopup:before {
    bottom: 100%;
    left: ${dt("confirmpopup.arrow.offset")};
    content: " ";
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
}

.p-confirmpopup:after {
    border-width: calc(${dt("confirmpopup.gutter")} - 2px);
    margin-left: calc(-1 * (${dt("confirmpopup.gutter")} - 2px));
    border-style: solid;
    border-color: transparent;
    border-bottom-color: ${dt("confirmpopup.background")};
}

.p-confirmpopup:before {
    border-width: ${dt("confirmpopup.gutter")};
    margin-left: calc(-1 * ${dt("confirmpopup.gutter")});
    border-style: solid;
    border-color: transparent;
    border-bottom-color: ${dt("confirmpopup.border.color")};
}

.p-confirmpopup-flipped:after,
.p-confirmpopup-flipped:before {
    bottom: auto;
    top: 100%;
}

.p-confirmpopup-flipped:after {
    border-bottom-color: transparent;
    border-top-color: ${dt("confirmpopup.background")};
}

.p-confirmpopup-flipped:before {
    border-bottom-color: transparent;
    border-top-color: ${dt("confirmpopup.border.color")};
}
`;
var classes = {
  root: "p-confirmpopup p-component",
  content: "p-confirmpopup-content",
  icon: "p-confirmpopup-icon",
  message: "p-confirmpopup-message",
  footer: "p-confirmpopup-footer",
  pcRejectButton: "p-confirmpopup-reject-button",
  pcAcceptButton: "p-confirmpopup-accept-button"
};
var ConfirmPopupStyle = class _ConfirmPopupStyle extends BaseStyle {
  name = "confirmpopup";
  theme = theme;
  classes = classes;
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵConfirmPopupStyle_BaseFactory;
    return function ConfirmPopupStyle_Factory(__ngFactoryType__) {
      return (ɵConfirmPopupStyle_BaseFactory || (ɵConfirmPopupStyle_BaseFactory = ɵɵgetInheritedFactory(_ConfirmPopupStyle)))(__ngFactoryType__ || _ConfirmPopupStyle);
    };
  })();
  static ɵprov = ɵɵdefineInjectable({
    token: _ConfirmPopupStyle,
    factory: _ConfirmPopupStyle.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfirmPopupStyle, [{
    type: Injectable
  }], null, null);
})();
var ConfirmPopupClasses;
(function(ConfirmPopupClasses2) {
  ConfirmPopupClasses2["root"] = "p-confirmpopup";
  ConfirmPopupClasses2["content"] = "p-confirmpopup-content";
  ConfirmPopupClasses2["icon"] = "p-confirmpopup-icon";
  ConfirmPopupClasses2["message"] = "p-confirmpopup-message";
  ConfirmPopupClasses2["footer"] = "p-confirmpopup-footer";
  ConfirmPopupClasses2["pcRejectButton"] = "p-confirmpopup-reject-button";
  ConfirmPopupClasses2["pcAcceptButton"] = "p-confirmpopup-accept-button";
})(ConfirmPopupClasses || (ConfirmPopupClasses = {}));
var _c0 = ["content"];
var _c1 = ["accepticon"];
var _c2 = ["rejecticon"];
var _c3 = ["headless"];
var _c4 = (a0, a1) => ({
  showTransitionParams: a0,
  hideTransitionParams: a1
});
var _c5 = (a0) => ({
  value: "open",
  params: a0
});
var _c6 = (a0) => ({
  $implicit: a0
});
function ConfirmPopup_div_0_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function ConfirmPopup_div_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, ConfirmPopup_div_0_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 8);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.headlessTemplate || ctx_r1._headlessTemplate)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c6, ctx_r1.confirmation));
  }
}
function ConfirmPopup_div_0_ng_template_2_ng_container_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function ConfirmPopup_div_0_ng_template_2_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, ConfirmPopup_div_0_ng_template_2_ng_container_2_ng_container_1_Template, 1, 0, "ng-container", 8);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.contentTemplate || ctx_r1._contentTemplate)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c6, ctx_r1.confirmation));
  }
}
function ConfirmPopup_div_0_ng_template_2_ng_template_3_i_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "i", 15);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(4);
    ɵɵclassMap(ctx_r1.confirmation == null ? null : ctx_r1.confirmation.icon);
    ɵɵproperty("ngClass", "p-confirmpopup-icon");
  }
}
function ConfirmPopup_div_0_ng_template_2_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, ConfirmPopup_div_0_ng_template_2_ng_template_3_i_0_Template, 1, 3, "i", 13);
    ɵɵelementStart(1, "span", 14);
    ɵɵtext(2);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵproperty("ngIf", ctx_r1.confirmation == null ? null : ctx_r1.confirmation.icon);
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r1.confirmation == null ? null : ctx_r1.confirmation.message);
  }
}
function ConfirmPopup_div_0_ng_template_2_p_button_6_i_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "i");
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(4);
    ɵɵclassMap(ctx_r1.confirmation == null ? null : ctx_r1.confirmation.rejectIcon);
  }
}
function ConfirmPopup_div_0_ng_template_2_p_button_6_2_ng_template_0_Template(rf, ctx) {
}
function ConfirmPopup_div_0_ng_template_2_p_button_6_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, ConfirmPopup_div_0_ng_template_2_p_button_6_2_ng_template_0_Template, 0, 0, "ng-template", null, 3, ɵɵtemplateRefExtractor);
  }
}
function ConfirmPopup_div_0_ng_template_2_p_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "p-button", 16);
    ɵɵlistener("onClick", function ConfirmPopup_div_0_ng_template_2_p_button_6_Template_p_button_onClick_0_listener() {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.onReject());
    });
    ɵɵtemplate(1, ConfirmPopup_div_0_ng_template_2_p_button_6_i_1_Template, 1, 2, "i", 17)(2, ConfirmPopup_div_0_ng_template_2_p_button_6_2_Template, 2, 0, null, 18);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵproperty("label", ctx_r1.rejectButtonLabel)("ngClass", "p-confirmpopup-reject-button")("styleClass", ctx_r1.confirmation == null ? null : ctx_r1.confirmation.rejectButtonStyleClass)("size", (ctx_r1.confirmation.rejectButtonProps == null ? null : ctx_r1.confirmation.rejectButtonProps.size) || "small")("text", (ctx_r1.confirmation.rejectButtonProps == null ? null : ctx_r1.confirmation.rejectButtonProps.text) || false)("buttonProps", ctx_r1.getRejectButtonProps());
    ɵɵattribute("aria-label", ctx_r1.rejectButtonLabel);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.confirmation == null ? null : ctx_r1.confirmation.rejectIcon)("ngIfElse", ctx_r1.rejecticon);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.rejectIconTemplate || ctx_r1._rejectIconTemplate);
  }
}
function ConfirmPopup_div_0_ng_template_2_p_button_7_i_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "i");
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(4);
    ɵɵclassMap(ctx_r1.confirmation == null ? null : ctx_r1.confirmation.acceptIcon);
  }
}
function ConfirmPopup_div_0_ng_template_2_p_button_7_2_ng_template_0_Template(rf, ctx) {
}
function ConfirmPopup_div_0_ng_template_2_p_button_7_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, ConfirmPopup_div_0_ng_template_2_p_button_7_2_ng_template_0_Template, 0, 0, "ng-template", null, 4, ɵɵtemplateRefExtractor);
  }
}
function ConfirmPopup_div_0_ng_template_2_p_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "p-button", 19);
    ɵɵlistener("onClick", function ConfirmPopup_div_0_ng_template_2_p_button_7_Template_p_button_onClick_0_listener() {
      ɵɵrestoreView(_r4);
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.onAccept());
    });
    ɵɵtemplate(1, ConfirmPopup_div_0_ng_template_2_p_button_7_i_1_Template, 1, 2, "i", 17)(2, ConfirmPopup_div_0_ng_template_2_p_button_7_2_Template, 2, 0, null, 18);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵproperty("label", ctx_r1.acceptButtonLabel)("ngClass", "p-confirmpopup-accept-button")("styleClass", ctx_r1.confirmation == null ? null : ctx_r1.confirmation.acceptButtonStyleClass)("size", (ctx_r1.confirmation.acceptButtonProps == null ? null : ctx_r1.confirmation.acceptButtonProps.size) || "small")("buttonProps", ctx_r1.getAcceptButtonProps());
    ɵɵattribute("aria-label", ctx_r1.acceptButtonLabel);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.confirmation == null ? null : ctx_r1.confirmation.acceptIcon)("ngIfElse", ctx_r1.accepticontemplate);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.acceptIconTemplate || ctx_r1._acceptIconTemplate);
  }
}
function ConfirmPopup_div_0_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 9, 1);
    ɵɵtemplate(2, ConfirmPopup_div_0_ng_template_2_ng_container_2_Template, 2, 4, "ng-container", 7)(3, ConfirmPopup_div_0_ng_template_2_ng_template_3_Template, 3, 2, "ng-template", null, 2, ɵɵtemplateRefExtractor);
    ɵɵelementEnd();
    ɵɵelementStart(5, "div", 10);
    ɵɵtemplate(6, ConfirmPopup_div_0_ng_template_2_p_button_6_Template, 3, 10, "p-button", 11)(7, ConfirmPopup_div_0_ng_template_2_p_button_7_Template, 3, 9, "p-button", 12);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const withoutContentTemplate_r5 = ɵɵreference(4);
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r1.contentTemplate || ctx_r1._contentTemplate)("ngIfElse", withoutContentTemplate_r5);
    ɵɵadvance(4);
    ɵɵproperty("ngIf", (ctx_r1.confirmation == null ? null : ctx_r1.confirmation.rejectVisible) !== false);
    ɵɵadvance();
    ɵɵproperty("ngIf", (ctx_r1.confirmation == null ? null : ctx_r1.confirmation.acceptVisible) !== false);
  }
}
function ConfirmPopup_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 6);
    ɵɵlistener("click", function ConfirmPopup_div_0_Template_div_click_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onOverlayClick($event));
    })("@animation.start", function ConfirmPopup_div_0_Template_div_animation_animation_start_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onAnimationStart($event));
    })("@animation.done", function ConfirmPopup_div_0_Template_div_animation_animation_done_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onAnimationEnd($event));
    });
    ɵɵtemplate(1, ConfirmPopup_div_0_ng_container_1_Template, 2, 4, "ng-container", 7)(2, ConfirmPopup_div_0_ng_template_2_Template, 8, 4, "ng-template", null, 0, ɵɵtemplateRefExtractor);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const notHeadless_r6 = ɵɵreference(3);
    const ctx_r1 = ɵɵnextContext();
    ɵɵclassMap(ctx_r1.styleClass);
    ɵɵproperty("ngClass", "p-confirmpopup p-component")("ngStyle", ctx_r1.style)("@animation", ɵɵpureFunction1(10, _c5, ɵɵpureFunction2(7, _c4, ctx_r1.showTransitionOptions, ctx_r1.hideTransitionOptions)));
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.headlessTemplate || ctx_r1._headlessTemplate)("ngIfElse", notHeadless_r6);
  }
}
var ConfirmPopup = class _ConfirmPopup extends BaseComponent {
  el;
  confirmationService;
  renderer;
  cd;
  overlayService;
  document;
  /**
   * Optional key to match the key of confirm object, necessary to use when component tree has multiple confirm dialogs.
   * @group Props
   */
  key;
  /**
   * Element to receive the focus when the popup gets visible, valid values are "accept", "reject", and "none".
   * @group Props
   */
  defaultFocus = "accept";
  /**
   * Transition options of the show animation.
   * @group Props
   */
  showTransitionOptions = ".12s cubic-bezier(0, 0, 0.2, 1)";
  /**
   * Transition options of the hide animation.
   * @group Props
   */
  hideTransitionOptions = ".1s linear";
  /**
   * Whether to automatically manage layering.
   * @group Props
   */
  autoZIndex = true;
  /**
   * Base zIndex value to use in layering.
   * @group Props
   */
  baseZIndex = 0;
  /**
   * Inline style of the component.
   * @group Props
   */
  style;
  /**
   * Style class of the component.
   * @group Props
   */
  styleClass;
  /**
   * Defines if the component is visible.
   * @group Props
   */
  get visible() {
    return this._visible;
  }
  set visible(value) {
    this._visible = value;
    this.cd.markForCheck();
  }
  container;
  subscription;
  confirmation;
  contentTemplate;
  acceptIconTemplate;
  rejectIconTemplate;
  headlessTemplate;
  _contentTemplate;
  _acceptIconTemplate;
  _rejectIconTemplate;
  _headlessTemplate;
  _visible;
  documentClickListener;
  documentResizeListener;
  scrollHandler;
  window;
  _componentStyle = inject(ConfirmPopupStyle);
  constructor(el, confirmationService, renderer, cd, overlayService, document) {
    super();
    this.el = el;
    this.confirmationService = confirmationService;
    this.renderer = renderer;
    this.cd = cd;
    this.overlayService = overlayService;
    this.document = document;
    this.window = this.document.defaultView;
    this.subscription = this.confirmationService.requireConfirmation$.subscribe((confirmation) => {
      if (!confirmation) {
        this.hide();
        return;
      }
      if (confirmation.key === this.key) {
        this.confirmation = confirmation;
        const keys = Object.keys(confirmation);
        keys.forEach((key) => {
          this[key] = confirmation[key];
        });
        if (this.confirmation.accept) {
          this.confirmation.acceptEvent = new EventEmitter();
          this.confirmation.acceptEvent.subscribe(this.confirmation.accept);
        }
        if (this.confirmation.reject) {
          this.confirmation.rejectEvent = new EventEmitter();
          this.confirmation.rejectEvent.subscribe(this.confirmation.reject);
        }
        this.visible = true;
      }
    });
  }
  templates;
  ngAfterContentInit() {
    this.templates?.forEach((item) => {
      switch (item.getType()) {
        case "content":
          this._contentTemplate = item.template;
          break;
        case "rejecticon":
          this._rejectIconTemplate = item.template;
          break;
        case "accepticon":
          this._acceptIconTemplate = item.template;
          break;
        case "headless":
          this._headlessTemplate = item.template;
          break;
      }
    });
  }
  option(name, k) {
    const source = this || this;
    if (source.hasOwnProperty(name)) {
      if (k) {
        return source[k];
      }
      return source[name];
    }
    return void 0;
  }
  onEscapeKeydown(event) {
    if (this.confirmation && this.confirmation.closeOnEscape) {
      this.onReject();
    }
  }
  onAnimationStart(event) {
    if (event.toState === "open") {
      this.container = event.element;
      this.renderer.appendChild(this.document.body, this.container);
      this.align();
      this.bindListeners();
      const element = this.getElementToFocus();
      if (element) {
        element.focus();
      }
    }
  }
  onAnimationEnd(event) {
    switch (event.toState) {
      case "void":
        this.onContainerDestroy();
        break;
    }
  }
  getAcceptButtonProps() {
    return this.option("acceptButtonProps");
  }
  getRejectButtonProps() {
    return this.option("rejectButtonProps");
  }
  getElementToFocus() {
    switch (this.defaultFocus) {
      case "accept":
        return findSingle(this.container, ".p-confirm-popup-accept");
      case "reject":
        return findSingle(this.container, ".p-confirm-popup-reject");
      case "none":
        return null;
    }
  }
  align() {
    if (this.autoZIndex) {
      zindexutils.set("overlay", this.container, this.config.zIndex.overlay);
    }
    if (!this.confirmation) {
      return;
    }
    absolutePosition(this.container, this.confirmation?.target, false);
    const containerOffset = getOffset(this.container);
    const targetOffset = getOffset(this.confirmation?.target);
    let arrowLeft = 0;
    if (containerOffset.left < targetOffset.left) {
      arrowLeft = targetOffset.left - containerOffset.left;
    }
    this.container.style.setProperty("--overlayArrowLeft", `${arrowLeft}px`);
    if (containerOffset.top < targetOffset.top) {
      addClass(this.container, "p-confirm-popup-flipped");
    }
  }
  hide() {
    this.visible = false;
  }
  onAccept() {
    if (this.confirmation?.acceptEvent) {
      this.confirmation.acceptEvent.emit();
    }
    this.hide();
  }
  onReject() {
    if (this.confirmation?.rejectEvent) {
      this.confirmation.rejectEvent.emit();
    }
    this.hide();
  }
  onOverlayClick(event) {
    this.overlayService.add({
      originalEvent: event,
      target: this.el.nativeElement
    });
  }
  bindListeners() {
    setTimeout(() => {
      this.bindDocumentClickListener();
      this.bindDocumentResizeListener();
      this.bindScrollListener();
    });
  }
  unbindListeners() {
    this.unbindDocumentClickListener();
    this.unbindDocumentResizeListener();
    this.unbindScrollListener();
  }
  bindDocumentClickListener() {
    if (!this.documentClickListener) {
      let documentEvent = isIOS() ? "touchstart" : "click";
      const documentTarget = this.el ? this.el.nativeElement.ownerDocument : this.document;
      this.documentClickListener = this.renderer.listen(documentTarget, documentEvent, (event) => {
        if (this.confirmation && this.confirmation.dismissableMask !== false) {
          let targetElement = this.confirmation.target;
          if (this.container !== event.target && !this.container?.contains(event.target) && targetElement !== event.target && !targetElement.contains(event.target)) {
            this.hide();
          }
        }
      });
    }
  }
  unbindDocumentClickListener() {
    if (this.documentClickListener) {
      this.documentClickListener();
      this.documentClickListener = null;
    }
  }
  onWindowResize() {
    if (this.visible && !isTouchDevice()) {
      this.hide();
    }
  }
  bindDocumentResizeListener() {
    if (!this.documentResizeListener) {
      this.documentResizeListener = this.renderer.listen(this.window, "resize", this.onWindowResize.bind(this));
    }
  }
  unbindDocumentResizeListener() {
    if (this.documentResizeListener) {
      this.documentResizeListener();
      this.documentResizeListener = null;
    }
  }
  bindScrollListener() {
    if (!this.scrollHandler) {
      this.scrollHandler = new ConnectedOverlayScrollHandler(this.confirmation?.target, () => {
        if (this.visible) {
          this.hide();
        }
      });
    }
    this.scrollHandler.bindScrollListener();
  }
  unbindScrollListener() {
    if (this.scrollHandler) {
      this.scrollHandler.unbindScrollListener();
    }
  }
  unsubscribeConfirmationSubscriptions() {
    if (this.confirmation) {
      if (this.confirmation.acceptEvent) {
        this.confirmation.acceptEvent.unsubscribe();
      }
      if (this.confirmation.rejectEvent) {
        this.confirmation.rejectEvent.unsubscribe();
      }
    }
  }
  onContainerDestroy() {
    this.unbindListeners();
    this.unsubscribeConfirmationSubscriptions();
    if (this.autoZIndex) {
      zindexutils.clear(this.container);
    }
    this.confirmation = null;
    this.container = null;
  }
  restoreAppend() {
    if (this.container) {
      this.renderer.removeChild(this.document.body, this.container);
    }
    this.onContainerDestroy();
  }
  get acceptButtonLabel() {
    return this.confirmation?.acceptLabel || this.config.getTranslation(TranslationKeys.ACCEPT);
  }
  get rejectButtonLabel() {
    return this.confirmation?.rejectLabel || this.config.getTranslation(TranslationKeys.REJECT);
  }
  ngOnDestroy() {
    this.restoreAppend();
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
  static ɵfac = function ConfirmPopup_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ConfirmPopup)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(ConfirmationService), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(OverlayService), ɵɵdirectiveInject(DOCUMENT));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _ConfirmPopup,
    selectors: [["p-confirmPopup"], ["p-confirmpopup"], ["p-confirm-popup"]],
    contentQueries: function ConfirmPopup_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, _c0, 4);
        ɵɵcontentQuery(dirIndex, _c1, 4);
        ɵɵcontentQuery(dirIndex, _c2, 4);
        ɵɵcontentQuery(dirIndex, _c3, 4);
        ɵɵcontentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.contentTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.acceptIconTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.rejectIconTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.headlessTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.templates = _t);
      }
    },
    hostBindings: function ConfirmPopup_HostBindings(rf, ctx) {
      if (rf & 1) {
        ɵɵlistener("keydown.escape", function ConfirmPopup_keydown_escape_HostBindingHandler($event) {
          return ctx.onEscapeKeydown($event);
        }, false, ɵɵresolveDocument);
      }
    },
    inputs: {
      key: "key",
      defaultFocus: "defaultFocus",
      showTransitionOptions: "showTransitionOptions",
      hideTransitionOptions: "hideTransitionOptions",
      autoZIndex: [2, "autoZIndex", "autoZIndex", booleanAttribute],
      baseZIndex: [2, "baseZIndex", "baseZIndex", numberAttribute],
      style: "style",
      styleClass: "styleClass",
      visible: "visible"
    },
    features: [ɵɵProvidersFeature([ConfirmPopupStyle]), ɵɵInputTransformsFeature, ɵɵInheritDefinitionFeature],
    decls: 1,
    vars: 1,
    consts: [["notHeadless", ""], ["content", ""], ["withoutContentTemplate", ""], ["rejecticon", ""], ["accepticontemplate", ""], ["role", "alertdialog", 3, "ngClass", "ngStyle", "class", "click", 4, "ngIf"], ["role", "alertdialog", 3, "click", "ngClass", "ngStyle"], [4, "ngIf", "ngIfElse"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "p-confirmpopup-content"], [1, "p-confirmpopup-footer"], ["type", "button", 3, "label", "ngClass", "styleClass", "size", "text", "buttonProps", "onClick", 4, "ngIf"], ["type", "button", 3, "label", "ngClass", "styleClass", "size", "buttonProps", "onClick", 4, "ngIf"], [3, "ngClass", "class", 4, "ngIf"], [1, "p-confirmpopup-message"], [3, "ngClass"], ["type", "button", 3, "onClick", "label", "ngClass", "styleClass", "size", "text", "buttonProps"], [3, "class", 4, "ngIf", "ngIfElse"], [4, "ngTemplateOutlet"], ["type", "button", 3, "onClick", "label", "ngClass", "styleClass", "size", "buttonProps"]],
    template: function ConfirmPopup_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵtemplate(0, ConfirmPopup_div_0_Template, 4, 12, "div", 5);
      }
      if (rf & 2) {
        ɵɵproperty("ngIf", ctx.visible);
      }
    },
    dependencies: [CommonModule, NgClass, NgIf, NgTemplateOutlet, NgStyle, SharedModule, ButtonModule, Button],
    encapsulation: 2,
    data: {
      animation: [trigger("animation", [state("void", style({
        transform: "scaleY(0.8)",
        opacity: 0
      })), state("open", style({
        transform: "translateY(0)",
        opacity: 1
      })), transition("void => open", animate("{{showTransitionParams}}")), transition("open => void", animate("{{hideTransitionParams}}"))])]
    },
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfirmPopup, [{
    type: Component,
    args: [{
      selector: "p-confirmPopup, p-confirmpopup, p-confirm-popup",
      standalone: true,
      imports: [CommonModule, SharedModule, ButtonModule],
      template: `
        <div
            *ngIf="visible"
            [ngClass]="'p-confirmpopup p-component'"
            [ngStyle]="style"
            [class]="styleClass"
            role="alertdialog"
            (click)="onOverlayClick($event)"
            [@animation]="{
                value: 'open',
                params: { showTransitionParams: showTransitionOptions, hideTransitionParams: hideTransitionOptions }
            }"
            (@animation.start)="onAnimationStart($event)"
            (@animation.done)="onAnimationEnd($event)"
        >
            <ng-container *ngIf="headlessTemplate || _headlessTemplate; else notHeadless">
                <ng-container *ngTemplateOutlet="headlessTemplate || _headlessTemplate; context: { $implicit: confirmation }"></ng-container>
            </ng-container>
            <ng-template #notHeadless>
                <div #content class="p-confirmpopup-content">
                    <ng-container *ngIf="contentTemplate || _contentTemplate; else withoutContentTemplate">
                        <ng-container *ngTemplateOutlet="contentTemplate || _contentTemplate; context: { $implicit: confirmation }"></ng-container>
                    </ng-container>
                    <ng-template #withoutContentTemplate>
                        <i [ngClass]="'p-confirmpopup-icon'" [class]="confirmation?.icon" *ngIf="confirmation?.icon"></i>
                        <span class="p-confirmpopup-message">{{ confirmation?.message }}</span>
                    </ng-template>
                </div>
                <div class="p-confirmpopup-footer">
                    <p-button
                        type="button"
                        [label]="rejectButtonLabel"
                        (onClick)="onReject()"
                        [ngClass]="'p-confirmpopup-reject-button'"
                        [styleClass]="confirmation?.rejectButtonStyleClass"
                        [size]="confirmation.rejectButtonProps?.size || 'small'"
                        [text]="confirmation.rejectButtonProps?.text || false"
                        *ngIf="confirmation?.rejectVisible !== false"
                        [attr.aria-label]="rejectButtonLabel"
                        [buttonProps]="getRejectButtonProps()"
                    >
                        <i [class]="confirmation?.rejectIcon" *ngIf="confirmation?.rejectIcon; else rejecticon"></i>
                        <ng-template #rejecticon *ngTemplateOutlet="rejectIconTemplate || _rejectIconTemplate"></ng-template>
                    </p-button>
                    <p-button
                        type="button"
                        [label]="acceptButtonLabel"
                        (onClick)="onAccept()"
                        [ngClass]="'p-confirmpopup-accept-button'"
                        [styleClass]="confirmation?.acceptButtonStyleClass"
                        [size]="confirmation.acceptButtonProps?.size || 'small'"
                        *ngIf="confirmation?.acceptVisible !== false"
                        [attr.aria-label]="acceptButtonLabel"
                        [buttonProps]="getAcceptButtonProps()"
                    >
                        <i [class]="confirmation?.acceptIcon" *ngIf="confirmation?.acceptIcon; else accepticontemplate"></i>
                        <ng-template #accepticontemplate *ngTemplateOutlet="acceptIconTemplate || _acceptIconTemplate"></ng-template>
                    </p-button>
                </div>
            </ng-template>
        </div>
    `,
      animations: [trigger("animation", [state("void", style({
        transform: "scaleY(0.8)",
        opacity: 0
      })), state("open", style({
        transform: "translateY(0)",
        opacity: 1
      })), transition("void => open", animate("{{showTransitionParams}}")), transition("open => void", animate("{{hideTransitionParams}}"))])],
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      providers: [ConfirmPopupStyle]
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: ConfirmationService
  }, {
    type: Renderer2
  }, {
    type: ChangeDetectorRef
  }, {
    type: OverlayService
  }, {
    type: Document,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }], {
    key: [{
      type: Input
    }],
    defaultFocus: [{
      type: Input
    }],
    showTransitionOptions: [{
      type: Input
    }],
    hideTransitionOptions: [{
      type: Input
    }],
    autoZIndex: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    baseZIndex: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    style: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    visible: [{
      type: Input
    }],
    contentTemplate: [{
      type: ContentChild,
      args: ["content", {
        descendants: false
      }]
    }],
    acceptIconTemplate: [{
      type: ContentChild,
      args: ["accepticon", {
        descendants: false
      }]
    }],
    rejectIconTemplate: [{
      type: ContentChild,
      args: ["rejecticon", {
        descendants: false
      }]
    }],
    headlessTemplate: [{
      type: ContentChild,
      args: ["headless", {
        descendants: false
      }]
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }],
    onEscapeKeydown: [{
      type: HostListener,
      args: ["document:keydown.escape", ["$event"]]
    }]
  });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassDebugInfo(ConfirmPopup, {
    className: "ConfirmPopup",
    filePath: "confirmpopup.ts",
    lineNumber: 129
  });
})();
var ConfirmPopupModule = class _ConfirmPopupModule {
  static ɵfac = function ConfirmPopupModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ConfirmPopupModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _ConfirmPopupModule
  });
  static ɵinj = ɵɵdefineInjector({
    imports: [ConfirmPopup, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfirmPopupModule, [{
    type: NgModule,
    args: [{
      imports: [ConfirmPopup, SharedModule],
      exports: [ConfirmPopup, SharedModule]
    }]
  }], null, null);
})();
(function() {
  (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(ConfirmPopupModule, {
    imports: [ConfirmPopup, SharedModule],
    exports: [ConfirmPopup, SharedModule]
  });
})();
export {
  ConfirmPopup,
  ConfirmPopupClasses,
  ConfirmPopupModule,
  ConfirmPopupStyle
};
//# sourceMappingURL=primeng_confirmpopup.js.map
