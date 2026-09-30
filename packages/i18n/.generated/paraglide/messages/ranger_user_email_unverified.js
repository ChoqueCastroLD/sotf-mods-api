/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_User_Email_UnverifiedInputs */

const en_ranger_user_email_unverified = /** @type {(inputs: Ranger_User_Email_UnverifiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Email not verified`)
};

const es_ranger_user_email_unverified = /** @type {(inputs: Ranger_User_Email_UnverifiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Email sin verificar`)
};

const de_ranger_user_email_unverified = /** @type {(inputs: Ranger_User_Email_UnverifiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`E-Mail nicht bestätigt`)
};

const fr_ranger_user_email_unverified = /** @type {(inputs: Ranger_User_Email_UnverifiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`E-mail non vérifié`)
};

const it_ranger_user_email_unverified = /** @type {(inputs: Ranger_User_Email_UnverifiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Email non verificata`)
};

const nl_ranger_user_email_unverified = /** @type {(inputs: Ranger_User_Email_UnverifiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`E-mail niet geverifieerd`)
};

const pl_ranger_user_email_unverified = /** @type {(inputs: Ranger_User_Email_UnverifiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`E-mail niepotwierdzony`)
};

const pt_ranger_user_email_unverified = /** @type {(inputs: Ranger_User_Email_UnverifiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`E-mail não verificado`)
};

const ru_ranger_user_email_unverified = /** @type {(inputs: Ranger_User_Email_UnverifiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Email не подтверждён`)
};

const sv_ranger_user_email_unverified = /** @type {(inputs: Ranger_User_Email_UnverifiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`E-post inte verifierad`)
};

const tr_ranger_user_email_unverified = /** @type {(inputs: Ranger_User_Email_UnverifiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`E-posta doğrulanmadı`)
};

const zh_ranger_user_email_unverified = /** @type {(inputs: Ranger_User_Email_UnverifiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`邮箱未验证`)
};

const ja_ranger_user_email_unverified = /** @type {(inputs: Ranger_User_Email_UnverifiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`メール未確認`)
};

/**
* | output |
* | --- |
* | "Email not verified" |
*
* @param {Ranger_User_Email_UnverifiedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_user_email_unverified = /** @type {((inputs?: Ranger_User_Email_UnverifiedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_User_Email_UnverifiedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_user_email_unverified(inputs)
	if (locale === "de") return de_ranger_user_email_unverified(inputs)
	if (locale === "fr") return fr_ranger_user_email_unverified(inputs)
	if (locale === "it") return it_ranger_user_email_unverified(inputs)
	if (locale === "nl") return nl_ranger_user_email_unverified(inputs)
	if (locale === "pl") return pl_ranger_user_email_unverified(inputs)
	if (locale === "pt") return pt_ranger_user_email_unverified(inputs)
	if (locale === "ru") return ru_ranger_user_email_unverified(inputs)
	if (locale === "sv") return sv_ranger_user_email_unverified(inputs)
	if (locale === "tr") return tr_ranger_user_email_unverified(inputs)
	if (locale === "zh") return zh_ranger_user_email_unverified(inputs)
	if (locale === "ja") return ja_ranger_user_email_unverified(inputs)
	return en_ranger_user_email_unverified(inputs)
});
