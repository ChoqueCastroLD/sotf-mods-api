/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Kitsocial_Verify_EmailInputs */

const en_kitsocial_verify_email = /** @type {(inputs: Kitsocial_Verify_EmailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verify your email address to comment.`)
};

const es_kitsocial_verify_email = /** @type {(inputs: Kitsocial_Verify_EmailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verifica tu correo electrónico para comentar.`)
};

const de_kitsocial_verify_email = /** @type {(inputs: Kitsocial_Verify_EmailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bestätige deine E-Mail-Adresse, um zu kommentieren.`)
};

const fr_kitsocial_verify_email = /** @type {(inputs: Kitsocial_Verify_EmailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vérifiez votre adresse e-mail pour commenter.`)
};

const it_kitsocial_verify_email = /** @type {(inputs: Kitsocial_Verify_EmailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verifica il tuo indirizzo email per commentare.`)
};

const nl_kitsocial_verify_email = /** @type {(inputs: Kitsocial_Verify_EmailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verifieer je e-mailadres om te reageren.`)
};

const pl_kitsocial_verify_email = /** @type {(inputs: Kitsocial_Verify_EmailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zweryfikuj adres e-mail, aby komentować.`)
};

const pt_kitsocial_verify_email = /** @type {(inputs: Kitsocial_Verify_EmailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verifique seu e-mail para comentar.`)
};

const ru_kitsocial_verify_email = /** @type {(inputs: Kitsocial_Verify_EmailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Подтвердите адрес электронной почты, чтобы комментировать.`)
};

const sv_kitsocial_verify_email = /** @type {(inputs: Kitsocial_Verify_EmailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verifiera din e-postadress för att kommentera.`)
};

const tr_kitsocial_verify_email = /** @type {(inputs: Kitsocial_Verify_EmailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yorum yapmak için e-posta adresini doğrula.`)
};

const zh_kitsocial_verify_email = /** @type {(inputs: Kitsocial_Verify_EmailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`请先验证邮箱后再评论。`)
};

const ja_kitsocial_verify_email = /** @type {(inputs: Kitsocial_Verify_EmailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`コメントするにはメールアドレスの確認が必要です。`)
};

/**
* | output |
* | --- |
* | "Verify your email address to comment." |
*
* @param {Kitsocial_Verify_EmailInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kitsocial_verify_email = /** @type {((inputs?: Kitsocial_Verify_EmailInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kitsocial_Verify_EmailInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kitsocial_verify_email(inputs)
	if (locale === "de") return de_kitsocial_verify_email(inputs)
	if (locale === "fr") return fr_kitsocial_verify_email(inputs)
	if (locale === "it") return it_kitsocial_verify_email(inputs)
	if (locale === "nl") return nl_kitsocial_verify_email(inputs)
	if (locale === "pl") return pl_kitsocial_verify_email(inputs)
	if (locale === "pt") return pt_kitsocial_verify_email(inputs)
	if (locale === "ru") return ru_kitsocial_verify_email(inputs)
	if (locale === "sv") return sv_kitsocial_verify_email(inputs)
	if (locale === "tr") return tr_kitsocial_verify_email(inputs)
	if (locale === "zh") return zh_kitsocial_verify_email(inputs)
	if (locale === "ja") return ja_kitsocial_verify_email(inputs)
	return en_kitsocial_verify_email(inputs)
});
