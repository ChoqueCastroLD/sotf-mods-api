/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Passkeys_AddInputs */

const en_settings_passkeys_add = /** @type {(inputs: Settings_Passkeys_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Add a passkey`)
};

const es_settings_passkeys_add = /** @type {(inputs: Settings_Passkeys_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Añadir una clave de acceso`)
};

const de_settings_passkeys_add = /** @type {(inputs: Settings_Passkeys_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Passkey hinzufügen`)
};

const fr_settings_passkeys_add = /** @type {(inputs: Settings_Passkeys_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ajouter une clé d’accès`)
};

const it_settings_passkeys_add = /** @type {(inputs: Settings_Passkeys_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aggiungi una passkey`)
};

const nl_settings_passkeys_add = /** @type {(inputs: Settings_Passkeys_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Een passkey toevoegen`)
};

const pl_settings_passkeys_add = /** @type {(inputs: Settings_Passkeys_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dodaj klucz dostępu`)
};

const pt_settings_passkeys_add = /** @type {(inputs: Settings_Passkeys_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Adicionar uma chave de acesso`)
};

const ru_settings_passkeys_add = /** @type {(inputs: Settings_Passkeys_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Добавить ключ доступа`)
};

const sv_settings_passkeys_add = /** @type {(inputs: Settings_Passkeys_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lägg till en passkey`)
};

const tr_settings_passkeys_add = /** @type {(inputs: Settings_Passkeys_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Geçiş anahtarı ekle`)
};

const zh_settings_passkeys_add = /** @type {(inputs: Settings_Passkeys_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`添加通行密钥`)
};

const ja_settings_passkeys_add = /** @type {(inputs: Settings_Passkeys_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`パスキーを追加`)
};

/**
* | output |
* | --- |
* | "Add a passkey" |
*
* @param {Settings_Passkeys_AddInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_passkeys_add = /** @type {((inputs?: Settings_Passkeys_AddInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Passkeys_AddInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_passkeys_add(inputs)
	if (locale === "de") return de_settings_passkeys_add(inputs)
	if (locale === "fr") return fr_settings_passkeys_add(inputs)
	if (locale === "it") return it_settings_passkeys_add(inputs)
	if (locale === "nl") return nl_settings_passkeys_add(inputs)
	if (locale === "pl") return pl_settings_passkeys_add(inputs)
	if (locale === "pt") return pt_settings_passkeys_add(inputs)
	if (locale === "ru") return ru_settings_passkeys_add(inputs)
	if (locale === "sv") return sv_settings_passkeys_add(inputs)
	if (locale === "tr") return tr_settings_passkeys_add(inputs)
	if (locale === "zh") return zh_settings_passkeys_add(inputs)
	if (locale === "ja") return ja_settings_passkeys_add(inputs)
	return en_settings_passkeys_add(inputs)
});
