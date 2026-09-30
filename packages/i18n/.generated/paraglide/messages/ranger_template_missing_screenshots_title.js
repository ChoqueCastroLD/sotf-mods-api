/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Template_Missing_Screenshots_TitleInputs */

const en_ranger_template_missing_screenshots_title = /** @type {(inputs: Ranger_Template_Missing_Screenshots_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Missing screenshots`)
};

const es_ranger_template_missing_screenshots_title = /** @type {(inputs: Ranger_Template_Missing_Screenshots_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Faltan capturas`)
};

const de_ranger_template_missing_screenshots_title = /** @type {(inputs: Ranger_Template_Missing_Screenshots_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Screenshots fehlen`)
};

const fr_ranger_template_missing_screenshots_title = /** @type {(inputs: Ranger_Template_Missing_Screenshots_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Captures manquantes`)
};

const it_ranger_template_missing_screenshots_title = /** @type {(inputs: Ranger_Template_Missing_Screenshots_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Screenshot mancanti`)
};

const nl_ranger_template_missing_screenshots_title = /** @type {(inputs: Ranger_Template_Missing_Screenshots_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Screenshots ontbreken`)
};

const pl_ranger_template_missing_screenshots_title = /** @type {(inputs: Ranger_Template_Missing_Screenshots_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Brak zrzutów ekranu`)
};

const pt_ranger_template_missing_screenshots_title = /** @type {(inputs: Ranger_Template_Missing_Screenshots_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Faltam capturas`)
};

const ru_ranger_template_missing_screenshots_title = /** @type {(inputs: Ranger_Template_Missing_Screenshots_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Нет скриншотов`)
};

const sv_ranger_template_missing_screenshots_title = /** @type {(inputs: Ranger_Template_Missing_Screenshots_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Skärmbilder saknas`)
};

const tr_ranger_template_missing_screenshots_title = /** @type {(inputs: Ranger_Template_Missing_Screenshots_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ekran görüntüsü eksik`)
};

const zh_ranger_template_missing_screenshots_title = /** @type {(inputs: Ranger_Template_Missing_Screenshots_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`缺少截图`)
};

const ja_ranger_template_missing_screenshots_title = /** @type {(inputs: Ranger_Template_Missing_Screenshots_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`スクリーンショットがない`)
};

/**
* | output |
* | --- |
* | "Missing screenshots" |
*
* @param {Ranger_Template_Missing_Screenshots_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_template_missing_screenshots_title = /** @type {((inputs?: Ranger_Template_Missing_Screenshots_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Template_Missing_Screenshots_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_template_missing_screenshots_title(inputs)
	if (locale === "de") return de_ranger_template_missing_screenshots_title(inputs)
	if (locale === "fr") return fr_ranger_template_missing_screenshots_title(inputs)
	if (locale === "it") return it_ranger_template_missing_screenshots_title(inputs)
	if (locale === "nl") return nl_ranger_template_missing_screenshots_title(inputs)
	if (locale === "pl") return pl_ranger_template_missing_screenshots_title(inputs)
	if (locale === "pt") return pt_ranger_template_missing_screenshots_title(inputs)
	if (locale === "ru") return ru_ranger_template_missing_screenshots_title(inputs)
	if (locale === "sv") return sv_ranger_template_missing_screenshots_title(inputs)
	if (locale === "tr") return tr_ranger_template_missing_screenshots_title(inputs)
	if (locale === "zh") return zh_ranger_template_missing_screenshots_title(inputs)
	if (locale === "ja") return ja_ranger_template_missing_screenshots_title(inputs)
	return en_ranger_template_missing_screenshots_title(inputs)
});
