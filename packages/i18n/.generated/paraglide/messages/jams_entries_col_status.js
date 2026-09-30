/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Entries_Col_StatusInputs */

const en_jams_entries_col_status = /** @type {(inputs: Jams_Entries_Col_StatusInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Status`)
};

const es_jams_entries_col_status = /** @type {(inputs: Jams_Entries_Col_StatusInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Estado`)
};

const de_jams_entries_col_status = /** @type {(inputs: Jams_Entries_Col_StatusInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Status`)
};

const fr_jams_entries_col_status = /** @type {(inputs: Jams_Entries_Col_StatusInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Statut`)
};

const it_jams_entries_col_status = /** @type {(inputs: Jams_Entries_Col_StatusInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Stato`)
};

const nl_jams_entries_col_status = /** @type {(inputs: Jams_Entries_Col_StatusInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Status`)
};

const pl_jams_entries_col_status = /** @type {(inputs: Jams_Entries_Col_StatusInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Status`)
};

const pt_jams_entries_col_status = /** @type {(inputs: Jams_Entries_Col_StatusInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Status`)
};

const ru_jams_entries_col_status = /** @type {(inputs: Jams_Entries_Col_StatusInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Статус`)
};

const sv_jams_entries_col_status = /** @type {(inputs: Jams_Entries_Col_StatusInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Status`)
};

const tr_jams_entries_col_status = /** @type {(inputs: Jams_Entries_Col_StatusInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Durum`)
};

const zh_jams_entries_col_status = /** @type {(inputs: Jams_Entries_Col_StatusInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`状态`)
};

const ja_jams_entries_col_status = /** @type {(inputs: Jams_Entries_Col_StatusInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`状態`)
};

/**
* | output |
* | --- |
* | "Status" |
*
* @param {Jams_Entries_Col_StatusInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_entries_col_status = /** @type {((inputs?: Jams_Entries_Col_StatusInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Entries_Col_StatusInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_entries_col_status(inputs)
	if (locale === "de") return de_jams_entries_col_status(inputs)
	if (locale === "fr") return fr_jams_entries_col_status(inputs)
	if (locale === "it") return it_jams_entries_col_status(inputs)
	if (locale === "nl") return nl_jams_entries_col_status(inputs)
	if (locale === "pl") return pl_jams_entries_col_status(inputs)
	if (locale === "pt") return pt_jams_entries_col_status(inputs)
	if (locale === "ru") return ru_jams_entries_col_status(inputs)
	if (locale === "sv") return sv_jams_entries_col_status(inputs)
	if (locale === "tr") return tr_jams_entries_col_status(inputs)
	if (locale === "zh") return zh_jams_entries_col_status(inputs)
	if (locale === "ja") return ja_jams_entries_col_status(inputs)
	return en_jams_entries_col_status(inputs)
});
