/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Content_Radar_Seo_Title_GenericInputs */

const en_content_radar_seo_title_generic = /** @type {(inputs: Content_Radar_Seo_Title_GenericInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Do SOTF mods work on the latest patch? — Patch Radar`)
};

const es_content_radar_seo_title_generic = /** @type {(inputs: Content_Radar_Seo_Title_GenericInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`¿Funcionan los mods de SOTF en el último parche? — Radar de parches`)
};

const de_content_radar_seo_title_generic = /** @type {(inputs: Content_Radar_Seo_Title_GenericInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Funktionieren SOTF-Mods mit dem neuesten Patch? – Patch Radar`)
};

const fr_content_radar_seo_title_generic = /** @type {(inputs: Content_Radar_Seo_Title_GenericInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Les mods SOTF fonctionnent-ils sur le dernier patch ? — Patch Radar`)
};

const it_content_radar_seo_title_generic = /** @type {(inputs: Content_Radar_Seo_Title_GenericInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Le mod di SOTF funzionano con l’ultima patch? — Patch Radar`)
};

const nl_content_radar_seo_title_generic = /** @type {(inputs: Content_Radar_Seo_Title_GenericInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Werken SOTF-mods op de nieuwste patch? — Patch Radar`)
};

const pl_content_radar_seo_title_generic = /** @type {(inputs: Content_Radar_Seo_Title_GenericInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Czy mody do SOTF działają na najnowszej łatce? — Patch Radar`)
};

const pt_content_radar_seo_title_generic = /** @type {(inputs: Content_Radar_Seo_Title_GenericInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Os mods de SOTF funcionam no último patch? — Patch Radar`)
};

const ru_content_radar_seo_title_generic = /** @type {(inputs: Content_Radar_Seo_Title_GenericInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Работают ли моды SOTF на последнем патче? — Patch Radar`)
};

const sv_content_radar_seo_title_generic = /** @type {(inputs: Content_Radar_Seo_Title_GenericInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fungerar SOTF-moddar på senaste patchen? – Patch Radar`)
};

const tr_content_radar_seo_title_generic = /** @type {(inputs: Content_Radar_Seo_Title_GenericInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SOTF modları son yamada çalışıyor mu? — Patch Radar`)
};

const zh_content_radar_seo_title_generic = /** @type {(inputs: Content_Radar_Seo_Title_GenericInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SOTF 模组能在最新补丁上运行吗？— Patch Radar`)
};

const ja_content_radar_seo_title_generic = /** @type {(inputs: Content_Radar_Seo_Title_GenericInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SOTF の Mod は最新パッチで動く？ — Patch Radar`)
};

/**
* | output |
* | --- |
* | "Do SOTF mods work on the latest patch? — Patch Radar" |
*
* @param {Content_Radar_Seo_Title_GenericInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const content_radar_seo_title_generic = /** @type {((inputs?: Content_Radar_Seo_Title_GenericInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Radar_Seo_Title_GenericInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_content_radar_seo_title_generic(inputs)
	if (locale === "de") return de_content_radar_seo_title_generic(inputs)
	if (locale === "fr") return fr_content_radar_seo_title_generic(inputs)
	if (locale === "it") return it_content_radar_seo_title_generic(inputs)
	if (locale === "nl") return nl_content_radar_seo_title_generic(inputs)
	if (locale === "pl") return pl_content_radar_seo_title_generic(inputs)
	if (locale === "pt") return pt_content_radar_seo_title_generic(inputs)
	if (locale === "ru") return ru_content_radar_seo_title_generic(inputs)
	if (locale === "sv") return sv_content_radar_seo_title_generic(inputs)
	if (locale === "tr") return tr_content_radar_seo_title_generic(inputs)
	if (locale === "zh") return zh_content_radar_seo_title_generic(inputs)
	if (locale === "ja") return ja_content_radar_seo_title_generic(inputs)
	return en_content_radar_seo_title_generic(inputs)
});
