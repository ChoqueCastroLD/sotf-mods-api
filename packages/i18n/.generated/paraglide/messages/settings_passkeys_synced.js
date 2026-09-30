/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Passkeys_SyncedInputs */

const en_settings_passkeys_synced = /** @type {(inputs: Settings_Passkeys_SyncedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Synced`)
};

const es_settings_passkeys_synced = /** @type {(inputs: Settings_Passkeys_SyncedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sincronizada`)
};

const de_settings_passkeys_synced = /** @type {(inputs: Settings_Passkeys_SyncedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Synchronisiert`)
};

const fr_settings_passkeys_synced = /** @type {(inputs: Settings_Passkeys_SyncedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Synchronisée`)
};

const it_settings_passkeys_synced = /** @type {(inputs: Settings_Passkeys_SyncedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sincronizzata`)
};

const nl_settings_passkeys_synced = /** @type {(inputs: Settings_Passkeys_SyncedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gesynchroniseerd`)
};

const pl_settings_passkeys_synced = /** @type {(inputs: Settings_Passkeys_SyncedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zsynchronizowany`)
};

const pt_settings_passkeys_synced = /** @type {(inputs: Settings_Passkeys_SyncedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sincronizada`)
};

const ru_settings_passkeys_synced = /** @type {(inputs: Settings_Passkeys_SyncedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Синхронизируется`)
};

const sv_settings_passkeys_synced = /** @type {(inputs: Settings_Passkeys_SyncedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Synkad`)
};

const tr_settings_passkeys_synced = /** @type {(inputs: Settings_Passkeys_SyncedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Senkronize`)
};

const zh_settings_passkeys_synced = /** @type {(inputs: Settings_Passkeys_SyncedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已同步`)
};

const ja_settings_passkeys_synced = /** @type {(inputs: Settings_Passkeys_SyncedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`同期済み`)
};

/**
* | output |
* | --- |
* | "Synced" |
*
* @param {Settings_Passkeys_SyncedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_passkeys_synced = /** @type {((inputs?: Settings_Passkeys_SyncedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Passkeys_SyncedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_passkeys_synced(inputs)
	if (locale === "de") return de_settings_passkeys_synced(inputs)
	if (locale === "fr") return fr_settings_passkeys_synced(inputs)
	if (locale === "it") return it_settings_passkeys_synced(inputs)
	if (locale === "nl") return nl_settings_passkeys_synced(inputs)
	if (locale === "pl") return pl_settings_passkeys_synced(inputs)
	if (locale === "pt") return pt_settings_passkeys_synced(inputs)
	if (locale === "ru") return ru_settings_passkeys_synced(inputs)
	if (locale === "sv") return sv_settings_passkeys_synced(inputs)
	if (locale === "tr") return tr_settings_passkeys_synced(inputs)
	if (locale === "zh") return zh_settings_passkeys_synced(inputs)
	if (locale === "ja") return ja_settings_passkeys_synced(inputs)
	return en_settings_passkeys_synced(inputs)
});
