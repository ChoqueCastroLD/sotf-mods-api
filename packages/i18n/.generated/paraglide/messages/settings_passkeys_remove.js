/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Passkeys_RemoveInputs */

const en_settings_passkeys_remove = /** @type {(inputs: Settings_Passkeys_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Remove`)
};

const es_settings_passkeys_remove = /** @type {(inputs: Settings_Passkeys_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Eliminar`)
};

const de_settings_passkeys_remove = /** @type {(inputs: Settings_Passkeys_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Entfernen`)
};

const fr_settings_passkeys_remove = /** @type {(inputs: Settings_Passkeys_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Supprimer`)
};

const it_settings_passkeys_remove = /** @type {(inputs: Settings_Passkeys_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rimuovi`)
};

const nl_settings_passkeys_remove = /** @type {(inputs: Settings_Passkeys_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verwijderen`)
};

const pl_settings_passkeys_remove = /** @type {(inputs: Settings_Passkeys_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Usuń`)
};

const pt_settings_passkeys_remove = /** @type {(inputs: Settings_Passkeys_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Remover`)
};

const ru_settings_passkeys_remove = /** @type {(inputs: Settings_Passkeys_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Удалить`)
};

const sv_settings_passkeys_remove = /** @type {(inputs: Settings_Passkeys_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ta bort`)
};

const tr_settings_passkeys_remove = /** @type {(inputs: Settings_Passkeys_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kaldır`)
};

const zh_settings_passkeys_remove = /** @type {(inputs: Settings_Passkeys_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`移除`)
};

const ja_settings_passkeys_remove = /** @type {(inputs: Settings_Passkeys_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`削除`)
};

/**
* | output |
* | --- |
* | "Remove" |
*
* @param {Settings_Passkeys_RemoveInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_passkeys_remove = /** @type {((inputs?: Settings_Passkeys_RemoveInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Passkeys_RemoveInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_passkeys_remove(inputs)
	if (locale === "de") return de_settings_passkeys_remove(inputs)
	if (locale === "fr") return fr_settings_passkeys_remove(inputs)
	if (locale === "it") return it_settings_passkeys_remove(inputs)
	if (locale === "nl") return nl_settings_passkeys_remove(inputs)
	if (locale === "pl") return pl_settings_passkeys_remove(inputs)
	if (locale === "pt") return pt_settings_passkeys_remove(inputs)
	if (locale === "ru") return ru_settings_passkeys_remove(inputs)
	if (locale === "sv") return sv_settings_passkeys_remove(inputs)
	if (locale === "tr") return tr_settings_passkeys_remove(inputs)
	if (locale === "zh") return zh_settings_passkeys_remove(inputs)
	if (locale === "ja") return ja_settings_passkeys_remove(inputs)
	return en_settings_passkeys_remove(inputs)
});
