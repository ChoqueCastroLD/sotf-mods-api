/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Auth_Twofactor_FieldInputs */

const en_auth_twofactor_field = /** @type {(inputs: Auth_Twofactor_FieldInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Authentication code`)
};

const es_auth_twofactor_field = /** @type {(inputs: Auth_Twofactor_FieldInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Código de verificación`)
};

const de_auth_twofactor_field = /** @type {(inputs: Auth_Twofactor_FieldInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bestätigungscode`)
};

const fr_auth_twofactor_field = /** @type {(inputs: Auth_Twofactor_FieldInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Code de vérification`)
};

const it_auth_twofactor_field = /** @type {(inputs: Auth_Twofactor_FieldInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Codice di verifica`)
};

const nl_auth_twofactor_field = /** @type {(inputs: Auth_Twofactor_FieldInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verificatiecode`)
};

const pl_auth_twofactor_field = /** @type {(inputs: Auth_Twofactor_FieldInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kod weryfikacyjny`)
};

const pt_auth_twofactor_field = /** @type {(inputs: Auth_Twofactor_FieldInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Código de verificação`)
};

const ru_auth_twofactor_field = /** @type {(inputs: Auth_Twofactor_FieldInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Код подтверждения`)
};

const sv_auth_twofactor_field = /** @type {(inputs: Auth_Twofactor_FieldInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verifieringskod`)
};

const tr_auth_twofactor_field = /** @type {(inputs: Auth_Twofactor_FieldInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Doğrulama kodu`)
};

const zh_auth_twofactor_field = /** @type {(inputs: Auth_Twofactor_FieldInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`验证码`)
};

const ja_auth_twofactor_field = /** @type {(inputs: Auth_Twofactor_FieldInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`認証コード`)
};

/**
* | output |
* | --- |
* | "Authentication code" |
*
* @param {Auth_Twofactor_FieldInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const auth_twofactor_field = /** @type {((inputs?: Auth_Twofactor_FieldInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Auth_Twofactor_FieldInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_auth_twofactor_field(inputs)
	if (locale === "de") return de_auth_twofactor_field(inputs)
	if (locale === "fr") return fr_auth_twofactor_field(inputs)
	if (locale === "it") return it_auth_twofactor_field(inputs)
	if (locale === "nl") return nl_auth_twofactor_field(inputs)
	if (locale === "pl") return pl_auth_twofactor_field(inputs)
	if (locale === "pt") return pt_auth_twofactor_field(inputs)
	if (locale === "ru") return ru_auth_twofactor_field(inputs)
	if (locale === "sv") return sv_auth_twofactor_field(inputs)
	if (locale === "tr") return tr_auth_twofactor_field(inputs)
	if (locale === "zh") return zh_auth_twofactor_field(inputs)
	if (locale === "ja") return ja_auth_twofactor_field(inputs)
	return en_auth_twofactor_field(inputs)
});
