/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Creator_BasecampInputs */

const en_settings_creator_basecamp = /** @type {(inputs: Settings_Creator_BasecampInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Open Basecamp`)
};

const es_settings_creator_basecamp = /** @type {(inputs: Settings_Creator_BasecampInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Abrir el Campamento`)
};

const de_settings_creator_basecamp = /** @type {(inputs: Settings_Creator_BasecampInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Basislager öffnen`)
};

const fr_settings_creator_basecamp = /** @type {(inputs: Settings_Creator_BasecampInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ouvrir le Camp de base`)
};

const it_settings_creator_basecamp = /** @type {(inputs: Settings_Creator_BasecampInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Apri il Campo base`)
};

const nl_settings_creator_basecamp = /** @type {(inputs: Settings_Creator_BasecampInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Basiskamp openen`)
};

const pl_settings_creator_basecamp = /** @type {(inputs: Settings_Creator_BasecampInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Otwórz Obóz`)
};

const pt_settings_creator_basecamp = /** @type {(inputs: Settings_Creator_BasecampInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Abrir o Acampamento`)
};

const ru_settings_creator_basecamp = /** @type {(inputs: Settings_Creator_BasecampInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Открыть Лагерь`)
};

const sv_settings_creator_basecamp = /** @type {(inputs: Settings_Creator_BasecampInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Öppna Basläger`)
};

const tr_settings_creator_basecamp = /** @type {(inputs: Settings_Creator_BasecampInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ana Kamp’ı aç`)
};

const zh_settings_creator_basecamp = /** @type {(inputs: Settings_Creator_BasecampInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`打开营地`)
};

const ja_settings_creator_basecamp = /** @type {(inputs: Settings_Creator_BasecampInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ベースキャンプを開く`)
};

/**
* | output |
* | --- |
* | "Open Basecamp" |
*
* @param {Settings_Creator_BasecampInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_creator_basecamp = /** @type {((inputs?: Settings_Creator_BasecampInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Creator_BasecampInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_creator_basecamp(inputs)
	if (locale === "de") return de_settings_creator_basecamp(inputs)
	if (locale === "fr") return fr_settings_creator_basecamp(inputs)
	if (locale === "it") return it_settings_creator_basecamp(inputs)
	if (locale === "nl") return nl_settings_creator_basecamp(inputs)
	if (locale === "pl") return pl_settings_creator_basecamp(inputs)
	if (locale === "pt") return pt_settings_creator_basecamp(inputs)
	if (locale === "ru") return ru_settings_creator_basecamp(inputs)
	if (locale === "sv") return sv_settings_creator_basecamp(inputs)
	if (locale === "tr") return tr_settings_creator_basecamp(inputs)
	if (locale === "zh") return zh_settings_creator_basecamp(inputs)
	if (locale === "ja") return ja_settings_creator_basecamp(inputs)
	return en_settings_creator_basecamp(inputs)
});
