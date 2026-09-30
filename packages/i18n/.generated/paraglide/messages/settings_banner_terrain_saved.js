/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Banner_Terrain_SavedInputs */

const en_settings_banner_terrain_saved = /** @type {(inputs: Settings_Banner_Terrain_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Terrain banner saved`)
};

const es_settings_banner_terrain_saved = /** @type {(inputs: Settings_Banner_Terrain_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Banner de terreno guardado`)
};

const de_settings_banner_terrain_saved = /** @type {(inputs: Settings_Banner_Terrain_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gelände-Banner gespeichert`)
};

const fr_settings_banner_terrain_saved = /** @type {(inputs: Settings_Banner_Terrain_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bannière terrain enregistrée`)
};

const it_settings_banner_terrain_saved = /** @type {(inputs: Settings_Banner_Terrain_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Banner con terreno salvato`)
};

const nl_settings_banner_terrain_saved = /** @type {(inputs: Settings_Banner_Terrain_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Terreinbanner opgeslagen`)
};

const pl_settings_banner_terrain_saved = /** @type {(inputs: Settings_Banner_Terrain_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zapisano baner z terenem`)
};

const pt_settings_banner_terrain_saved = /** @type {(inputs: Settings_Banner_Terrain_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Banner de terreno salvo`)
};

const ru_settings_banner_terrain_saved = /** @type {(inputs: Settings_Banner_Terrain_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Баннер с местностью сохранён`)
};

const sv_settings_banner_terrain_saved = /** @type {(inputs: Settings_Banner_Terrain_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Terrängbanner sparad`)
};

const tr_settings_banner_terrain_saved = /** @type {(inputs: Settings_Banner_Terrain_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Arazi afişi kaydedildi`)
};

const zh_settings_banner_terrain_saved = /** @type {(inputs: Settings_Banner_Terrain_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`地形横幅已保存`)
};

const ja_settings_banner_terrain_saved = /** @type {(inputs: Settings_Banner_Terrain_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`地形バナーを保存しました`)
};

/**
* | output |
* | --- |
* | "Terrain banner saved" |
*
* @param {Settings_Banner_Terrain_SavedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_banner_terrain_saved = /** @type {((inputs?: Settings_Banner_Terrain_SavedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Banner_Terrain_SavedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_banner_terrain_saved(inputs)
	if (locale === "de") return de_settings_banner_terrain_saved(inputs)
	if (locale === "fr") return fr_settings_banner_terrain_saved(inputs)
	if (locale === "it") return it_settings_banner_terrain_saved(inputs)
	if (locale === "nl") return nl_settings_banner_terrain_saved(inputs)
	if (locale === "pl") return pl_settings_banner_terrain_saved(inputs)
	if (locale === "pt") return pt_settings_banner_terrain_saved(inputs)
	if (locale === "ru") return ru_settings_banner_terrain_saved(inputs)
	if (locale === "sv") return sv_settings_banner_terrain_saved(inputs)
	if (locale === "tr") return tr_settings_banner_terrain_saved(inputs)
	if (locale === "zh") return zh_settings_banner_terrain_saved(inputs)
	if (locale === "ja") return ja_settings_banner_terrain_saved(inputs)
	return en_settings_banner_terrain_saved(inputs)
});
