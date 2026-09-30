/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Content_Brand_Colors_TextInputs */

const en_content_brand_colors_text = /** @type {(inputs: Content_Brand_Colors_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Night and Bone are the base; Flare is the one accent. The status colours are for meaning, not decoration.`)
};

const es_content_brand_colors_text = /** @type {(inputs: Content_Brand_Colors_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Noche y Hueso son la base; Bengala es el único acento. Los colores de estado sirven para dar significado, no para decorar.`)
};

const de_content_brand_colors_text = /** @type {(inputs: Content_Brand_Colors_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Night und Bone sind die Basis; Flare ist der einzige Akzent. Die Statusfarben tragen Bedeutung, sie sind keine Dekoration.`)
};

const fr_content_brand_colors_text = /** @type {(inputs: Content_Brand_Colors_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nuit et Os forment la base ; Fusée est le seul accent. Les couleurs d’état servent à donner du sens, pas à décorer.`)
};

const it_content_brand_colors_text = /** @type {(inputs: Content_Brand_Colors_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Notte e Osso sono la base; Razzo è l’unico accento. I colori di stato servono a dare significato, non a decorare.`)
};

const nl_content_brand_colors_text = /** @type {(inputs: Content_Brand_Colors_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Night en Bone vormen de basis; Flare is het enige accent. De statuskleuren dragen betekenis en zijn geen decoratie.`)
};

const pl_content_brand_colors_text = /** @type {(inputs: Content_Brand_Colors_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Noc i Kość to podstawa; Raca to jedyny akcent. Kolory stanów niosą znaczenie, nie służą do dekoracji.`)
};

const pt_content_brand_colors_text = /** @type {(inputs: Content_Brand_Colors_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Noite e Osso são a base; Sinalizador é o único destaque. As cores de status servem para dar significado, não para decorar.`)
};

const ru_content_brand_colors_text = /** @type {(inputs: Content_Brand_Colors_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Основа — «Ночь» и «Кость», единственный акцент — «Сигнальная ракета». Цвета статусов несут смысл, а не украшают.`)
};

const sv_content_brand_colors_text = /** @type {(inputs: Content_Brand_Colors_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Night och Bone är basen; Flare är den enda accenten. Statusfärgerna bär betydelse, de är inte dekoration.`)
};

const tr_content_brand_colors_text = /** @type {(inputs: Content_Brand_Colors_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Temel renkler Night ve Bone; tek vurgu rengi Flare. Durum renkleri süs değil, anlam taşır.`)
};

const zh_content_brand_colors_text = /** @type {(inputs: Content_Brand_Colors_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`夜色与骨白是基础，信号焰是唯一的强调色。状态色用于表达含义，而非装饰。`)
};

const ja_content_brand_colors_text = /** @type {(inputs: Content_Brand_Colors_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Night と Bone が基本色で、Flare が唯一のアクセントです。状態を表す色は意味を伝えるためのもので、装飾には使いません。`)
};

/**
* | output |
* | --- |
* | "Night and Bone are the base; Flare is the one accent. The status colours are for meaning, not decoration." |
*
* @param {Content_Brand_Colors_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const content_brand_colors_text = /** @type {((inputs?: Content_Brand_Colors_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Brand_Colors_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_content_brand_colors_text(inputs)
	if (locale === "de") return de_content_brand_colors_text(inputs)
	if (locale === "fr") return fr_content_brand_colors_text(inputs)
	if (locale === "it") return it_content_brand_colors_text(inputs)
	if (locale === "nl") return nl_content_brand_colors_text(inputs)
	if (locale === "pl") return pl_content_brand_colors_text(inputs)
	if (locale === "pt") return pt_content_brand_colors_text(inputs)
	if (locale === "ru") return ru_content_brand_colors_text(inputs)
	if (locale === "sv") return sv_content_brand_colors_text(inputs)
	if (locale === "tr") return tr_content_brand_colors_text(inputs)
	if (locale === "zh") return zh_content_brand_colors_text(inputs)
	if (locale === "ja") return ja_content_brand_colors_text(inputs)
	return en_content_brand_colors_text(inputs)
});
