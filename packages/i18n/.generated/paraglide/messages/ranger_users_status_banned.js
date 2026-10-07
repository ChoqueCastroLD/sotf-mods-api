/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Users_Status_BannedInputs */

const en_ranger_users_status_banned = /** @type {(inputs: Ranger_Users_Status_BannedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Banned`)
};

const es_ranger_users_status_banned = /** @type {(inputs: Ranger_Users_Status_BannedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Expulsado`)
};

const de_ranger_users_status_banned = /** @type {(inputs: Ranger_Users_Status_BannedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verbannt`)
};

const fr_ranger_users_status_banned = /** @type {(inputs: Ranger_Users_Status_BannedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Banni`)
};

const it_ranger_users_status_banned = /** @type {(inputs: Ranger_Users_Status_BannedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bannato`)
};

const nl_ranger_users_status_banned = /** @type {(inputs: Ranger_Users_Status_BannedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verbannen`)
};

const pl_ranger_users_status_banned = /** @type {(inputs: Ranger_Users_Status_BannedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zbanowane`)
};

const pt_ranger_users_status_banned = /** @type {(inputs: Ranger_Users_Status_BannedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Banido`)
};

const ru_ranger_users_status_banned = /** @type {(inputs: Ranger_Users_Status_BannedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Заблокированы`)
};

const sv_ranger_users_status_banned = /** @type {(inputs: Ranger_Users_Status_BannedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bannad`)
};

const tr_ranger_users_status_banned = /** @type {(inputs: Ranger_Users_Status_BannedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yasaklı`)
};

const zh_ranger_users_status_banned = /** @type {(inputs: Ranger_Users_Status_BannedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已封禁`)
};

const ja_ranger_users_status_banned = /** @type {(inputs: Ranger_Users_Status_BannedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`BAN 済み`)
};

/**
* | output |
* | --- |
* | "Banned" |
*
* @param {Ranger_Users_Status_BannedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_users_status_banned = /** @type {((inputs?: Ranger_Users_Status_BannedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Users_Status_BannedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_users_status_banned(inputs)
	if (locale === "de") return de_ranger_users_status_banned(inputs)
	if (locale === "fr") return fr_ranger_users_status_banned(inputs)
	if (locale === "it") return it_ranger_users_status_banned(inputs)
	if (locale === "nl") return nl_ranger_users_status_banned(inputs)
	if (locale === "pl") return pl_ranger_users_status_banned(inputs)
	if (locale === "pt") return pt_ranger_users_status_banned(inputs)
	if (locale === "ru") return ru_ranger_users_status_banned(inputs)
	if (locale === "sv") return sv_ranger_users_status_banned(inputs)
	if (locale === "tr") return tr_ranger_users_status_banned(inputs)
	if (locale === "zh") return zh_ranger_users_status_banned(inputs)
	if (locale === "ja") return ja_ranger_users_status_banned(inputs)
	return en_ranger_users_status_banned(inputs)
});
