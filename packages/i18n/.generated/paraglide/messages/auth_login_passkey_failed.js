/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Auth_Login_Passkey_FailedInputs */

const en_auth_login_passkey_failed = /** @type {(inputs: Auth_Login_Passkey_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The passkey login was cancelled or no passkey is available on this device.`)
};

const es_auth_login_passkey_failed = /** @type {(inputs: Auth_Login_Passkey_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Se canceló el inicio con clave de acceso o no hay ninguna disponible en este dispositivo.`)
};

const de_auth_login_passkey_failed = /** @type {(inputs: Auth_Login_Passkey_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Die Anmeldung mit Passkey wurde abgebrochen oder auf diesem Gerät ist kein Passkey verfügbar.`)
};

const fr_auth_login_passkey_failed = /** @type {(inputs: Auth_Login_Passkey_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La connexion par clé d’accès a été annulée ou aucune clé n’est disponible sur cet appareil.`)
};

const it_auth_login_passkey_failed = /** @type {(inputs: Auth_Login_Passkey_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`L’accesso con passkey è stato annullato o non c’è nessuna passkey disponibile su questo dispositivo.`)
};

const nl_auth_login_passkey_failed = /** @type {(inputs: Auth_Login_Passkey_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inloggen met passkey is geannuleerd of er is geen passkey beschikbaar op dit apparaat.`)
};

const pl_auth_login_passkey_failed = /** @type {(inputs: Auth_Login_Passkey_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Logowanie kluczem dostępu zostało anulowane lub na tym urządzeniu nie ma dostępnego klucza.`)
};

const pt_auth_login_passkey_failed = /** @type {(inputs: Auth_Login_Passkey_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`O login com chave de acesso foi cancelado ou não há nenhuma chave disponível neste dispositivo.`)
};

const ru_auth_login_passkey_failed = /** @type {(inputs: Auth_Login_Passkey_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Вход по ключу доступа отменён или на этом устройстве нет доступного ключа.`)
};

const sv_auth_login_passkey_failed = /** @type {(inputs: Auth_Login_Passkey_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inloggningen med passkey avbröts eller ingen passkey finns på den här enheten.`)
};

const tr_auth_login_passkey_failed = /** @type {(inputs: Auth_Login_Passkey_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Geçiş anahtarıyla giriş iptal edildi veya bu cihazda kullanılabilir bir anahtar yok.`)
};

const zh_auth_login_passkey_failed = /** @type {(inputs: Auth_Login_Passkey_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`通行密钥登录已取消，或此设备上没有可用的通行密钥。`)
};

const ja_auth_login_passkey_failed = /** @type {(inputs: Auth_Login_Passkey_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`パスキーでのログインがキャンセルされたか、この端末に利用できるパスキーがありません。`)
};

/**
* | output |
* | --- |
* | "The passkey login was cancelled or no passkey is available on this device." |
*
* @param {Auth_Login_Passkey_FailedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const auth_login_passkey_failed = /** @type {((inputs?: Auth_Login_Passkey_FailedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Auth_Login_Passkey_FailedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_auth_login_passkey_failed(inputs)
	if (locale === "de") return de_auth_login_passkey_failed(inputs)
	if (locale === "fr") return fr_auth_login_passkey_failed(inputs)
	if (locale === "it") return it_auth_login_passkey_failed(inputs)
	if (locale === "nl") return nl_auth_login_passkey_failed(inputs)
	if (locale === "pl") return pl_auth_login_passkey_failed(inputs)
	if (locale === "pt") return pt_auth_login_passkey_failed(inputs)
	if (locale === "ru") return ru_auth_login_passkey_failed(inputs)
	if (locale === "sv") return sv_auth_login_passkey_failed(inputs)
	if (locale === "tr") return tr_auth_login_passkey_failed(inputs)
	if (locale === "zh") return zh_auth_login_passkey_failed(inputs)
	if (locale === "ja") return ja_auth_login_passkey_failed(inputs)
	return en_auth_login_passkey_failed(inputs)
});
