/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Users_Verified_NoInputs */

const en_ranger_users_verified_no = /** @type {(inputs: Ranger_Users_Verified_NoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Not verified`)
};

const es_ranger_users_verified_no = /** @type {(inputs: Ranger_Users_Verified_NoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sin verificar`)
};

const de_ranger_users_verified_no = /** @type {(inputs: Ranger_Users_Verified_NoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nicht verifiziert`)
};

const fr_ranger_users_verified_no = /** @type {(inputs: Ranger_Users_Verified_NoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Non vérifiés`)
};

const it_ranger_users_verified_no = /** @type {(inputs: Ranger_Users_Verified_NoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Non verificati`)
};

const nl_ranger_users_verified_no = /** @type {(inputs: Ranger_Users_Verified_NoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Niet geverifieerd`)
};

const pl_ranger_users_verified_no = /** @type {(inputs: Ranger_Users_Verified_NoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Niezweryfikowani`)
};

const pt_ranger_users_verified_no = /** @type {(inputs: Ranger_Users_Verified_NoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Não verificados`)
};

const ru_ranger_users_verified_no = /** @type {(inputs: Ranger_Users_Verified_NoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Без проверки`)
};

const sv_ranger_users_verified_no = /** @type {(inputs: Ranger_Users_Verified_NoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inte verifierade`)
};

const tr_ranger_users_verified_no = /** @type {(inputs: Ranger_Users_Verified_NoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Doğrulanmamış`)
};

const zh_ranger_users_verified_no = /** @type {(inputs: Ranger_Users_Verified_NoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`未验证`)
};

const ja_ranger_users_verified_no = /** @type {(inputs: Ranger_Users_Verified_NoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`未認証`)
};

/**
* | output |
* | --- |
* | "Not verified" |
*
* @param {Ranger_Users_Verified_NoInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_users_verified_no = /** @type {((inputs?: Ranger_Users_Verified_NoInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Users_Verified_NoInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_users_verified_no(inputs)
	if (locale === "de") return de_ranger_users_verified_no(inputs)
	if (locale === "fr") return fr_ranger_users_verified_no(inputs)
	if (locale === "it") return it_ranger_users_verified_no(inputs)
	if (locale === "nl") return nl_ranger_users_verified_no(inputs)
	if (locale === "pl") return pl_ranger_users_verified_no(inputs)
	if (locale === "pt") return pt_ranger_users_verified_no(inputs)
	if (locale === "ru") return ru_ranger_users_verified_no(inputs)
	if (locale === "sv") return sv_ranger_users_verified_no(inputs)
	if (locale === "tr") return tr_ranger_users_verified_no(inputs)
	if (locale === "zh") return zh_ranger_users_verified_no(inputs)
	if (locale === "ja") return ja_ranger_users_verified_no(inputs)
	return en_ranger_users_verified_no(inputs)
});
