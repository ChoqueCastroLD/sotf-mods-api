/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ when: NonNullable<unknown> }} Emails_Auth_Security_Change_Passkey_AddedInputs */

const en_emails_auth_security_change_passkey_added = /** @type {(inputs: Emails_Auth_Security_Change_Passkey_AddedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`A passkey was added to your account on ${i?.when} (UTC).`)
};

const es_emails_auth_security_change_passkey_added = /** @type {(inputs: Emails_Auth_Security_Change_Passkey_AddedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Se añadió una clave de acceso (passkey) a tu cuenta el ${i?.when} (UTC).`)
};

const de_emails_auth_security_change_passkey_added = /** @type {(inputs: Emails_Auth_Security_Change_Passkey_AddedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Am ${i?.when} (UTC) wurde ein Passkey zu deinem Konto hinzugefügt.`)
};

const fr_emails_auth_security_change_passkey_added = /** @type {(inputs: Emails_Auth_Security_Change_Passkey_AddedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Une clé d’accès (passkey) a été ajoutée à votre compte le ${i?.when} (UTC).`)
};

const it_emails_auth_security_change_passkey_added = /** @type {(inputs: Emails_Auth_Security_Change_Passkey_AddedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Una passkey è stata aggiunta al tuo account il ${i?.when} (UTC).`)
};

const nl_emails_auth_security_change_passkey_added = /** @type {(inputs: Emails_Auth_Security_Change_Passkey_AddedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Er is op ${i?.when} (UTC) een passkey aan je account toegevoegd.`)
};

const pl_emails_auth_security_change_passkey_added = /** @type {(inputs: Emails_Auth_Security_Change_Passkey_AddedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Do Twojego konta dodano klucz dostępu (passkey) ${i?.when} (UTC).`)
};

const pt_emails_auth_security_change_passkey_added = /** @type {(inputs: Emails_Auth_Security_Change_Passkey_AddedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Uma chave de acesso (passkey) foi adicionada à sua conta em ${i?.when} (UTC).`)
};

const ru_emails_auth_security_change_passkey_added = /** @type {(inputs: Emails_Auth_Security_Change_Passkey_AddedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`К вашему аккаунту добавлен ключ доступа (passkey) ${i?.when} (UTC).`)
};

const sv_emails_auth_security_change_passkey_added = /** @type {(inputs: Emails_Auth_Security_Change_Passkey_AddedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`En passkey lades till på ditt konto ${i?.when} (UTC).`)
};

const tr_emails_auth_security_change_passkey_added = /** @type {(inputs: Emails_Auth_Security_Change_Passkey_AddedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Hesabına ${i?.when} (UTC) tarihinde bir geçiş anahtarı (passkey) eklendi.`)
};

const zh_emails_auth_security_change_passkey_added = /** @type {(inputs: Emails_Auth_Security_Change_Passkey_AddedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`你的账号已于 ${i?.when}（UTC）添加了一个通行密钥（passkey）。`)
};

const ja_emails_auth_security_change_passkey_added = /** @type {(inputs: Emails_Auth_Security_Change_Passkey_AddedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.when}（UTC）に、アカウントにパスキーが追加されました。`)
};

/**
* | output |
* | --- |
* | "A passkey was added to your account on {when} (UTC)." |
*
* @param {Emails_Auth_Security_Change_Passkey_AddedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const emails_auth_security_change_passkey_added = /** @type {((inputs: Emails_Auth_Security_Change_Passkey_AddedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Emails_Auth_Security_Change_Passkey_AddedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_emails_auth_security_change_passkey_added(inputs)
	if (locale === "de") return de_emails_auth_security_change_passkey_added(inputs)
	if (locale === "fr") return fr_emails_auth_security_change_passkey_added(inputs)
	if (locale === "it") return it_emails_auth_security_change_passkey_added(inputs)
	if (locale === "nl") return nl_emails_auth_security_change_passkey_added(inputs)
	if (locale === "pl") return pl_emails_auth_security_change_passkey_added(inputs)
	if (locale === "pt") return pt_emails_auth_security_change_passkey_added(inputs)
	if (locale === "ru") return ru_emails_auth_security_change_passkey_added(inputs)
	if (locale === "sv") return sv_emails_auth_security_change_passkey_added(inputs)
	if (locale === "tr") return tr_emails_auth_security_change_passkey_added(inputs)
	if (locale === "zh") return zh_emails_auth_security_change_passkey_added(inputs)
	if (locale === "ja") return ja_emails_auth_security_change_passkey_added(inputs)
	return en_emails_auth_security_change_passkey_added(inputs)
});
