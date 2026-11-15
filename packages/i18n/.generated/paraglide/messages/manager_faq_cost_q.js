/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Manager_Faq_Cost_QInputs */

const en_manager_faq_cost_q = /** @type {(inputs: Manager_Faq_Cost_QInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Does it cost anything?`)
};

const es_manager_faq_cost_q = /** @type {(inputs: Manager_Faq_Cost_QInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`¿Cuesta algo?`)
};

const de_manager_faq_cost_q = /** @type {(inputs: Manager_Faq_Cost_QInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kostet es etwas?`)
};

const fr_manager_faq_cost_q = /** @type {(inputs: Manager_Faq_Cost_QInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Est-ce payant ?`)
};

const it_manager_faq_cost_q = /** @type {(inputs: Manager_Faq_Cost_QInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Costa qualcosa?`)
};

const nl_manager_faq_cost_q = /** @type {(inputs: Manager_Faq_Cost_QInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kost het iets?`)
};

const pl_manager_faq_cost_q = /** @type {(inputs: Manager_Faq_Cost_QInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Czy to coś kosztuje?`)
};

const pt_manager_faq_cost_q = /** @type {(inputs: Manager_Faq_Cost_QInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Custa alguma coisa?`)
};

const ru_manager_faq_cost_q = /** @type {(inputs: Manager_Faq_Cost_QInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Это платно?`)
};

const sv_manager_faq_cost_q = /** @type {(inputs: Manager_Faq_Cost_QInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kostar det något?`)
};

const tr_manager_faq_cost_q = /** @type {(inputs: Manager_Faq_Cost_QInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ücretli mi?`)
};

const zh_manager_faq_cost_q = /** @type {(inputs: Manager_Faq_Cost_QInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`收费吗？`)
};

const ja_manager_faq_cost_q = /** @type {(inputs: Manager_Faq_Cost_QInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`料金はかかりますか？`)
};

/**
* | output |
* | --- |
* | "Does it cost anything?" |
*
* @param {Manager_Faq_Cost_QInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const manager_faq_cost_q = /** @type {((inputs?: Manager_Faq_Cost_QInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Manager_Faq_Cost_QInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_manager_faq_cost_q(inputs)
	if (locale === "de") return de_manager_faq_cost_q(inputs)
	if (locale === "fr") return fr_manager_faq_cost_q(inputs)
	if (locale === "it") return it_manager_faq_cost_q(inputs)
	if (locale === "nl") return nl_manager_faq_cost_q(inputs)
	if (locale === "pl") return pl_manager_faq_cost_q(inputs)
	if (locale === "pt") return pt_manager_faq_cost_q(inputs)
	if (locale === "ru") return ru_manager_faq_cost_q(inputs)
	if (locale === "sv") return sv_manager_faq_cost_q(inputs)
	if (locale === "tr") return tr_manager_faq_cost_q(inputs)
	if (locale === "zh") return zh_manager_faq_cost_q(inputs)
	if (locale === "ja") return ja_manager_faq_cost_q(inputs)
	return en_manager_faq_cost_q(inputs)
});
