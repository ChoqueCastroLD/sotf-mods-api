/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_User_Email_VerifiedInputs */

const en_ranger_user_email_verified = /** @type {(inputs: Ranger_User_Email_VerifiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Email verified`)
};

const es_ranger_user_email_verified = /** @type {(inputs: Ranger_User_Email_VerifiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Email verificado`)
};

const de_ranger_user_email_verified = /** @type {(inputs: Ranger_User_Email_VerifiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`E-Mail bestätigt`)
};

const fr_ranger_user_email_verified = /** @type {(inputs: Ranger_User_Email_VerifiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`E-mail vérifié`)
};

const it_ranger_user_email_verified = /** @type {(inputs: Ranger_User_Email_VerifiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Email verificata`)
};

const nl_ranger_user_email_verified = /** @type {(inputs: Ranger_User_Email_VerifiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`E-mail geverifieerd`)
};

const pl_ranger_user_email_verified = /** @type {(inputs: Ranger_User_Email_VerifiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`E-mail potwierdzony`)
};

const pt_ranger_user_email_verified = /** @type {(inputs: Ranger_User_Email_VerifiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`E-mail verificado`)
};

const ru_ranger_user_email_verified = /** @type {(inputs: Ranger_User_Email_VerifiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Email подтверждён`)
};

const sv_ranger_user_email_verified = /** @type {(inputs: Ranger_User_Email_VerifiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`E-post verifierad`)
};

const tr_ranger_user_email_verified = /** @type {(inputs: Ranger_User_Email_VerifiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`E-posta doğrulandı`)
};

const zh_ranger_user_email_verified = /** @type {(inputs: Ranger_User_Email_VerifiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`邮箱已验证`)
};

const ja_ranger_user_email_verified = /** @type {(inputs: Ranger_User_Email_VerifiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`メール確認済み`)
};

/**
* | output |
* | --- |
* | "Email verified" |
*
* @param {Ranger_User_Email_VerifiedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_user_email_verified = /** @type {((inputs?: Ranger_User_Email_VerifiedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_User_Email_VerifiedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_user_email_verified(inputs)
	if (locale === "de") return de_ranger_user_email_verified(inputs)
	if (locale === "fr") return fr_ranger_user_email_verified(inputs)
	if (locale === "it") return it_ranger_user_email_verified(inputs)
	if (locale === "nl") return nl_ranger_user_email_verified(inputs)
	if (locale === "pl") return pl_ranger_user_email_verified(inputs)
	if (locale === "pt") return pt_ranger_user_email_verified(inputs)
	if (locale === "ru") return ru_ranger_user_email_verified(inputs)
	if (locale === "sv") return sv_ranger_user_email_verified(inputs)
	if (locale === "tr") return tr_ranger_user_email_verified(inputs)
	if (locale === "zh") return zh_ranger_user_email_verified(inputs)
	if (locale === "ja") return ja_ranger_user_email_verified(inputs)
	return en_ranger_user_email_verified(inputs)
});
