/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Cmdk_Hint_ActionsInputs */

const en_cmdk_hint_actions = /** @type {(inputs: Cmdk_Hint_ActionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Actions`)
};

const es_cmdk_hint_actions = /** @type {(inputs: Cmdk_Hint_ActionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Acciones`)
};

const de_cmdk_hint_actions = /** @type {(inputs: Cmdk_Hint_ActionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aktionen`)
};

const fr_cmdk_hint_actions = /** @type {(inputs: Cmdk_Hint_ActionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Actions`)
};

const it_cmdk_hint_actions = /** @type {(inputs: Cmdk_Hint_ActionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Azioni`)
};

const nl_cmdk_hint_actions = /** @type {(inputs: Cmdk_Hint_ActionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Acties`)
};

const pl_cmdk_hint_actions = /** @type {(inputs: Cmdk_Hint_ActionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Działania`)
};

const pt_cmdk_hint_actions = /** @type {(inputs: Cmdk_Hint_ActionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ações`)
};

const ru_cmdk_hint_actions = /** @type {(inputs: Cmdk_Hint_ActionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Действия`)
};

const sv_cmdk_hint_actions = /** @type {(inputs: Cmdk_Hint_ActionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Åtgärder`)
};

const tr_cmdk_hint_actions = /** @type {(inputs: Cmdk_Hint_ActionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Eylemler`)
};

const zh_cmdk_hint_actions = /** @type {(inputs: Cmdk_Hint_ActionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`操作`)
};

const ja_cmdk_hint_actions = /** @type {(inputs: Cmdk_Hint_ActionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`操作`)
};

/**
* | output |
* | --- |
* | "Actions" |
*
* @param {Cmdk_Hint_ActionsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const cmdk_hint_actions = /** @type {((inputs?: Cmdk_Hint_ActionsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Cmdk_Hint_ActionsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_cmdk_hint_actions(inputs)
	if (locale === "de") return de_cmdk_hint_actions(inputs)
	if (locale === "fr") return fr_cmdk_hint_actions(inputs)
	if (locale === "it") return it_cmdk_hint_actions(inputs)
	if (locale === "nl") return nl_cmdk_hint_actions(inputs)
	if (locale === "pl") return pl_cmdk_hint_actions(inputs)
	if (locale === "pt") return pt_cmdk_hint_actions(inputs)
	if (locale === "ru") return ru_cmdk_hint_actions(inputs)
	if (locale === "sv") return sv_cmdk_hint_actions(inputs)
	if (locale === "tr") return tr_cmdk_hint_actions(inputs)
	if (locale === "zh") return zh_cmdk_hint_actions(inputs)
	if (locale === "ja") return ja_cmdk_hint_actions(inputs)
	return en_cmdk_hint_actions(inputs)
});
