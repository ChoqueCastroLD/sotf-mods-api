/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Editor_BackInputs */

const en_basecamp_editor_back = /** @type {(inputs: Basecamp_Editor_BackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`My mods`)
};

const es_basecamp_editor_back = /** @type {(inputs: Basecamp_Editor_BackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mis mods`)
};

const de_basecamp_editor_back = /** @type {(inputs: Basecamp_Editor_BackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Meine Mods`)
};

const fr_basecamp_editor_back = /** @type {(inputs: Basecamp_Editor_BackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mes mods`)
};

const it_basecamp_editor_back = /** @type {(inputs: Basecamp_Editor_BackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Le mie mod`)
};

const nl_basecamp_editor_back = /** @type {(inputs: Basecamp_Editor_BackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mijn mods`)
};

const pl_basecamp_editor_back = /** @type {(inputs: Basecamp_Editor_BackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Moje mody`)
};

const pt_basecamp_editor_back = /** @type {(inputs: Basecamp_Editor_BackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Meus mods`)
};

const ru_basecamp_editor_back = /** @type {(inputs: Basecamp_Editor_BackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Мои моды`)
};

const sv_basecamp_editor_back = /** @type {(inputs: Basecamp_Editor_BackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mina moddar`)
};

const tr_basecamp_editor_back = /** @type {(inputs: Basecamp_Editor_BackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modlarım`)
};

const zh_basecamp_editor_back = /** @type {(inputs: Basecamp_Editor_BackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`我的模组`)
};

const ja_basecamp_editor_back = /** @type {(inputs: Basecamp_Editor_BackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`マイ MOD`)
};

/**
* | output |
* | --- |
* | "My mods" |
*
* @param {Basecamp_Editor_BackInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_editor_back = /** @type {((inputs?: Basecamp_Editor_BackInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Editor_BackInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_editor_back(inputs)
	if (locale === "de") return de_basecamp_editor_back(inputs)
	if (locale === "fr") return fr_basecamp_editor_back(inputs)
	if (locale === "it") return it_basecamp_editor_back(inputs)
	if (locale === "nl") return nl_basecamp_editor_back(inputs)
	if (locale === "pl") return pl_basecamp_editor_back(inputs)
	if (locale === "pt") return pt_basecamp_editor_back(inputs)
	if (locale === "ru") return ru_basecamp_editor_back(inputs)
	if (locale === "sv") return sv_basecamp_editor_back(inputs)
	if (locale === "tr") return tr_basecamp_editor_back(inputs)
	if (locale === "zh") return zh_basecamp_editor_back(inputs)
	if (locale === "ja") return ja_basecamp_editor_back(inputs)
	return en_basecamp_editor_back(inputs)
});
