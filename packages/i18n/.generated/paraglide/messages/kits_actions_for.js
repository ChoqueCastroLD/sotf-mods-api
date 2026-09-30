/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown> }} Kits_Actions_ForInputs */

const en_kits_actions_for = /** @type {(inputs: Kits_Actions_ForInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Actions for ${i?.name}`)
};

const es_kits_actions_for = /** @type {(inputs: Kits_Actions_ForInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Acciones de ${i?.name}`)
};

const de_kits_actions_for = /** @type {(inputs: Kits_Actions_ForInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Aktionen für ${i?.name}`)
};

const fr_kits_actions_for = /** @type {(inputs: Kits_Actions_ForInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Actions pour ${i?.name}`)
};

const it_kits_actions_for = /** @type {(inputs: Kits_Actions_ForInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Azioni per ${i?.name}`)
};

const nl_kits_actions_for = /** @type {(inputs: Kits_Actions_ForInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Acties voor ${i?.name}`)
};

const pl_kits_actions_for = /** @type {(inputs: Kits_Actions_ForInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Działania dla ${i?.name}`)
};

const pt_kits_actions_for = /** @type {(inputs: Kits_Actions_ForInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ações de ${i?.name}`)
};

const ru_kits_actions_for = /** @type {(inputs: Kits_Actions_ForInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Действия с ${i?.name}`)
};

const sv_kits_actions_for = /** @type {(inputs: Kits_Actions_ForInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Åtgärder för ${i?.name}`)
};

const tr_kits_actions_for = /** @type {(inputs: Kits_Actions_ForInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} işlemleri`)
};

const zh_kits_actions_for = /** @type {(inputs: Kits_Actions_ForInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} 的操作`)
};

const ja_kits_actions_for = /** @type {(inputs: Kits_Actions_ForInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} の操作`)
};

/**
* | output |
* | --- |
* | "Actions for {name}" |
*
* @param {Kits_Actions_ForInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_actions_for = /** @type {((inputs: Kits_Actions_ForInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Actions_ForInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_actions_for(inputs)
	if (locale === "de") return de_kits_actions_for(inputs)
	if (locale === "fr") return fr_kits_actions_for(inputs)
	if (locale === "it") return it_kits_actions_for(inputs)
	if (locale === "nl") return nl_kits_actions_for(inputs)
	if (locale === "pl") return pl_kits_actions_for(inputs)
	if (locale === "pt") return pt_kits_actions_for(inputs)
	if (locale === "ru") return ru_kits_actions_for(inputs)
	if (locale === "sv") return sv_kits_actions_for(inputs)
	if (locale === "tr") return tr_kits_actions_for(inputs)
	if (locale === "zh") return zh_kits_actions_for(inputs)
	if (locale === "ja") return ja_kits_actions_for(inputs)
	return en_kits_actions_for(inputs)
});
