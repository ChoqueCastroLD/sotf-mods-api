/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Content_Brand_Logos_TextInputs */

const en_content_brand_logos_text = /** @type {(inputs: Content_Brand_Logos_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Each asset comes in a Night version for dark backgrounds and a Day version for light ones. Prefer SVG; use PNG where SVG is not accepted.`)
};

const es_content_brand_logos_text = /** @type {(inputs: Content_Brand_Logos_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cada recurso tiene una versión Noche para fondos oscuros y una versión Día para fondos claros. Mejor SVG; usa PNG donde no se acepte SVG.`)
};

const de_content_brand_logos_text = /** @type {(inputs: Content_Brand_Logos_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jede Datei gibt es als Night-Version für dunkle und als Day-Version für helle Hintergründe. Nimm am besten SVG, PNG nur dort, wo SVG nicht geht.`)
};

const fr_content_brand_logos_text = /** @type {(inputs: Content_Brand_Logos_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Chaque fichier existe en version Nuit pour les fonds sombres et en version Jour pour les fonds clairs. Préférez le SVG ; utilisez le PNG là où le SVG n’est pas accepté.`)
};

const it_content_brand_logos_text = /** @type {(inputs: Content_Brand_Logos_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ogni file ha una versione Notte per sfondi scuri e una versione Giorno per sfondi chiari. Meglio l’SVG; usa il PNG dove l’SVG non è accettato.`)
};

const nl_content_brand_logos_text = /** @type {(inputs: Content_Brand_Logos_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Elk bestand heeft een Night-versie voor donkere achtergronden en een Day-versie voor lichte. Gebruik bij voorkeur SVG; PNG alleen waar SVG niet werkt.`)
};

const pl_content_brand_logos_text = /** @type {(inputs: Content_Brand_Logos_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Każdy plik ma wersję Noc na ciemne tła i wersję Dzień na jasne. Najlepiej SVG; PNG tam, gdzie SVG nie jest obsługiwany.`)
};

const pt_content_brand_logos_text = /** @type {(inputs: Content_Brand_Logos_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cada arquivo tem uma versão Noite para fundos escuros e uma versão Dia para fundos claros. Prefira SVG; use PNG onde SVG não é aceito.`)
};

const ru_content_brand_logos_text = /** @type {(inputs: Content_Brand_Logos_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`У каждого файла есть версия «Ночь» для тёмного фона и «День» для светлого. Лучше SVG; PNG — там, где SVG не поддерживается.`)
};

const sv_content_brand_logos_text = /** @type {(inputs: Content_Brand_Logos_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Varje fil finns i en Night-version för mörka bakgrunder och en Day-version för ljusa. Använd helst SVG; PNG där SVG inte stöds.`)
};

const tr_content_brand_logos_text = /** @type {(inputs: Content_Brand_Logos_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Her dosyanın koyu arka planlar için Night, açık arka planlar için Day sürümü var. SVG’yi tercih et; SVG kabul edilmeyen yerlerde PNG kullan.`)
};

const zh_content_brand_logos_text = /** @type {(inputs: Content_Brand_Logos_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`每个文件都有用于深色背景的夜间版和用于浅色背景的日间版。优先使用 SVG；不支持 SVG 时使用 PNG。`)
};

const ja_content_brand_logos_text = /** @type {(inputs: Content_Brand_Logos_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`各ファイルには暗い背景用の Night 版と明るい背景用の Day 版があります。SVG を推奨し、SVG が使えない場所では PNG を使ってください。`)
};

/**
* | output |
* | --- |
* | "Each asset comes in a Night version for dark backgrounds and a Day version for light ones. Prefer SVG; use PNG where SVG is not accepted." |
*
* @param {Content_Brand_Logos_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const content_brand_logos_text = /** @type {((inputs?: Content_Brand_Logos_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Brand_Logos_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_content_brand_logos_text(inputs)
	if (locale === "de") return de_content_brand_logos_text(inputs)
	if (locale === "fr") return fr_content_brand_logos_text(inputs)
	if (locale === "it") return it_content_brand_logos_text(inputs)
	if (locale === "nl") return nl_content_brand_logos_text(inputs)
	if (locale === "pl") return pl_content_brand_logos_text(inputs)
	if (locale === "pt") return pt_content_brand_logos_text(inputs)
	if (locale === "ru") return ru_content_brand_logos_text(inputs)
	if (locale === "sv") return sv_content_brand_logos_text(inputs)
	if (locale === "tr") return tr_content_brand_logos_text(inputs)
	if (locale === "zh") return zh_content_brand_logos_text(inputs)
	if (locale === "ja") return ja_content_brand_logos_text(inputs)
	return en_content_brand_logos_text(inputs)
});
