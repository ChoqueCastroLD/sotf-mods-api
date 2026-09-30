/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Cmdk_Hint_New_TabInputs */

const en_cmdk_hint_new_tab = /** @type {(inputs: Cmdk_Hint_New_TabInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`New tab`)
};

const es_cmdk_hint_new_tab = /** @type {(inputs: Cmdk_Hint_New_TabInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nueva pestaña`)
};

const de_cmdk_hint_new_tab = /** @type {(inputs: Cmdk_Hint_New_TabInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Neuer Tab`)
};

const fr_cmdk_hint_new_tab = /** @type {(inputs: Cmdk_Hint_New_TabInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nouvel onglet`)
};

const it_cmdk_hint_new_tab = /** @type {(inputs: Cmdk_Hint_New_TabInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nuova scheda`)
};

const nl_cmdk_hint_new_tab = /** @type {(inputs: Cmdk_Hint_New_TabInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nieuw tabblad`)
};

const pl_cmdk_hint_new_tab = /** @type {(inputs: Cmdk_Hint_New_TabInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nowa karta`)
};

const pt_cmdk_hint_new_tab = /** @type {(inputs: Cmdk_Hint_New_TabInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nova aba`)
};

const ru_cmdk_hint_new_tab = /** @type {(inputs: Cmdk_Hint_New_TabInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Новая вкладка`)
};

const sv_cmdk_hint_new_tab = /** @type {(inputs: Cmdk_Hint_New_TabInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ny flik`)
};

const tr_cmdk_hint_new_tab = /** @type {(inputs: Cmdk_Hint_New_TabInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yeni sekme`)
};

const zh_cmdk_hint_new_tab = /** @type {(inputs: Cmdk_Hint_New_TabInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`新标签页`)
};

const ja_cmdk_hint_new_tab = /** @type {(inputs: Cmdk_Hint_New_TabInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`新しいタブ`)
};

/**
* | output |
* | --- |
* | "New tab" |
*
* @param {Cmdk_Hint_New_TabInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const cmdk_hint_new_tab = /** @type {((inputs?: Cmdk_Hint_New_TabInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Cmdk_Hint_New_TabInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_cmdk_hint_new_tab(inputs)
	if (locale === "de") return de_cmdk_hint_new_tab(inputs)
	if (locale === "fr") return fr_cmdk_hint_new_tab(inputs)
	if (locale === "it") return it_cmdk_hint_new_tab(inputs)
	if (locale === "nl") return nl_cmdk_hint_new_tab(inputs)
	if (locale === "pl") return pl_cmdk_hint_new_tab(inputs)
	if (locale === "pt") return pt_cmdk_hint_new_tab(inputs)
	if (locale === "ru") return ru_cmdk_hint_new_tab(inputs)
	if (locale === "sv") return sv_cmdk_hint_new_tab(inputs)
	if (locale === "tr") return tr_cmdk_hint_new_tab(inputs)
	if (locale === "zh") return zh_cmdk_hint_new_tab(inputs)
	if (locale === "ja") return ja_cmdk_hint_new_tab(inputs)
	return en_cmdk_hint_new_tab(inputs)
});
