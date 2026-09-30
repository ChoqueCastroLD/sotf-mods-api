/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Passkeys_CancelledInputs */

const en_settings_passkeys_cancelled = /** @type {(inputs: Settings_Passkeys_CancelledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The passkey was not created (cancelled or not available on this device).`)
};

const es_settings_passkeys_cancelled = /** @type {(inputs: Settings_Passkeys_CancelledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No se creó la clave de acceso (cancelada o no disponible en este dispositivo).`)
};

const de_settings_passkeys_cancelled = /** @type {(inputs: Settings_Passkeys_CancelledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Der Passkey wurde nicht erstellt (abgebrochen oder auf diesem Gerät nicht verfügbar).`)
};

const fr_settings_passkeys_cancelled = /** @type {(inputs: Settings_Passkeys_CancelledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La clé d’accès n’a pas été créée (annulée ou indisponible sur cet appareil).`)
};

const it_settings_passkeys_cancelled = /** @type {(inputs: Settings_Passkeys_CancelledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La passkey non è stata creata (annullata o non disponibile su questo dispositivo).`)
};

const nl_settings_passkeys_cancelled = /** @type {(inputs: Settings_Passkeys_CancelledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De passkey is niet aangemaakt (geannuleerd of niet beschikbaar op dit apparaat).`)
};

const pl_settings_passkeys_cancelled = /** @type {(inputs: Settings_Passkeys_CancelledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie utworzono klucza dostępu (anulowano lub niedostępny na tym urządzeniu).`)
};

const pt_settings_passkeys_cancelled = /** @type {(inputs: Settings_Passkeys_CancelledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`A chave de acesso não foi criada (cancelada ou indisponível neste dispositivo).`)
};

const ru_settings_passkeys_cancelled = /** @type {(inputs: Settings_Passkeys_CancelledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ключ доступа не создан (отменено или недоступно на этом устройстве).`)
};

const sv_settings_passkeys_cancelled = /** @type {(inputs: Settings_Passkeys_CancelledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Passkeyn skapades inte (avbruten eller inte tillgänglig på den här enheten).`)
};

const tr_settings_passkeys_cancelled = /** @type {(inputs: Settings_Passkeys_CancelledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Geçiş anahtarı oluşturulmadı (iptal edildi veya bu cihazda kullanılamıyor).`)
};

const zh_settings_passkeys_cancelled = /** @type {(inputs: Settings_Passkeys_CancelledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`未创建通行密钥（已取消或此设备不可用）。`)
};

const ja_settings_passkeys_cancelled = /** @type {(inputs: Settings_Passkeys_CancelledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`パスキーは作成されませんでした（キャンセルされたか、この端末では利用できません）。`)
};

/**
* | output |
* | --- |
* | "The passkey was not created (cancelled or not available on this device)." |
*
* @param {Settings_Passkeys_CancelledInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_passkeys_cancelled = /** @type {((inputs?: Settings_Passkeys_CancelledInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Passkeys_CancelledInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_passkeys_cancelled(inputs)
	if (locale === "de") return de_settings_passkeys_cancelled(inputs)
	if (locale === "fr") return fr_settings_passkeys_cancelled(inputs)
	if (locale === "it") return it_settings_passkeys_cancelled(inputs)
	if (locale === "nl") return nl_settings_passkeys_cancelled(inputs)
	if (locale === "pl") return pl_settings_passkeys_cancelled(inputs)
	if (locale === "pt") return pt_settings_passkeys_cancelled(inputs)
	if (locale === "ru") return ru_settings_passkeys_cancelled(inputs)
	if (locale === "sv") return sv_settings_passkeys_cancelled(inputs)
	if (locale === "tr") return tr_settings_passkeys_cancelled(inputs)
	if (locale === "zh") return zh_settings_passkeys_cancelled(inputs)
	if (locale === "ja") return ja_settings_passkeys_cancelled(inputs)
	return en_settings_passkeys_cancelled(inputs)
});
