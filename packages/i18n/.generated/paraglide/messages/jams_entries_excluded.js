/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown> }} Jams_Entries_ExcludedInputs */

const en_jams_entries_excluded = /** @type {(inputs: Jams_Entries_ExcludedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Excluded: ${i?.count}`)
};

const es_jams_entries_excluded = /** @type {(inputs: Jams_Entries_ExcludedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Excluidos: ${i?.count}`)
};

const de_jams_entries_excluded = /** @type {(inputs: Jams_Entries_ExcludedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ausgeschlossen: ${i?.count}`)
};

const fr_jams_entries_excluded = /** @type {(inputs: Jams_Entries_ExcludedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Exclus : ${i?.count}`)
};

const it_jams_entries_excluded = /** @type {(inputs: Jams_Entries_ExcludedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Esclusi: ${i?.count}`)
};

const nl_jams_entries_excluded = /** @type {(inputs: Jams_Entries_ExcludedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Uitgesloten: ${i?.count}`)
};

const pl_jams_entries_excluded = /** @type {(inputs: Jams_Entries_ExcludedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Wykluczone: ${i?.count}`)
};

const pt_jams_entries_excluded = /** @type {(inputs: Jams_Entries_ExcludedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Excluídos: ${i?.count}`)
};

const ru_jams_entries_excluded = /** @type {(inputs: Jams_Entries_ExcludedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Исключено: ${i?.count}`)
};

const sv_jams_entries_excluded = /** @type {(inputs: Jams_Entries_ExcludedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Uteslutna: ${i?.count}`)
};

const tr_jams_entries_excluded = /** @type {(inputs: Jams_Entries_ExcludedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Hariç tutulan: ${i?.count}`)
};

const zh_jams_entries_excluded = /** @type {(inputs: Jams_Entries_ExcludedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`已排除：${i?.count}`)
};

const ja_jams_entries_excluded = /** @type {(inputs: Jams_Entries_ExcludedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`除外: ${i?.count}`)
};

/**
* | output |
* | --- |
* | "Excluded: {count}" |
*
* @param {Jams_Entries_ExcludedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_entries_excluded = /** @type {((inputs: Jams_Entries_ExcludedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Entries_ExcludedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_entries_excluded(inputs)
	if (locale === "de") return de_jams_entries_excluded(inputs)
	if (locale === "fr") return fr_jams_entries_excluded(inputs)
	if (locale === "it") return it_jams_entries_excluded(inputs)
	if (locale === "nl") return nl_jams_entries_excluded(inputs)
	if (locale === "pl") return pl_jams_entries_excluded(inputs)
	if (locale === "pt") return pt_jams_entries_excluded(inputs)
	if (locale === "ru") return ru_jams_entries_excluded(inputs)
	if (locale === "sv") return sv_jams_entries_excluded(inputs)
	if (locale === "tr") return tr_jams_entries_excluded(inputs)
	if (locale === "zh") return zh_jams_entries_excluded(inputs)
	if (locale === "ja") return ja_jams_entries_excluded(inputs)
	return en_jams_entries_excluded(inputs)
});
