/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Mods_Col_ActionsInputs */

const en_basecamp_mods_col_actions = /** @type {(inputs: Basecamp_Mods_Col_ActionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Actions`)
};

const es_basecamp_mods_col_actions = /** @type {(inputs: Basecamp_Mods_Col_ActionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Acciones`)
};

const de_basecamp_mods_col_actions = /** @type {(inputs: Basecamp_Mods_Col_ActionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aktionen`)
};

const fr_basecamp_mods_col_actions = /** @type {(inputs: Basecamp_Mods_Col_ActionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Actions`)
};

const it_basecamp_mods_col_actions = /** @type {(inputs: Basecamp_Mods_Col_ActionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Azioni`)
};

const nl_basecamp_mods_col_actions = /** @type {(inputs: Basecamp_Mods_Col_ActionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Acties`)
};

const pl_basecamp_mods_col_actions = /** @type {(inputs: Basecamp_Mods_Col_ActionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Działania`)
};

const pt_basecamp_mods_col_actions = /** @type {(inputs: Basecamp_Mods_Col_ActionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ações`)
};

const ru_basecamp_mods_col_actions = /** @type {(inputs: Basecamp_Mods_Col_ActionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Действия`)
};

const sv_basecamp_mods_col_actions = /** @type {(inputs: Basecamp_Mods_Col_ActionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Åtgärder`)
};

const tr_basecamp_mods_col_actions = /** @type {(inputs: Basecamp_Mods_Col_ActionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İşlemler`)
};

const zh_basecamp_mods_col_actions = /** @type {(inputs: Basecamp_Mods_Col_ActionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`操作`)
};

const ja_basecamp_mods_col_actions = /** @type {(inputs: Basecamp_Mods_Col_ActionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`操作`)
};

/**
* | output |
* | --- |
* | "Actions" |
*
* @param {Basecamp_Mods_Col_ActionsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_mods_col_actions = /** @type {((inputs?: Basecamp_Mods_Col_ActionsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Mods_Col_ActionsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_mods_col_actions(inputs)
	if (locale === "de") return de_basecamp_mods_col_actions(inputs)
	if (locale === "fr") return fr_basecamp_mods_col_actions(inputs)
	if (locale === "it") return it_basecamp_mods_col_actions(inputs)
	if (locale === "nl") return nl_basecamp_mods_col_actions(inputs)
	if (locale === "pl") return pl_basecamp_mods_col_actions(inputs)
	if (locale === "pt") return pt_basecamp_mods_col_actions(inputs)
	if (locale === "ru") return ru_basecamp_mods_col_actions(inputs)
	if (locale === "sv") return sv_basecamp_mods_col_actions(inputs)
	if (locale === "tr") return tr_basecamp_mods_col_actions(inputs)
	if (locale === "zh") return zh_basecamp_mods_col_actions(inputs)
	if (locale === "ja") return ja_basecamp_mods_col_actions(inputs)
	return en_basecamp_mods_col_actions(inputs)
});
