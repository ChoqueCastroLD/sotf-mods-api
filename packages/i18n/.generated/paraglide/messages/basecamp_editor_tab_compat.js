/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Editor_Tab_CompatInputs */

const en_basecamp_editor_tab_compat = /** @type {(inputs: Basecamp_Editor_Tab_CompatInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Compatibility`)
};

const es_basecamp_editor_tab_compat = /** @type {(inputs: Basecamp_Editor_Tab_CompatInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Compatibilidad`)
};

const de_basecamp_editor_tab_compat = /** @type {(inputs: Basecamp_Editor_Tab_CompatInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kompatibilität`)
};

const fr_basecamp_editor_tab_compat = /** @type {(inputs: Basecamp_Editor_Tab_CompatInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Compatibilité`)
};

const it_basecamp_editor_tab_compat = /** @type {(inputs: Basecamp_Editor_Tab_CompatInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Compatibilità`)
};

const nl_basecamp_editor_tab_compat = /** @type {(inputs: Basecamp_Editor_Tab_CompatInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Compatibiliteit`)
};

const pl_basecamp_editor_tab_compat = /** @type {(inputs: Basecamp_Editor_Tab_CompatInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zgodność`)
};

const pt_basecamp_editor_tab_compat = /** @type {(inputs: Basecamp_Editor_Tab_CompatInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Compatibilidade`)
};

const ru_basecamp_editor_tab_compat = /** @type {(inputs: Basecamp_Editor_Tab_CompatInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Совместимость`)
};

const sv_basecamp_editor_tab_compat = /** @type {(inputs: Basecamp_Editor_Tab_CompatInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kompatibilitet`)
};

const tr_basecamp_editor_tab_compat = /** @type {(inputs: Basecamp_Editor_Tab_CompatInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Uyumluluk`)
};

const zh_basecamp_editor_tab_compat = /** @type {(inputs: Basecamp_Editor_Tab_CompatInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`兼容性`)
};

const ja_basecamp_editor_tab_compat = /** @type {(inputs: Basecamp_Editor_Tab_CompatInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`互換性`)
};

/**
* | output |
* | --- |
* | "Compatibility" |
*
* @param {Basecamp_Editor_Tab_CompatInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_editor_tab_compat = /** @type {((inputs?: Basecamp_Editor_Tab_CompatInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Editor_Tab_CompatInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_editor_tab_compat(inputs)
	if (locale === "de") return de_basecamp_editor_tab_compat(inputs)
	if (locale === "fr") return fr_basecamp_editor_tab_compat(inputs)
	if (locale === "it") return it_basecamp_editor_tab_compat(inputs)
	if (locale === "nl") return nl_basecamp_editor_tab_compat(inputs)
	if (locale === "pl") return pl_basecamp_editor_tab_compat(inputs)
	if (locale === "pt") return pt_basecamp_editor_tab_compat(inputs)
	if (locale === "ru") return ru_basecamp_editor_tab_compat(inputs)
	if (locale === "sv") return sv_basecamp_editor_tab_compat(inputs)
	if (locale === "tr") return tr_basecamp_editor_tab_compat(inputs)
	if (locale === "zh") return zh_basecamp_editor_tab_compat(inputs)
	if (locale === "ja") return ja_basecamp_editor_tab_compat(inputs)
	return en_basecamp_editor_tab_compat(inputs)
});
