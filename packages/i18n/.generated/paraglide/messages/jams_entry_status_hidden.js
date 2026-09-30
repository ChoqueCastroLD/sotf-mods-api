/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Entry_Status_HiddenInputs */

const en_jams_entry_status_hidden = /** @type {(inputs: Jams_Entry_Status_HiddenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hidden`)
};

const es_jams_entry_status_hidden = /** @type {(inputs: Jams_Entry_Status_HiddenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oculta`)
};

const de_jams_entry_status_hidden = /** @type {(inputs: Jams_Entry_Status_HiddenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verborgen`)
};

const fr_jams_entry_status_hidden = /** @type {(inputs: Jams_Entry_Status_HiddenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Masquée`)
};

const it_jams_entry_status_hidden = /** @type {(inputs: Jams_Entry_Status_HiddenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nascosta`)
};

const nl_jams_entry_status_hidden = /** @type {(inputs: Jams_Entry_Status_HiddenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verborgen`)
};

const pl_jams_entry_status_hidden = /** @type {(inputs: Jams_Entry_Status_HiddenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ukryte`)
};

const pt_jams_entry_status_hidden = /** @type {(inputs: Jams_Entry_Status_HiddenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oculta`)
};

const ru_jams_entry_status_hidden = /** @type {(inputs: Jams_Entry_Status_HiddenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Скрыта`)
};

const sv_jams_entry_status_hidden = /** @type {(inputs: Jams_Entry_Status_HiddenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dolt`)
};

const tr_jams_entry_status_hidden = /** @type {(inputs: Jams_Entry_Status_HiddenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gizli`)
};

const zh_jams_entry_status_hidden = /** @type {(inputs: Jams_Entry_Status_HiddenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已隐藏`)
};

const ja_jams_entry_status_hidden = /** @type {(inputs: Jams_Entry_Status_HiddenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`非表示`)
};

/**
* | output |
* | --- |
* | "Hidden" |
*
* @param {Jams_Entry_Status_HiddenInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_entry_status_hidden = /** @type {((inputs?: Jams_Entry_Status_HiddenInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Entry_Status_HiddenInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_entry_status_hidden(inputs)
	if (locale === "de") return de_jams_entry_status_hidden(inputs)
	if (locale === "fr") return fr_jams_entry_status_hidden(inputs)
	if (locale === "it") return it_jams_entry_status_hidden(inputs)
	if (locale === "nl") return nl_jams_entry_status_hidden(inputs)
	if (locale === "pl") return pl_jams_entry_status_hidden(inputs)
	if (locale === "pt") return pt_jams_entry_status_hidden(inputs)
	if (locale === "ru") return ru_jams_entry_status_hidden(inputs)
	if (locale === "sv") return sv_jams_entry_status_hidden(inputs)
	if (locale === "tr") return tr_jams_entry_status_hidden(inputs)
	if (locale === "zh") return zh_jams_entry_status_hidden(inputs)
	if (locale === "ja") return ja_jams_entry_status_hidden(inputs)
	return en_jams_entry_status_hidden(inputs)
});
