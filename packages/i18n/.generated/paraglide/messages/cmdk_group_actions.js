/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Cmdk_Group_ActionsInputs */

const en_cmdk_group_actions = /** @type {(inputs: Cmdk_Group_ActionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Actions`)
};

const es_cmdk_group_actions = /** @type {(inputs: Cmdk_Group_ActionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Acciones`)
};

const de_cmdk_group_actions = /** @type {(inputs: Cmdk_Group_ActionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aktionen`)
};

const fr_cmdk_group_actions = /** @type {(inputs: Cmdk_Group_ActionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Actions`)
};

const it_cmdk_group_actions = /** @type {(inputs: Cmdk_Group_ActionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Azioni`)
};

const nl_cmdk_group_actions = /** @type {(inputs: Cmdk_Group_ActionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Acties`)
};

const pl_cmdk_group_actions = /** @type {(inputs: Cmdk_Group_ActionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Akcje`)
};

const pt_cmdk_group_actions = /** @type {(inputs: Cmdk_Group_ActionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ações`)
};

const ru_cmdk_group_actions = /** @type {(inputs: Cmdk_Group_ActionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Действия`)
};

const sv_cmdk_group_actions = /** @type {(inputs: Cmdk_Group_ActionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Åtgärder`)
};

const tr_cmdk_group_actions = /** @type {(inputs: Cmdk_Group_ActionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Eylemler`)
};

const zh_cmdk_group_actions = /** @type {(inputs: Cmdk_Group_ActionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`操作`)
};

const ja_cmdk_group_actions = /** @type {(inputs: Cmdk_Group_ActionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`アクション`)
};

/**
* | output |
* | --- |
* | "Actions" |
*
* @param {Cmdk_Group_ActionsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const cmdk_group_actions = /** @type {((inputs?: Cmdk_Group_ActionsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Cmdk_Group_ActionsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_cmdk_group_actions(inputs)
	if (locale === "de") return de_cmdk_group_actions(inputs)
	if (locale === "fr") return fr_cmdk_group_actions(inputs)
	if (locale === "it") return it_cmdk_group_actions(inputs)
	if (locale === "nl") return nl_cmdk_group_actions(inputs)
	if (locale === "pl") return pl_cmdk_group_actions(inputs)
	if (locale === "pt") return pt_cmdk_group_actions(inputs)
	if (locale === "ru") return ru_cmdk_group_actions(inputs)
	if (locale === "sv") return sv_cmdk_group_actions(inputs)
	if (locale === "tr") return tr_cmdk_group_actions(inputs)
	if (locale === "zh") return zh_cmdk_group_actions(inputs)
	if (locale === "ja") return ja_cmdk_group_actions(inputs)
	return en_cmdk_group_actions(inputs)
});
