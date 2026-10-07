/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Users_Verified_YesInputs */

const en_ranger_users_verified_yes = /** @type {(inputs: Ranger_Users_Verified_YesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verified creators`)
};

const es_ranger_users_verified_yes = /** @type {(inputs: Ranger_Users_Verified_YesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Creadores verificados`)
};

const de_ranger_users_verified_yes = /** @type {(inputs: Ranger_Users_Verified_YesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verifizierte Ersteller`)
};

const fr_ranger_users_verified_yes = /** @type {(inputs: Ranger_Users_Verified_YesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Créateurs vérifiés`)
};

const it_ranger_users_verified_yes = /** @type {(inputs: Ranger_Users_Verified_YesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Creatori verificati`)
};

const nl_ranger_users_verified_yes = /** @type {(inputs: Ranger_Users_Verified_YesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Geverifieerde makers`)
};

const pl_ranger_users_verified_yes = /** @type {(inputs: Ranger_Users_Verified_YesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zweryfikowani twórcy`)
};

const pt_ranger_users_verified_yes = /** @type {(inputs: Ranger_Users_Verified_YesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Criadores verificados`)
};

const ru_ranger_users_verified_yes = /** @type {(inputs: Ranger_Users_Verified_YesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Проверенные авторы`)
};

const sv_ranger_users_verified_yes = /** @type {(inputs: Ranger_Users_Verified_YesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verifierade skapare`)
};

const tr_ranger_users_verified_yes = /** @type {(inputs: Ranger_Users_Verified_YesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Doğrulanmış yapımcılar`)
};

const zh_ranger_users_verified_yes = /** @type {(inputs: Ranger_Users_Verified_YesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已验证创作者`)
};

const ja_ranger_users_verified_yes = /** @type {(inputs: Ranger_Users_Verified_YesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`認証済みクリエイター`)
};

/**
* | output |
* | --- |
* | "Verified creators" |
*
* @param {Ranger_Users_Verified_YesInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_users_verified_yes = /** @type {((inputs?: Ranger_Users_Verified_YesInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Users_Verified_YesInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_users_verified_yes(inputs)
	if (locale === "de") return de_ranger_users_verified_yes(inputs)
	if (locale === "fr") return fr_ranger_users_verified_yes(inputs)
	if (locale === "it") return it_ranger_users_verified_yes(inputs)
	if (locale === "nl") return nl_ranger_users_verified_yes(inputs)
	if (locale === "pl") return pl_ranger_users_verified_yes(inputs)
	if (locale === "pt") return pt_ranger_users_verified_yes(inputs)
	if (locale === "ru") return ru_ranger_users_verified_yes(inputs)
	if (locale === "sv") return sv_ranger_users_verified_yes(inputs)
	if (locale === "tr") return tr_ranger_users_verified_yes(inputs)
	if (locale === "zh") return zh_ranger_users_verified_yes(inputs)
	if (locale === "ja") return ja_ranger_users_verified_yes(inputs)
	return en_ranger_users_verified_yes(inputs)
});
