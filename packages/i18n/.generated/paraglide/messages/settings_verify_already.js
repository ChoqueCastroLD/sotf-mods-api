/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Verify_AlreadyInputs */

const en_settings_verify_already = /** @type {(inputs: Settings_Verify_AlreadyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Your email address is already verified`)
};

const es_settings_verify_already = /** @type {(inputs: Settings_Verify_AlreadyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tu correo electrónico ya está verificado`)
};

const de_settings_verify_already = /** @type {(inputs: Settings_Verify_AlreadyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Deine E-Mail-Adresse ist bereits bestätigt`)
};

const fr_settings_verify_already = /** @type {(inputs: Settings_Verify_AlreadyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Votre adresse e-mail est déjà vérifiée`)
};

const it_settings_verify_already = /** @type {(inputs: Settings_Verify_AlreadyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Il tuo indirizzo email è già verificato`)
};

const nl_settings_verify_already = /** @type {(inputs: Settings_Verify_AlreadyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Je e-mailadres is al bevestigd`)
};

const pl_settings_verify_already = /** @type {(inputs: Settings_Verify_AlreadyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Twój adres e-mail jest już potwierdzony`)
};

const pt_settings_verify_already = /** @type {(inputs: Settings_Verify_AlreadyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Seu endereço de e-mail já está verificado`)
};

const ru_settings_verify_already = /** @type {(inputs: Settings_Verify_AlreadyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ваш адрес почты уже подтверждён`)
};

const sv_settings_verify_already = /** @type {(inputs: Settings_Verify_AlreadyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Din e-postadress är redan bekräftad`)
};

const tr_settings_verify_already = /** @type {(inputs: Settings_Verify_AlreadyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`E-posta adresin zaten doğrulanmış`)
};

const zh_settings_verify_already = /** @type {(inputs: Settings_Verify_AlreadyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你的邮箱地址已经验证`)
};

const ja_settings_verify_already = /** @type {(inputs: Settings_Verify_AlreadyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`メールアドレスはすでに確認済みです`)
};

/**
* | output |
* | --- |
* | "Your email address is already verified" |
*
* @param {Settings_Verify_AlreadyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_verify_already = /** @type {((inputs?: Settings_Verify_AlreadyInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Verify_AlreadyInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_verify_already(inputs)
	if (locale === "de") return de_settings_verify_already(inputs)
	if (locale === "fr") return fr_settings_verify_already(inputs)
	if (locale === "it") return it_settings_verify_already(inputs)
	if (locale === "nl") return nl_settings_verify_already(inputs)
	if (locale === "pl") return pl_settings_verify_already(inputs)
	if (locale === "pt") return pt_settings_verify_already(inputs)
	if (locale === "ru") return ru_settings_verify_already(inputs)
	if (locale === "sv") return sv_settings_verify_already(inputs)
	if (locale === "tr") return tr_settings_verify_already(inputs)
	if (locale === "zh") return zh_settings_verify_already(inputs)
	if (locale === "ja") return ja_settings_verify_already(inputs)
	return en_settings_verify_already(inputs)
});
