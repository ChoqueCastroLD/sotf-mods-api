/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Content_Brand_Do_SpaceInputs */

const en_content_brand_do_space = /** @type {(inputs: Content_Brand_Do_SpaceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Leave clear space around the logo of at least a quarter of its height.`)
};

const es_content_brand_do_space = /** @type {(inputs: Content_Brand_Do_SpaceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Deja alrededor del logo un espacio libre de al menos un cuarto de su altura.`)
};

const de_content_brand_do_space = /** @type {(inputs: Content_Brand_Do_SpaceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lass um das Logo einen Freiraum von mindestens einem Viertel seiner Höhe.`)
};

const fr_content_brand_do_space = /** @type {(inputs: Content_Brand_Do_SpaceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Laissez autour du logo un espace libre d’au moins un quart de sa hauteur.`)
};

const it_content_brand_do_space = /** @type {(inputs: Content_Brand_Do_SpaceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lascia intorno al logo uno spazio libero di almeno un quarto della sua altezza.`)
};

const nl_content_brand_do_space = /** @type {(inputs: Content_Brand_Do_SpaceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Laat rond het logo minstens een kwart van zijn hoogte vrij.`)
};

const pl_content_brand_do_space = /** @type {(inputs: Content_Brand_Do_SpaceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zostaw wokół logo wolne pole równe co najmniej ćwierci jego wysokości.`)
};

const pt_content_brand_do_space = /** @type {(inputs: Content_Brand_Do_SpaceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Deixe em volta do logo um espaço livre de pelo menos um quarto da altura dele.`)
};

const ru_content_brand_do_space = /** @type {(inputs: Content_Brand_Do_SpaceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Оставляйте вокруг логотипа свободное поле не меньше четверти его высоты.`)
};

const sv_content_brand_do_space = /** @type {(inputs: Content_Brand_Do_SpaceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lämna fritt utrymme runt logotypen på minst en fjärdedel av dess höjd.`)
};

const tr_content_brand_do_space = /** @type {(inputs: Content_Brand_Do_SpaceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Logonun çevresinde yüksekliğinin en az dörtte biri kadar boşluk bırak.`)
};

const zh_content_brand_do_space = /** @type {(inputs: Content_Brand_Do_SpaceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`标志四周至少留出其高度四分之一的空白。`)
};

const ja_content_brand_do_space = /** @type {(inputs: Content_Brand_Do_SpaceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ロゴの周囲には高さの 4 分の 1 以上の余白を取ってください。`)
};

/**
* | output |
* | --- |
* | "Leave clear space around the logo of at least a quarter of its height." |
*
* @param {Content_Brand_Do_SpaceInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const content_brand_do_space = /** @type {((inputs?: Content_Brand_Do_SpaceInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Brand_Do_SpaceInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_content_brand_do_space(inputs)
	if (locale === "de") return de_content_brand_do_space(inputs)
	if (locale === "fr") return fr_content_brand_do_space(inputs)
	if (locale === "it") return it_content_brand_do_space(inputs)
	if (locale === "nl") return nl_content_brand_do_space(inputs)
	if (locale === "pl") return pl_content_brand_do_space(inputs)
	if (locale === "pt") return pt_content_brand_do_space(inputs)
	if (locale === "ru") return ru_content_brand_do_space(inputs)
	if (locale === "sv") return sv_content_brand_do_space(inputs)
	if (locale === "tr") return tr_content_brand_do_space(inputs)
	if (locale === "zh") return zh_content_brand_do_space(inputs)
	if (locale === "ja") return ja_content_brand_do_space(inputs)
	return en_content_brand_do_space(inputs)
});
