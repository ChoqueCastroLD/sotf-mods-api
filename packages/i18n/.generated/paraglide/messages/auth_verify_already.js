/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Auth_Verify_AlreadyInputs */

const en_auth_verify_already = /** @type {(inputs: Auth_Verify_AlreadyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Your email is already verified.`)
};

const es_auth_verify_already = /** @type {(inputs: Auth_Verify_AlreadyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tu email ya está verificado.`)
};

const de_auth_verify_already = /** @type {(inputs: Auth_Verify_AlreadyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Deine E-Mail ist bereits bestätigt.`)
};

const fr_auth_verify_already = /** @type {(inputs: Auth_Verify_AlreadyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Votre e-mail est déjà vérifié.`)
};

const it_auth_verify_already = /** @type {(inputs: Auth_Verify_AlreadyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La tua email è già verificata.`)
};

const nl_auth_verify_already = /** @type {(inputs: Auth_Verify_AlreadyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Je e-mailadres is al bevestigd.`)
};

const pl_auth_verify_already = /** @type {(inputs: Auth_Verify_AlreadyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Twój e-mail jest już potwierdzony.`)
};

const pt_auth_verify_already = /** @type {(inputs: Auth_Verify_AlreadyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Seu e-mail já está confirmado.`)
};

const ru_auth_verify_already = /** @type {(inputs: Auth_Verify_AlreadyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ваш email уже подтверждён.`)
};

const sv_auth_verify_already = /** @type {(inputs: Auth_Verify_AlreadyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Din e-post är redan bekräftad.`)
};

const tr_auth_verify_already = /** @type {(inputs: Auth_Verify_AlreadyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`E-postan zaten doğrulanmış.`)
};

const zh_auth_verify_already = /** @type {(inputs: Auth_Verify_AlreadyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你的邮箱已经验证过了。`)
};

const ja_auth_verify_already = /** @type {(inputs: Auth_Verify_AlreadyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`メールアドレスはすでに確認済みです。`)
};

/**
* | output |
* | --- |
* | "Your email is already verified." |
*
* @param {Auth_Verify_AlreadyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const auth_verify_already = /** @type {((inputs?: Auth_Verify_AlreadyInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Auth_Verify_AlreadyInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_auth_verify_already(inputs)
	if (locale === "de") return de_auth_verify_already(inputs)
	if (locale === "fr") return fr_auth_verify_already(inputs)
	if (locale === "it") return it_auth_verify_already(inputs)
	if (locale === "nl") return nl_auth_verify_already(inputs)
	if (locale === "pl") return pl_auth_verify_already(inputs)
	if (locale === "pt") return pt_auth_verify_already(inputs)
	if (locale === "ru") return ru_auth_verify_already(inputs)
	if (locale === "sv") return sv_auth_verify_already(inputs)
	if (locale === "tr") return tr_auth_verify_already(inputs)
	if (locale === "zh") return zh_auth_verify_already(inputs)
	if (locale === "ja") return ja_auth_verify_already(inputs)
	return en_auth_verify_already(inputs)
});
