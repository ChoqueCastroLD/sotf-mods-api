/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Banner_RerollInputs */

const en_settings_banner_reroll = /** @type {(inputs: Settings_Banner_RerollInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reroll terrain`)
};

const es_settings_banner_reroll = /** @type {(inputs: Settings_Banner_RerollInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Generar otro terreno`)
};

const de_settings_banner_reroll = /** @type {(inputs: Settings_Banner_RerollInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Neues Gelände würfeln`)
};

const fr_settings_banner_reroll = /** @type {(inputs: Settings_Banner_RerollInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Générer un autre terrain`)
};

const it_settings_banner_reroll = /** @type {(inputs: Settings_Banner_RerollInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Genera un altro terreno`)
};

const nl_settings_banner_reroll = /** @type {(inputs: Settings_Banner_RerollInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nieuw terrein genereren`)
};

const pl_settings_banner_reroll = /** @type {(inputs: Settings_Banner_RerollInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wylosuj nowy teren`)
};

const pt_settings_banner_reroll = /** @type {(inputs: Settings_Banner_RerollInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gerar outro terreno`)
};

const ru_settings_banner_reroll = /** @type {(inputs: Settings_Banner_RerollInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Сгенерировать другую местность`)
};

const sv_settings_banner_reroll = /** @type {(inputs: Settings_Banner_RerollInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Slumpa ny terräng`)
};

const tr_settings_banner_reroll = /** @type {(inputs: Settings_Banner_RerollInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yeni arazi oluştur`)
};

const zh_settings_banner_reroll = /** @type {(inputs: Settings_Banner_RerollInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`重新生成地形`)
};

const ja_settings_banner_reroll = /** @type {(inputs: Settings_Banner_RerollInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`地形を作り直す`)
};

/**
* | output |
* | --- |
* | "Reroll terrain" |
*
* @param {Settings_Banner_RerollInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_banner_reroll = /** @type {((inputs?: Settings_Banner_RerollInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Banner_RerollInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_banner_reroll(inputs)
	if (locale === "de") return de_settings_banner_reroll(inputs)
	if (locale === "fr") return fr_settings_banner_reroll(inputs)
	if (locale === "it") return it_settings_banner_reroll(inputs)
	if (locale === "nl") return nl_settings_banner_reroll(inputs)
	if (locale === "pl") return pl_settings_banner_reroll(inputs)
	if (locale === "pt") return pt_settings_banner_reroll(inputs)
	if (locale === "ru") return ru_settings_banner_reroll(inputs)
	if (locale === "sv") return sv_settings_banner_reroll(inputs)
	if (locale === "tr") return tr_settings_banner_reroll(inputs)
	if (locale === "zh") return zh_settings_banner_reroll(inputs)
	if (locale === "ja") return ja_settings_banner_reroll(inputs)
	return en_settings_banner_reroll(inputs)
});
