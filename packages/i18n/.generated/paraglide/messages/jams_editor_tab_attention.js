/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Editor_Tab_AttentionInputs */

const en_jams_editor_tab_attention = /** @type {(inputs: Jams_Editor_Tab_AttentionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`needs attention`)
};

const es_jams_editor_tab_attention = /** @type {(inputs: Jams_Editor_Tab_AttentionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`requiere atención`)
};

const de_jams_editor_tab_attention = /** @type {(inputs: Jams_Editor_Tab_AttentionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`erfordert Aufmerksamkeit`)
};

const fr_jams_editor_tab_attention = /** @type {(inputs: Jams_Editor_Tab_AttentionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`demande votre attention`)
};

const it_jams_editor_tab_attention = /** @type {(inputs: Jams_Editor_Tab_AttentionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`richiede attenzione`)
};

const nl_jams_editor_tab_attention = /** @type {(inputs: Jams_Editor_Tab_AttentionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`vraagt aandacht`)
};

const pl_jams_editor_tab_attention = /** @type {(inputs: Jams_Editor_Tab_AttentionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`wymaga uwagi`)
};

const pt_jams_editor_tab_attention = /** @type {(inputs: Jams_Editor_Tab_AttentionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`precisa de atenção`)
};

const ru_jams_editor_tab_attention = /** @type {(inputs: Jams_Editor_Tab_AttentionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`требует внимания`)
};

const sv_jams_editor_tab_attention = /** @type {(inputs: Jams_Editor_Tab_AttentionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`behöver ses över`)
};

const tr_jams_editor_tab_attention = /** @type {(inputs: Jams_Editor_Tab_AttentionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`dikkat gerektiriyor`)
};

const zh_jams_editor_tab_attention = /** @type {(inputs: Jams_Editor_Tab_AttentionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`需要处理`)
};

const ja_jams_editor_tab_attention = /** @type {(inputs: Jams_Editor_Tab_AttentionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`要確認`)
};

/**
* | output |
* | --- |
* | "needs attention" |
*
* @param {Jams_Editor_Tab_AttentionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_editor_tab_attention = /** @type {((inputs?: Jams_Editor_Tab_AttentionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Editor_Tab_AttentionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_editor_tab_attention(inputs)
	if (locale === "de") return de_jams_editor_tab_attention(inputs)
	if (locale === "fr") return fr_jams_editor_tab_attention(inputs)
	if (locale === "it") return it_jams_editor_tab_attention(inputs)
	if (locale === "nl") return nl_jams_editor_tab_attention(inputs)
	if (locale === "pl") return pl_jams_editor_tab_attention(inputs)
	if (locale === "pt") return pt_jams_editor_tab_attention(inputs)
	if (locale === "ru") return ru_jams_editor_tab_attention(inputs)
	if (locale === "sv") return sv_jams_editor_tab_attention(inputs)
	if (locale === "tr") return tr_jams_editor_tab_attention(inputs)
	if (locale === "zh") return zh_jams_editor_tab_attention(inputs)
	if (locale === "ja") return ja_jams_editor_tab_attention(inputs)
	return en_jams_editor_tab_attention(inputs)
});
