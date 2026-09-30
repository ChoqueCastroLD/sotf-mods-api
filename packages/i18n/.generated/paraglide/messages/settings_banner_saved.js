/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Banner_SavedInputs */

const en_settings_banner_saved = /** @type {(inputs: Settings_Banner_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`New banner saved`)
};

const es_settings_banner_saved = /** @type {(inputs: Settings_Banner_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Banner nuevo guardado`)
};

const de_settings_banner_saved = /** @type {(inputs: Settings_Banner_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Neues Banner gespeichert`)
};

const fr_settings_banner_saved = /** @type {(inputs: Settings_Banner_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nouvelle bannière enregistrée`)
};

const it_settings_banner_saved = /** @type {(inputs: Settings_Banner_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nuovo banner salvato`)
};

const nl_settings_banner_saved = /** @type {(inputs: Settings_Banner_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nieuwe banner opgeslagen`)
};

const pl_settings_banner_saved = /** @type {(inputs: Settings_Banner_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zapisano nowy baner`)
};

const pt_settings_banner_saved = /** @type {(inputs: Settings_Banner_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Novo banner salvo`)
};

const ru_settings_banner_saved = /** @type {(inputs: Settings_Banner_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Новый баннер сохранён`)
};

const sv_settings_banner_saved = /** @type {(inputs: Settings_Banner_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ny banner sparad`)
};

const tr_settings_banner_saved = /** @type {(inputs: Settings_Banner_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yeni afiş kaydedildi`)
};

const zh_settings_banner_saved = /** @type {(inputs: Settings_Banner_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`新横幅已保存`)
};

const ja_settings_banner_saved = /** @type {(inputs: Settings_Banner_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`新しいバナーを保存しました`)
};

/**
* | output |
* | --- |
* | "New banner saved" |
*
* @param {Settings_Banner_SavedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_banner_saved = /** @type {((inputs?: Settings_Banner_SavedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Banner_SavedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_banner_saved(inputs)
	if (locale === "de") return de_settings_banner_saved(inputs)
	if (locale === "fr") return fr_settings_banner_saved(inputs)
	if (locale === "it") return it_settings_banner_saved(inputs)
	if (locale === "nl") return nl_settings_banner_saved(inputs)
	if (locale === "pl") return pl_settings_banner_saved(inputs)
	if (locale === "pt") return pt_settings_banner_saved(inputs)
	if (locale === "ru") return ru_settings_banner_saved(inputs)
	if (locale === "sv") return sv_settings_banner_saved(inputs)
	if (locale === "tr") return tr_settings_banner_saved(inputs)
	if (locale === "zh") return zh_settings_banner_saved(inputs)
	if (locale === "ja") return ja_settings_banner_saved(inputs)
	return en_settings_banner_saved(inputs)
});
