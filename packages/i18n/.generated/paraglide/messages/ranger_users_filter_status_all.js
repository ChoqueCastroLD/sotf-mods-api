/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Users_Filter_Status_AllInputs */

const en_ranger_users_filter_status_all = /** @type {(inputs: Ranger_Users_Filter_Status_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Any status`)
};

const es_ranger_users_filter_status_all = /** @type {(inputs: Ranger_Users_Filter_Status_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cualquier estado`)
};

const de_ranger_users_filter_status_all = /** @type {(inputs: Ranger_Users_Filter_Status_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jeder Status`)
};

const fr_ranger_users_filter_status_all = /** @type {(inputs: Ranger_Users_Filter_Status_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tous les états`)
};

const it_ranger_users_filter_status_all = /** @type {(inputs: Ranger_Users_Filter_Status_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Qualsiasi stato`)
};

const nl_ranger_users_filter_status_all = /** @type {(inputs: Ranger_Users_Filter_Status_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Elke status`)
};

const pl_ranger_users_filter_status_all = /** @type {(inputs: Ranger_Users_Filter_Status_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dowolny stan`)
};

const pt_ranger_users_filter_status_all = /** @type {(inputs: Ranger_Users_Filter_Status_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Qualquer status`)
};

const ru_ranger_users_filter_status_all = /** @type {(inputs: Ranger_Users_Filter_Status_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Любой статус`)
};

const sv_ranger_users_filter_status_all = /** @type {(inputs: Ranger_Users_Filter_Status_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alla statusar`)
};

const tr_ranger_users_filter_status_all = /** @type {(inputs: Ranger_Users_Filter_Status_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tüm durumlar`)
};

const zh_ranger_users_filter_status_all = /** @type {(inputs: Ranger_Users_Filter_Status_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`任意状态`)
};

const ja_ranger_users_filter_status_all = /** @type {(inputs: Ranger_Users_Filter_Status_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`すべての状態`)
};

/**
* | output |
* | --- |
* | "Any status" |
*
* @param {Ranger_Users_Filter_Status_AllInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_users_filter_status_all = /** @type {((inputs?: Ranger_Users_Filter_Status_AllInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Users_Filter_Status_AllInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_users_filter_status_all(inputs)
	if (locale === "de") return de_ranger_users_filter_status_all(inputs)
	if (locale === "fr") return fr_ranger_users_filter_status_all(inputs)
	if (locale === "it") return it_ranger_users_filter_status_all(inputs)
	if (locale === "nl") return nl_ranger_users_filter_status_all(inputs)
	if (locale === "pl") return pl_ranger_users_filter_status_all(inputs)
	if (locale === "pt") return pt_ranger_users_filter_status_all(inputs)
	if (locale === "ru") return ru_ranger_users_filter_status_all(inputs)
	if (locale === "sv") return sv_ranger_users_filter_status_all(inputs)
	if (locale === "tr") return tr_ranger_users_filter_status_all(inputs)
	if (locale === "zh") return zh_ranger_users_filter_status_all(inputs)
	if (locale === "ja") return ja_ranger_users_filter_status_all(inputs)
	return en_ranger_users_filter_status_all(inputs)
});
