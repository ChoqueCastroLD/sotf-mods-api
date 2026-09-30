/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Entries_HideInputs */

const en_jams_entries_hide = /** @type {(inputs: Jams_Entries_HideInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hide`)
};

const es_jams_entries_hide = /** @type {(inputs: Jams_Entries_HideInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ocultar`)
};

const de_jams_entries_hide = /** @type {(inputs: Jams_Entries_HideInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verbergen`)
};

const fr_jams_entries_hide = /** @type {(inputs: Jams_Entries_HideInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Masquer`)
};

const it_jams_entries_hide = /** @type {(inputs: Jams_Entries_HideInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nascondi`)
};

const nl_jams_entries_hide = /** @type {(inputs: Jams_Entries_HideInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verbergen`)
};

const pl_jams_entries_hide = /** @type {(inputs: Jams_Entries_HideInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ukryj`)
};

const pt_jams_entries_hide = /** @type {(inputs: Jams_Entries_HideInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ocultar`)
};

const ru_jams_entries_hide = /** @type {(inputs: Jams_Entries_HideInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Скрыть`)
};

const sv_jams_entries_hide = /** @type {(inputs: Jams_Entries_HideInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dölj`)
};

const tr_jams_entries_hide = /** @type {(inputs: Jams_Entries_HideInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gizle`)
};

const zh_jams_entries_hide = /** @type {(inputs: Jams_Entries_HideInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`隐藏`)
};

const ja_jams_entries_hide = /** @type {(inputs: Jams_Entries_HideInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`非表示`)
};

/**
* | output |
* | --- |
* | "Hide" |
*
* @param {Jams_Entries_HideInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_entries_hide = /** @type {((inputs?: Jams_Entries_HideInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Entries_HideInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_entries_hide(inputs)
	if (locale === "de") return de_jams_entries_hide(inputs)
	if (locale === "fr") return fr_jams_entries_hide(inputs)
	if (locale === "it") return it_jams_entries_hide(inputs)
	if (locale === "nl") return nl_jams_entries_hide(inputs)
	if (locale === "pl") return pl_jams_entries_hide(inputs)
	if (locale === "pt") return pt_jams_entries_hide(inputs)
	if (locale === "ru") return ru_jams_entries_hide(inputs)
	if (locale === "sv") return sv_jams_entries_hide(inputs)
	if (locale === "tr") return tr_jams_entries_hide(inputs)
	if (locale === "zh") return zh_jams_entries_hide(inputs)
	if (locale === "ja") return ja_jams_entries_hide(inputs)
	return en_jams_entries_hide(inputs)
});
