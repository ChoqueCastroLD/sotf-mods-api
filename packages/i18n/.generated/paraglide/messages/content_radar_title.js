/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ build: NonNullable<unknown> }} Content_Radar_TitleInputs */

const en_content_radar_title = /** @type {(inputs: Content_Radar_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Do SOTF mods work on patch ${i?.build}?`)
};

const es_content_radar_title = /** @type {(inputs: Content_Radar_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`¿Funcionan los mods de SOTF en el parche ${i?.build}?`)
};

const de_content_radar_title = /** @type {(inputs: Content_Radar_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Funktionieren SOTF-Mods mit Patch ${i?.build}?`)
};

const fr_content_radar_title = /** @type {(inputs: Content_Radar_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Les mods SOTF fonctionnent-ils sur le patch ${i?.build} ?`)
};

const it_content_radar_title = /** @type {(inputs: Content_Radar_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Le mod di SOTF funzionano con la patch ${i?.build}?`)
};

const nl_content_radar_title = /** @type {(inputs: Content_Radar_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Werken SOTF-mods op patch ${i?.build}?`)
};

const pl_content_radar_title = /** @type {(inputs: Content_Radar_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Czy mody do SOTF działają na łatce ${i?.build}?`)
};

const pt_content_radar_title = /** @type {(inputs: Content_Radar_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Os mods de SOTF funcionam no patch ${i?.build}?`)
};

const ru_content_radar_title = /** @type {(inputs: Content_Radar_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Работают ли моды SOTF на патче ${i?.build}?`)
};

const sv_content_radar_title = /** @type {(inputs: Content_Radar_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Fungerar SOTF-moddar på patch ${i?.build}?`)
};

const tr_content_radar_title = /** @type {(inputs: Content_Radar_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`SOTF modları ${i?.build} yamasında çalışıyor mu?`)
};

const zh_content_radar_title = /** @type {(inputs: Content_Radar_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`SOTF 模组能在 ${i?.build} 补丁上运行吗？`)
};

const ja_content_radar_title = /** @type {(inputs: Content_Radar_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`SOTF の Mod はパッチ ${i?.build} で動く？`)
};

/**
* | output |
* | --- |
* | "Do SOTF mods work on patch {build}?" |
*
* @param {Content_Radar_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const content_radar_title = /** @type {((inputs: Content_Radar_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Radar_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_content_radar_title(inputs)
	if (locale === "de") return de_content_radar_title(inputs)
	if (locale === "fr") return fr_content_radar_title(inputs)
	if (locale === "it") return it_content_radar_title(inputs)
	if (locale === "nl") return nl_content_radar_title(inputs)
	if (locale === "pl") return pl_content_radar_title(inputs)
	if (locale === "pt") return pt_content_radar_title(inputs)
	if (locale === "ru") return ru_content_radar_title(inputs)
	if (locale === "sv") return sv_content_radar_title(inputs)
	if (locale === "tr") return tr_content_radar_title(inputs)
	if (locale === "zh") return zh_content_radar_title(inputs)
	if (locale === "ja") return ja_content_radar_title(inputs)
	return en_content_radar_title(inputs)
});
