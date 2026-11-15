/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Manager_Faq_Safe_QInputs */

const en_manager_faq_safe_q = /** @type {(inputs: Manager_Faq_Safe_QInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Is it safe?`)
};

const es_manager_faq_safe_q = /** @type {(inputs: Manager_Faq_Safe_QInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`¿Es seguro?`)
};

const de_manager_faq_safe_q = /** @type {(inputs: Manager_Faq_Safe_QInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ist das sicher?`)
};

const fr_manager_faq_safe_q = /** @type {(inputs: Manager_Faq_Safe_QInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Est-ce sûr ?`)
};

const it_manager_faq_safe_q = /** @type {(inputs: Manager_Faq_Safe_QInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`È sicuro?`)
};

const nl_manager_faq_safe_q = /** @type {(inputs: Manager_Faq_Safe_QInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Is het veilig?`)
};

const pl_manager_faq_safe_q = /** @type {(inputs: Manager_Faq_Safe_QInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Czy to bezpieczne?`)
};

const pt_manager_faq_safe_q = /** @type {(inputs: Manager_Faq_Safe_QInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`É seguro?`)
};

const ru_manager_faq_safe_q = /** @type {(inputs: Manager_Faq_Safe_QInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Это безопасно?`)
};

const sv_manager_faq_safe_q = /** @type {(inputs: Manager_Faq_Safe_QInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Är det säkert?`)
};

const tr_manager_faq_safe_q = /** @type {(inputs: Manager_Faq_Safe_QInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Güvenli mi?`)
};

const zh_manager_faq_safe_q = /** @type {(inputs: Manager_Faq_Safe_QInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`安全吗？`)
};

const ja_manager_faq_safe_q = /** @type {(inputs: Manager_Faq_Safe_QInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`安全ですか？`)
};

/**
* | output |
* | --- |
* | "Is it safe?" |
*
* @param {Manager_Faq_Safe_QInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const manager_faq_safe_q = /** @type {((inputs?: Manager_Faq_Safe_QInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Manager_Faq_Safe_QInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_manager_faq_safe_q(inputs)
	if (locale === "de") return de_manager_faq_safe_q(inputs)
	if (locale === "fr") return fr_manager_faq_safe_q(inputs)
	if (locale === "it") return it_manager_faq_safe_q(inputs)
	if (locale === "nl") return nl_manager_faq_safe_q(inputs)
	if (locale === "pl") return pl_manager_faq_safe_q(inputs)
	if (locale === "pt") return pt_manager_faq_safe_q(inputs)
	if (locale === "ru") return ru_manager_faq_safe_q(inputs)
	if (locale === "sv") return sv_manager_faq_safe_q(inputs)
	if (locale === "tr") return tr_manager_faq_safe_q(inputs)
	if (locale === "zh") return zh_manager_faq_safe_q(inputs)
	if (locale === "ja") return ja_manager_faq_safe_q(inputs)
	return en_manager_faq_safe_q(inputs)
});
