/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ size: NonNullable<unknown> }} Manager_Fact_SizeInputs */

const en_manager_fact_size = /** @type {(inputs: Manager_Fact_SizeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.size} KB, no installer`)
};

const es_manager_fact_size = /** @type {(inputs: Manager_Fact_SizeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.size} KB, sin instalador`)
};

const de_manager_fact_size = /** @type {(inputs: Manager_Fact_SizeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.size} KB, ohne Installation`)
};

const fr_manager_fact_size = /** @type {(inputs: Manager_Fact_SizeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.size} Ko, sans installation`)
};

const it_manager_fact_size = /** @type {(inputs: Manager_Fact_SizeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.size} KB, senza installazione`)
};

const nl_manager_fact_size = /** @type {(inputs: Manager_Fact_SizeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.size} KB, geen installatie`)
};

const pl_manager_fact_size = /** @type {(inputs: Manager_Fact_SizeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.size} KB, bez instalatora`)
};

const pt_manager_fact_size = /** @type {(inputs: Manager_Fact_SizeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.size} KB, sem instalador`)
};

const ru_manager_fact_size = /** @type {(inputs: Manager_Fact_SizeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.size} КБ, без установки`)
};

const sv_manager_fact_size = /** @type {(inputs: Manager_Fact_SizeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.size} kB, ingen installation`)
};

const tr_manager_fact_size = /** @type {(inputs: Manager_Fact_SizeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.size} KB, kurulum yok`)
};

const zh_manager_fact_size = /** @type {(inputs: Manager_Fact_SizeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.size} KB，无需安装`)
};

const ja_manager_fact_size = /** @type {(inputs: Manager_Fact_SizeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.size} KB、インストール不要`)
};

/**
* | output |
* | --- |
* | "{size} KB, no installer" |
*
* @param {Manager_Fact_SizeInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const manager_fact_size = /** @type {((inputs: Manager_Fact_SizeInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Manager_Fact_SizeInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_manager_fact_size(inputs)
	if (locale === "de") return de_manager_fact_size(inputs)
	if (locale === "fr") return fr_manager_fact_size(inputs)
	if (locale === "it") return it_manager_fact_size(inputs)
	if (locale === "nl") return nl_manager_fact_size(inputs)
	if (locale === "pl") return pl_manager_fact_size(inputs)
	if (locale === "pt") return pt_manager_fact_size(inputs)
	if (locale === "ru") return ru_manager_fact_size(inputs)
	if (locale === "sv") return sv_manager_fact_size(inputs)
	if (locale === "tr") return tr_manager_fact_size(inputs)
	if (locale === "zh") return zh_manager_fact_size(inputs)
	if (locale === "ja") return ja_manager_fact_size(inputs)
	return en_manager_fact_size(inputs)
});
