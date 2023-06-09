import {
    a as Le
} from "./js/chunk3.mjs";
import {
    a as ge,
    b as be,
    c as we,
    d as ve,
    e as He,
    f as Te,
    g as ke,
    h as Ce,
    i as je,
    j as Se,
    k as te,
    l as ne,
    m as Ne,
    n as Fe,
    o as _e
} from "./js/chunk4.mjs";
import "./js/chunk6.mjs";
import {
    a as O
} from "./js/chunk7.mjs";
import {
    a as e,
    b as n
} from "./js/chunk5.mjs";
import {
    B as c,
    C as P,
    D as he,
    E as I,
    F as J,
    L as S,
    M as ue,
    N as ye,
    P as z,
    R as xe,
    U as s,
    V as N,
    W as F,
    b as h,
    d as j,
    e as de,
    h as U,
    k as a,
    l as f,
    p as fe,
    u as q,
    x as ce,
    y as pe,
    z as u
} from "./js/chunk.mjs";
import "./js/chunk2.mjs";
var ze = {
        f6ook9Uik: {
            hover: !0
        },
        CLlJuYFnH: {
            hover: !0
        }
    },
    De = ["CLlJuYFnH", "f6ook9Uik"],
    We = {
        CLlJuYFnH: "framer-v-1vtg8k1",
        f6ook9Uik: "framer-v-1wj5ctp"
    };

function ie(t, ...i) {
    let x = {};
    return i?.forEach(_ => _ && Object.assign(x, t[_])), x
}
var Ge = {
        Normal: "CLlJuYFnH",
        "With Arrow": "f6ook9Uik"
    },
    Ze = {
        default: {
            type: "tween",
            ease: [.44, 0, .56, 1],
            duration: .15,
            delay: 0,
            stiffness: 400,
            damping: 40,
            mass: 1
        }
    },
    Xe = j(function({
        id: t,
        style: i = {},
        className: x,
        width: _,
        height: me,
        layoutId: m,
        variant: g = "CLlJuYFnH",
        emoji: L = "\u{1F48E}",
        title: E = "Title",
        link: Z,
        ...k
    }, X) {
        let A = Ge[g] || g,
            {
                variants: p,
                baseVariant: C,
                gestureVariant: l,
                classNames: V,
                transition: o,
                setVariant: R,
                setGestureState: d
            } = z({
                defaultVariant: "CLlJuYFnH",
                variant: A,
                transitions: Ze,
                variantClassNames: We,
                enabledGestures: ze,
                cycleOrder: De
            }),
            b = p.join("-") + k.layoutDependency,
            le = ge(),
            {
                pointerEvents: w,
                ...B
            } = i;
        return e(f, {
            id: m ?? le,
            children: e(a.div, {
                "data-framer-generated": !0,
                initial: A,
                animate: p,
                onHoverStart: () => d({
                    isHovered: !0
                }),
                onHoverEnd: () => d({
                    isHovered: !1
                }),
                onTapStart: () => d({
                    isPressed: !0
                }),
                onTap: () => d({
                    isPressed: !1
                }),
                onTapCancel: () => d({
                    isPressed: !1
                }),
                className: u("framer-wqPRJ", V),
                style: {
                    display: "contents",
                    pointerEvents: w ?? "auto"
                },
                children: e(I, {
                    href: Z,
                    children: n(pe, {
                        ...k,
                        layoutId: "CLlJuYFnH",
                        className: u("framer-1vtg8k1", x),
                        style: {
                            borderBottomLeftRadius: 10,
                            borderBottomRightRadius: 10,
                            borderTopRightRadius: 10,
                            borderTopLeftRadius: 10,
                            backgroundColor: "rgb(255, 255, 255)",
                            ...B
                        },
                        transition: o,
                        layoutDependency: b,
                        as: "a",
                        direction: "horizontal",
                        distribution: "start",
                        alignment: "center",
                        gap: 10,
                        __fromCanvasComponent: !0,
                        __contentWrapperStyle: {
                            width: "100%",
                            height: "auto",
                            padding: "8px 8px 8px 8px"
                        },
                        center: !1,
                        "data-framer-name": "Normal",
                        ref: X,
                        variants: {
                            "f6ook9Uik-hover": {
                                backgroundColor: "rgb(245, 245, 245)"
                            },
                            "CLlJuYFnH-hover": {
                                backgroundColor: "rgb(245, 245, 245)"
                            }
                        },
                        ...ie({
                            "CLlJuYFnH-hover": {
                                center: !1,
                                __contentWrapperStyle: {
                                    width: "100%",
                                    height: "auto",
                                    padding: "8px 8px 8px 8px"
                                }
                            },
                            f6ook9Uik: {
                                "data-framer-name": "With Arrow"
                            }
                        }, C, l),
                        children: [e(a.div, {
                            layoutId: "kpJsBNvXO",
                            className: "framer-1h3m9mc",
                            style: {},
                            transition: o,
                            layoutDependency: b,
                            background: null,
                            "data-framer-name": "Emoji Offset",
                            children: e(s, {
                                layoutId: "mGajfJS8d",
                                className: "framer-7i6jwd",
                                style: {
                                    "--framer-paragraph-spacing": "0px",
                                    whiteSpace: "pre"
                                },
                                transition: o,
                                layoutDependency: b,
                                fonts: ["GF;Syne-700"],
                                withExternalLayout: !0,
                                verticalAlignment: "center",
                                center: "x",
                                __fromCanvasComponent: !0,
                                __htmlStructure: '<h2 style="--framer-line-height:20px; --framer-text-alignment:center;"><span style="--framer-font-family:&quot;Syne&quot;, serif; --framer-font-style:normal; --framer-font-weight:700; --font-selector:R0Y7U3luZS03MDA=; --framer-font-size:20px;">{{ text-placeholder }}</span></h2>',
                                htmlFromDesign: '<h2 style="--framer-line-height:20px; --framer-text-alignment:center;"><span style="--framer-font-family:&quot;Syne&quot;, serif; --framer-font-style:normal; --framer-font-weight:700; --font-selector:R0Y7U3luZS03MDA=; --framer-font-size:20px;">\u{1F48E}</span></h2>',
                                textFromDesign: L
                            })
                        }), e(s, {
                            layoutId: "rKvXOdLYi",
                            className: "framer-ort1gi",
                            style: {
                                "--framer-paragraph-spacing": "0px",
                                whiteSpace: "pre-wrap",
                                wordWrap: "break-word",
                                wordBreak: "break-word",
                                "--extracted-1w3ko1f": "rgb(102, 102, 102)"
                            },
                            transition: o,
                            layoutDependency: b,
                            fonts: ["GF;Manrope-500"],
                            withExternalLayout: !0,
                            verticalAlignment: "top",
                            __fromCanvasComponent: !0,
                            __htmlStructure: '<p style="--framer-text-alignment:left;"><span style="--framer-font-family:&quot;Manrope&quot;, serif; --framer-font-style:normal; --framer-font-weight:500; --font-selector:R0Y7TWFucm9wZS01MDA=; --framer-text-color:var(--extracted-1w3ko1f);">{{ text-placeholder }}</span></p>',
                            htmlFromDesign: '<p style="--framer-text-alignment:left;"><span style="--framer-font-family:&quot;Manrope&quot;, serif; --framer-font-style:normal; --framer-font-weight:500; --font-selector:R0Y7TWFucm9wZS01MDA=; --framer-text-color:var(--extracted-1w3ko1f);">Title</span></p>',
                            textFromDesign: E,
                            variants: {
                                "f6ook9Uik-hover": {
                                    "--extracted-1w3ko1f": "rgb(102, 102, 102)"
                                },
                                "CLlJuYFnH-hover": {
                                    "--extracted-1w3ko1f": "rgb(51, 51, 51)"
                                }
                            },
                            ...ie({
                                "f6ook9Uik-hover": {
                                    fonts: ["GF;Manrope-500"],
                                    __htmlStructure: '<p style="--framer-text-alignment:left;"><span style="--framer-font-family:&quot;Manrope&quot;, serif; --framer-font-style:normal; --framer-font-weight:500; --font-selector:R0Y7TWFucm9wZS01MDA=; --framer-text-color:var(--extracted-1w3ko1f);">{{ text-placeholder }}</span></p>'
                                },
                                "CLlJuYFnH-hover": {
                                    fonts: ["GF;Manrope-500"],
                                    __htmlStructure: '<p style="--framer-text-alignment:left;"><span style="--framer-font-family:&quot;Manrope&quot;, serif; --framer-font-style:normal; --framer-font-weight:500; --font-selector:R0Y7TWFucm9wZS01MDA=; --framer-text-color:var(--extracted-1w3ko1f);">{{ text-placeholder }}</span></p>'
                                }
                            }, C, l)
                        }), e(xe, {
                            layout: "position",
                            style: {
                                opacity: 0
                            },
                            layoutId: "xSl3mWwyo",
                            className: "framer-yo4dgw",
                            transition: o,
                            layoutDependency: b,
                            opacity: 0,
                            radius: 0,
                            withExternalLayout: !0,
                            svgContentId: 1555909042,
                            svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16"><path d="M 3.5 4 L 10 4 L 10 10.5 M 9 5 L 3 11" fill="transparent" stroke-width="2" stroke="#aaa" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
                            background: null,
                            "data-framer-name": "Arrow",
                            variants: {
                                "f6ook9Uik-hover": {
                                    opacity: 1
                                }
                            },
                            ...ie({
                                "f6ook9Uik-hover": {
                                    svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16"><path d="M 3.5 4 L 10 4 L 10 10.5 M 9 5 L 3 11" fill="transparent" stroke-width="2" stroke="#aaa" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
                                    svgContentId: 3396794083
                                }
                            }, C, l)
                        })]
                    })
                })
            })
        })
    }),
    Ye = ['.framer-wqPRJ [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none;}', "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-wqPRJ * { box-sizing: border-box; }", ".framer-wqPRJ .framer-1vtg8k1 { position: relative; width: 300px; height: min-content; display: block; text-decoration: none; }", ".framer-wqPRJ .framer-1h3m9mc { position: relative; overflow: visible; width: 20px; height: 20px; flex: none; }", ".framer-wqPRJ .framer-7i6jwd { position: absolute; width: auto; height: 20px; bottom: -1px; left: 50%; flex: none; white-space: pre; }", ".framer-wqPRJ .framer-ort1gi { position: relative; width: 1px; height: auto; flex: 1 0 0px; white-space: pre-wrap; word-wrap: break-word; word-break: break-word; }", ".framer-wqPRJ .framer-yo4dgw { position: relative; width: 16px; height: 16px; flex: none; }", ".framer-wqPRJ.framer-v-1wj5ctp .framer-1vtg8k1, .framer-wqPRJ.framer-v-1vtg8k1 .framer-1vtg8k1 { cursor: pointer; }", ".framer-wqPRJ.framer-v-1vtg8k1.hover .framer-1vtg8k1 { width: 300px; height: min-content; }"],
    M = S(Xe, Ye),
    y = M;
M.displayName = "Post Link";
M.defaultProps = {
    width: 300,
    height: 36
};
ce(M, {
    variant: {
        type: q.Enum,
        title: "Variant",
        options: ["CLlJuYFnH", "f6ook9Uik"],
        optionTitles: ["Normal", "With Arrow"]
    },
    mUC7kTFpM: {
        type: q.String,
        title: "Emoji",
        defaultValue: "\u{1F48E}",
        placeholder: "Emoji",
        displayTextArea: !1
    },
    PYwdVc_ws: {
        type: q.String,
        title: "Title",
        defaultValue: "Title"
    },
    D5b3p9lV8: {
        type: q.Link,
        title: "Link"
    }
});
N(M, [{
    url: "https://fonts.gstatic.com/s/syne/v14/8vIS7w4qzmVxsWxjBZRjr0FKM_3fvj6kR47NCV5Z.ttf",
    family: "Syne",
    style: "normal",
    weight: "700",
    moduleAsset: {
        url: "https://fonts.gstatic.com/s/syne/v14/8vIS7w4qzmVxsWxjBZRjr0FKM_3fvj6kR47NCV5Z.ttf",
        localModuleIdentifier: "local-module:canvasComponent/dNTrkrbrf:default"
    }
}, {
    url: "https://fonts.gstatic.com/s/manrope/v12/xn7_YHE41ni1AdIRqAuZuw1Bx9mbZk7PFO_F87jxeN7B.ttf",
    family: "Manrope",
    style: "normal",
    weight: "500",
    moduleAsset: {
        url: "https://fonts.gstatic.com/s/manrope/v12/xn7_YHE41ni1AdIRqAuZuw1Bx9mbZk7PFO_F87jxeN7B.ttf",
        localModuleIdentifier: "local-module:canvasComponent/dNTrkrbrf:default"
    }
}]);
var Be = F(te),
    Qe = ["ZGypaRh5M"],
    Ke = {
        ZGypaRh5M: "framer-v-a8n8gh"
    };
var $e = {},
    er = {
        default: {
            damping: 60,
            delay: 0,
            duration: .3,
            ease: [.44, 0, .56, 1],
            mass: 1,
            stiffness: 500,
            type: "spring"
        }
    },
    Je = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

function rr() {
    let t = U(null);
    return t.current === null && (t.current = Array(5).fill(0).map(() => Je[Math.floor(Math.random() * Je.length)]).join("")), t.current
}
var ar = j(function({
        id: t,
        style: i = {},
        className: x,
        width: _,
        height: me,
        layoutId: m,
        variant: g = "ZGypaRh5M",
        ...L
    }, E) {
        let k = $e[g] || g,
            {
                baseVariant: X,
                classNames: Y,
                gestureVariant: A,
                setGestureState: p,
                setVariant: C,
                transition: l,
                variants: V
            } = z({
                cycleOrder: Qe,
                defaultVariant: "ZGypaRh5M",
                transitions: er,
                variant: k,
                variantClassNames: Ke
            }),
            o = V.join("-") + L.layoutDependency,
            R = rr(),
            {
                pointerEvents: d,
                ...b
            } = i;
        return e(f, {
            id: m ?? R,
            children: e(a.div, {
                "data-framer-generated": !0,
                initial: k,
                animate: V,
                onHoverStart: () => p({
                    isHovered: !0
                }),
                onHoverEnd: () => p({
                    isHovered: !1
                }),
                onTapStart: () => p({
                    isPressed: !0
                }),
                onTap: () => p({
                    isPressed: !1
                }),
                onTapCancel: () => p({
                    isPressed: !1
                }),
                className: u("framer-5rPO6", ke, Se, ve, Y),
                style: {
                    display: "contents",
                    pointerEvents: d ?? void 0
                },
                children: n(a.div, {
                    ...L,
                    className: u("framer-a8n8gh", x),
                    "data-framer-name": "Variant 1",
                    layoutDependency: o,
                    layoutId: "ZGypaRh5M",
                    ref: E,
                    style: {
                        backgroundColor: "rgb(255, 255, 255)",
                        ...b
                    },
                    transition: l,
                    children: [e(a.div, {
                        className: "framer-5nyqef-container",
                        layoutDependency: o,
                        layoutId: "QeAp0e_eV-container",
                        transition: l,
                        children: e(te, {
                            height: "100%",
                            id: "QeAp0e_eV",
                            layoutId: "QeAp0e_eV",
                            width: "100%"
                        })
                    }), e(s, {
                        __fromCanvasComponent: !0,
                        children: e(h, {
                            children: e(a.h1, {
                                className: "framer-styles-preset-o3e5h0",
                                "data-styles-preset": "stylesPresetHeading1",
                                style: {
                                    "--framer-text-alignment": "left"
                                },
                                children: "ishida.app"
                            })
                        }),
                        className: "framer-cz8zkd",
                        layoutDependency: o,
                        layoutId: "LcHrxXcb9",
                        style: {
                            "--framer-link-text-color": "rgb(0, 153, 255)",
                            "--framer-link-text-decoration": "underline",
                            "--framer-paragraph-spacing": "0px"
                        },
                        transition: l,
                        verticalAlignment: "top",
                        withExternalLayout: !0
                    }), e(s, {
                        __fromCanvasComponent: !0,
                        children: e(h, {
                            children: n(a.p, {
                                className: "framer-styles-preset-16bzrdu",
                                "data-styles-preset": "stylesPresetParagraph",
                                style: {
                                    "--framer-text-alignment": "left"
                                },
                                children: ["Personal website, can be used by everyone. ", e(I, {
                                    href: "",
                                    openInNewTab: !0,
                                    smoothScroll: !1,
                                    children: e(a.a, {
                                        className: "framer-styles-preset-i6wbpf",
                                        "data-styles-preset": "ofX0N_NJb",
                                        href: "",
                                        rel: "noreferrer noopener",
                                        target: "_blank",
                                        children: ""
                                    })
                                }), ". "]
                            })
                        }),
                        className: "framer-37ypo6",
                        layoutDependency: o,
                        layoutId: "nKZyN3Yoa",
                        style: {
                            "--framer-paragraph-spacing": "0px"
                        },
                        transition: l,
                        verticalAlignment: "top",
                        withExternalLayout: !0
                    })]
                })
            })
        })
    }),
    tr = ['.framer-5rPO6 [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }', "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-5rPO6 * { box-sizing: border-box; }", ".framer-5rPO6 .framer-1btzcsk { display: block; }", ".framer-5rPO6 .framer-a8n8gh { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 500px; }", ".framer-5rPO6 .framer-5nyqef-container { flex: none; height: auto; position: relative; width: auto; }", ".framer-5rPO6 .framer-cz8zkd { flex: none; height: auto; position: relative; white-space: pre; width: auto; }", ".framer-5rPO6 .framer-37ypo6 { flex: none; height: auto; max-width: 300px; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-5rPO6 .framer-a8n8gh { gap: 0px; } .framer-5rPO6 .framer-a8n8gh > * { margin: 0px; margin-bottom: calc(20px / 2); margin-top: calc(20px / 2); } .framer-5rPO6 .framer-a8n8gh > :first-child { margin-top: 0px; } .framer-5rPO6 .framer-a8n8gh > :last-child { margin-bottom: 0px; } }", ...Te, ...je, ...we],
    D = S(ar, tr),
    oe = D;
D.displayName = "Header";
D.defaultProps = {
    height: 187,
    width: 500
};
N(D, [...Be, ...He, ...Ce, ...be]);
var nr = F(ne),
    ir = F(oe),
    or = F(y);
var Me = {
        owsbV9ZfV: "(min-width: 810px) and (max-width: 999px)",
        WQLkyLRf1: "(min-width: 1000px)",
        xvsEimtoJ: "(max-width: 809px)"
    },
    se = () => typeof document < "u",
    Ee = {
        owsbV9ZfV: "framer-v-1a5np2r",
        WQLkyLRf1: "framer-v-72rtr7",
        xvsEimtoJ: "framer-v-13hyvuo"
    };
se() && ye("WQLkyLRf1", Me, Ee);
var sr = {
        Desktop: "WQLkyLRf1",
        Phone: "xvsEimtoJ",
        Tablet: "owsbV9ZfV"
    },
    mr = {
        default: {
            duration: 0
        }
    };

function W(t, i) {
    return typeof t == "string" && typeof i == "string" ? t.toLowerCase() === i.toLowerCase() : t === i
}
var Oe = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

function lr() {
    let t = U(null);
    return t.current === null && (t.current = Array(5).fill(0).map(() => Oe[Math.floor(Math.random() * Oe.length)]).join("")), t.current
}
var dr = j(function({
        id: t,
        style: i = {},
        className: x,
        width: _,
        height: me,
        layoutId: m,
        variant: g = "WQLkyLRf1",
        OsCKtdxJSjqVW33GXU: L,
        SwFrHya0njqVW33GXU: E,
        OsCKtdxJSgu9Q3P_Jp: Z,
        SwFrHya0ngu9Q3P_Jp: k,
        OsCKtdxJSs7fp3psXM: X,
        SwFrHya0ns7fp3psXM: Y,
        OsCKtdxJSmaUb5Nm2i: A,
        SwFrHya0nmaUb5Nm2i: p,
        ...C
    }, l) {
        let o = sr[g] || g;
        de(() => {
            let r = Le();
            if (document.title = r.title || "", r.viewport) {
                var v;
                (v = document.querySelector('meta[name="viewport"]')) === null || v === void 0 || v.setAttribute("content", r.viewport)
            }
        }, []);
        let [R, d] = ue(o, Me, !1), b = void 0, le = mr.default, w = fe(), B = () => R === "xvsEimtoJ" ? !0 : !se(), Ae = () => R === "xvsEimtoJ" ? !0 : !se(), Ue = lr(), {
            pointerEvents: Q,
            ...Ie
        } = i;
        return e(he.Provider, {
            value: {
                primaryVariantId: "WQLkyLRf1",
                variantClassNames: Ee
            },
            children: e(f, {
                id: m ?? Ue,
                children: n(a.div, {
                    "data-framer-generated": !0,
                    className: u("framer-bHaTd", _e),
                    style: {
                        display: "contents",
                        pointerEvents: Q ?? void 0
                    },
                    children: [n(a.div, {
                        ...C,
                        className: u("framer-72rtr7", x),
                        ref: l,
                        style: {
                            ...Ie
                        },
                        children: [e(c, {
                            className: "framer-tzb5qc-container",
                            children: e(ne, {
                                height: "100%",
                                id: "UPH0mR1jU",
                                layoutId: "UPH0mR1jU",
                                style: {
                                    width: "100%"
                                },
                                subtitle: "Subtitle",
                                title: "ishida.app",
                                variant: "rL1hwSqAi",
                                width: "100%"
                            })
                        }), n(a.div, {
                            className: "framer-1b1q0tm",
                            "data-framer-name": "Content",
                            name: "Content",
                            children: [e(c, {
                                className: "framer-ro9d4-container",
                                children: e(oe, {
                                    height: "100%",
                                    id: "TRbgIB1DQ",
                                    layoutId: "TRbgIB1DQ",
                                    style: {
                                        width: "100%"
                                    },
                                    width: "100%"
                                })
                            }), n(a.div, {
                                className: "framer-1pf8tip",
                                children: [e(a.div, {
                                    className: "framer-baje2r",
                                    "data-framer-name": "Line 0",
                                    name: "Line 0"
                                }), n(a.div, {
                                    className: "framer-1mwj0yz",
                                    children: [e(s, {
                                        __fromCanvasComponent: !0,
                                        children: e(h, {
                                            children: e("h3", {
                                                className: "framer-styles-preset-ci2ngw",
                                                "data-styles-preset": "stylesPresetHeading3",
                                                style: {
                                                    "--framer-text-alignment": "left"
                                                },
                                                children: "Builds"
                                            })
                                        }),
                                        className: "framer-nep1gz",
                                        verticalAlignment: "top",
                                        withExternalLayout: !0
                                    }), e(a.main, {
                                        className: "framer-1rxc3q1",
                                        children: O.filter(r => !!W(r.ZdeX3vaEc, "Builds")).map((r, v) => {
                                            let {
                                                SwFrHya0n: H,
                                                OsCKtdxJS: T,
                                                CAxxj7zn6: K,
                                                ZdeX3vaEc: $,
                                                HV1m26qvO: ee,
                                                HhV1lFMd5: re,
                                                BlGAjU98O: ae
                                            } = r;
                                            return e(f, {
                                                id: `jqVW33GXU-${r.id}`,
                                                children: e(P.Provider, {
                                                    value: r,
                                                    children: e(c, {
                                                        className: "framer-1mktv5x-container",
                                                        children: e(y, {
                                                            emoji: T,
                                                            height: "100%",
                                                            id: "WgRLEC9oI",
                                                            layoutId: "WgRLEC9oI",
                                                            link: J("data:framer/page-link,OxJKnfPQj", w, r),
                                                            style: {
                                                                width: "100%"
                                                            },
                                                            title: H,
                                                            variant: "CLlJuYFnH",
                                                            width: "100%"
                                                        })
                                                    })
                                                })
                                            }, r.id)
                                        })
                                    })]
                                }), B() && e(a.div, {
                                    className: "framer-nb7hcn hidden-72rtr7 hidden-1a5np2r",
                                    "data-framer-name": "Line 1",
                                    name: "Line 1"
                                }), n(a.div, {
                                    className: "framer-yiuctm",
                                    children: [e(s, {
                                        __fromCanvasComponent: !0,
                                        children: e(h, {
                                            children: e("h3", {
                                                className: "framer-styles-preset-ci2ngw",
                                                "data-styles-preset": "stylesPresetHeading3",
                                                style: {
                                                    "--framer-text-alignment": "left"
                                                },
                                                children: "Guilds"
                                            })
                                        }),
                                        className: "framer-1toanyn",
                                        verticalAlignment: "top",
                                        withExternalLayout: !0
                                    }), e(a.main, {
                                        className: "framer-my7zy7",
                                        children: O.filter(r => !!W(r.ZdeX3vaEc, "Guilds")).map((r, v) => {
                                            let {
                                                SwFrHya0n: H,
                                                OsCKtdxJS: T,
                                                CAxxj7zn6: K,
                                                ZdeX3vaEc: $,
                                                HV1m26qvO: ee,
                                                HhV1lFMd5: re,
                                                BlGAjU98O: ae
                                            } = r;
                                            return e(f, {
                                                id: `gu9Q3P_Jp-${r.id}`,
                                                children: e(P.Provider, {
                                                    value: r,
                                                    children: e(c, {
                                                        className: "framer-d21k52-container",
                                                        children: e(y, {
                                                            emoji: T,
                                                            height: "100%",
                                                            id: "WDgvaCDmc",
                                                            layoutId: "WDgvaCDmc",
                                                            link: J("data:framer/page-link,OxJKnfPQj", w, r),
                                                            style: {
                                                                width: "100%"
                                                            },
                                                            title: H,
                                                            variant: "CLlJuYFnH",
                                                            width: "100%"
                                                        })
                                                    })
                                                })
                                            }, r.id)
                                        })
                                    })]
                                }), e(a.div, {
                                    className: "framer-1ewe6cj",
                                    "data-framer-name": "Line 2",
                                    name: "Line 2"
                                }), n(a.div, {
                                    className: "framer-uyz0iw",
                                    children: [e(s, {
                                        __fromCanvasComponent: !0,
                                        children: e(h, {
                                            children: e("h3", {
                                                className: "framer-styles-preset-ci2ngw",
                                                "data-styles-preset": "stylesPresetHeading3",
                                                style: {
                                                    "--framer-text-alignment": "left"
                                                },
                                                children: "Tech's"
                                            })
                                        }),
                                        className: "framer-rd8cd6",
                                        verticalAlignment: "top",
                                        withExternalLayout: !0
                                    }), e(a.main, {
                                        className: "framer-tof707",
                                        children: O.filter(r => !!W(r.ZdeX3vaEc, "Tech's")).map((r, v) => {
                                            let {
                                                SwFrHya0n: H,
                                                OsCKtdxJS: T,
                                                CAxxj7zn6: K,
                                                ZdeX3vaEc: $,
                                                HV1m26qvO: ee,
                                                HhV1lFMd5: re,
                                                BlGAjU98O: ae
                                            } = r;
                                            return e(f, {
                                                id: `s7fp3psXM-${r.id}`,
                                                children: e(P.Provider, {
                                                    value: r,
                                                    children: e(c, {
                                                        className: "framer-1sx9jy2-container",
                                                        children: e(y, {
                                                            emoji: T,
                                                            height: "100%",
                                                            id: "vep_Ey_RC",
                                                            layoutId: "vep_Ey_RC",
                                                            link: J("data:framer/page-link,OxJKnfPQj", w, r),
                                                            style: {
                                                                width: "100%"
                                                            },
                                                            title: H,
                                                            variant: "CLlJuYFnH",
                                                            width: "100%"
                                                        })
                                                    })
                                                })
                                            }, r.id)
                                        })
                                    })]
                                }), Ae() && e(a.div, {
                                    className: "framer-1x2r3kk hidden-72rtr7 hidden-1a5np2r",
                                    "data-framer-name": "Line 3",
                                    name: "Line 3"
                                }), n(a.div, {
                                    className: "framer-9my1nc",
                                    children: [e(s, {
                                        __fromCanvasComponent: !0,
                                        children: e(h, {
                                            children: e("h3", {
                                                className: "framer-styles-preset-ci2ngw",
                                                "data-styles-preset": "stylesPresetHeading3",
                                                style: {
                                                    "--framer-text-alignment": "left"
                                                },
                                                children: "Bugs"
                                            })
                                        }),
                                        className: "framer-1i37ao3",
                                        verticalAlignment: "top",
                                        withExternalLayout: !0
                                    }), e(a.main, {
                                        className: "framer-1lr82bq",
                                        children: O.filter(r => !!W(r.ZdeX3vaEc, "Bugs")).map((r, v) => {
                                            let {
                                                SwFrHya0n: H,
                                                OsCKtdxJS: T,
                                                CAxxj7zn6: K,
                                                ZdeX3vaEc: $,
                                                HV1m26qvO: ee,
                                                HhV1lFMd5: re,
                                                BlGAjU98O: ae
                                            } = r;
                                            return e(f, {
                                                id: `maUb5Nm2i-${r.id}`,
                                                children: e(P.Provider, {
                                                    value: r,
                                                    children: e(c, {
                                                        className: "framer-1s0j39i-container",
                                                        children: e(y, {
                                                            emoji: T,
                                                            height: "100%",
                                                            id: "FjySf1fXi",
                                                            layoutId: "FjySf1fXi",
                                                            link: J("data:framer/page-link,OxJKnfPQj", w, r),
                                                            style: {
                                                                width: "100%"
                                                            },
                                                            title: H,
                                                            variant: "CLlJuYFnH",
                                                            width: "100%"
                                                        })
                                                    })
                                                })
                                            }, r.id)
                                        })
                                    })]
                                }), e(a.div, {
                                    className: "framer-232yin",
                                    "data-framer-name": "Line 4",
                                    name: "Line 4"
                                }), n(a.div, {
                                    className: "framer-1cih1n3",
                                    children: [e(s, {
                                        __fromCanvasComponent: !0,
                                        children: e(h, {
                                            children: e("h3", {
                                                className: "framer-styles-preset-ci2ngw",
                                                "data-styles-preset": "stylesPresetHeading3",
                                                style: {
                                                    "--framer-text-alignment": "left"
                                                },
                                                children: "Misc. Information"
                                            })
                                        }),
                                        className: "framer-amtt3n",
                                        verticalAlignment: "top",
                                        withExternalLayout: !0
                                    }), n(a.div, {
                                        className: "framer-iafoo6",
                                        children: [e(c, {
                                            className: "framer-1ef30c0-container",
                                            children: e(y, {
                                                emoji: "\u{1F973}",
                                                height: "100%",
                                                id: "z9O85oBiA",
                                                layoutId: "z9O85oBiA",
                                                link: "https://deepwoken.co/builder/",
                                                style: {
                                                    width: "100%"
                                                },
                                                title: "Deepwoken Builder",
                                                variant: "f6ook9Uik",
                                                width: "100%"
                                            })
                                        }), e(c, {
                                            className: "framer-1iog4pk-container",
                                            children: e(y, {
                                                emoji: "\u{1F48E}",
                                                height: "100%",
                                                id: "OJgknS4Qr",
                                                layoutId: "OJgknS4Qr",
                                                link: "./content-creators",
                                                style: {
                                                    width: "100%"
                                                },
                                                title: "Content Creators",
                                                variant: "f6ook9Uik",
                                                width: "100%"
                                            })
                                        }), e(c, {
                                            className: "framer-i3g0p1-container",
                                            children: e(y, {
                                                emoji: "\u{1F338}",
                                                height: "100%",
                                                id: "DIceIduDL",
                                                layoutId: "DIceIduDL",
                                                link: "discord.gg/deepwoken",
                                                style: {
                                                    width: "100%"
                                                },
                                                title: "Join Community",
                                                variant: "f6ook9Uik",
                                                width: "100%"
                                            })
                                        })]
                                    })]
                                })]
                            })]
                        })]
                    }), e("div", {
                        id: "overlay"
                    })]
                })
            })
        })
    }),
    fr = ['.framer-bHaTd [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }', "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-bHaTd .framer-lux5qc { display: block; }", ".framer-bHaTd .framer-72rtr7 { align-content: center; align-items: center; background-color: #ffffff; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 1000px; }", ".framer-bHaTd .framer-tzb5qc-container { flex: none; height: auto; position: sticky; top: 0px; width: 100%; will-change: transform; z-index: 1; }", ".framer-bHaTd .framer-1b1q0tm { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: flex-start; max-width: 100%; overflow: visible; padding: 80px 40px 80px 40px; position: relative; width: 680px; }", ".framer-bHaTd .framer-ro9d4-container, .framer-bHaTd .framer-1mktv5x-container, .framer-bHaTd .framer-d21k52-container, .framer-bHaTd .framer-1sx9jy2-container, .framer-bHaTd .framer-1s0j39i-container, .framer-bHaTd .framer-1ef30c0-container, .framer-bHaTd .framer-1iog4pk-container, .framer-bHaTd .framer-i3g0p1-container { flex: none; height: auto; position: relative; width: 100%; }", ".framer-bHaTd .framer-1pf8tip { display: grid; flex: none; gap: 40px; grid-auto-rows: min-content; grid-template-columns: repeat(2, minmax(50px, 1fr)); grid-template-rows: repeat(2, min-content); height: min-content; justify-content: center; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: 100%; }", ".framer-bHaTd .framer-baje2r, .framer-bHaTd .framer-nb7hcn, .framer-bHaTd .framer-1ewe6cj, .framer-bHaTd .framer-1x2r3kk, .framer-bHaTd .framer-232yin { align-self: start; background-color: #eeeeee; flex: none; grid-column: auto / span 2; height: 1px; justify-self: start; overflow: visible; position: relative; width: 100%; }", ".framer-bHaTd .framer-1mwj0yz, .framer-bHaTd .framer-yiuctm, .framer-bHaTd .framer-uyz0iw, .framer-bHaTd .framer-9my1nc, .framer-bHaTd .framer-1cih1n3 { align-content: flex-start; align-items: flex-start; align-self: start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; justify-self: start; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 100%; }", ".framer-bHaTd .framer-nep1gz, .framer-bHaTd .framer-1toanyn, .framer-bHaTd .framer-rd8cd6, .framer-bHaTd .framer-1i37ao3, .framer-bHaTd .framer-amtt3n { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre; width: auto; }", ".framer-bHaTd .framer-1rxc3q1, .framer-bHaTd .framer-my7zy7, .framer-bHaTd .framer-tof707, .framer-bHaTd .framer-1lr82bq { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; padding: 0px 0px 0px 0px; position: relative; width: 100%; }", ".framer-bHaTd .framer-iafoo6 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 100%; }", "@supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-bHaTd .framer-72rtr7, .framer-bHaTd .framer-1b1q0tm, .framer-bHaTd .framer-1mwj0yz, .framer-bHaTd .framer-1rxc3q1, .framer-bHaTd .framer-yiuctm, .framer-bHaTd .framer-my7zy7, .framer-bHaTd .framer-uyz0iw, .framer-bHaTd .framer-tof707, .framer-bHaTd .framer-9my1nc, .framer-bHaTd .framer-1lr82bq, .framer-bHaTd .framer-1cih1n3, .framer-bHaTd .framer-iafoo6 { gap: 0px; } .framer-bHaTd .framer-72rtr7 > *, .framer-bHaTd .framer-1rxc3q1 > *, .framer-bHaTd .framer-my7zy7 > *, .framer-bHaTd .framer-tof707 > *, .framer-bHaTd .framer-1lr82bq > *, .framer-bHaTd .framer-iafoo6 > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-bHaTd .framer-72rtr7 > :first-child, .framer-bHaTd .framer-1b1q0tm > :first-child, .framer-bHaTd .framer-1mwj0yz > :first-child, .framer-bHaTd .framer-1rxc3q1 > :first-child, .framer-bHaTd .framer-yiuctm > :first-child, .framer-bHaTd .framer-my7zy7 > :first-child, .framer-bHaTd .framer-uyz0iw > :first-child, .framer-bHaTd .framer-tof707 > :first-child, .framer-bHaTd .framer-9my1nc > :first-child, .framer-bHaTd .framer-1lr82bq > :first-child, .framer-bHaTd .framer-1cih1n3 > :first-child, .framer-bHaTd .framer-iafoo6 > :first-child { margin-top: 0px; } .framer-bHaTd .framer-72rtr7 > :last-child, .framer-bHaTd .framer-1b1q0tm > :last-child, .framer-bHaTd .framer-1mwj0yz > :last-child, .framer-bHaTd .framer-1rxc3q1 > :last-child, .framer-bHaTd .framer-yiuctm > :last-child, .framer-bHaTd .framer-my7zy7 > :last-child, .framer-bHaTd .framer-uyz0iw > :last-child, .framer-bHaTd .framer-tof707 > :last-child, .framer-bHaTd .framer-9my1nc > :last-child, .framer-bHaTd .framer-1lr82bq > :last-child, .framer-bHaTd .framer-1cih1n3 > :last-child, .framer-bHaTd .framer-iafoo6 > :last-child { margin-bottom: 0px; } .framer-bHaTd .framer-1b1q0tm > * { margin: 0px; margin-bottom: calc(40px / 2); margin-top: calc(40px / 2); } .framer-bHaTd .framer-1mwj0yz > *, .framer-bHaTd .framer-yiuctm > *, .framer-bHaTd .framer-uyz0iw > *, .framer-bHaTd .framer-9my1nc > *, .framer-bHaTd .framer-1cih1n3 > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } }", "@media (min-width: 1000px) { .framer-bHaTd .hidden-72rtr7 { display: none !important; } }", "@media (max-width: 809px) { .framer-bHaTd .hidden-13hyvuo { display: none !important; } .framer-bHaTd .framer-72rtr7 { width: 390px; } .framer-bHaTd .framer-1b1q0tm { gap: 30px; padding: 40px 20px 40px 20px; } .framer-bHaTd .framer-ro9d4-container { order: 0; } .framer-bHaTd .framer-1pf8tip { grid-template-columns: repeat(1, minmax(50px, 1fr)); order: 1; } .framer-bHaTd .framer-baje2r, .framer-bHaTd .framer-nb7hcn, .framer-bHaTd .framer-1ewe6cj, .framer-bHaTd .framer-1x2r3kk, .framer-bHaTd .framer-232yin { grid-column: auto / span 1; } @supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-bHaTd .framer-1b1q0tm { gap: 0px; } .framer-bHaTd .framer-1b1q0tm > * { margin: 0px; margin-bottom: calc(30px / 2); margin-top: calc(30px / 2); } .framer-bHaTd .framer-1b1q0tm > :first-child { margin-top: 0px; } .framer-bHaTd .framer-1b1q0tm > :last-child { margin-bottom: 0px; } }}", "@media (min-width: 810px) and (max-width: 999px) { .framer-bHaTd .hidden-1a5np2r { display: none !important; } .framer-bHaTd .framer-72rtr7 { width: 810px; }}", ...Fe],
    G = S(dr, fr),
    Jr = G;
G.displayName = "Home";
G.defaultProps = {
    height: 1066,
    width: 1e3
};
N(G, [...nr, ...ir, ...or, ...Ne]);
var Or = {
    exports: {
        default: {
            type: "reactComponent",
            name: "FrameraugiA20Il",
            slots: [],
            annotations: {
                framerIntrinsicHeight: "1066",
                framerResponsiveScreen: "",
                framerContractVersion: "1",
                framerIntrinsicWidth: "1000",
                framerCanvasComponentVariantDetails: '{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"xvsEimtoJ":{"layout":["fixed","auto"]},"owsbV9ZfV":{"layout":["fixed","auto"]}}}'
            }
        },
        Props: {
            type: "tsType",
            annotations: {
                framerContractVersion: "1"
            }
        },
        __FramerMetadata__: {
            type: "variable"
        }
    }
};
export {
    Or as __FramerMetadata__, Jr as
    default
};
//# sourceMappingURL=hI31m5gnqgdJ1Fkos5JiYPhLxGNvfTwxgLT1oaa-VqQ.MZMOTT5Z.mjs.map