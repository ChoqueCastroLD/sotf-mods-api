/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Users_Filter_StatusInputs */

const en_ranger_users_filter_status = /** @type {(inputs: Ranger_Users_Filter_StatusInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Account status`)
};

const es_ranger_users_filter_status = /** @type {(inputs: Ranger_Users_Filter_StatusInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Estado de la cuenta`)
};

const de_ranger_users_filter_status = /** @type {(inputs: Ranger_Users_Filter_StatusInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kontostatus`)
};

const fr_ranger_users_filter_status = /** @type {(inputs: Ranger_Users_Filter_StatusInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`État du compte`)
};

const it_ranger_users_filter_status = /** @type {(inputs: Ranger_Users_Filter_StatusInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Stato dell’account`)
};

const nl_ranger_users_filter_status = /** @type {(inputs: Ranger_Users_Filter_StatusInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Accountstatus`)
};

const pl_ranger_users_filter_status = /** @type {(inputs: Ranger_Users_Filter_StatusInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Stan konta`)
};

const pt_ranger_users_filter_status = /** @type {(inputs: Ranger_Users_Filter_StatusInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Status da conta`)
};

const ru_ranger_users_filter_status = /** @type {(inputs: Ranger_Users_Filter_StatusInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Статус аккаунта`)
};

const sv_ranger_users_filter_status = /** @type {(inputs: Ranger_Users_Filter_StatusInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kontostatus`)
};

const tr_ranger_users_filter_status = /** @type {(inputs: Ranger_Users_Filter_StatusInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hesap durumu`)
};

const zh_ranger_users_filter_status = /** @type {(inputs: Ranger_Users_Filter_StatusInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`账号状态`)
};

const ja_ranger_users_filter_status = /** @type {(inputs: Ranger_Users_Filter_StatusInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`アカウントの状態`)
};

/**
* | output |
* | --- |
* | "Account status" |
*
* @param {Ranger_Users_Filter_StatusInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_users_filter_status = /** @type {((inputs?: Ranger_Users_Filter_StatusInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Users_Filter_StatusInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_users_filter_status(inputs)
	if (locale === "de") return de_ranger_users_filter_status(inputs)
	if (locale === "fr") return fr_ranger_users_filter_status(inputs)
	if (locale === "it") return it_ranger_users_filter_status(inputs)
	if (locale === "nl") return nl_ranger_users_filter_status(inputs)
	if (locale === "pl") return pl_ranger_users_filter_status(inputs)
	if (locale === "pt") return pt_ranger_users_filter_status(inputs)
	if (locale === "ru") return ru_ranger_users_filter_status(inputs)
	if (locale === "sv") return sv_ranger_users_filter_status(inputs)
	if (locale === "tr") return tr_ranger_users_filter_status(inputs)
	if (locale === "zh") return zh_ranger_users_filter_status(inputs)
	if (locale === "ja") return ja_ranger_users_filter_status(inputs)
	return en_ranger_users_filter_status(inputs)
});
