/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Passkeys_EmptyInputs */

const en_settings_passkeys_empty = /** @type {(inputs: Settings_Passkeys_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No passkeys yet.`)
};

const es_settings_passkeys_empty = /** @type {(inputs: Settings_Passkeys_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aún no tienes claves de acceso.`)
};

const de_settings_passkeys_empty = /** @type {(inputs: Settings_Passkeys_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Noch keine Passkeys.`)
};

const fr_settings_passkeys_empty = /** @type {(inputs: Settings_Passkeys_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aucune clé d’accès pour l’instant.`)
};

const it_settings_passkeys_empty = /** @type {(inputs: Settings_Passkeys_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ancora nessuna passkey.`)
};

const nl_settings_passkeys_empty = /** @type {(inputs: Settings_Passkeys_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nog geen passkeys.`)
};

const pl_settings_passkeys_empty = /** @type {(inputs: Settings_Passkeys_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Brak kluczy dostępu.`)
};

const pt_settings_passkeys_empty = /** @type {(inputs: Settings_Passkeys_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nenhuma chave de acesso ainda.`)
};

const ru_settings_passkeys_empty = /** @type {(inputs: Settings_Passkeys_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ключей доступа пока нет.`)
};

const sv_settings_passkeys_empty = /** @type {(inputs: Settings_Passkeys_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inga passkeys ännu.`)
};

const tr_settings_passkeys_empty = /** @type {(inputs: Settings_Passkeys_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Henüz geçiş anahtarı yok.`)
};

const zh_settings_passkeys_empty = /** @type {(inputs: Settings_Passkeys_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`还没有通行密钥。`)
};

const ja_settings_passkeys_empty = /** @type {(inputs: Settings_Passkeys_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`パスキーはまだありません。`)
};

/**
* | output |
* | --- |
* | "No passkeys yet." |
*
* @param {Settings_Passkeys_EmptyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_passkeys_empty = /** @type {((inputs?: Settings_Passkeys_EmptyInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Passkeys_EmptyInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_passkeys_empty(inputs)
	if (locale === "de") return de_settings_passkeys_empty(inputs)
	if (locale === "fr") return fr_settings_passkeys_empty(inputs)
	if (locale === "it") return it_settings_passkeys_empty(inputs)
	if (locale === "nl") return nl_settings_passkeys_empty(inputs)
	if (locale === "pl") return pl_settings_passkeys_empty(inputs)
	if (locale === "pt") return pt_settings_passkeys_empty(inputs)
	if (locale === "ru") return ru_settings_passkeys_empty(inputs)
	if (locale === "sv") return sv_settings_passkeys_empty(inputs)
	if (locale === "tr") return tr_settings_passkeys_empty(inputs)
	if (locale === "zh") return zh_settings_passkeys_empty(inputs)
	if (locale === "ja") return ja_settings_passkeys_empty(inputs)
	return en_settings_passkeys_empty(inputs)
});
