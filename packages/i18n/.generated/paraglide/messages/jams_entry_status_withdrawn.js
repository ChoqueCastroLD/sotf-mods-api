/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Entry_Status_WithdrawnInputs */

const en_jams_entry_status_withdrawn = /** @type {(inputs: Jams_Entry_Status_WithdrawnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Withdrawn`)
};

const es_jams_entry_status_withdrawn = /** @type {(inputs: Jams_Entry_Status_WithdrawnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Retirada`)
};

const de_jams_entry_status_withdrawn = /** @type {(inputs: Jams_Entry_Status_WithdrawnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zurückgezogen`)
};

const fr_jams_entry_status_withdrawn = /** @type {(inputs: Jams_Entry_Status_WithdrawnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Retirée`)
};

const it_jams_entry_status_withdrawn = /** @type {(inputs: Jams_Entry_Status_WithdrawnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ritirata`)
};

const nl_jams_entry_status_withdrawn = /** @type {(inputs: Jams_Entry_Status_WithdrawnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ingetrokken`)
};

const pl_jams_entry_status_withdrawn = /** @type {(inputs: Jams_Entry_Status_WithdrawnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wycofane`)
};

const pt_jams_entry_status_withdrawn = /** @type {(inputs: Jams_Entry_Status_WithdrawnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Retirada`)
};

const ru_jams_entry_status_withdrawn = /** @type {(inputs: Jams_Entry_Status_WithdrawnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Отозвана`)
};

const sv_jams_entry_status_withdrawn = /** @type {(inputs: Jams_Entry_Status_WithdrawnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tillbakadraget`)
};

const tr_jams_entry_status_withdrawn = /** @type {(inputs: Jams_Entry_Status_WithdrawnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Geri çekildi`)
};

const zh_jams_entry_status_withdrawn = /** @type {(inputs: Jams_Entry_Status_WithdrawnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已撤回`)
};

const ja_jams_entry_status_withdrawn = /** @type {(inputs: Jams_Entry_Status_WithdrawnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`取り下げ済み`)
};

/**
* | output |
* | --- |
* | "Withdrawn" |
*
* @param {Jams_Entry_Status_WithdrawnInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_entry_status_withdrawn = /** @type {((inputs?: Jams_Entry_Status_WithdrawnInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Entry_Status_WithdrawnInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_entry_status_withdrawn(inputs)
	if (locale === "de") return de_jams_entry_status_withdrawn(inputs)
	if (locale === "fr") return fr_jams_entry_status_withdrawn(inputs)
	if (locale === "it") return it_jams_entry_status_withdrawn(inputs)
	if (locale === "nl") return nl_jams_entry_status_withdrawn(inputs)
	if (locale === "pl") return pl_jams_entry_status_withdrawn(inputs)
	if (locale === "pt") return pt_jams_entry_status_withdrawn(inputs)
	if (locale === "ru") return ru_jams_entry_status_withdrawn(inputs)
	if (locale === "sv") return sv_jams_entry_status_withdrawn(inputs)
	if (locale === "tr") return tr_jams_entry_status_withdrawn(inputs)
	if (locale === "zh") return zh_jams_entry_status_withdrawn(inputs)
	if (locale === "ja") return ja_jams_entry_status_withdrawn(inputs)
	return en_jams_entry_status_withdrawn(inputs)
});
