/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Auth_Field_Email_HintInputs */

const en_auth_field_email_hint = /** @type {(inputs: Auth_Field_Email_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`For logging in and important account emails. Never shown publicly.`)
};

const es_auth_field_email_hint = /** @type {(inputs: Auth_Field_Email_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Para iniciar sesión y recibir emails importantes de tu cuenta. Nunca se muestra en público.`)
};

const de_auth_field_email_hint = /** @type {(inputs: Auth_Field_Email_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Für die Anmeldung und wichtige Konto-E-Mails. Wird nie öffentlich angezeigt.`)
};

const fr_auth_field_email_hint = /** @type {(inputs: Auth_Field_Email_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pour vous connecter et recevoir les e-mails importants du compte. Jamais affiché publiquement.`)
};

const it_auth_field_email_hint = /** @type {(inputs: Auth_Field_Email_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Per accedere e ricevere le email importanti dell’account. Non viene mai mostrata pubblicamente.`)
};

const nl_auth_field_email_hint = /** @type {(inputs: Auth_Field_Email_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Om in te loggen en voor belangrijke accountmails. Nooit openbaar zichtbaar.`)
};

const pl_auth_field_email_hint = /** @type {(inputs: Auth_Field_Email_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Do logowania i ważnych wiadomości o koncie. Nigdy nie jest pokazywany publicznie.`)
};

const pt_auth_field_email_hint = /** @type {(inputs: Auth_Field_Email_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Para entrar e receber e-mails importantes da conta. Nunca é exibido publicamente.`)
};

const ru_auth_field_email_hint = /** @type {(inputs: Auth_Field_Email_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Для входа и важных писем об аккаунте. Никогда не показывается публично.`)
};

const sv_auth_field_email_hint = /** @type {(inputs: Auth_Field_Email_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`För inloggning och viktiga kontomejl. Visas aldrig offentligt.`)
};

const tr_auth_field_email_hint = /** @type {(inputs: Auth_Field_Email_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Giriş ve önemli hesap e-postaları için. Asla herkese açık gösterilmez.`)
};

const zh_auth_field_email_hint = /** @type {(inputs: Auth_Field_Email_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`用于登录和接收重要的账号邮件，绝不会公开显示。`)
};

const ja_auth_field_email_hint = /** @type {(inputs: Auth_Field_Email_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ログインと重要なアカウントメールに使います。公開されることはありません。`)
};

/**
* | output |
* | --- |
* | "For logging in and important account emails. Never shown publicly." |
*
* @param {Auth_Field_Email_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const auth_field_email_hint = /** @type {((inputs?: Auth_Field_Email_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Auth_Field_Email_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_auth_field_email_hint(inputs)
	if (locale === "de") return de_auth_field_email_hint(inputs)
	if (locale === "fr") return fr_auth_field_email_hint(inputs)
	if (locale === "it") return it_auth_field_email_hint(inputs)
	if (locale === "nl") return nl_auth_field_email_hint(inputs)
	if (locale === "pl") return pl_auth_field_email_hint(inputs)
	if (locale === "pt") return pt_auth_field_email_hint(inputs)
	if (locale === "ru") return ru_auth_field_email_hint(inputs)
	if (locale === "sv") return sv_auth_field_email_hint(inputs)
	if (locale === "tr") return tr_auth_field_email_hint(inputs)
	if (locale === "zh") return zh_auth_field_email_hint(inputs)
	if (locale === "ja") return ja_auth_field_email_hint(inputs)
	return en_auth_field_email_hint(inputs)
});
