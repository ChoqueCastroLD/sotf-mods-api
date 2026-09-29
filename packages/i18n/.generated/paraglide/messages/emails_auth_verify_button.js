/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Emails_Auth_Verify_ButtonInputs */

const en_emails_auth_verify_button = /** @type {(inputs: Emails_Auth_Verify_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Confirm email`)
};

const es_emails_auth_verify_button = /** @type {(inputs: Emails_Auth_Verify_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Confirmar correo`)
};

const de_emails_auth_verify_button = /** @type {(inputs: Emails_Auth_Verify_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`E-Mail bestätigen`)
};

const fr_emails_auth_verify_button = /** @type {(inputs: Emails_Auth_Verify_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Confirmer l’adresse`)
};

const it_emails_auth_verify_button = /** @type {(inputs: Emails_Auth_Verify_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Conferma email`)
};

const nl_emails_auth_verify_button = /** @type {(inputs: Emails_Auth_Verify_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`E-mailadres bevestigen`)
};

const pl_emails_auth_verify_button = /** @type {(inputs: Emails_Auth_Verify_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Potwierdź e-mail`)
};

const pt_emails_auth_verify_button = /** @type {(inputs: Emails_Auth_Verify_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Confirmar e-mail`)
};

const ru_emails_auth_verify_button = /** @type {(inputs: Emails_Auth_Verify_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Подтвердить почту`)
};

const sv_emails_auth_verify_button = /** @type {(inputs: Emails_Auth_Verify_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bekräfta e-post`)
};

const tr_emails_auth_verify_button = /** @type {(inputs: Emails_Auth_Verify_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`E-postayı doğrula`)
};

const zh_emails_auth_verify_button = /** @type {(inputs: Emails_Auth_Verify_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`确认邮箱`)
};

const ja_emails_auth_verify_button = /** @type {(inputs: Emails_Auth_Verify_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`メールアドレスを確認`)
};

/**
* | output |
* | --- |
* | "Confirm email" |
*
* @param {Emails_Auth_Verify_ButtonInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const emails_auth_verify_button = /** @type {((inputs?: Emails_Auth_Verify_ButtonInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Emails_Auth_Verify_ButtonInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_emails_auth_verify_button(inputs)
	if (locale === "de") return de_emails_auth_verify_button(inputs)
	if (locale === "fr") return fr_emails_auth_verify_button(inputs)
	if (locale === "it") return it_emails_auth_verify_button(inputs)
	if (locale === "nl") return nl_emails_auth_verify_button(inputs)
	if (locale === "pl") return pl_emails_auth_verify_button(inputs)
	if (locale === "pt") return pt_emails_auth_verify_button(inputs)
	if (locale === "ru") return ru_emails_auth_verify_button(inputs)
	if (locale === "sv") return sv_emails_auth_verify_button(inputs)
	if (locale === "tr") return tr_emails_auth_verify_button(inputs)
	if (locale === "zh") return zh_emails_auth_verify_button(inputs)
	if (locale === "ja") return ja_emails_auth_verify_button(inputs)
	return en_emails_auth_verify_button(inputs)
});
