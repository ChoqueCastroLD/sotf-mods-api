/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Banner_Use_TerrainInputs */

const en_settings_banner_use_terrain = /** @type {(inputs: Settings_Banner_Use_TerrainInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Use this terrain`)
};

const es_settings_banner_use_terrain = /** @type {(inputs: Settings_Banner_Use_TerrainInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Usar este terreno`)
};

const de_settings_banner_use_terrain = /** @type {(inputs: Settings_Banner_Use_TerrainInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dieses Gelände verwenden`)
};

const fr_settings_banner_use_terrain = /** @type {(inputs: Settings_Banner_Use_TerrainInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Utiliser ce terrain`)
};

const it_settings_banner_use_terrain = /** @type {(inputs: Settings_Banner_Use_TerrainInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Usa questo terreno`)
};

const nl_settings_banner_use_terrain = /** @type {(inputs: Settings_Banner_Use_TerrainInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dit terrein gebruiken`)
};

const pl_settings_banner_use_terrain = /** @type {(inputs: Settings_Banner_Use_TerrainInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Użyj tego terenu`)
};

const pt_settings_banner_use_terrain = /** @type {(inputs: Settings_Banner_Use_TerrainInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Usar este terreno`)
};

const ru_settings_banner_use_terrain = /** @type {(inputs: Settings_Banner_Use_TerrainInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Использовать эту местность`)
};

const sv_settings_banner_use_terrain = /** @type {(inputs: Settings_Banner_Use_TerrainInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Använd den här terrängen`)
};

const tr_settings_banner_use_terrain = /** @type {(inputs: Settings_Banner_Use_TerrainInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu araziyi kullan`)
};

const zh_settings_banner_use_terrain = /** @type {(inputs: Settings_Banner_Use_TerrainInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`使用此地形`)
};

const ja_settings_banner_use_terrain = /** @type {(inputs: Settings_Banner_Use_TerrainInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`この地形を使う`)
};

/**
* | output |
* | --- |
* | "Use this terrain" |
*
* @param {Settings_Banner_Use_TerrainInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_banner_use_terrain = /** @type {((inputs?: Settings_Banner_Use_TerrainInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Banner_Use_TerrainInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_banner_use_terrain(inputs)
	if (locale === "de") return de_settings_banner_use_terrain(inputs)
	if (locale === "fr") return fr_settings_banner_use_terrain(inputs)
	if (locale === "it") return it_settings_banner_use_terrain(inputs)
	if (locale === "nl") return nl_settings_banner_use_terrain(inputs)
	if (locale === "pl") return pl_settings_banner_use_terrain(inputs)
	if (locale === "pt") return pt_settings_banner_use_terrain(inputs)
	if (locale === "ru") return ru_settings_banner_use_terrain(inputs)
	if (locale === "sv") return sv_settings_banner_use_terrain(inputs)
	if (locale === "tr") return tr_settings_banner_use_terrain(inputs)
	if (locale === "zh") return zh_settings_banner_use_terrain(inputs)
	if (locale === "ja") return ja_settings_banner_use_terrain(inputs)
	return en_settings_banner_use_terrain(inputs)
});
