/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Users_Filter_VerifiedInputs */

const en_ranger_users_filter_verified = /** @type {(inputs: Ranger_Users_Filter_VerifiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verified creator`)
};

const es_ranger_users_filter_verified = /** @type {(inputs: Ranger_Users_Filter_VerifiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Creador verificado`)
};

const de_ranger_users_filter_verified = /** @type {(inputs: Ranger_Users_Filter_VerifiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verifizierter Ersteller`)
};

const fr_ranger_users_filter_verified = /** @type {(inputs: Ranger_Users_Filter_VerifiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Créateur vérifié`)
};

const it_ranger_users_filter_verified = /** @type {(inputs: Ranger_Users_Filter_VerifiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Creatore verificato`)
};

const nl_ranger_users_filter_verified = /** @type {(inputs: Ranger_Users_Filter_VerifiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Geverifieerde maker`)
};

const pl_ranger_users_filter_verified = /** @type {(inputs: Ranger_Users_Filter_VerifiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zweryfikowany twórca`)
};

const pt_ranger_users_filter_verified = /** @type {(inputs: Ranger_Users_Filter_VerifiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Criador verificado`)
};

const ru_ranger_users_filter_verified = /** @type {(inputs: Ranger_Users_Filter_VerifiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Проверенный автор`)
};

const sv_ranger_users_filter_verified = /** @type {(inputs: Ranger_Users_Filter_VerifiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verifierad skapare`)
};

const tr_ranger_users_filter_verified = /** @type {(inputs: Ranger_Users_Filter_VerifiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Doğrulanmış yapımcı`)
};

const zh_ranger_users_filter_verified = /** @type {(inputs: Ranger_Users_Filter_VerifiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已验证创作者`)
};

const ja_ranger_users_filter_verified = /** @type {(inputs: Ranger_Users_Filter_VerifiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`認証済みクリエイター`)
};

/**
* | output |
* | --- |
* | "Verified creator" |
*
* @param {Ranger_Users_Filter_VerifiedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_users_filter_verified = /** @type {((inputs?: Ranger_Users_Filter_VerifiedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Users_Filter_VerifiedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_users_filter_verified(inputs)
	if (locale === "de") return de_ranger_users_filter_verified(inputs)
	if (locale === "fr") return fr_ranger_users_filter_verified(inputs)
	if (locale === "it") return it_ranger_users_filter_verified(inputs)
	if (locale === "nl") return nl_ranger_users_filter_verified(inputs)
	if (locale === "pl") return pl_ranger_users_filter_verified(inputs)
	if (locale === "pt") return pt_ranger_users_filter_verified(inputs)
	if (locale === "ru") return ru_ranger_users_filter_verified(inputs)
	if (locale === "sv") return sv_ranger_users_filter_verified(inputs)
	if (locale === "tr") return tr_ranger_users_filter_verified(inputs)
	if (locale === "zh") return zh_ranger_users_filter_verified(inputs)
	if (locale === "ja") return ja_ranger_users_filter_verified(inputs)
	return en_ranger_users_filter_verified(inputs)
});
