/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Featured_Badges_SavedInputs */

const en_settings_featured_badges_saved = /** @type {(inputs: Settings_Featured_Badges_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Featured badges saved.`)
};

const es_settings_featured_badges_saved = /** @type {(inputs: Settings_Featured_Badges_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Insignias destacadas guardadas.`)
};

const de_settings_featured_badges_saved = /** @type {(inputs: Settings_Featured_Badges_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hervorgehobene Abzeichen gespeichert.`)
};

const fr_settings_featured_badges_saved = /** @type {(inputs: Settings_Featured_Badges_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Badges mis en avant enregistrés.`)
};

const it_settings_featured_badges_saved = /** @type {(inputs: Settings_Featured_Badges_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Distintivi in evidenza salvati.`)
};

const nl_settings_featured_badges_saved = /** @type {(inputs: Settings_Featured_Badges_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Uitgelichte badges opgeslagen.`)
};

const pl_settings_featured_badges_saved = /** @type {(inputs: Settings_Featured_Badges_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zapisano wyróżnione odznaki.`)
};

const pt_settings_featured_badges_saved = /** @type {(inputs: Settings_Featured_Badges_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Insígnias em destaque salvas.`)
};

const ru_settings_featured_badges_saved = /** @type {(inputs: Settings_Featured_Badges_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Избранные значки сохранены.`)
};

const sv_settings_featured_badges_saved = /** @type {(inputs: Settings_Featured_Badges_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Utvalda märken sparade.`)
};

const tr_settings_featured_badges_saved = /** @type {(inputs: Settings_Featured_Badges_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Öne çıkan rozetler kaydedildi.`)
};

const zh_settings_featured_badges_saved = /** @type {(inputs: Settings_Featured_Badges_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已保存展示的徽章。`)
};

const ja_settings_featured_badges_saved = /** @type {(inputs: Settings_Featured_Badges_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`注目のバッジを保存しました。`)
};

/**
* | output |
* | --- |
* | "Featured badges saved." |
*
* @param {Settings_Featured_Badges_SavedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_featured_badges_saved = /** @type {((inputs?: Settings_Featured_Badges_SavedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Featured_Badges_SavedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_featured_badges_saved(inputs)
	if (locale === "de") return de_settings_featured_badges_saved(inputs)
	if (locale === "fr") return fr_settings_featured_badges_saved(inputs)
	if (locale === "it") return it_settings_featured_badges_saved(inputs)
	if (locale === "nl") return nl_settings_featured_badges_saved(inputs)
	if (locale === "pl") return pl_settings_featured_badges_saved(inputs)
	if (locale === "pt") return pt_settings_featured_badges_saved(inputs)
	if (locale === "ru") return ru_settings_featured_badges_saved(inputs)
	if (locale === "sv") return sv_settings_featured_badges_saved(inputs)
	if (locale === "tr") return tr_settings_featured_badges_saved(inputs)
	if (locale === "zh") return zh_settings_featured_badges_saved(inputs)
	if (locale === "ja") return ja_settings_featured_badges_saved(inputs)
	return en_settings_featured_badges_saved(inputs)
});
