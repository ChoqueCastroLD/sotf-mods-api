/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ when: NonNullable<unknown> }} Emails_Auth_Security_Change_Passkey_RemovedInputs */

const en_emails_auth_security_change_passkey_removed = /** @type {(inputs: Emails_Auth_Security_Change_Passkey_RemovedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`A passkey was removed from your account on ${i?.when} (UTC).`)
};

const es_emails_auth_security_change_passkey_removed = /** @type {(inputs: Emails_Auth_Security_Change_Passkey_RemovedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Se eliminó una clave de acceso (passkey) de tu cuenta el ${i?.when} (UTC).`)
};

const de_emails_auth_security_change_passkey_removed = /** @type {(inputs: Emails_Auth_Security_Change_Passkey_RemovedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Am ${i?.when} (UTC) wurde ein Passkey von deinem Konto entfernt.`)
};

const fr_emails_auth_security_change_passkey_removed = /** @type {(inputs: Emails_Auth_Security_Change_Passkey_RemovedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Une clé d’accès (passkey) a été supprimée de votre compte le ${i?.when} (UTC).`)
};

const it_emails_auth_security_change_passkey_removed = /** @type {(inputs: Emails_Auth_Security_Change_Passkey_RemovedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Una passkey è stata rimossa dal tuo account il ${i?.when} (UTC).`)
};

const nl_emails_auth_security_change_passkey_removed = /** @type {(inputs: Emails_Auth_Security_Change_Passkey_RemovedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Er is op ${i?.when} (UTC) een passkey van je account verwijderd.`)
};

const pl_emails_auth_security_change_passkey_removed = /** @type {(inputs: Emails_Auth_Security_Change_Passkey_RemovedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Z Twojego konta usunięto klucz dostępu (passkey) ${i?.when} (UTC).`)
};

const pt_emails_auth_security_change_passkey_removed = /** @type {(inputs: Emails_Auth_Security_Change_Passkey_RemovedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Uma chave de acesso (passkey) foi removida da sua conta em ${i?.when} (UTC).`)
};

const ru_emails_auth_security_change_passkey_removed = /** @type {(inputs: Emails_Auth_Security_Change_Passkey_RemovedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Из вашего аккаунта удалён ключ доступа (passkey) ${i?.when} (UTC).`)
};

const sv_emails_auth_security_change_passkey_removed = /** @type {(inputs: Emails_Auth_Security_Change_Passkey_RemovedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`En passkey togs bort från ditt konto ${i?.when} (UTC).`)
};

const tr_emails_auth_security_change_passkey_removed = /** @type {(inputs: Emails_Auth_Security_Change_Passkey_RemovedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Hesabından ${i?.when} (UTC) tarihinde bir geçiş anahtarı (passkey) kaldırıldı.`)
};

const zh_emails_auth_security_change_passkey_removed = /** @type {(inputs: Emails_Auth_Security_Change_Passkey_RemovedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`你的账号已于 ${i?.when}（UTC）移除了一个通行密钥（passkey）。`)
};

const ja_emails_auth_security_change_passkey_removed = /** @type {(inputs: Emails_Auth_Security_Change_Passkey_RemovedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.when}（UTC）に、アカウントからパスキーが削除されました。`)
};

/**
* | output |
* | --- |
* | "A passkey was removed from your account on {when} (UTC)." |
*
* @param {Emails_Auth_Security_Change_Passkey_RemovedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const emails_auth_security_change_passkey_removed = /** @type {((inputs: Emails_Auth_Security_Change_Passkey_RemovedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Emails_Auth_Security_Change_Passkey_RemovedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_emails_auth_security_change_passkey_removed(inputs)
	if (locale === "de") return de_emails_auth_security_change_passkey_removed(inputs)
	if (locale === "fr") return fr_emails_auth_security_change_passkey_removed(inputs)
	if (locale === "it") return it_emails_auth_security_change_passkey_removed(inputs)
	if (locale === "nl") return nl_emails_auth_security_change_passkey_removed(inputs)
	if (locale === "pl") return pl_emails_auth_security_change_passkey_removed(inputs)
	if (locale === "pt") return pt_emails_auth_security_change_passkey_removed(inputs)
	if (locale === "ru") return ru_emails_auth_security_change_passkey_removed(inputs)
	if (locale === "sv") return sv_emails_auth_security_change_passkey_removed(inputs)
	if (locale === "tr") return tr_emails_auth_security_change_passkey_removed(inputs)
	if (locale === "zh") return zh_emails_auth_security_change_passkey_removed(inputs)
	if (locale === "ja") return ja_emails_auth_security_change_passkey_removed(inputs)
	return en_emails_auth_security_change_passkey_removed(inputs)
});
