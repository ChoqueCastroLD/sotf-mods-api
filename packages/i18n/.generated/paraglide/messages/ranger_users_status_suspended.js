/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Users_Status_SuspendedInputs */

const en_ranger_users_status_suspended = /** @type {(inputs: Ranger_Users_Status_SuspendedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Suspended`)
};

const es_ranger_users_status_suspended = /** @type {(inputs: Ranger_Users_Status_SuspendedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Suspendido`)
};

const de_ranger_users_status_suspended = /** @type {(inputs: Ranger_Users_Status_SuspendedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gesperrt`)
};

const fr_ranger_users_status_suspended = /** @type {(inputs: Ranger_Users_Status_SuspendedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Suspendu`)
};

const it_ranger_users_status_suspended = /** @type {(inputs: Ranger_Users_Status_SuspendedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sospeso`)
};

const nl_ranger_users_status_suspended = /** @type {(inputs: Ranger_Users_Status_SuspendedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Geschorst`)
};

const pl_ranger_users_status_suspended = /** @type {(inputs: Ranger_Users_Status_SuspendedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zawieszone`)
};

const pt_ranger_users_status_suspended = /** @type {(inputs: Ranger_Users_Status_SuspendedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Suspenso`)
};

const ru_ranger_users_status_suspended = /** @type {(inputs: Ranger_Users_Status_SuspendedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Приостановлены`)
};

const sv_ranger_users_status_suspended = /** @type {(inputs: Ranger_Users_Status_SuspendedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Avstängd`)
};

const tr_ranger_users_status_suspended = /** @type {(inputs: Ranger_Users_Status_SuspendedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Askıya alınmış`)
};

const zh_ranger_users_status_suspended = /** @type {(inputs: Ranger_Users_Status_SuspendedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已暂停`)
};

const ja_ranger_users_status_suspended = /** @type {(inputs: Ranger_Users_Status_SuspendedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`停止中`)
};

/**
* | output |
* | --- |
* | "Suspended" |
*
* @param {Ranger_Users_Status_SuspendedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_users_status_suspended = /** @type {((inputs?: Ranger_Users_Status_SuspendedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Users_Status_SuspendedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_users_status_suspended(inputs)
	if (locale === "de") return de_ranger_users_status_suspended(inputs)
	if (locale === "fr") return fr_ranger_users_status_suspended(inputs)
	if (locale === "it") return it_ranger_users_status_suspended(inputs)
	if (locale === "nl") return nl_ranger_users_status_suspended(inputs)
	if (locale === "pl") return pl_ranger_users_status_suspended(inputs)
	if (locale === "pt") return pt_ranger_users_status_suspended(inputs)
	if (locale === "ru") return ru_ranger_users_status_suspended(inputs)
	if (locale === "sv") return sv_ranger_users_status_suspended(inputs)
	if (locale === "tr") return tr_ranger_users_status_suspended(inputs)
	if (locale === "zh") return zh_ranger_users_status_suspended(inputs)
	if (locale === "ja") return ja_ranger_users_status_suspended(inputs)
	return en_ranger_users_status_suspended(inputs)
});
