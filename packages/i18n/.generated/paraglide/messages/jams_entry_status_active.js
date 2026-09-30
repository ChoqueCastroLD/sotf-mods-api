/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Entry_Status_ActiveInputs */

const en_jams_entry_status_active = /** @type {(inputs: Jams_Entry_Status_ActiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Active`)
};

const es_jams_entry_status_active = /** @type {(inputs: Jams_Entry_Status_ActiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Activa`)
};

const de_jams_entry_status_active = /** @type {(inputs: Jams_Entry_Status_ActiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aktiv`)
};

const fr_jams_entry_status_active = /** @type {(inputs: Jams_Entry_Status_ActiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Active`)
};

const it_jams_entry_status_active = /** @type {(inputs: Jams_Entry_Status_ActiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Attiva`)
};

const nl_jams_entry_status_active = /** @type {(inputs: Jams_Entry_Status_ActiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Actief`)
};

const pl_jams_entry_status_active = /** @type {(inputs: Jams_Entry_Status_ActiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aktywne`)
};

const pt_jams_entry_status_active = /** @type {(inputs: Jams_Entry_Status_ActiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ativa`)
};

const ru_jams_entry_status_active = /** @type {(inputs: Jams_Entry_Status_ActiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Активна`)
};

const sv_jams_entry_status_active = /** @type {(inputs: Jams_Entry_Status_ActiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aktivt`)
};

const tr_jams_entry_status_active = /** @type {(inputs: Jams_Entry_Status_ActiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Etkin`)
};

const zh_jams_entry_status_active = /** @type {(inputs: Jams_Entry_Status_ActiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`有效`)
};

const ja_jams_entry_status_active = /** @type {(inputs: Jams_Entry_Status_ActiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`有効`)
};

/**
* | output |
* | --- |
* | "Active" |
*
* @param {Jams_Entry_Status_ActiveInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_entry_status_active = /** @type {((inputs?: Jams_Entry_Status_ActiveInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Entry_Status_ActiveInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_entry_status_active(inputs)
	if (locale === "de") return de_jams_entry_status_active(inputs)
	if (locale === "fr") return fr_jams_entry_status_active(inputs)
	if (locale === "it") return it_jams_entry_status_active(inputs)
	if (locale === "nl") return nl_jams_entry_status_active(inputs)
	if (locale === "pl") return pl_jams_entry_status_active(inputs)
	if (locale === "pt") return pt_jams_entry_status_active(inputs)
	if (locale === "ru") return ru_jams_entry_status_active(inputs)
	if (locale === "sv") return sv_jams_entry_status_active(inputs)
	if (locale === "tr") return tr_jams_entry_status_active(inputs)
	if (locale === "zh") return zh_jams_entry_status_active(inputs)
	if (locale === "ja") return ja_jams_entry_status_active(inputs)
	return en_jams_entry_status_active(inputs)
});
