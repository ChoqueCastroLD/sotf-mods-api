/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Entries_Col_ActionsInputs */

const en_jams_entries_col_actions = /** @type {(inputs: Jams_Entries_Col_ActionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Actions`)
};

const es_jams_entries_col_actions = /** @type {(inputs: Jams_Entries_Col_ActionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Acciones`)
};

const de_jams_entries_col_actions = /** @type {(inputs: Jams_Entries_Col_ActionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aktionen`)
};

const fr_jams_entries_col_actions = /** @type {(inputs: Jams_Entries_Col_ActionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Actions`)
};

const it_jams_entries_col_actions = /** @type {(inputs: Jams_Entries_Col_ActionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Azioni`)
};

const nl_jams_entries_col_actions = /** @type {(inputs: Jams_Entries_Col_ActionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Acties`)
};

const pl_jams_entries_col_actions = /** @type {(inputs: Jams_Entries_Col_ActionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Akcje`)
};

const pt_jams_entries_col_actions = /** @type {(inputs: Jams_Entries_Col_ActionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ações`)
};

const ru_jams_entries_col_actions = /** @type {(inputs: Jams_Entries_Col_ActionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Действия`)
};

const sv_jams_entries_col_actions = /** @type {(inputs: Jams_Entries_Col_ActionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Åtgärder`)
};

const tr_jams_entries_col_actions = /** @type {(inputs: Jams_Entries_Col_ActionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İşlemler`)
};

const zh_jams_entries_col_actions = /** @type {(inputs: Jams_Entries_Col_ActionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`操作`)
};

const ja_jams_entries_col_actions = /** @type {(inputs: Jams_Entries_Col_ActionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`操作`)
};

/**
* | output |
* | --- |
* | "Actions" |
*
* @param {Jams_Entries_Col_ActionsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_entries_col_actions = /** @type {((inputs?: Jams_Entries_Col_ActionsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Entries_Col_ActionsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_entries_col_actions(inputs)
	if (locale === "de") return de_jams_entries_col_actions(inputs)
	if (locale === "fr") return fr_jams_entries_col_actions(inputs)
	if (locale === "it") return it_jams_entries_col_actions(inputs)
	if (locale === "nl") return nl_jams_entries_col_actions(inputs)
	if (locale === "pl") return pl_jams_entries_col_actions(inputs)
	if (locale === "pt") return pt_jams_entries_col_actions(inputs)
	if (locale === "ru") return ru_jams_entries_col_actions(inputs)
	if (locale === "sv") return sv_jams_entries_col_actions(inputs)
	if (locale === "tr") return tr_jams_entries_col_actions(inputs)
	if (locale === "zh") return zh_jams_entries_col_actions(inputs)
	if (locale === "ja") return ja_jams_entries_col_actions(inputs)
	return en_jams_entries_col_actions(inputs)
});
