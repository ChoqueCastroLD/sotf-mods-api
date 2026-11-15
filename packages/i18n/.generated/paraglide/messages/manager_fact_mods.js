/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown> }} Manager_Fact_ModsInputs */

const en_manager_fact_mods = /** @type {(inputs: Manager_Fact_ModsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} mods available`)
};

const es_manager_fact_mods = /** @type {(inputs: Manager_Fact_ModsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} mods disponibles`)
};

const de_manager_fact_mods = /** @type {(inputs: Manager_Fact_ModsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} Mods verfügbar`)
};

const fr_manager_fact_mods = /** @type {(inputs: Manager_Fact_ModsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} mods disponibles`)
};

const it_manager_fact_mods = /** @type {(inputs: Manager_Fact_ModsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} mod disponibili`)
};

const nl_manager_fact_mods = /** @type {(inputs: Manager_Fact_ModsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} mods beschikbaar`)
};

const pl_manager_fact_mods = /** @type {(inputs: Manager_Fact_ModsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Dostępne mody: ${i?.count}`)
};

const pt_manager_fact_mods = /** @type {(inputs: Manager_Fact_ModsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} mods disponíveis`)
};

const ru_manager_fact_mods = /** @type {(inputs: Manager_Fact_ModsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Доступно модов: ${i?.count}`)
};

const sv_manager_fact_mods = /** @type {(inputs: Manager_Fact_ModsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} moddar tillgängliga`)
};

const tr_manager_fact_mods = /** @type {(inputs: Manager_Fact_ModsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} mod mevcut`)
};

const zh_manager_fact_mods = /** @type {(inputs: Manager_Fact_ModsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} 个模组可用`)
};

const ja_manager_fact_mods = /** @type {(inputs: Manager_Fact_ModsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} 件の Mod に対応`)
};

/**
* | output |
* | --- |
* | "{count} mods available" |
*
* @param {Manager_Fact_ModsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const manager_fact_mods = /** @type {((inputs: Manager_Fact_ModsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Manager_Fact_ModsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_manager_fact_mods(inputs)
	if (locale === "de") return de_manager_fact_mods(inputs)
	if (locale === "fr") return fr_manager_fact_mods(inputs)
	if (locale === "it") return it_manager_fact_mods(inputs)
	if (locale === "nl") return nl_manager_fact_mods(inputs)
	if (locale === "pl") return pl_manager_fact_mods(inputs)
	if (locale === "pt") return pt_manager_fact_mods(inputs)
	if (locale === "ru") return ru_manager_fact_mods(inputs)
	if (locale === "sv") return sv_manager_fact_mods(inputs)
	if (locale === "tr") return tr_manager_fact_mods(inputs)
	if (locale === "zh") return zh_manager_fact_mods(inputs)
	if (locale === "ja") return ja_manager_fact_mods(inputs)
	return en_manager_fact_mods(inputs)
});
