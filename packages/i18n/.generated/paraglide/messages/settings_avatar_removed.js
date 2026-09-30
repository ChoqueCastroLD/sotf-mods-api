/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Avatar_RemovedInputs */

const en_settings_avatar_removed = /** @type {(inputs: Settings_Avatar_RemovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Photo removed`)
};

const es_settings_avatar_removed = /** @type {(inputs: Settings_Avatar_RemovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Foto quitada`)
};

const de_settings_avatar_removed = /** @type {(inputs: Settings_Avatar_RemovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Foto entfernt`)
};

const fr_settings_avatar_removed = /** @type {(inputs: Settings_Avatar_RemovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Photo retirée`)
};

const it_settings_avatar_removed = /** @type {(inputs: Settings_Avatar_RemovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Foto rimossa`)
};

const nl_settings_avatar_removed = /** @type {(inputs: Settings_Avatar_RemovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Foto verwijderd`)
};

const pl_settings_avatar_removed = /** @type {(inputs: Settings_Avatar_RemovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Usunięto zdjęcie`)
};

const pt_settings_avatar_removed = /** @type {(inputs: Settings_Avatar_RemovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Foto removida`)
};

const ru_settings_avatar_removed = /** @type {(inputs: Settings_Avatar_RemovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Фото удалено`)
};

const sv_settings_avatar_removed = /** @type {(inputs: Settings_Avatar_RemovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Foto borttaget`)
};

const tr_settings_avatar_removed = /** @type {(inputs: Settings_Avatar_RemovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fotoğraf kaldırıldı`)
};

const zh_settings_avatar_removed = /** @type {(inputs: Settings_Avatar_RemovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`照片已移除`)
};

const ja_settings_avatar_removed = /** @type {(inputs: Settings_Avatar_RemovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`写真を削除しました`)
};

/**
* | output |
* | --- |
* | "Photo removed" |
*
* @param {Settings_Avatar_RemovedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_avatar_removed = /** @type {((inputs?: Settings_Avatar_RemovedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Avatar_RemovedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_avatar_removed(inputs)
	if (locale === "de") return de_settings_avatar_removed(inputs)
	if (locale === "fr") return fr_settings_avatar_removed(inputs)
	if (locale === "it") return it_settings_avatar_removed(inputs)
	if (locale === "nl") return nl_settings_avatar_removed(inputs)
	if (locale === "pl") return pl_settings_avatar_removed(inputs)
	if (locale === "pt") return pt_settings_avatar_removed(inputs)
	if (locale === "ru") return ru_settings_avatar_removed(inputs)
	if (locale === "sv") return sv_settings_avatar_removed(inputs)
	if (locale === "tr") return tr_settings_avatar_removed(inputs)
	if (locale === "zh") return zh_settings_avatar_removed(inputs)
	if (locale === "ja") return ja_settings_avatar_removed(inputs)
	return en_settings_avatar_removed(inputs)
});
