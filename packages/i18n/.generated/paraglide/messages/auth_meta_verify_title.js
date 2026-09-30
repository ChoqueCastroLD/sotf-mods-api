/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Auth_Meta_Verify_TitleInputs */

const en_auth_meta_verify_title = /** @type {(inputs: Auth_Meta_Verify_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verify your email`)
};

const es_auth_meta_verify_title = /** @type {(inputs: Auth_Meta_Verify_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verifica tu email`)
};

const de_auth_meta_verify_title = /** @type {(inputs: Auth_Meta_Verify_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`E-Mail bestätigen`)
};

const fr_auth_meta_verify_title = /** @type {(inputs: Auth_Meta_Verify_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vérifier votre e-mail`)
};

const it_auth_meta_verify_title = /** @type {(inputs: Auth_Meta_Verify_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verifica la tua email`)
};

const nl_auth_meta_verify_title = /** @type {(inputs: Auth_Meta_Verify_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bevestig je e-mailadres`)
};

const pl_auth_meta_verify_title = /** @type {(inputs: Auth_Meta_Verify_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Potwierdź adres e-mail`)
};

const pt_auth_meta_verify_title = /** @type {(inputs: Auth_Meta_Verify_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Confirme seu e-mail`)
};

const ru_auth_meta_verify_title = /** @type {(inputs: Auth_Meta_Verify_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Подтвердите email`)
};

const sv_auth_meta_verify_title = /** @type {(inputs: Auth_Meta_Verify_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bekräfta din e-post`)
};

const tr_auth_meta_verify_title = /** @type {(inputs: Auth_Meta_Verify_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`E-postanı doğrula`)
};

const zh_auth_meta_verify_title = /** @type {(inputs: Auth_Meta_Verify_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`验证邮箱`)
};

const ja_auth_meta_verify_title = /** @type {(inputs: Auth_Meta_Verify_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`メールアドレスの確認`)
};

/**
* | output |
* | --- |
* | "Verify your email" |
*
* @param {Auth_Meta_Verify_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const auth_meta_verify_title = /** @type {((inputs?: Auth_Meta_Verify_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Auth_Meta_Verify_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_auth_meta_verify_title(inputs)
	if (locale === "de") return de_auth_meta_verify_title(inputs)
	if (locale === "fr") return fr_auth_meta_verify_title(inputs)
	if (locale === "it") return it_auth_meta_verify_title(inputs)
	if (locale === "nl") return nl_auth_meta_verify_title(inputs)
	if (locale === "pl") return pl_auth_meta_verify_title(inputs)
	if (locale === "pt") return pt_auth_meta_verify_title(inputs)
	if (locale === "ru") return ru_auth_meta_verify_title(inputs)
	if (locale === "sv") return sv_auth_meta_verify_title(inputs)
	if (locale === "tr") return tr_auth_meta_verify_title(inputs)
	if (locale === "zh") return zh_auth_meta_verify_title(inputs)
	if (locale === "ja") return ja_auth_meta_verify_title(inputs)
	return en_auth_meta_verify_title(inputs)
});
