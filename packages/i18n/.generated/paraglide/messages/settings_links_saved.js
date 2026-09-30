/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Links_SavedInputs */

const en_settings_links_saved = /** @type {(inputs: Settings_Links_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Links saved`)
};

const es_settings_links_saved = /** @type {(inputs: Settings_Links_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enlaces guardados`)
};

const de_settings_links_saved = /** @type {(inputs: Settings_Links_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Links gespeichert`)
};

const fr_settings_links_saved = /** @type {(inputs: Settings_Links_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Liens enregistrés`)
};

const it_settings_links_saved = /** @type {(inputs: Settings_Links_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Link salvati`)
};

const nl_settings_links_saved = /** @type {(inputs: Settings_Links_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Links opgeslagen`)
};

const pl_settings_links_saved = /** @type {(inputs: Settings_Links_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zapisano linki`)
};

const pt_settings_links_saved = /** @type {(inputs: Settings_Links_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Links salvos`)
};

const ru_settings_links_saved = /** @type {(inputs: Settings_Links_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ссылки сохранены`)
};

const sv_settings_links_saved = /** @type {(inputs: Settings_Links_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Länkarna sparade`)
};

const tr_settings_links_saved = /** @type {(inputs: Settings_Links_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bağlantılar kaydedildi`)
};

const zh_settings_links_saved = /** @type {(inputs: Settings_Links_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`链接已保存`)
};

const ja_settings_links_saved = /** @type {(inputs: Settings_Links_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`リンクを保存しました`)
};

/**
* | output |
* | --- |
* | "Links saved" |
*
* @param {Settings_Links_SavedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_links_saved = /** @type {((inputs?: Settings_Links_SavedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Links_SavedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_links_saved(inputs)
	if (locale === "de") return de_settings_links_saved(inputs)
	if (locale === "fr") return fr_settings_links_saved(inputs)
	if (locale === "it") return it_settings_links_saved(inputs)
	if (locale === "nl") return nl_settings_links_saved(inputs)
	if (locale === "pl") return pl_settings_links_saved(inputs)
	if (locale === "pt") return pt_settings_links_saved(inputs)
	if (locale === "ru") return ru_settings_links_saved(inputs)
	if (locale === "sv") return sv_settings_links_saved(inputs)
	if (locale === "tr") return tr_settings_links_saved(inputs)
	if (locale === "zh") return zh_settings_links_saved(inputs)
	if (locale === "ja") return ja_settings_links_saved(inputs)
	return en_settings_links_saved(inputs)
});
