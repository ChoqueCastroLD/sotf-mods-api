/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Content_Brand_Do_SizeInputs */

const en_content_brand_do_size = /** @type {(inputs: Content_Brand_Do_SizeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Keep the full isotype at 24 px or larger (16 px for the simplified one).`)
};

const es_content_brand_do_size = /** @type {(inputs: Content_Brand_Do_SizeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Usa el isotipo completo a 24 px o más (16 px el simplificado).`)
};

const de_content_brand_do_size = /** @type {(inputs: Content_Brand_Do_SizeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nutze die vollständige Bildmarke ab 24 px (die vereinfachte ab 16 px).`)
};

const fr_content_brand_do_size = /** @type {(inputs: Content_Brand_Do_SizeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gardez le symbole complet à 24 px ou plus (16 px pour la version simplifiée).`)
};

const it_content_brand_do_size = /** @type {(inputs: Content_Brand_Do_SizeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Usa il simbolo completo da 24 px in su (16 px per quello semplificato).`)
};

const nl_content_brand_do_size = /** @type {(inputs: Content_Brand_Do_SizeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gebruik het volledige beeldmerk op 24 px of groter (16 px voor de vereenvoudigde versie).`)
};

const pl_content_brand_do_size = /** @type {(inputs: Content_Brand_Do_SizeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Używaj pełnego sygnetu w rozmiarze od 24 px (uproszczonego od 16 px).`)
};

const pt_content_brand_do_size = /** @type {(inputs: Content_Brand_Do_SizeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Use o símbolo completo com 24 px ou mais (16 px para o simplificado).`)
};

const ru_content_brand_do_size = /** @type {(inputs: Content_Brand_Do_SizeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Используйте полный знак от 24 px (упрощённый — от 16 px).`)
};

const sv_content_brand_do_size = /** @type {(inputs: Content_Brand_Do_SizeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Använd hela symbolen i 24 px eller större (16 px för den förenklade).`)
};

const tr_content_brand_do_size = /** @type {(inputs: Content_Brand_Do_SizeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tam simgeyi 24 px veya üzerinde kullan (sadeleştirilmiş olanı 16 px).`)
};

const zh_content_brand_do_size = /** @type {(inputs: Content_Brand_Do_SizeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`完整图形标不小于 24 px（简化版不小于 16 px）。`)
};

const ja_content_brand_do_size = /** @type {(inputs: Content_Brand_Do_SizeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`完全版のシンボルは 24 px 以上（簡易版は 16 px 以上）で使ってください。`)
};

/**
* | output |
* | --- |
* | "Keep the full isotype at 24 px or larger (16 px for the simplified one)." |
*
* @param {Content_Brand_Do_SizeInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const content_brand_do_size = /** @type {((inputs?: Content_Brand_Do_SizeInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Brand_Do_SizeInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_content_brand_do_size(inputs)
	if (locale === "de") return de_content_brand_do_size(inputs)
	if (locale === "fr") return fr_content_brand_do_size(inputs)
	if (locale === "it") return it_content_brand_do_size(inputs)
	if (locale === "nl") return nl_content_brand_do_size(inputs)
	if (locale === "pl") return pl_content_brand_do_size(inputs)
	if (locale === "pt") return pt_content_brand_do_size(inputs)
	if (locale === "ru") return ru_content_brand_do_size(inputs)
	if (locale === "sv") return sv_content_brand_do_size(inputs)
	if (locale === "tr") return tr_content_brand_do_size(inputs)
	if (locale === "zh") return zh_content_brand_do_size(inputs)
	if (locale === "ja") return ja_content_brand_do_size(inputs)
	return en_content_brand_do_size(inputs)
});
